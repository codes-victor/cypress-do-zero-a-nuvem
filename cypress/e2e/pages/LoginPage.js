class LoginPage {
    visit() {
      cy.visit('https://front.serverest.dev/login');
    }
  
    fillEmail(email) {
      cy.get('[data-testid="email"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('[data-testid="senha"]').type(password);
    }
  
    submit() {
      cy.get('[data-testid="entrar"]').click();
    }
  
    validateLoginSuccess() {
      cy.contains('Bem Vindo').should('be.visible');
    }
  
    validateLoginError() {
      cy.contains('Email e/ou senha inválidos').should('be.visible');
    }
  }
  
  export default new LoginPage();
  