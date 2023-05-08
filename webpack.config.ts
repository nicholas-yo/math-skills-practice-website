import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { type Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const devServer: DevServerConfiguration = {
	static: {
		directory: path.join(__dirname, 'public')
	},
	compress: true,
	port: 9000,
	hot: true
};

const config: Configuration = {
	devServer,
	optimization: {
		minimize: true
	},
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		main: './src/main.ts'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	performance: {
		hints: false
	},
	module: {
		rules: [
			{
				test: /\.m?ts$/,
				exclude: /(node_modules)/,
				use: 'swc-loader'
			},
			{
				test: /\.s(a|c)ss$/i,
				use: [
					// MiniCssExtractPlugin.loader // Only Production Mode
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	},
	watch: true,
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin(),
		new CompressionPlugin()
	]
};

export default config;
