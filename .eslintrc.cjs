module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{ files: ['*.ts', '*.svelte'], rules: { 'no-undef': 'off' } }
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
