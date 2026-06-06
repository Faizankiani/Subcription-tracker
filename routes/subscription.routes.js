import {createSubscription,getSubscription} from '../controllers/subscription.controller.js';
import {Router} from 'express';
import authorize from '../middleware/auth.middleware.js';

const subscriptionRouter = Router();

subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.get('/user/:id', authorize, getSubscription);
export default subscriptionRouter;