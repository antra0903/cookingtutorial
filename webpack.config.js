var config = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  
   
    devServer: {
      inline: true,
      port: 7777
    },
  
  }
   module.exports = config;
  