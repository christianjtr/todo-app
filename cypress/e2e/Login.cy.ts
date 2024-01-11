/// <reference types="cypress" />

/**
 * Example e2e tests using Cypress...
 */

describe('Login view page', () => {
    it('should visit page', () => {
        cy.visit('/login');
        cy.getCookie('authToken').should('not.exist');
    });

    it('should fill in the form, submit and browse to /home view page', () => {
        cy.visit('/login');
    
        cy.get('[data-cy="username"]').type('username');
        cy.get('[data-cy="password"]').type('password');
        cy.get('[data-cy="submitBtn"]').click().then(() => {
            cy.url().should('include', 'home');
            cy.getCookie('authToken').should('exist');
        });
      });
});