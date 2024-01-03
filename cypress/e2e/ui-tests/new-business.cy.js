describe('New Business Account Test Cases', ()=>{

    it('Business Test', () => {
        
        cy.visit('https://technovaschool.github.io/TechNovaBank/BusinessSavingPage.html')
        
        cy.get('h1').contains('Tech').should('be.visible')
        cy.get('h2').contains('New').should('be.visible')

        cy.get('input').eq(0).type('Alex')
        cy.get('input').eq(1).type('Smith')
        cy.get('input').eq(2).type('alex@gmail.com')
        cy.get('input').eq(3).type('ALex')
        cy.get('input').eq(4).type('Marketing')
        cy.get('input').eq(5).type('123 Street')
        cy.get('input').eq(6).type('131322')
        
        cy.get('select').select(2)
        
        cy.get('button').contains('Submit').click()

        cy.on('window:alert',(alert)=>{
            expect(alert).equal('Your account has been successfully created.')
        })

    });


})