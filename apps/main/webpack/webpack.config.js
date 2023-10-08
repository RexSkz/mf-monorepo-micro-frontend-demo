const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader'
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mainEntry',
      filename: 'mainEntry.js',
      remotes: {
        sub1Entry: 'sub1Entry@http://localhost:3001/sub1Entry.js',
        sub2Entry: 'sub2Entry@http://localhost:3002/sub2Entry.js',
      },
      exposes: {
        './micro-base': './src/micro-base',
        './react': 'react',
        './react-dom': 'react-dom',
        './react-router-dom': 'react-router-dom',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    })
  ],
  devtool: 'source-map',
};
