describe('"Graphic design" section test', () => {
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/category/graphic-design');
    })

    it('Opens detail page on card click', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button opens external site', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-scukn3').contains('Visit').should('have.attr','href');

    })

    it('"Graphic design" link returns to the previous page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Graphic design').click();
        cy.url().should('include', 'category/graphic-design');
    })

    it('Category link under card works', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            cy.wrap($el).click();
            cy.url().should('include', '/category/graphic-design');
            })
         })   

    it('Each card has "by PROTOTYP" in description', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');
    })

    it('Checks header and footer consistency', () => {
        cy.checkHeaderFooter();
    })

    //Negative test

    it('Only "Graphic design" articles are listed', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
            const text = $el.text();
            expect(text).to.include('Graphic design');
            expect(text).not.to.include('Websites');
            expect(text).not.to.include('Product Design');
            expect(text).not.to.include('Illustration');
            expect(text).not.to.include('Architecture');
            expect(text).not.to.include('Branding');
          })
        })

    })
