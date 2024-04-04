import { Router } from "express";
import TransactionsController from "./controllers/transactions";

const routes = Router();

routes.get('/transactions', TransactionsController.listAll);
routes.post('/transactions', TransactionsController.create);
routes.delete('/transactions/:id', TransactionsController.delete);
routes.put('/transactions/:id', TransactionsController.update);
routes.patch('/transactions/:id', TransactionsController.updateOneProperty);
routes.get('/transactions/:id', TransactionsController.detailOne);

export default routes;
