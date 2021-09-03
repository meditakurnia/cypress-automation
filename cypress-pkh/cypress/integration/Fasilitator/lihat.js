describe('Fitur Ubah Data Fasilitator', function(){

    before(() => {
        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('e@dojobox.id', {force:true}).should('have.value','e@dojobox.id',{force:true});
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin',{force:true});
        cy.get('#btn-login').click({force:true});
    })

    it ('TC001-Positive Case Ubah Fasilitator', function(){
        cy.get('#dataTable_filter > label > .form-control').type('bae suzy').should('have.value','bae suzy',{force:true}); //search nama fasilitator
        cy.wait(1000);
        cy.get(':nth-child(2) > .dt-center > .btn-group > .btn > .fas').click()
        cy.wait(2000)
        cy.get('[href="facilitator/detail/232"]').contains('Lihat').click();
        cy.wait(1500);
        cy.get('.justify-content-end > .btn-primary').click()
    
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })