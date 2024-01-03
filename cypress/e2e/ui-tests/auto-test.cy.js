

describe('Product', ()=>{

    describe('Auto',()=>{

        beforeEach(()=>{
            cy.visit('/LoginPage.html')
            cy.login('admin' ,'password')
        })

        it('should hover over Product & verify, auto, & mortgage is visible', () => {
            // cy.get("[class= 'dropdown-content']").eq(0).invoke('show').then(() => {
                
            //     cy.contains('Auto').should('be.visible').click({force: true} )
           
            // })
            cy.get(".dropdown-content").eq(0).invoke('show'); // Show the dropdown content
           

            cy.contains('Auto').should('be.visible');

            
        //     cy.get('.dropdown-content').eq(0).invoke('show')
        //    cy.wait(3000)

        //    cy.get('.dropdown-content >a').eq(0).invoke('removeAttr', 'target').click({force: true})
        //    cy.url().should('include', 'PersonalInfoPage.html')
        //    cy.wait(3000)
        //    cy.go('back')

        });
    })

    describe('Visa', ()=>{

    })
    describe('Mortgage', ()=>{

    })
})

