import LoginPage from './pages/LoginPage';

describe('Testes de Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Deve realizar login com sucesso', () => {
    LoginPage.fillEmail('victor@email.com');
    LoginPage.fillPassword('victor123');
    LoginPage.submit();
    LoginPage.validateLoginSuccess();
  });

  it('Deve exibir erro ao inserir credenciais inválidas', () => {
    LoginPage.fillEmail('usuario@invalido.com');
    LoginPage.fillPassword('senhaerrada');
    LoginPage.submit();
    LoginPage.validateLoginError();
  });
});
