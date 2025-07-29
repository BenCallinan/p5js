import mongoose from 'mongoose';
import Emodata from './emodata.js';
import Emotion from '../models/emotion.js';

mongoose.connect('mongodb://localhost:27017/collective-emotions');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const seedDB = async () => {
  await Emotion.deleteMany({});
  for (let i = 0; i < Emodata.length; i++) {
    const emotion = new Emotion({
      xPosition: Emodata[i].xPosition,
      yPosition: Emodata[i].yPosition,
      red: Emodata[i].red,
      green: Emodata[i].green,
      blue: Emodata[i].blue,
    });
    await emotion.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
