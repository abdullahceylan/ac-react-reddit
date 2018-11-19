const express = require('express');
const next = require('next');
const chalk = require('chalk');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const logger = console.log;

if (dev) {
  logger(chalk.cyan('Starting the development server...\n'));
} else {
  logger(chalk.cyan('Starting the production server...\n'));
}

app.prepare()
  .then(() => {
    const server = express();
    
    server.get('/r/:subredditName/comments/:postId/:safeTitleURL?', (req, res) => {
      const actualPage = '/';
      const queryParams = {
        ...req.query,
        ...req.params,
        path: '/r/:subredditName/comments/:postId/:safeTitleURL',
        url: req.url,
      };
      app.render(req, res, actualPage, { ...queryParams } );
    });

    server.get('/r/:subredditName/:sort(best|hot|new|rising|controversial|top|gilded|all|popular|random)?', (req, res) => {
      const actualPage = '/';
      const queryParams = {
        ...req.query,
        ...req.params,
        path: `/r/:subredditName/:sort(${req.param.sort})`,
        url: req.url,
      };
      app.render(req, res, actualPage, { ...queryParams } );
    });

    server.get('/r/:subredditName', (req, res) => {
      const actualPage = '/';
      const queryParams = {
        ...req.query,
        ...req.params,
        path: `/r/:subredditName`,
        url: req.url,
      };
      app.render(req, res, actualPage, { ...queryParams } );
    });

    server.get('/:sort(best|hot|new|rising|controversial|top|gilded|all|popular|random)?', (req, res) => {
      const actualPage = '/';
      const queryParams = {
        ...req.query,
        ...req.params,
        path: `/:sort(${req.params.sort})`,
        url: req.url,
      };
      app.render(req, res, actualPage, { ...queryParams } );
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) {
        throw chalk.red(`An error occured: ${err.message}`);
      }
      logger(chalk.green('Server is ready!'));
    });
  })
  .catch((ex) => {
    logger(chalk.red(ex.stack));
    process.exit(1);
  });