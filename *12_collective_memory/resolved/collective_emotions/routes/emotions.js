import express from 'express';
import catchAsync from '../utilities/catchAsync.js';
import emotionSchema from '../schemas.js';

import ExpressError from '../utilities/ExpressError.js';
import Emotion from '../models/emotion.js';

const router = express.Router();

const validateEmotion = (req, res, next) => {
  const { error } = emotionSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

router.get(
  '/choice',
  catchAsync(async (req, res) => {
    res.render('emotions/choice');
  })
);

router.get(
  '/show',
  catchAsync(async (req, res) => {
    const emotions = await Emotion.find({});
    res.render('emotions/show', { emotions });
  })
);

router.post(
  '/show',
  validateEmotion,
  catchAsync(async (req, res) => {
    const { xPosition, yPosition, red, green, blue } = req.body;
    console.log(req.body); // Log the request body to debug
    const emotion = new Emotion({ xPosition, yPosition, red, green, blue });
    await emotion.save();
  })
);

export default router;
