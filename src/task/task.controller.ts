import { Request, Response } from 'express'
import taskService from './task.service'

class TaskController {

    async create(req: Request, res: Response) {
        const task = await taskService.create(req.body)
        return res.json(task)
    }

    async findById(req: Request, res: Response) {
        const task = await taskService.findById(req.params.id)
        return res.json(task)
    }

    async find(req: Request, res: Response) {
        const task = await taskService.findAll()
        return res.json(task)
    }

    async update(req: Request, res: Response) {
        const updatedTask = await taskService.update(req.params.id, req.body)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await taskService.delete(req.params.id)
        return res.json(deleteReturn)
    }

}

export default new TaskController()