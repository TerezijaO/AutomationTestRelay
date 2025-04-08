describe( '"Graphic design" section', () => {
    beforeEach (() => {
        cy.visit ('https://relay.prototyp.digital/category/graphic-design')

    })

    it('Clicking on the card redirects to the detail page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button redirects to the external page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').consains('Visit').click();
        cy.origin('https://type-department.com/', () => {
            cy.url().should('include', 'https://type-department.com/collections/stefan-mader');
        })
      

    it('"Graphic design" section link leads to the previous page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Graphic design').click();
        cy.url().should('include','category/graphic-design');

    })

    it('Category link in the card description leads to the "Graphic design"', () => {
        cy.get('[href="/category/graphic-design"]').first().click();
        cy.url().should('include', '/category/graphic-design');

     })

     it ('Verifies each card has in description "by PROTOTYP"', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first().click();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        cy.get('.css-153o6lq').should('exist'); 
        cy.get('.css-18b7gb6').should('exist'); 
      });

      })
    
    })