import api from '@/api/axios'
import { RegisterPayload } from '@/interfaces/user/RegisterPayload'

export async function registerUser(payload: RegisterPayload) {
  try {
    const response = await api.post('/users', payload);
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Erro ao registrar usuário.');
  }
}