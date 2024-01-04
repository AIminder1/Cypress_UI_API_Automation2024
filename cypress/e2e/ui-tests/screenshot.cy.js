describe('screenshot', ()=>{
    it('should take screenshot', () => {
        cy.visit('/LoginPage.html')

        cy.screenshot('login-page')

        cy.login('admin', 'password')

        cy.screenshot('after-click')

        cy.task('log', 'Pass 100%')

    });
})