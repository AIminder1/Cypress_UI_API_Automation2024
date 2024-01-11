describe('Become A Member Suite', ()=>{
    it('Test', () => {
        cy.visit('https://technovaschool.github.io/TechNovaBank/LoginPage.html')
        cy.get('button').contains('Become A Member').click()

        cy.get('h2').contains('TN Bank').should('be.visible');
        cy.get('input').eq(0).type('John')
        cy.get('input').eq(1).type('Smith')
        cy.get('input').eq(2).type('john@gmail.com')
        cy.get('input').eq(3).type('131323231')
        cy.get('input').eq(4).type('1323DQWSD')
        cy.get('input').eq(5).type('123-123-3231')

        cy.get('select').eq(0).select(1)
        cy.get('select').eq(1).select(2)
        cy.get('select').eq(2).select(3)
        cy.get('select').eq(3).select(4)

        cy.get('button').contains('Submit').click()
        
    });



})