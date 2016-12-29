module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index', { env: process.env.NODE_ENV })
  });
}