//check tidak perlu parameter, select perlu
describe('kumpulan test case (testSuite)', function(){
    it ('tc-1', function(){
    // cy.visit('https://www.bukalapak.com/');
    // cy.get('.bl-link > .pr-4').click();
    // cy.get('.bl-text-field__inner').type('medita')
    // cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    // cy.get('select').select('opel');
    // cy.get('[value="Bike"]').check();

    cy.visit('https://staging.bayari.id/');

    
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})