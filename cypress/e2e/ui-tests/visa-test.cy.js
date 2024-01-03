describe('Visa Card: Test Cases', ()=>{

    it('visa Test', () =>{
        cy.visit('https://technovaschool.github.io/TechNovaBank/VisaLoanApplication.html')
        cy.get('h1').contains('Visa Loan Application').should('be.visible')
        cy.get('p').contains('2%').should('be.visible')  
        cy.get('input').eq(0).type('John')
        cy.get('input').eq(1).type('Max')
        cy.get('input').eq(2).type('Unknown')
        cy.get('#title').select(1)
        cy.get('input').eq(6).type('John@gmail.com')
        cy.get('input').eq(3).check()
        cy.get('input').eq(8).type('Address')
        cy.get('input').eq(7).type('Anna')
        cy.get('#date-of-birth').type('2004-04-23')
        cy.get('input').eq(10).type('12313')
        cy.get('#job-title').select(1)
        cy.get('input').eq(11).type('12313')
        cy.get('#employment-status').select(1)
        cy.get('#submit-btn').click()
        cy.on('window:alert', (alert)=>{
            expect(alert).to.equal('Application Has been successfully submitted!')
        })





    })


})