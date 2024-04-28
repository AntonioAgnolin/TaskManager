import { Request, Response } from 'express';
import categoryService from './category.service';

class CategoryController {

    async create(req: Request, res: Response) {
        const category = await categoryService.create(req.body);
        return res.json(category);
    }

    async findById(req: Request, res: Response) {
        const category = await categoryService.findById(req.params.id);
        return res.json(category);
    }

    async find(req: Request, res: Response) {
        const categories = await categoryService.findAll();
        return res.json(categories);
    }

    async update(req: Request, res: Response) {
        const updatedCategory = await categoryService.update(req.params.id, req.body);
        return res.json(updatedCategory);
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await categoryService.delete(req.params.id);
        return res.json(deleteReturn);
    }

}

export default new CategoryController();
