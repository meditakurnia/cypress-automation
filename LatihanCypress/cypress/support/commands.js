
Cypress.Commands.add('bukaUrl',() => {
    cy.visit('https://bukalapak.com');
    cy.contains('Daftar').click();
})

import 'cypress-file-upload';
