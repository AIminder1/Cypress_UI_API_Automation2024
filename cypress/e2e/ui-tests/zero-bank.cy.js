describe('Zero Bank Suite', ()=>{
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.zeroLogin('username', 'password')
        cy.go('back')
    })

    it('Test',()=>{
        cy.get('a').contains('Zero Bank').should('be.visible')
        
    })

})