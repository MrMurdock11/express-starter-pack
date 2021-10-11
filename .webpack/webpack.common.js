const path = require("path");
const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

module.exports = {
	target: "node",
	entry: "./src/index.ts",
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "index.js",
	},
	resolve: {
		extensions: [".ts", ".js"],
		alias: {
			"@routers": path.resolve(__dirname, "../src/routers/index"),
			"@routers/*": path.resolve(__dirname, "../src/routers"),
		},
	},
	module: {
		rules,
	},
	plugins,
};
