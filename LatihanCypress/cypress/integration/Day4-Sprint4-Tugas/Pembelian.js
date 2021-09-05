describe('kumpulan test case (testSuite)', function(){
    before(() => {
        //dijalankan sebelum testcase dari semua testcase
        cy.visit('https://www.demoblaze.com/index.html');
        cy.screenshot();
        cy.contains('Log in').click({force:true});
        cy.get('#login2').click({force:true});
        cy.wait(1000)
        cy.get('#loginusername').type('dojo-dita').should('have.value','dojo-dita')
        cy.get('#loginpassword').type('Passw0rd.').should('have.value','Passw0rd.')
        // cy.get('#sign-password').type('Passw0rd.').should('have.value','Passw0rd.')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
        // cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
        cy.get('#nameofuser').click({force:true});
        cy.get('#nameofuser').should('be.visible');

    })

    it ('tc-1', function(){
    
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click({force:true})
    cy.contains('Add to cart')
    cy.get('.col-sm-12 > .btn').click({force:true});
    cy.contains('Cart');
    cy.get(':nth-child(4) > .nav-link').click({force:true})
    cy.contains('Place Order')
    cy.get('.col-lg-1 > .btn').click({force:true})
    cy.wait(1000)
    cy.get('#name').type('medita').should('have.value','medita')
    cy.wait(1000)
    cy.get('#country').type('indonesia').should('have.value','indonesia')
    cy.get('#city').type('jakarta').should('have.value','jakarta')
    cy.get('#card').type('089120356000123').should('have.value','089120356000123')
    cy.get('#month').type('agustus').should('have.value','agustus')
    cy.get('#year').type('2021').should('have.value','2021')
    cy.contains('Purchase');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true});
    cy.contains('OK');
    cy.get('.confirm').click({force:true});
    cy.go('back')
    
    
    
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })