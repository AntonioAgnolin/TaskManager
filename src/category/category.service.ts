import { Types } from 'mongoose';
import CategoryModel from './category.schema';

class CategoryService {
    async create(category: any) {
        const createdCategory = await CategoryModel.create(category);
        return createdCategory;
    }

    async findById(id: string) {
        const foundCategory = await CategoryModel.findById(id);
        return foundCategory;
    }

    async findAll() {
        const foundCategories = await CategoryModel.find();
        return foundCategories;
    }

    async update(id: string, category: any) {
        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, {
            name: { type: String, required: true },
            color: { type: String, required: true }
          });
        return updatedCategory;
    }

    async delete(id: string) {
        await CategoryModel.findByIdAndDelete(id);
        return 'Categoria Removida com Sucesso';
    }
}

export default new CategoryService();
