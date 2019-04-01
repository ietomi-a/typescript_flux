const path = require("path")

module.exports = {
    entry: {
	index: path.join( __dirname, "src", "index.tsx" )
    },
    output: {
	path: path.join(__dirname, "out"),
	filename: "[name].js"
    },
    resolve: {
	// 解決可能な拡張子として、'.ts', ".tsx" を追加します。
	extensions: [".ts", ".tsx", ".js" ]
    },
    devtool: 'source-map',    
    module: {
     	rules: [
     	     {
     	 	test: /.tsx$/,
  	 	loader: "awesome-typescript-loader"
     	     },
	    {
		enforce: "pre",
		test: /\.js$/,
		loader: "source-map-loader" 
	    }
     	]
    }
};
