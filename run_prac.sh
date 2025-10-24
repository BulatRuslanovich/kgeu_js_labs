#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Usage: $0 <practice_folder>"
    echo "Example: $0 prac_7"
    echo ""
    echo "Warning: This script only works with JS files!"
    echo "HTML files will not be executed."
    exit 1
fi

PRACTICE_DIR="$1"

if [ ! -d "$PRACTICE_DIR" ]; then
    echo "Error: Folder '$PRACTICE_DIR' not found"
    exit 1
fi

cd "$PRACTICE_DIR"

echo "Running dir: $PRACTICE_DIR"
echo "=================================================="


JS_FILES=$(ls task*.js 2>/dev/null | sort -V)

if [ -z "$JS_FILES" ]; then
    echo "No JS files found in folder $PRACTICE_DIR"
    exit 1
fi

for file in $JS_FILES; do
    echo ""
    echo "=================================================="
    echo "TASK ${file%.js#task}"
    echo "=================================================="
    node "$file"
    echo ""
    sleep 0.5
done

echo "All tasks completed! Thank God!"
