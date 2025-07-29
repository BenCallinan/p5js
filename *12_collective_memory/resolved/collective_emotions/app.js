import express from 'express';
import mongoose from 'mongoose';
import ejsMate from 'ejs-mate';
import ExpressError from './utilities/ExpressError.js';
import emotions from './routes/emotions.js';

const app = express();
const dir = import.meta.dirname;

mongoose.connect('mongodb://localhost:27017/collective-emotions'),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', `${dir}/views`);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${dir}/public`));

app.use('/emotions', emotions);

app.get('/', (req, res) => {
  res.render('home');
});

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong';
  res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
  console.log('Serving on Port 3000');
});
