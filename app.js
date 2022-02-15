require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
// rest of the packages
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

//connect to Database
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/auth');
const museumRouter = require('./routes/museum');
const historicalRouter = require('./routes/historical');
const sunkenMonumentRouter = require('./routes/sunkenMonuments');
const collectiblesRouter = require('./routes/collectibles');
const worldHeritageRouter = require('./routes/worldHeritage');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    })
);

app.use(helmet());
app.use(cors({
    origin: "*"
}));
app.use(xss());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>MOW</h1>');
});

// routes
app.use('/users', authRouter);
app.use('/museums', museumRouter);
app.use('/historicals', historicalRouter);
app.use('/sunkenMonuments', sunkenMonumentRouter);
app.use('/collectibles', collectiblesRouter);
app.use('/worldHeritage', worldHeritageRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
