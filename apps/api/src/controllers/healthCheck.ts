import * as moment from 'moment';
import {Request, Response} from 'express';
import { logError } from '../services/loggerManager';


const healthCheck = (_req:Request, res:Response) => {
    const healthCheckResponse = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: moment().toISOString()
    };

    try {
        res.send(healthCheckResponse);

    } catch (error) {
        logError(
            `Call to health check endpoint failed with error '${error}'`
        );
        healthCheckResponse.message = error;
        return res.status(503).send(healthCheckResponse);
    }
}

export default healthCheck;
