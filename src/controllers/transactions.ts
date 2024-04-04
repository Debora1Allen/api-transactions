import { Request, Response } from 'express';
import api from '../services/api';
import { Transaction } from '../types';

class TransactionController {
  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const response = await api.get<Transaction[]>('/transactions');
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Failed to list transactions");
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { body } = req;
      const response = await api.post<Transaction>('/transactions', body);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Failed to create a transaction");
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const response = await api.delete(`/transactions/${id}`);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Failed to delete the transaction");
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { body } = req;
      const response = await api.put<Transaction>(`/transactions/${id}`, body);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Failed to update the transaction");
    }
  }

  public async updateOneProperty(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { body } = req;
      const response = await api.patch<Transaction>(`/transactions/${id}`, body);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Failed to update the transaction");
    }
  }

  public async detailOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const response = await api.get<Transaction>(`/transactions/${id}`);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Failed to detail the transaction");
    }
  }
}

export default new TransactionController();
