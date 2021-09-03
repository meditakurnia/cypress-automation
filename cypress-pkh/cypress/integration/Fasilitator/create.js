describe('Fitur Tambah Data Fasilitator', function(){

    beforeEach(() => {
        cy.visit('https://admin.pkh.dojobox.id/');
        cy.wait(1000)
        cy.get('#input-email').type('e@dojobox.id', {force:true}).should('have.value','e@dojobox.id',{force:true});
        cy.wait(1000)
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin',{force:true});
        cy.wait(10000)
        cy.get('#btn-login').click({force:true});
        cy.wait(2000)
    })

    it ('TC001-Positive Case Valid Skenario', function(){
        cy.get('.d-flex > .btn').click();
        cy.get('#user_fullname').type('bae suzy',{force:true}).should('have.value','bae suzy',{force:true});
        cy.get('#user_email').type('testingggg@mailsac.com',{force:true}).should('have.value','testingggg@mailsac.com',{force:true});
        cy.get('#user_is_active').select('Aktif').should('have.value','1')
        cy.get('#user_password').type('Passw0rd.',{force:true}).should('have.value','Passw0rd.',{force:true});
        cy.get('#user_province_id').select('34').should('have.value','34')
        cy.get('#user_city_id').select('3404').should('have.value','3404')
        cy.get('#user_subdistrict_id').select('340402').should('have.value','340402')
        cy.get('#user_address').type('jalan persimpangan timur no. 56A',{force:true}).should('have.value','jalan persimpangan timur no. 56A',{force:true});
        cy.get('.custom-control').click();
        cy.get('#user_area_province_id');
        cy.get('#user_area_city_id');
        cy.get('#user_area_subdistrict_id');
        cy.get('#add').click({force:true});
        cy.wait(10000)
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.wait(10000)
        cy.get('.text-primary > .fas').click();
        cy.wait(10000)
        
    
    
    })

    it ('TC002-Negative Case Email Sudah Terdaftar', function(){
        cy.get('.d-flex > .btn').click();
        cy.get('#user_fullname').type('bae suzy',{force:true}).should('have.value','bae suzy',{force:true});
        cy.get('#user_email').type('testing1234567@mailsac.com',{force:true}).should('have.value','testing1234567@mailsac.com',{force:true});
        cy.get('#user_is_active').select('1').should('have.value','1')
        cy.get('#user_password').type('Passw0rd.',{force:true}).should('have.value','Passw0rd.',{force:true});
        cy.get('#user_province_id').select('34').should('have.value','34')
        cy.get('#user_city_id').select('3404').should('have.value','3404')
        cy.get('#user_subdistrict_id').select('340402').should('have.value','340402')
        cy.get('#user_address').type('jalan persimpangan timur no. 56A',{force:true}).should('have.value','jalan persimpangan timur no. 56A',{force:true});
        cy.get('.custom-control').click();
        cy.get('#user_area_province_id');
        cy.get('#user_area_city_id');
        cy.get('#user_area_subdistrict_id');
        cy.get('#add').click({force:true});
        cy.wait(10000)
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.wait(10000)
        cy.get('.text-primary > .fas').click();
        
    
    
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })