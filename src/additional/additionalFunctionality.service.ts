import { Types } from 'mongoose';
import TaskService from './task/task.service';
import TaskModel from './task/task.schema';

class AdditionalFunctionalityService {
    async filterTasksByCategory(categoryId: Types.ObjectId | string) {
        try {
            const tasks = await TaskService.findAll();
            const filteredTasks = tasks.filter((task: any) => task.category.toString() === categoryId.toString());
            return filteredTasks;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('Um erro desconhecido ocorreu');
        }
    }

    async listCompletedTasks() {
        try {
            const completedTasks = await TaskService.findAll();
            return completedTasks.filter((task: any) => task.status === 'Completed');
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('Um erro desconhecido ocorreu');
        }
    }

    async listPendingTasks() {
        try {
            const pendingTasks = await TaskModel.find({ status: 'pendente' });
            return pendingTasks;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('Um erro desconhecido ocorreu');
        }
    }

    async listTasksDueInPeriod(period: string) {
        try {
            const startDate = new Date();
            let endDate: Date;

            if (period === 'semana') {
                endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
            } else if (period === 'mês') {
                endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
            } else {
                throw new Error('Período inválido');
            }

            const tasksDue = await TaskModel.find({ deadline: { $gte: startDate, $lte: endDate } });
            return tasksDue;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('Um erro desconhecido ocorreu');
        }
    }

    async countTotalTasks(userId: Types.ObjectId | string) {
        try {
            const totalTasks = await TaskModel.countDocuments({ user: userId });
            return totalTasks;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('Um erro desconhecido ocorreu');
        }
    }

    async findMostRecentTask(userId: Types.ObjectId | string) {
        try {
            const mostRecentTask = await TaskModel.findOne({ user: userId }).sort({ createdAt: -1 });
            return mostRecentTask;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('Um erro desconhecido ocorreu');
        }
    }
}

export default new AdditionalFunctionalityService();
