const path    				= require('path');
const webpack 				= require('webpack');
const { VueLoaderPlugin } 	= require('vue-loader');

module.exports = {
	entry: {
		app: [
			'./src/app.js'
		]
	},
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'public/js/app.js'
	},
	module: {
		rules: [
			{ 
				test: /\.vue$/, 
				exclude: /node_modules/, 
				loader: "vue-loader" 
			},
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader" 
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new VueLoaderPlugin()
	]
}
