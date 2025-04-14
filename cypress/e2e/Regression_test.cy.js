describe('Regression test', () => {
    let header, footer;
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
        header = cy.get('.css-153o6lq');
        footer = cy.get('.css-18b7gb6');
    })

    it('Checks if "All" category contains articles from all categories', () => {
        cy.get('.css-nzumy8').contains('All').click();
        cy.get('[href*="/category/"').should('have.length.greaterThan', 1);
     })
    

    it ('Click on "Websites" section link', () => {
        cy.get('[href="/category/websites"]').click();
        cy.url().should('include', '/category/websites');
        cy.get('h1, h2, p, span').should('be.visible').and('not.be.empty');
        header.should('exist');
        footer.should('exist');
    })

    it ('Click on "Product Design" section link', () => {
        cy.get('[href="/category/product-design"]').click();
        cy.url().should('include', '/category/product-design');
        cy.get('h1, h2, p, span').should('be.visible').and('not.be.empty');
        header.should('exist');
        footer.should('exist');
    })

    it ('Click on "Illustration" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/illustration"]').click();
        cy.url().should('include', '/category/illustration');
        cy.get('h1, h2, p, span').should('be.visible').and('not.be.empty');
        header.should('exist');
        footer.should('exist');
    })

    it ('Click on "Architecture" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/architecture"]').click();
        cy.url().should('include', '/category/architecture');
        cy.get('h1, h2, p, span').should('be.visible').and('not.be.empty');
        header.should('exist');
        footer.should('exist');
    })

    it ('Click on "Branding" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/branding"]').click();
        cy.url().should('include', '/category/branding');
        cy.get('h1, h2, p, span').should('be.visible').and('not.be.empty');
        header.should('exist');
        footer.should('exist');
    })

    it ('Click on "Graphic Design" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/graphic-design"]').click();
        cy.url().should('include', '/category/graphic-design');
        cy.get('h1, h2, p, span').should('be.visible').and('not.be.empty');
        header.should('exist');
        footer.should('exist');
    })

    it('Verifies the correct detail page opens after clicking on the card', () => {
        cy.get(':nth-child(1) > div > .css-1m73zxv > img').first().click();
        cy.url().should('include','https://relay.prototyp.digital/article/custom-variable-type-for-canal-brasil-by-plau');
        cy.get('img').should('be.visible');
        cy.get('.css-scukn3').contains('Visit').should('be.visible');
        cy.get('.css-1w4tnhi').should('be.visible');
        cy.get('.css-1w4tnhi').should('be.visible');
        cy.get('.css-3y6ecr > p').should('be.visible');

     })

     it ('"Visit" button leads to external redirection', () => {
        cy.get(':nth-child(1) > div > .css-1m73zxv > .css-1qqgne3').first().click();
        cy.get('.css-scukn3').contains('Visit').click();
        cy.origin('https://www.behance.net', () => {
        cy.url().should('include', '/gallery/105545919/Canal-Brasil');
        });
      })



})

















