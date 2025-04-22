describe( '"Architecture" section test', () => {
    beforeEach (() => {
        cy.visit ('https://relay.prototyp.digital/category/architecture')

    })

    it('Opens detail page on card click', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button opens external site', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').contains('Visit').should('have.attr','href');

    })

    it('"Architecture" link returns to section page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Architecture').click();
        cy.url().should('include','category/architecture');

    })

    it('Category link under card works', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            cy.wrap($el).click();
            cy.url().should('include', '/category/architecture');
            })
     })


     it ('Each card has "by PROTOTYP" in description', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        cy.checkHeaderFooter();
      });

      //Negative test
    
    it('Only "Architecture" articles are listed', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
          const text = $el.text();
          expect(text).to.include('Architecture');
          expect(text).not.to.include('Websites');
          expect(text).not.to.include('Product Design');
          expect(text).not.to.include('Illustration');
          expect(text).not.to.include('Branding');
          expect(text).not.to.include('Graphic Design');
        })
      })
      





})