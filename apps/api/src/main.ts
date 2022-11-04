import { json, urlencoded } from 'express';
import * as express from 'express';
import healthCheck from './controllers/healthCheck';
import scraperRouter from './routers/scraperRouter'

const app = express();
app.use(json({ limit: '2560kb' }));
app.use(urlencoded({ extended: false }));

const port = process.env.port || 3333;

app.get('/health', healthCheck);

app.use('/api', scraperRouter)

const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
