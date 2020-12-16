import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class TVController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router.post('/getProfile', this.getProfile);
        router.post('/voteCompleted', this.voteCompleted);
        router.post('/getPolls', this.getPolls);
        return router;
    }

    public getProfile(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;
        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
        res.json({ message: 'ela re profile' });
    }

    public getPolls(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;
        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
        res.json({ message: 'ela re polls' });
    }

    public voteCompleted(req: Request, res: Response) {
        const message: string = req.body.message;
        const event: string = req.body.event;
        
        console.log(message);

        // sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
        res.json({ message: 'ela re vote' });
    }
}
