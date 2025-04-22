describe( '"Product design" section test', () => {
    beforeEach (() => {
        cy.visit ('https://relay.prototyp.digital/category/product-design')

    })

    it('Opens detail page on card click', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button opens external site', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').contains('Visit').should('have.attr','href');

    })

    it('"Product design" link returns to the section', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-8bd45e').contains('Product Design').click();
        cy.url().should('include','category/product-design');

    })

    it('Category link in the card description works', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            cy.wrap($el).click();
            cy.url().should('include', '/category/product-design');
            })
         })

     it ('Each card has "by PROTOTYP" in description', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        cy.checkHeaderFooter();
      })

      //Negative test

      it('Only “Product Design” articles are listed', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            const text = $el.text();
            expect(text).to.include('Product Design');
            expect(text).not.to.include('Websites');
            expect(text).not.to.include('Illustration');
            expect(text).not.to.include('Graphic design');
            expect(text).not.to.include('Architecture');
            expect(text).not.to.include('Branding');
          })
        })
    

})












