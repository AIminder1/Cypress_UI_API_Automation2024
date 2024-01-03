describe('Mortgage Test Suite', ()=>{
   
    require('cypress-xpath')
   
    it('Test', () => {
        
        cy.visit('https://technovaschool.github.io/TechNovaBank/HomeLoanApplication.html')
        cy.get('h1').contains('Mortgage Application').should('be.visible')

        cy.get('input').eq(0).type('Alex Smith')
        cy.get('input').eq(1).type('alex@gmail.com')
        cy.get('#phone').type('12313311')
        cy.get('#address').type('123 Street')
        cy.xpath("//*[@id= 'loan-amount']").type("123132")
        cy.get("[id='credit-score']").type("765")
        
        cy.get('#employment-status').select(2)
        cy.get('select').eq(1).select(1)
        cy.get('select').eq(2).select(2).scrollIntoView();
        
        cy.get('input').eq(6).type('12313')
        cy.get('input').eq(7).type('2')
        cy.get('#comments').type('Add tracking Credit Score')
        cy.get('input').contains('Submit').click()

        cy.on('window:alert', (alert)=>{
            expect(alert).to.equal('Application has been successfully submitted!')
        })


    });


})