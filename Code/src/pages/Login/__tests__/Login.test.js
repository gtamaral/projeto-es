// Importações necessárias
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { useAuth } from '../../../context/AuthContext';
import Login from './Login';// Mock do Firebase e do Contexto de Autenticação
jest.mock('../../config/firebaseconfig', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

jest.mock('../../../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('Login', () => {
  it('deve autenticar e atualizar o contexto com dados do usuário', async () => {
    // Mocks e setups necessários
    const mockUpdateUser = jest.fn();
    useAuth.mockImplementation(() => ({
      updateUser: mockUpdateUser,
    }));

    // Renderização do componente
    const { getByPlaceholderText, getByText } = render(<Login />);

    // Simulação de entrada de dados e submissão do formulário
    fireEvent.changeText(getByPlaceholderText('Email'), 'moca@teste.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), '123123');
    fireEvent.press(getByText('Entrar'));

    // Espera pela chamada da função de atualização do contexto
    await waitFor(() => {
      expect(mockUpdateUser).toHaveBeenCalled();
    });
  });
});
