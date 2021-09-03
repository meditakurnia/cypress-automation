describe('Fitur Ubah Data Fasilitator', function(){

    before(() => {
        cy.visit('https://admin.pkh.dojobox.id/');
        cy.get('#input-email').type('e@dojobox.id', {force:true}).should('have.value','e@dojobox.id',{force:true});
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin',{force:true});
        cy.get('#btn-login').click({force:true});
    })

    it ('TC001-Positive Case Ubah Fasilitator', function(){
        cy.get('#dataTable_filter > label > .form-control').type('bae suzy').should('have.value','bae suzy',{force:true});
        cy.wait(1000);
        cy.get(':nth-child(2) > .dt-center > .btn-group > .btn > .fas').click()
        cy.wait(2000)
        cy.get('[href="facilitator/edit/232"]').contains('Ubah').click();
        cy.wait(3000)
        cy.get('#user_fullname').type('  ', {force:true}).should('have.value','bae suzy satu  ',{force:true});
        cy.wait(2000)
        cy.get('#edit').click({force:true});
        cy.get(1000);
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click({force:true});
        cy.get(1000);
        cy.get('.text-primary > .fas').click({force:true});
    
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })