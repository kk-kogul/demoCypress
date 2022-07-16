import 'cypress-iframe';

Cypress.Commands.add('switchToIframes',(iFrame) => {
   return cy.get(iFrame).its('0.contentDocument.body').should('not.be.empty').then(cy.wrap);
});