
describe('Login Test', () =>{

    beforeEach(() =>{
        cy.visit('/LoginPage.html')
    })

    it('Login Test', () => {
        cy.login('admin', 'password')
    });

    it('Schedule Appointment', () => {
        cy.login('admin', 'password')
        cy.get('a').contains('Schedule Appointment').click()
        cy.url().should('include','AppointmentPage')
        cy.get('h2').contains('Schedule Appointment').should('be.visible')

        cy.enterTextByIndex(0,'John')
        cy.enterTextByIndex(1,'Smith')
        cy.enterTextByIndex(2,'j@gmail.com')
        cy.enterTextByIndex(3,'13123132')
        cy.enterTextByIndex(4,'8:00 am')
        
        cy.selectByIndex(0,1)
        cy.selectByIndex(1,4)
        cy.selectByIndex(2,11)
        cy.selectByIndex(3,0).should('have.value', '2023')

        cy.get('button').contains('Submit').click()

        cy.on('window:alert', (alert)=>{
            expect(alert).to.contain('Appointment')
        })
    });

})