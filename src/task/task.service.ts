import { Types } from 'mongoose';
import TaskModel from './task.schema'

class TaskService {
    async create(task: any) {
        const createdTask = await TaskModel.create(task);

        return createdTask;
    }

    async findById(id: string) {
        const findedTask = await TaskModel.findById(id)
        return findedTask
    }

    async findAll() {
        const findedTask = await TaskModel.find()
        return findedTask
    }

    async update(id: string, task: any) {
        const updatedTask = await TaskModel.findByIdAndUpdate(id, {
            title: { type: String, required: true },
            description: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            deadline: { type: Date, required: true },
            type: { type: String },
            category: { type: Types.ObjectId, ref: 'Categoria' },
            status: { type: String, enum: ['Pendente', 'Em Progresso', 'Completa'], default: 'Pendente' },
            user: { type: Types.ObjectId, ref: 'Usuário', required: true }
        }, { new: true })

        return updatedTask
    }

    async delete(id: string) {
        await TaskModel.findByIdAndDelete(id)
        return 'Tarefa Removida com Sucesso'
    }
}

export default new TaskService()
