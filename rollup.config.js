import babel from 'rollup-plugin-babel';

export default [
	{
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
		],
		external: ['ua-parser-js'],
		input: 'src/ninelines-ua-parser.js',
		output: {
			file: 'dist/ninelines-ua-parser.es.js',
			format: 'es',
			globals: {
				'ua-parser-js': 'UAParser',
			},
		},
	},
	{
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
		],
		external: ['ua-parser-js'],
		input: 'src/ninelines-ua-parser.js',
		output: {
			file: 'dist/ninelines-ua-parser.umd.js',
			format: 'umd',
			name: 'UAParser',
			globals: {
				'ua-parser-js': 'UAParser',
			},
		},
	},
];
