// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (nome, sobrenome) => { 

    cy.get('#firstName').as('nome').type(nome)
    cy.get('#lastName').as('sobrenome').type(sobrenome)
    cy.get('#email').as('email').type('victoremxemplo.com')
    cy.get('#open-text-area').as('caixaFeedback').type('Olá gostaria de ter mais informações sobre o produto X')
 })


 Cypress.Commands.add('fillMandatoryFieldsJson', (dados = {}) => { 

    cy.get('#firstName').as('nome').type(dados.nome)
    cy.get('#lastName').as('sobrenome').type(dados.sobrenome)
    cy.get('#email').as('email').type('victoremxemplo.com')
    cy.get('#open-text-area').as('caixaFeedback').type('Olá gostaria de ter mais informações sobre o produto X')
 })


 
