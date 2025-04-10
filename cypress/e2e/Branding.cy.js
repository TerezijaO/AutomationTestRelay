describe( '"Branding" section', () => {
    beforeEach (() => {
        cy.visit ('https://relay.prototyp.digital/category/branding')

    })

    it('Clicking on the card redirects to the detail page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button redirects to the external page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').contains('Visit').click();
        cy.origin('https://www.behance.net/', () => {
            cy.url().should('include', 'https://www.behance.net/gallery/105545919/Canal-Brasil');
        })

    })

    it('"Branding" section link leads to the previous page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Branding').click();
        cy.url().should('include','category/branding');

    })

    it('Category link in the card description leads to the "Branding"', () => {
        cy.get('[href="/category/branding"]').first().click();
        cy.url().should('include', '/category/branding');

     })

     it ('Verifies each card has in description "by PROTOTYP"', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first().click();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        cy.get('.css-153o6lq').should('exist'); 
        cy.get('.css-18b7gb6').should('exist'); 
      })

      //Negative test

      it('The “Branding” section should not contain articles from any other section', () => {
        cy.visit('https://relay.prototyp.digital/category/branding');
        cy.get('.css-8ky4nb').each(($el) => {
            expect($el.text()).to.include('Branding');
        })
    })
    

})