import js from "@eslint/js";
import globals from "globals";

export default [
  {
    // Файлы и каталоги, которые не должны анализироваться линтером.
    ignores: [
      "node_modules/**",
      "showcase/dist/**",
      "assignments/**/*.pdf",
      "assignments/**/*.html",
      "showcase/workConfigs.generated.js",
    ],
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // Разрешаем браузерные и Node-глобалы, так как проект смешанный.
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Логи полезны при разборе задач, не блокируем.
      "no-console": "off",
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^ignored",
        },
      ],
    },
  },
];

