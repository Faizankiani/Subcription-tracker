import SubscriptionService from '../services/subscription.service.js';

export const subscribe = async (req, res) => {    
    try {
        const { userId } = req.body; // Assuming userId is sent in the request body
        const subscription = await SubscriptionService.subscribe(userId);
        res.status(201).json(subscription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
