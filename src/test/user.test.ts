import app from '../app'; 
import request from 'supertest'; 
import mongoose from 'mongoose';
import { describe, it, expect } from '@jest/globals';

describe('/task endpoint', () => {
  it('Deve inserir uma tarefa no banco de dados', async () => {
    const taskMock = {
      title: 'Teste Tarefa',
      description: 'Este é um teste de tarefa',
      createdAt: new Date('2024-04-28'),
      deadline: new Date('2024-12-31'), 
      type: 'Geral',
      category: new mongoose.Types.ObjectId(),
      status: 'Pendente',
      user: new mongoose.Types.ObjectId(),
    };

    const response = await request(app).post('/task').send(taskMock)

    expect(response.status).toBe(201)
    expect(response.body.title).toBe(taskMock.title)
    expect(response.body.description).toBe(taskMock.description)
  });
});
