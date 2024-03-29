const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			// to load fonts locally
			// {
			// 	test: /\.(woff|woff2|eot|ttf|otf)$/i,
			// 	type: 'asset/resource',
			// },
		],
	},
};
