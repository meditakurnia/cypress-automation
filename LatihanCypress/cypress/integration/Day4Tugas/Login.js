describe('kumpulan test case (testSuite)', function(){


    it ('tc-1', function(){
    cy.visit('https://www.demoblaze.com/index.html');
    cy.contains('Log in').click({force:true});
    cy.get('#login2').click({force:true});
    cy.get('#loginusername').type('dojo-ditaaa').should('have.value','dojo-ditaaa')
    cy.get('#loginpassword').type('Passw0rd.').should('have.value','Passw0rd.')
    // cy.get('#sign-password').type('Passw0rd.').should('have.value','Passw0rd.')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    // cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
    cy.get('#nameofuser').click({force:true});
    
    
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })