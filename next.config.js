module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  };