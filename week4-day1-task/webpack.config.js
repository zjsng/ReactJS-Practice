const path = require("path");

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js",
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // "side-effects": false,
                    // options: {
                    //     presets: [
                    //         ['es2015', { module: false }]
                    //     ]
                    // }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};