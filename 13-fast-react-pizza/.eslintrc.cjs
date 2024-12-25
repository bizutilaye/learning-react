// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   settings: { react: { version: "18.2" } },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//     "no-unused-vars": ["warn", { vars: "all", args: "none" }],
//     "react/prop-types": "off", // Disable prop validation
//   },
// };
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    plugins: ['react-refresh'],
    rules: {
        // Convert all potential errors to warnings
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
        'react/prop-types': 'off', // Disable prop-types validation
        'react/no-unescaped-entities': 'warn', // Warn for unescaped characters like '
        'no-console': 'warn', // Allow console logs but show warnings
    },
}
