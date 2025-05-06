describe('"Websites" section test', () => {
    beforeEach (() => {
        cy.visit('https://relay.prototyp.digital/category/websites');
    })

    it('Opens detail page on card click', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button opens external site', () => {
        // Clicking the first article to access its detail view.
        cy.get('[href*="/article/"]').first().click();
        //Asserting that the "Visit" button has a external link.
        cy.get('.css-scukn3').contains('Visit').should('have.attr','href');
    })    

        
    it('"Websites" link returns to the section', () => {
        cy.get('[href*="/article/"]').first().click();
          // Clicking on the "Websites" link on the detail page to return.
        cy.get('.css-1w4tnhi').contains('Website').click();
        //Verify that we are back the "Websites" page.
        cy.url().should('include','category/websites');

    })

    it('Category link in the card description works', () => {
        // Each card has a category label - clicking it should return to the same category.
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            cy.wrap($el).click();
            //Confirming that we are on the right page (Websites).
            cy.url().should('include', '/category/websites');
            })
         }) 

     

     it ('Each card has "by PROTOTYP" in description', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first().should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        //Checking if footer and header stays the same while going trough page, there is a command for this test in the support.
        cy.checkHeaderFooter();
      });

    //Negative test

    it('Only “Website” articles are listed', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            // Checking that the category name under each card is strictly "Websites", if any other category occurs test should fail.
            const text = $el.text();
            expect(text).to.eq('Websites');
           
            })
        })    

})