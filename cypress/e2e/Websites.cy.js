describe('"Webites" section', () => {
    beforeEach (() => {
        cy.visit('https://relay.prototyp.digital/category/websites');
    })

    it('Clicking on the card redirects to the detail page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button redirects to the external page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').contains('Visit').click();
        cy.origin('https://eiger-extreme.mammut.com/en', () => {
            cy.url().should('include', 'https://eiger-extreme.mammut.com/en');
        })

    })

    it('"Websites" section link leads to the previous page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Website').click();
        cy.url().should('include','category/websites');

    })

    it('Category link in the card description leads to the "Websites"', () => {
        cy.get('[href="/category/websites"]').first().click();
        cy.url().should('include', '/category/websites');

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

    it('The “Website” section should not contain articles from any other section', () => {
        cy.visit('https://relay.prototyp.digital/category/websites');
        cy.get('.css-8ky4nb').each(($el) => {
            expect($el.text()).to.include('Websites');
        })

    
    })
    

})