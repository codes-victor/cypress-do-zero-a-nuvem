describe('Central de Atendimento ao Cliente TAT', () => {
  before(() => {
    cy.fixture('massaUsuarios.json').as('usuarios');
  });
  beforeEach(() => {
    cy.visit('./src/index.html')
  });

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  });

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').as('nome').type('Victor', {'delay': 100})
    cy.get('#lastName').as('sobrenome').type('Magdalene')
    cy.get('#email').as('email').type('victor@exemplo.com')
    cy.get('#open-text-area').as('caixaFeedback').type('Olá gostaria de ter mais informações sobre o produto X')
    cy.contains('Enviar').click()
    cy.get('.success').should("be.visible")
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').as('nome').type('Victor', )
    cy.get('#lastName').as('sobrenome').type('Magdalene')
    cy.get('#email').as('email').type('victoremxemplo.com')
    cy.get('#open-text-area').as('caixaFeedback').type('Olá gostaria de ter mais informações sobre o produto X')
    cy.contains('Enviar').click()
    cy.get('.error').should("be.visible")
  });

  it('verifica se o campo telefone aceitou diferente de numerico', () => {
    cy.get('#phone').as('telefone').type('Victor')
    cy.get('@telefone').should('not.have.value', 'Victor')
  });


  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').as('nome').type('Victor')
    cy.get('#lastName').as('sobrenome').type('Magdalene')
    cy.get('#email').as('email').type('victoremxemplo.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').as('caixaFeedback').type('Olá gostaria de ter mais informações sobre o produto X')
    cy.contains('Enviar').click()
    cy.get('.error').should("be.visible").contains("Valide os campos obrigatórios!")
  });

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').as('nome').type('Victor')
    cy.get('@nome').should('have.value', "Victor")
    cy.get('@nome').clear().should('have.value', '')
    cy.get('#lastName').as('sobrenome').type('Magdalene')
    cy.get('@sobrenome').should('have.value', "Magdalene")
    cy.get('@sobrenome').clear().should('have.value', '')
    cy.get('#email').as('email').type('victor@exemplo.com')
    cy.get('@email').should('have.value', "victor@exemplo.com")
    cy.get('@email').clear().should('have.value', '')

  });

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

    cy.contains('Enviar').click()
    cy.get('.error').should("be.visible")

  });


  // it.only("Executa um teste para cada usuário da massa", function () {
  //   this.usuarios.forEach((dados) => {
  //     it('envia o formulário com sucesso usando um comando customizado  usuário ${dados.nome} ${dados.sobrenonome}', function () {
  //       cy.fillMandatoryFieldsJson(dados);
  //       cy.reload()
  //     });
  //   });
  // });










})



