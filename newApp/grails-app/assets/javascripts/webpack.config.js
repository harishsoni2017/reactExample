    var path = require('path');

    module.exports = {
        entry: {
            index: '/home/causecode/HarishSoni/newReacr/newApp/src/main/js/index.js'
        },
        output: {
            path: '/home/causecode/HarishSoni/newReacr/newApp/grails-app/assets/javascripts',
            publicPath: '/assets/',
            filename: 'bundle.js'
        },
   module: {
       rules: [{
       test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        "less-loader"
      ]
     }]
   }   };