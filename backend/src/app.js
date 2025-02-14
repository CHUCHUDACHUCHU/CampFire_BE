const express = require('express');
const helmet = require('helmet');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const corsOption = {
    origin: true,
    credentials: true,
    withCredential: true,
    optionsSuccessStatus: 200,
    exposedHeaders: ['accesstoken', 'refreshtoken'],
};

require('dotenv').config();
const env = process.env;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(cors(corsOption));
/* app.set('trust proxy', true); */
app.use('/api', routes);

require('./modules/publicAPI.js');

const ErrorHandler = require('./middlewares/error.handler.middleware');
app.use(ErrorHandler);

app.listen(env.PORT, '0.0.0.0', () => {
    console.log(env.PORT, '포트로 서버가 열렸습니다.');
});

app.get('/', (req, res) => {
    res.send(`test ${env.PORT}`);
});
