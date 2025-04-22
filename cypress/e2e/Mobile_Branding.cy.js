describe( '"Branding" section test', () => {
    beforeEach (() => {
        cy.viewport('iphone-x');
        cy.visit ('https://relay.prototyp.digital/category/branding')

    })

    it('Opens detail page on card click', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button opens the external page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').contains('Visit').should('have.attr','href');

    })

    it('"Branding" link returns to section page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Branding').click();
        cy.url().should('include','category/branding');

    })

    it('Category link under card works', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            cy.wrap($el).click();
            cy.url().should('include', '/category/branding');
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

      it('Only "Branding" articles are listed', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            const text = $el.text();
            expect(text).to.include('Branding');
            expect(text).not.to.include('Websites');
            expect(text).not.to.include('Product Design');
            expect(text).not.to.include('Illustration');
            expect(text).not.to.include('Architecture');
            expect(text).not.to.include('Graphic Design');
          })
        })
    

})