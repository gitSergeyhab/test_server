import { Router } from 'express';
import { dataController } from '../controllers/data-controller';

const testDataRouter = Router();

testDataRouter.get('/simple-data', dataController.getSimpleData );

testDataRouter.get('/db-data', dataController.getDataFromDB );


export {testDataRouter}