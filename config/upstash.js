import {Client as Workflows} from "@upstash/workflows";
import { QSTASH_TOKEN, QSTASH_URL } from "./env";

export const workflows =  new Workflows({
    token: QTASH_TOKEN,
    url: QSTASH_URL
});