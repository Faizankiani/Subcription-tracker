import {config} from 'dotenv';
config({path: `.env.${process.env.NODE_ENV || 'developement'}.local`});


export const {PORT, NODE_ENV,DATABASE_URL, JWT_SECRET, JWT_EXPIRES_IN, ARCJET_API_KEY, ARCJET_ENV, QSTASH_URL, QSTASH_TOKEN} = process.env;