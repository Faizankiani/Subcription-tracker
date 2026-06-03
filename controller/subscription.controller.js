import  Subscription from '../models/subscription.model.js';

// Create a new subscription
export const createSubscription = async (req, res) => {
  try { 
    const { userId, planId, startDate, endDate } = req.body;
    const subscription = new Subscription({ userId, planId, startDate, endDate });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
