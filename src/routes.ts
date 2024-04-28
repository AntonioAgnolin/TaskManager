import { Router } from 'express';
import TaskController from './src/task/task.controller';
import CategoryController from './src/category/category.controller';
import AdditionalFunctionalityController from './src/additional/additionalFunctionality.controller';

const routes = Router()
routes.post('/task', TaskController.create)
routes.get('/task/:userId', TaskController.findAllByUser)
routes.get('/task/:id', TaskController.findById)
routes.put('/task/:id', TaskController.update)
routes.delete('/task/:id', TaskController.delete)

routes.post('/categories', CategoryController.create)
routes.get('/category/:userId', CategoryController.findAllByUser)
routes.get('/category/:id', CategoryController.findById)
routes.put('/category/:id', CategoryController.update)
routes.delete('/category/:id', CategoryController.delete)

routes.get('/task/filter/:categoryId', AdditionalFunctionalityController.filterTasksByCategory)
routes.get('/task/completed', AdditionalFunctionalityController.listCompletedTasks)
routes.get('/task/pending', AdditionalFunctionalityController.listPendingTasks)
routes.get('/task/due/:period', AdditionalFunctionalityController.listTasksDueInPeriod)
routes.get('/task/count/:userId', AdditionalFunctionalityController.countTotalTasks)
routes.get('/task/most-recent/:userId', AdditionalFunctionalityController.findMostRecentTask)

routes.get('/task/average-completion', AdditionalFunctionalityController.calculateAverageCompletion)
routes.get('/task/longest-description', AdditionalFunctionalityController.findTaskWithLongestDescription)
routes.get('/task/group-by-category', AdditionalFunctionalityController.groupTasksByCategory)
routes.get('/task/oldest/:userId', AdditionalFunctionalityController.findOldestTask)

export { routes }