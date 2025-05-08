describe('Regression test', () => {
       beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
        
    })

    it('"All" category has articles from all sections', () => {
      // Define expected category names.
        const expectedCategories = ['Branding','Websites','Product design','Illustration','Architecture','Graphic Design'];
        // Go through each category name under the cards and verify it matches one of the expected categories.
        cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each($el => {
        const category = $el.text();
        expect(expectedCategories).to.include(category);
        })
      })     


    it('Navigates through sections', () => {
      // Click on each section link, check the URL, then go back to the homepage and confirm the return was successful.
        cy.get('[href="/category/websites"]').click({ multiple: true });
        cy.url().should('include', '/category/websites');
        cy.go('back');
        cy.url().should('eq', 'https://relay.prototyp.digital/');

        cy.get('[href="/category/product-design"]').click({ multiple: true });
        cy.url().should('include', '/category/product-design');
        cy.go('back');
        cy.url().should('eq', 'https://relay.prototyp.digital/');

        cy.get('.css-1e0anuh > [href="/category/illustration"]').click({ multiple: true });
        cy.url().should('include', '/category/illustration');
        cy.go('back');
        cy.url().should('eq', 'https://relay.prototyp.digital/');

        cy.get('.css-1e0anuh > [href="/category/architecture"]').click({ multiple: true });
        cy.url().should('include', '/category/architecture');
        cy.go('back');
        cy.url().should('eq', 'https://relay.prototyp.digital/');

        cy.get('.css-1e0anuh > [href="/category/branding"]').click({ multiple: true });
        cy.url().should('include', '/category/branding');
        cy.go('back');
        cy.url().should('eq', 'https://relay.prototyp.digital/');

        cy.get('.css-1e0anuh > [href="/category/graphic-design"]').click({ multiple: true });
        cy.url().should('include', '/category/graphic-design');
        cy.go('back');
        cy.url().should('eq', 'https://relay.prototyp.digital/');
        // Command to check that header and footer are consistent.
        cy.checkHeaderFooter();     

   
    }) 


    it('Verifies correct detail page opens from card click categories', () => {
        const categories = ['websites', 'product-design', 'illustration', 'architecture', 'branding', 'graphic-design'];
        categories.forEach(category => {
          // Visit each category page.
            cy.visit(`https://relay.prototyp.digital/category/${category}`);
             // For each card, click and verify detail page content.
            cy.get(':nth-child(1) > div > .css-1m73zxv').each(($el, $list) => {
               cy.wrap($el).click();
                  
            cy.url().should('include', 'https://relay.prototyp.digital/article');
            cy.get('img').should('be.visible');
            cy.get('.css-scukn3').contains('Visit').should('be.visible');
            cy.get('.css-1w4tnhi').should('be.visible');
            cy.get('.css-3y6ecr > p').should('be.visible');
             // Go back to the category page to repeat test for the next card.
            cy.go('back');
            
          })
        })
      })
      

     it ('"Visit" button leads to external redirection', () => {
        const categories = ['websites', 'product-design', 'illustration', 'architecture', 'branding', 'graphic-design'];
        categories.forEach(category =>{
           // Visit each category page.
            cy.visit(`https://relay.prototyp.digital/category/${category}`);
            // For each card, click and verify that the "Visit" button has an external link.
            cy.get(':nth-child(1) > div > .css-1m73zxv').each(($el, $list) => {
            cy.wrap($el).click();

        cy.get('.css-scukn3').contains('Visit').and('have.attr', 'href');
        
        })
      })
    })

})