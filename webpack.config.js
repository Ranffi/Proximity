const webpack = require('webpack')

module.exports = () => {
	const keys = {
		'process.env.MAPBOXPK': JSON.stringify(process.env.MAPBOXPK),
		'process.env.NEO4J_URI': JSON.stringify(process.env.NEO4J_URI),
		'process.env.NEO4J_USER': JSON.stringify(process.env.NEO4J_USER),
		'process.env.NEO4J_PASSWORD': JSON.stringify(process.env.NEO4J_PASSWORD),
		'process.env.NEO4J_DATABASE': JSON.stringify(process.env.NEO4J_DATABASE)
	}
	return {
		entry: ["./client/index.js"],
		output: {
			path: __dirname,
			filename: "server/public/bundle.js",
		},
		resolve: {
			extensions: [".js", ".jsx"],
		},
		devtool: "source-map",
		watchOptions: {
			ignored: /node_modules/,
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"],
					},
				},
				{
					test: /\.css$/,
					use: [
						"style-loader",
						"css-loader"
					]
				}
			],
		},
		plugins: [
			new webpack.DefinePlugin(keys),
		]
	}
}
