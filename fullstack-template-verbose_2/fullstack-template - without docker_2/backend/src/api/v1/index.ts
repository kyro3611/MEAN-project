import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel } from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import { TVController } from './TV/TV.controller';
import { SmartphoneController } from './smartphone/smartphone.controller';
import { SmartphonePlayersController } from './smartphonePlayers/smartphonePlayers.controller';
import { VoteDoneSmartphoneController } from './voteDoneSmartphone/voteDoneSmartphone.controller';
import { WallHomeController } from './wallHome/wallHome.controller';


const apiV1Router = express.Router();


apiV1Router
  // Sockets events routes
  .use(
    '/socket-events',
    new SocketEventsController().applyRoutes()
  )

  // Sockets events routes
  .use(
    '/files',
    new FilesController().applyRoutes()
  )

  // Task routes
  .use(
    '/tasks',
    new ResourceController<ITask>(TaskModel).applyRoutes()
  )

  // Example routes
  .use(
    '/example',
    new ExampleController().applyRoutes()
  )

  .use(
    '/TV',
    new TVController().applyRoutes()
  )

  .use(
    '/smartphone',
    new SmartphoneController().applyRoutes()
  )
  

  // smartphone players routes
  .use(
    '/smartphonePlayers',
    new SmartphonePlayersController().applyRoutes()
  )

  // smartphone players routes
  .use(
    '/voteDoneSmartphone',
    new VoteDoneSmartphoneController().applyRoutes()
  )

  // wall home
  .use(
    '/wallHome',
    new WallHomeController().applyRoutes()
  );

export { apiV1Router };

