describe('Wondow Handle', ()=>{

    it('window test ', () => {
        
        cy.visit('https://technovaschool.github.io/TechNovaBank/HomePage.html')
        cy.url().should('include', 'https://technovaschool.github.io/TechNovaBank/HomePage.html')

        cy.window().then(win =>{

            cy.visit('https://technovaschool.github.io/TechNovaBank/PersonalLoanPage.html', {win})
            win.focus()
            cy.get('h1').contains('Personal Loan Application Form')



        })
    });

})