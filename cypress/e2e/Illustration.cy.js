describe( '"Illustration" section', () => {
    beforeEach (() => {
        cy.visit ('https://relay.prototyp.digital/category/illustration')

    })

    it('Clicking on the card redirects to the detail page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button redirects to the external page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').contains('Visit').click();
        cy.origin('https://samyhalim.myportfolio.com/copy-of-work', () => {
            cy.url().should('include', 'https://samyhalim.myportfolio.com/vivid-characters');
        })

    })

    it('"Illustration" section link leads to the previous page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Illustration').click();
        cy.url().should('include','category/illustration');

    })

    it('Category link in the card description leads to the "Illustration"', () => {
        cy.get('[href="/category/illustration"]').first().click();
        cy.url().should('include', '/category/illustration');

     })

     it ('Verifies each card has in description "by PROTOTYP"', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first().click();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        cy.get('.css-153o6lq').should('exist'); 
        cy.get('.css-18b7gb6').should('exist'); 
      });

      //Negative test

      it('The “Illustration” section should not contain articles from any other section', () => {
        cy.visit('https://relay.prototyp.digital/category/illustration');
        cy.get('.css-8ky4nb').each(($el) => {
            expect($el.text()).to.include('Illustration');
        })
    })
    

})