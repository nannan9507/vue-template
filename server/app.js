const express = require('express');
const path = require('path');
const http = require('http');

const app = express();


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '')))
app.set('port', 4000)


const Router = require( './controllers/index')
Router(app)


// 开发环境
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('../webpack.config.js')

  app.set('views', path.join(__dirname, 'template'))
  app.use(express.static(path.join(__dirname, 'dist')))

  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }))

  app.use(webpackHotMiddleware(compiler))
}

// server start
const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  const reload = require('reload');
  reload(server, app);
}

server.listen(app.get('port'), () => {
  console.log(`server on port ${ app.get('port') }`);
});

