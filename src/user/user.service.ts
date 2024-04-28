import UserModel from './user.schema'

class UserService {
    async create(user: any) {
        const createdUser = await UserModel.create(user);
        
        return createdUser;
    }

    async findById(id: string) {
        const findedUser = await UserModel.findById(id)
        return findedUser
    }

    async findAll() {
        const findedUser = await UserModel.find()
        return findedUser
    }

    async update(id: string, user: any) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, {
            username: { type: String, required: true, unique: true },
            weight: { type: Number, required: true },
            password: { type: String, required: true },
            email: { type: String, required: true, unique: true }
        }, { new: true })

        return updatedUser
    }

    async delete(id: string) {
        await UserModel.findByIdAndDelete(id)
        return 'Usuário Removido com Sucesso'
    }
}

export default new UserService()
