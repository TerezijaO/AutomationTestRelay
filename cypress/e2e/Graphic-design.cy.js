describe('"Graphic design" section', () => {
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/category/graphic-design');
    })

    it('Clicking on the card redirects to the detail page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.url().should('include', '/article/');
    })

    it('"Visit" button redirects to the external page', () => {
        cy.get('[href*="/article/"]').eq(1).click();
        cy.get('.css-scukn3').contains('Visit').click();
        cy.origin('https://www.sothebys.com/en/', () => {
            cy.url().should('include', 'https://www.sothebys.com/en/buy/auction/2021/machine-hallucinations-space-metaverse/machine-hallucinations-space-metaverse');
        })
    })

    it('"Graphic design" section link leads to the previous page', () => {
        cy.get('[href*="/article/"]').first().click();
        cy.get('.css-1w4tnhi').contains('Graphic design').click();
        cy.url().should('include', 'category/graphic-design');
    })

    it('Category link in the card description leads to the "Graphic design"', () => {
        cy.get('[href="/category/graphic-design"]').first().click();
        cy.url().should('include', '/category/graphic-design');
    })

    it('Verifies each card has in description "by PROTOTYP"', () => {
        cy.get(':nth-child(1) > div > .css-8ky4nb').first().click();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');
    })

    it('Checks header and footer consistency', () => {
        cy.get('.css-153o6lq').should('exist');
        cy.get('.css-18b7gb6').should('exist');
    })

    //Negative test

    it('The “Graphic design” section should not contain articles from any other section', () => {
        cy.visit('https://relay.prototyp.digital/category/graphic-design');
        cy.get('.css-8ky4nb').each(($el) => {
            expect($el.text()).to.include('Graphic design');
        })
    })

    })
