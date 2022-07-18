import 'cypress-iframe';

const getIframeDocument = (iFrame) => {
  return cy
    .get(iFrame)
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist');
};

Cypress.Commands.add('getIframeBody', (iFrame) => {
  // get the document
  return getIframeDocument(iFrame)
    // automatically retries until body is loaded
    .its('body')
    .should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap);
});
