import { logError } from '../services/loggerManager';
import * as moment from 'moment';

const healthCheck = (_req, res) => {
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
