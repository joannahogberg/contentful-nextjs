const express = require('express');
const next = require('next');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();

		server.use('/static', express.static(path.join(__dirname, 'public')))

		server.get('/posts/:id', (req, res) => {
			return app.render(req, res, '/posts', { id: req.params.id });
		});

		server.get('/pagination?page=', (req, res) => {
			return app.render(req, res, '/pagination', { id: req.params.id });
		});

		server.all('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
