import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class VoteDoneSmartphoneController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router.post('/voteDone');
        router.post('/voteComplete', this.voteComplete);
        return router;
    }

    public voteComplete(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
        res.json({ message: 'ela re vote' });
    }
}
