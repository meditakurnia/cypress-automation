//contains : cek elemen apakah mengandung kata atau tidak
//custom command : membuat perintah/fungsi yang dapat kita atur sendiri
// digunakan dalam flow yang hrs diawale dengan command, misalnya login seperti kondisi awal
// 1 file command bisa terdiri banyak perintah command
//before : dijalankan sebelum semua test case
// go navigasi kembali menuju url sebelumnya back kembali forward kedean lagi

describe('kumpulan test case (testSuite)', function(){
    before(() => {
        //dijalankan sebelum testcase dari semua testcase
        cy.visit('https://bukalapak.com');
        cy.wait(100)
    })

    beforeEach(() => {

        //dijalankan di setiap testcase akan dieksekusi
    })
    it ('tc-1', function(){
        cy.bukaUrl();
        cy.wait(1000)
        cy.contains('Login').click();
        cy.go('back');
        cy.go('forward');
        
;    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})