describe('Navigation links test', () => {
    let header, footer;
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
        header = cy.get('.css-153o6lq');
        footer = cy.get('.css-18b7gb6');
    });


    it ('Click on "Websites" section link', () => {
        cy.get('[href="/category/websites"]').click();
        cy.url().should('include', '/category/websites');
        header.should('exist');
        footer.should('exist');
    });

    it ('Click on "Product Design" section link', () => {
        cy.get('[href="/category/product-design"]').click();
        cy.url().should('include', '/category/product-design');
        header.should('exist');
        footer.should('exist');
    });

    it ('Click on "Illustration" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/illustration"]').click();
        cy.url().should('include', '/category/illustration');
        header.should('exist');
        footer.should('exist');
    });

    it ('Click on "Architecture" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/architecture"]').click();
        cy.url().should('include', '/category/architecture');
        header.should('exist');
        footer.should('exist');
    });

    it ('Click on "Branding" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/branding"]').click();
        cy.url().should('include', '/category/branding');
        header.should('exist');
        footer.should('exist');
    });

    it ('Click on "Graphic Design" section link', () => {
        cy.get('.css-1e0anuh > [href="/category/graphic-design"]').click();
        cy.url().should('include', '/category/graphic-design');
        header.should('exist');
        footer.should('exist');
    });

});

