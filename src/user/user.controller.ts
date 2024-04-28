import { Request, Response } from 'express'
import userService from './user.service'

class UserController {

    async create(req: Request, res: Response) {
        const user = await userService.create(req.body)
        return res.json(user)
    }

    async findById(req: Request, res: Response) {
        const user = await userService.findById(req.params.id)
        return res.json(user)
    }

    async find(req: Request, res: Response) {
        const user = await userService.findAll()
        return res.json(user)
    }

    async update(req: Request, res: Response) {
        const updatedUser = await userService.update(req.params.id, req.body)
        return res.json(updatedUser)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await userService.delete(req.params.id)
        return res.json(deleteReturn)
    }

}

export default new UserController()