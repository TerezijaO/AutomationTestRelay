describe( '"Architecture" section test', () => {
    beforeEach (() => {
        cy.visit ('https://relay.prototyp.digital/category/architecture')

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

    it('"Architecture" link returns to section page', () => {
        cy.get('[href*="/article/"]').first().click();
        // Clicking on the "Architecture" link on the detail page to return.
        cy.get('.css-1w4tnhi').contains('Architecture').click();
        //Verify that we are back on the "Architecture" page.
        cy.url().should('include','category/architecture');

    })

    it('Category link under card works', () => {
        // Each card has a category label - clicking it should return to the same category.
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            cy.wrap($el).click();
            //Confirming that we are on the right page (Architecture).
            cy.url().should('include', '/category/architecture');
            })
     })


     it ('Each card has "by PROTOTYP" in description', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first().should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        //Checking if the footer and the header stays the same while going trough page, there is a command for this test in the support.
        cy.checkHeaderFooter();
      })

      //Negative test
    
    it('Only "Architecture" articles are listed', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
          const text = $el.text();
           // Checking that the category name under each card is strictly "Architecture", if any other category occurs test should fail.
          expect(text).to.eq('Architecture');
          
        })
      })
      


})