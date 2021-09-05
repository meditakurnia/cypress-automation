// 1. Input nama awal dan nama akhir.
// 2. Input email.
// 3. Check gender.
// 4. Input mobile number.
// 5. Check hobbies.
// 6. Isi current address.
// 7. Click button submit.

// describe('kumpulan test case (testSuite)', function(){
//     it ('tc-1', function(){
//     cy.visit('https://demoqa.com/automation-practice-form');
//     cy.get('#firstName').type('Medita');
//     cy.get('#lastName').type('Kurnia');
//     cy.get('#userEmail').type('kurniamedita@gmail.com');
//     cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
//     cy.get('#userNumber').type('087820001350');
//     cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
//     cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();
//     cy.get('#currentAddress').type('Jalan semangka 5 No. 72');
//     cy.get('#submit').click();
    
//     })


//     Cypress.on('uncaught:exception', (err, runnable)=>{
//         return false
//     })

// })
// Isi nama dan email, lalu klik button “email me!”.
// Pilih jenis kelamin pada radio button.
// Pilih satu atau semua pilihan pada checkboxes.
// Pilih dropdown “Audi”.
// Klik tombol “Click Me” pada bagian simple controls lalu cek apakah terdapat tulisan button success.

describe('kumpulan test case (testSuite)', function(){
    it ('tc-1', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
    cy.get('#et_pb_contact_name_0').type('Medita').should('have.value', 'Medita');
    cy.get('#et_pb_contact_email_0').type('meditaatikasari@gmail.com').should('have.value', 'meditaatikasari@gmail.com');
    cy.get('.et_pb_contact_submit').click();
    
    
    })

    it ('tc-2', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
    cy.get('[value="female"]').check().should('be.checked','female')
        
        })

    it ('tc-3', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
    cy.get('[value="Car"]').check().should('be.checked','Car')
            
    })
    it ('tc-4', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
    // cy.get('[value="female"]').check().should('exist')
    cy.get('select').select('audi').should('have.value','audi');
                
     })
    it ('tc-5', function(){
    cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
    cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button');
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})