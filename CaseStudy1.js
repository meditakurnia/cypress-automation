// 1. Input nama awal dan nama akhir.
// 2. Input email.
// 3. Check gender.
// 4. Input mobile number.
// 5. Check hobbies.
// 6. Isi current address.
// 7. Click button submit.

describe('kumpulan test case (testSuite)', function(){
    it ('tc-1', function(){
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('Medita');
    cy.get('#lastName').type('Kurnia');
    cy.get('#userEmail').type('kurniamedita@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#userNumber').type('087820001350');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#currentAddress').type('Jalan semangka 5 No. 72');
    cy.get('#submit').click();
    
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})