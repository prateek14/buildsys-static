const appConfig = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/public/build',
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'css', 'svg'],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.css?$/,
                use: [
                    // The `injectType`  option can be avoided because it is default behaviour
                    { loader: 'style-loader' },
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
};

const serviceWorkerConfig = {
    entry: './src/service-worker.ts',
    output: {
        path: __dirname + '/public/build',
        filename: 'service-worker.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
    },
};

module.exports = [appConfig, serviceWorkerConfig];
