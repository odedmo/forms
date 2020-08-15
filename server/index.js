const express = require('express');

const setMiddlewares = require('./middlewares');
const setRoutes = require('./routes');
const initDb = require('./data/db');

const app = express();

setMiddlewares(app);
setRoutes(app);

const port = process.env.PORT || 3000;

initDb({
  connectionString: 'mongodb://oded:password666@ds241408.mlab.com:41408/forms'
}).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})
.catch(err => {
  console.log(err);
});
