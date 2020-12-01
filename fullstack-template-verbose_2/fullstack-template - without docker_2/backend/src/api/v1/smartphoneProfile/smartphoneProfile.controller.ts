import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class SmartphoneProfileController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router.post('/smartphoneProfile');
        router.post('/getProfile', this.getProfile);
        router.post('/nextPlayer', this.nextPlayer);
        return router;
    }

    public getProfile(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
    }

    public nextPlayer(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;

        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
    }
}
