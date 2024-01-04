describe('get api test', ()=>{

    require('chai')
    
    it('test', ()=>{

        cy.request('https://alexwohlbruck.github.io/cat-facts/').then((response)=>{

            expect(response.statusCode).to.eq(200)
        })

    })


})