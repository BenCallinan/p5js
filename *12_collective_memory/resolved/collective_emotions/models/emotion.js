import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EmotionSchema = new Schema({
  xPosition: Number,
  yPosition: Number,
  red: Number,
  green: Number,
  blue: Number,
});

export default mongoose.model('Emotion', EmotionSchema);
