require('dotenv').config();
require('express-async-errors');

var path = require('path');
const express = require('express');
const app = express();
const fileUpload = require("express-fileupload");
// rest of the packages
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
app.use(express.json());
app.use(
    fileUpload({
      useTempFiles: true,
    })
  );
  
//connect to Database
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/auth');
const museumRouter = require('./routes/museum');
const historicalRouter = require('./routes/historical');
const sunkenMonumentRouter = require('./routes/sunkenMonuments');
const collectiblesRouter = require('./routes/collectibles');
const worldHeritageRouter = require('./routes/worldHeritage');
const monumentsRouter = require('./routes/monuments');
const historicalLocationRouter = require('./routes/historicalLocation');
const templesRouter = require('./routes/temples');
const tombsRouter = require('./routes/tombs');
const beachRouter = require('./routes/beach');
const hotelRouter = require('./routes/hotel');
const blogRouter = require('./routes/blogs');
const eventRouter = require('./routes/event');
const formRouter = require('./routes/form');
const willVisitRouter = require('./routes/willVisit');
const visitedRouter = require('./routes/visited');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// app.set('trust proxy', 1);
// app.use(
//     rateLimiter({
//         windowMs: 15 * 60 * 1000, // 15 minutes
//         max: 100, // limit each IP to 100 requests per windowMs
//     })
// );

app.use(helmet());
app.use(cors({
    origin: "*"
}));
app.use(xss());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('<h1>Saeed Elnahas</h1>');
});

app.use(express.static(path.join(__dirname, 'profileImage')));

// routes
app.use('/users', authRouter);
app.use('/museums', museumRouter);
app.use('/historicals', historicalRouter);
app.use('/sunkenMonuments', sunkenMonumentRouter);
app.use('/collectibles', collectiblesRouter);
app.use('/worldHeritage', worldHeritageRouter);
app.use('/monuments', monumentsRouter);
app.use('/historicalLocation', historicalLocationRouter);
app.use('/temples', templesRouter);
app.use('/tombs', tombsRouter);
app.use('/beaches', beachRouter);
app.use('/events', eventRouter);
app.use('/hotels', hotelRouter);
app.use('/blogs', blogRouter);
app.use('/forms', formRouter);
app.use('/willVisit', willVisitRouter);
app.use('/visited', visitedRouter);
app.use('/api', require('./routes/upload'));


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        const server = app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
        const io=require("socket.io")(server,{
            pingTimeout: 60000,
            
        })

        io.on("connection",(socket)=>{
            console.log("connect")
          
    })

    } catch (error) {
        console.log(error);
    }
};

start();
