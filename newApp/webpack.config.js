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
            loaders: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'src/main/js'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    };