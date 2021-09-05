//contains : cek elemen apakah mengandung kata atau tidak
//custom command : membuat perintah/fungsi yang dapat kita atur sendiri

describe('kumpulan test case (testSuite)', function(){
    it ('tc-1', function(){
    // cy.visit('https://courses.letskodeit.com/practice');
    // cy.contains('Practice').click();
    // cy.visit('https://bukalapak.com');
    // cy.contains('Daftar').click();
    // cy.get('.mv-48').should('exist');
    // cy.get('.bl-text-field__input').type('medita').should('have.value', 'medita')
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
    
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})