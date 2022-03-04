const {
	resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'index.[contenthash].js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [{
					loader: 'img-optimize-loader',
					options: {
						compress: {
							gifsicle: {
								optimizationLevel: 3,
							},
							mozjpeg: {
								progressive: true,
								quality: 60,
							},
						},
						name: '[path][name].[ext]'
					}
				}]
			},
			{
				test: /\.mp3$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			},
			{
				test: /\.(woff(2)?|ttf|eot|)?$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
	],
	devServer: {
		port: 3000
	}
}