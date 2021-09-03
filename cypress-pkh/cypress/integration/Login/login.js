describe('Fitur Login', function(){

    before(() => {
        cy.visit('https://admin.pkh.dojobox.id/');
        cy.wait(1000)
    })

    it ('TC001-Negative Case Email Tidak Valid', function(){

        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('e@dojobox', {force:true}).should('have.value','e@dojobox',{force:true});
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin',{force:true});
        cy.get('#btn-login').click({force:true});
        cy.get('.modal-header').should('be.visible')
        cy.wait(2000)
    })

    it ('TC002-Negative Case Ketidaksesuaian Password dan Email', function(){

        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('e@dojobox.id', {force:true}).should('have.value','e@dojobox.id',{force:true});
        cy.get('#input-password').type('admin123',{force:true}).should('have.value','admin123',{force:true});
        cy.get('#btn-login').click({force:true});
        cy.get('.modal-header').should('be.visible');
        cy.wait(2000)
    })

    it ('TC003-Negative Case Email Belum Terdaftar', function(){

        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('medita@dojobox.id', {force:true}).should('have.value','medita@dojobox.id',{force:true});
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin',{force:true});
        cy.get('#btn-login').click({force:true});
        cy.get('.modal-header').should('be.visible');
        cy.wait(2000)
    })

    it ('TC004-Positive Case Valid Skenario', function(){
        
        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('e@dojobox.id', {force:true}).should('have.value','e@dojobox.id',{force:true});
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin',{force:true});
        cy.get('#btn-login').click({force:true});
        cy.wait(2000)
    
    })

   
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })