describe('New Account Test', ()=>{
    
    require('cypress-xpath')

    it('TC1 - Create a new account',  () => {
        cy.visit('https://technovaschool.github.io/TechNovaBank/ApplyNewAccount.html')
        cy.get('h2').contains('Create New Account').should('be.visible')

        cy.title().should('contain'/*include*/, 'Create New Account')
        cy.url().should('include', 'https://technovaschool.github.io/TechNovaBank/ApplyNewAccount.html')

        cy.xpath("//input[@id='firstName']").type('Alex')
        cy.xpath("//input[@id='lastName']").type('Smith')
        cy.get('#email').type('email@gmail.com')
        cy.get('[id="password"]').type('password')
        cy.get('#cellPhone').type('123123123')
        cy.get('#address').type('123 addes')
        cy.get('#city').type('City')

        cy.get('select').eq(0).select('Alabama')
        cy.get('#zipCode').type('1312313')
        cy.get('select').eq(1).select('New Checking')


        //making fun

    })

})