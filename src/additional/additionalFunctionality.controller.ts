import { Request, Response } from 'express';
import AdditionalFunctionalityService from './additionalFunctionality.service';

class AdditionalFunctionalityController {
  async filterTasksByCategory(req: Request, res: Response) {
    try {
      const categoryId = req.params.categoryId;
      const tasks = await AdditionalFunctionalityService.filterTasksByCategory(categoryId);
      res.json(tasks);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Um erro desconhecido ocorreu' });
      }
    }
  }

  async listCompletedTasks(req: Request, res: Response) {
    try {
      const completedTasks = await AdditionalFunctionalityService.listCompletedTasks();
      res.json(completedTasks);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Um erro desconhecido ocorreu' });
      }
    }
  }

  async listPendingTasks(req: Request, res: Response) {
    try {
      const pendingTasks = await AdditionalFunctionalityService.listPendingTasks();
      res.json(pendingTasks);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Um erro desconhecido ocorreu' });
      }
    }
  }

  async listTasksDueInPeriod(req: Request, res: Response) {
    try {
      const period = req.params.period;
      const tasksDue = await AdditionalFunctionalityService.listTasksDueInPeriod(period);
      res.json(tasksDue);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Um erro desconhecido ocorreu' });
      }
    }
  }

  async countTotalTasks(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const totalTasks = await AdditionalFunctionalityService.countTotalTasks(userId);
      res.json({ totalTasks });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Um erro desconhecido ocorreu' });
      }
    }
  }

  async findMostRecentTask(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const mostRecentTask = await AdditionalFunctionalityService.findMostRecentTask(userId);
      res.json(mostRecentTask);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Um erro desconhecido ocorreu' });
      }
    }
  }
}

export default new AdditionalFunctionalityController();
