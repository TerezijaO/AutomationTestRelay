
  Cypress.Commands.add('checkHeaderFooter', () => {
    cy.get('.css-153o6lq').contains('Relay').should('be.visible');
    cy.get('.css-y4nc58').contains('Relay is a cool gadget made by PROTOTYP in the year 2025. Our main goal is world domination by link sharing.').should('be.visible');
  });
  











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