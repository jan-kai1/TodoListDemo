//use built in path module
const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry:
    {
        index:"./src/index.js"
    },
    output:
    {
        filename:"main.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        //automatically outputs to output specified earlier
        new HtmlWebpackPlugin({
            title:"todolist demo",
            template:"./src/indextemplate.html",
            filename:"index.html",
            chunks:['index']
            
        })
    ],
    devtool:"inline-source-map",
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader']

            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/i,
                type:"asset/resource",
            }
        ]
    }

}