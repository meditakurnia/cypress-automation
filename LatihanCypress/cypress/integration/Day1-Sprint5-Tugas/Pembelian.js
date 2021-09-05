describe('Fitur Pembelian', function(){
    beforeEach(() => {
        //dijalankan sebelum testcase dari semua testcase
        cy.visit('https://www.demoblaze.com/index.html');
        // cy.screenshot();
        cy.contains('Log in').click({force:true});
        cy.get('#login2').click({force:true});
        cy.wait(1000)
        cy.get('#loginusername').type('dojo-dita').should('have.value','dojo-dita')
        cy.get('#loginpassword').type('Passw0rd.').should('have.value','Passw0rd.')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
        cy.get('#nameofuser').click({force:true});
        cy.get('#nameofuser').should('be.visible');

    })

    it ('TC001-Valid Skenario Positif Case', function(){
    
    cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click({force:true})
    cy.wait(1000)
    cy.contains('Add to cart')
    cy.get('.col-sm-12 > .btn').click({force:true});
    cy.wait(1000)
    cy.go('back')
    cy.wait(1000);
    cy.get('.active > .nav-link').click({force:true})
    cy.wait(1000)
    cy.contains('Next')
    cy.wait(1000)
    cy.get('#next2').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click({force:true})
    cy.contains('Add to cart')
    cy.get('.col-sm-12 > .btn').click({force:true});
    cy.wait(1000);
    cy.get('.active > .nav-link').click({force:true})
    cy.wait(1000)
    cy.contains('Next')
    cy.get('#next2').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click({force:true})
    cy.contains('Add to cart')
    cy.wait(1000)
    cy.get('.col-sm-12 > .btn').click({force:true});
    cy.wait(1000)
    cy.contains('Cart');
    cy.wait(1000)
    cy.get(':nth-child(4) > .nav-link').click({force:true})
    cy.wait(3000)
    cy.contains('Place Order')
    cy.wait(2000)
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
    cy.go('back');
    
    
    
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })