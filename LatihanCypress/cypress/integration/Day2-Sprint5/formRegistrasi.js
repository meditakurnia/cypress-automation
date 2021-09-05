describe('Form Registrasi', function(){


    it ('TC-001-Valid Skenario Positif Case', function(){

    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('Medita').should('have.value','Medita')
    cy.get('#lastName').type('Kurnia').should('have.value','Kurnia')
    cy.get('#userEmail').type('kurniamedita@gmail.com').should('have.value','kurniamedita@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click().should('be.visible');
    cy.wait(1000)
    cy.get('#userNumber').type('0812300100',{force:true}).should('have.value','0812300100',{force:true})
    cy.wait(1000)
    cy.get('#dateOfBirthInput').invoke('val','23 Dec 2000').should('have.value','23 Dec 2000')
    cy.wait(1000)
    cy.get('.subjects-auto-complete__value-container').type('English{enter}').should('contain', 'English')
    cy.wait(1000)
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click().should('be.visible')
    cy.get('input[type="file"]').attachFile('poster medita.jpg').should('be.visible')
    cy.get('#currentAddress').type('Jalan Simpang Lima No. 56A').should('have.value','Jalan Simpang Lima No. 56A')
    cy.get('#state > .css-yk16xz-control').type('NCR{enter}')
    cy.get('#stateCity-wrapper > :nth-child(3)').type('Delhi{enter}');
    cy.get('#submit').click().should('be.visible')
    cy.wait(1000)
    

    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
     })