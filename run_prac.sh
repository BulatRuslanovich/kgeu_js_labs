#!/bin/bash

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

# Function to print colored output
print_color() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to print header
print_header() {
    echo
    print_color $BLUE "$1"
}

# Function to print error and exit
error_exit() {
    print_color $RED "Error: $1"
    exit 1
}

# Function to check dependencies
check_dependencies() {
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed or not in PATH"
    fi
    
    if command -v bat &> /dev/null; then
        HIGHLIGHTER="bat"
    else
        HIGHLIGHTER="cat"
    fi
}

# Function to display code with syntax highlighting
display_code() {
    local file=$1
    echo -e "${CYAN}┌──────────────────────────────────────────────────────────────────────────────────┐${NC}"
    
    case $HIGHLIGHTER in
        "bat")
            bat --style=numbers --color=always --line-range=:100 "$file" 2>/dev/null || cat -n "$file"
            ;;
        *)
            # Fallback: simple numbering with cat
            cat -n "$file"
            ;;
    esac
    
    echo -e "${CYAN}└──────────────────────────────────────────────────────────────────────────────────┘${NC}"
    echo
}

# Function to find and validate task files
find_task_files() {
    local practice_dir="$1"
    local task_spec="$2"
    
    # If task_spec is empty, find all task files
    if [ -z "$task_spec" ]; then
        local js_files=()
        while IFS= read -r -d '' file; do
            js_files+=("$file")
        done < <(find . -maxdepth 1 -name "task*.js" -type f -print0 | sort -z -V)
        echo "${js_files[@]}"
        return 0
    fi
    
    # Handle different task specification formats
    local task_files=()
    
    if [[ "$task_spec" =~ ^[0-9]+$ ]]; then
        local task_file="./task${task_spec}.js"
        if [ -f "$task_file" ]; then
            task_files=("$task_file")
        else
            error_exit "Task file $task_file not found"
        fi
    else
        error_exit "Invalid task specification: $task_spec"
    fi
    
    echo "${task_files[@]}"
}

# Function to show usage
show_usage() {
    print_color $YELLOW "Usage: $0 <practice_folder> [task]"
    echo
    print_color $YELLOW "Examples:"
    print_color $YELLOW "  $0 prac_7                    # Run all tasks in prac_7"
    print_color $YELLOW "  $0 prac_7 3                  # Run only task3.js in prac_7"
    echo
    print_color $YELLOW "Note: This script only works with JS files!"
    print_color $YELLOW "HTML files will not be executed."
}

# Function to format output with indentation
format_output() {
    local output="$1"
    while IFS= read -r line; do
        if [ -n "$line" ]; then
            echo -e "   $line"
        else
            echo -e ""
        fi
    done <<< "$output"
}

# Main execution
main() {
    # Check if practice folder is provided
    if [ $# -eq 0 ]; then
        show_usage
        exit 1
    fi

    local practice_dir="$1"
    local task_spec="$2"

    # If the first argument is a file path, extract directory
    if [[ "$practice_dir" =~ .*/task[0-9]+\.js$ ]] && [ -f "$practice_dir" ]; then
        task_spec="$practice_dir"
        practice_dir=$(dirname "$practice_dir")
    fi

    # Check if directory exists
    if [ ! -d "$practice_dir" ]; then
        error_exit "Folder '$practice_dir' not found"
    fi

    # Check dependencies
    check_dependencies

    cd "$practice_dir" || error_exit "Cannot enter directory '$practice_dir'"

    # Find task files based on specification
    local task_files=()
    while IFS= read -r -d '' file; do
        task_files+=("$file")
    done < <(find_task_files "$practice_dir" "$task_spec" | tr ' ' '\n' | sort -V | tr '\n' '\0')

    # Check if any JS files found
    if [ ${#task_files[@]} -eq 0 ]; then
        error_exit "No matching task files found in folder $practice_dir"
    fi

    print_color $GREEN "Running in: $practice_dir"
    if [ -n "$task_spec" ]; then
        print_color $GREEN "Specific task: $task_spec"
    fi

    print_color $GREEN "Found ${#task_files[@]} task(s) to execute"

    local task_count=0
    
    for file in "${task_files[@]}"; do
        ((task_count++))
        local task_name=$(basename "$file" .js)
        local task_number=${task_name#task}
        
        print_header "CODE: ${file}"
        
        display_code "$file"
        
        print_color $YELLOW "Executing: $file"
        echo -e "${CYAN}┌─────────────────────────────────── OUTPUT ───────────────────────────────────────┐${NC}"
        
        local start_time=$(date +%s%3N)
        if output=$(node "$file" 2>&1); then
            local end_time=$(date +%s%3N)
            local execution_time=$((end_time - start_time))
            
            format_output "$output"
            
            echo -e "${CYAN}└──────────────────────────────────────────────────────────────────────────────────┘${NC}"
            print_color $GREEN "Task completed (${execution_time}ms)"
        else
            local exit_code=$?
            
            format_output "$output"
            
            echo -e "${CYAN}└──────────────────────────────────────────────────────────────────────────────────┘${NC}"
            print_color $RED "Task failed with exit code $exit_code"
        fi
        
        if [ $task_count -lt ${#task_files[@]} ]; then
                echo
                print_color $YELLOW "Press Enter to continue to the next task..."
                read -r
        fi
    done
    
    # Display highlighter info
    echo
    print_color $CYAN "Syntax highlighter: $HIGHLIGHTER"
    if [ "$HIGHLIGHTER" = "cat" ]; then
        print_color $YELLOW "   Tip: Install 'bat' for better syntax highlighting:"
        print_color $YELLOW "   Arch: sudo pacman -S bat"
        print_color $YELLOW "   Ubuntu: sudo apt install bat"
        print_color $YELLOW "   macOS: brew install bat"
    fi
}

# Run main function with all arguments
main "$@"