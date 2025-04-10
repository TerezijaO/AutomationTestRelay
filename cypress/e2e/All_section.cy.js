describe('"All" section should show products from all categories', () => {
    beforeEach( () => {
        cy.visit ('https://relay.prototyp.digital/');

    })

     it('Checks if "All" category contains articles from all categories', () => {
        cy.get('.css-nzumy8').contains('All').click();
        cy.get('[href*="/category/"').should('have.length.greaterThan', 1);
     })

     it('Measure page load time', () => {
        const start = Date.now;
        cy.visit('https://relay.prototyp.digital/').then(() => {
        const duration = Date.now() - start;
        cy.log('Page loaded in ${duration}ms');
        })
        })

     it('Verifies that all text elements are correctly formatted', () => {
        cy.get('h1, h2, p, span').should('be.visible').and('not.be.empty');

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
        cy.get('.css-scukn3', { timeout: 10000 }).contains('Visit').click();
        cy.origin('https://www.behance.net', () => {
        cy.url().should('include', '/gallery/105545919/Canal-Brasil');
        })
      })
    

     it('Verifies the correct redirection after clicking on "Branding" section', () => {
        cy.get('.css-1e0anuh > [href="/category/branding"]').click();
        cy.url().should('include','/category/branding');

     })

     it('Verifies the correct redirection after clicking on the "All" section', () => {
        cy.get('.css-nzumy8').click();
        cy.url().should('include','https://relay.prototyp.digital/');
    })
     
     it('Correct category redirection after clicking the link under the image', () => {
        cy.get('[href*="/category/"]').first().click();
        cy.url().should('include', '/category/');

     })

     it ('Verifies each card has in description "by PROTOTYP"', () => {
        cy.get('.css-nzumy8').contains('All').click();
        cy.get(':nth-child(1) > div > .css-8ky4nb').first().click();
        cy.get(':nth-child(1) > div > .css-8ky4nb').should('include.text', 'PROTOTYP');

     })

     it('Checks header and footer consistency', () => {
        cy.get('.css-153o6lq').should('exist'); 
        cy.get('.css-18b7gb6').should('exist'); 
      })
    
//Negative test

      it('Checks if any article is authored by someone else but PROTOTYP', () => {
         cy.visit('https://relay.prototyp.digital/');
         cy.get(':nth-child(1) > div > .css-8ky4nb').each(($el) => {
           cy.wrap($el).should('contain.text', 'PROTOTYP');
         })
       })
       


})


