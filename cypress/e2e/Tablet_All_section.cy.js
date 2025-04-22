describe('"All" section test', () => {
    beforeEach( () => {
        cy.viewport('ipad-mini');
        cy.visit ('https://relay.prototyp.digital/');


    })

    it('Contains articles from all categories', () => {
      cy.url().should('eq', 'https://relay.prototyp.digital/');
      const expectedCategories = ['Websites', 'Product Design', 'Illustration', 'Architecture', 'Branding', 'Graphic design'];
      cy.get('[href*="/category/"]').each(($el) => {
         const categoryText = $el.text();
         expect(expectedCategories).to.include(categoryText);
      })
  })
  

     it('Measures page load time', () => {
        cy.visit('https://relay.prototyp.digital/').window().then((win) => {
             const time = win.performance.timing;
             const loadTime = time.loadEventEnd - time.navigationStart;
             cy.log(`Load time: ${loadTime}ms`);
             expect(loadTime).to.be.lessThan(3000);
           })
       })

       
    it('Verifies that all text elements are correctly forrmated', () => {
         cy.get('.css-1nf9552').should('have.css', 'font-size', '24px');
         cy.get('.css-nzumy8').each(($el) => {
            cy.wrap($el).should('have.css', 'font-size', '12px');
         })

         cy.get(':nth-child(1) > div > .css-1m73zxv > .css-1qqgne3').each(($el) => {
            cy.wrap($el).should('have.css', 'font-size', '32px');
            })

         cy.get(':nth-child(1) > div > .css-8ky4nb').each(($el) => {
            cy.wrap($el).should('have.css', 'font-size', '12px');
         })    
        
})

            
     it('Opens correct detail page when clicking a card', () => {
        cy.get(':nth-child(1) > div > .css-1m73zxv > img').first().click();
        cy.url().should('include', 'https://relay.prototyp.digital/article');
        cy.get('img').should('be.visible');
        cy.get('.css-scukn3').contains('Visit').should('be.visible');
        cy.get('.css-1w4tnhi').should('be.visible');
        cy.get('.css-1w4tnhi').should('be.visible');
        cy.get('.css-3y6ecr > p').should('be.visible');

     })

     it ('"Visit" button leads to external redirection', () => {
      cy.get(':nth-child(1) > div > .css-1m73zxv > .css-1qqgne3').first().click();
      cy.get('.css-scukn3', { timeout: 10000 }).contains('Visit').should('have.attr','href');
               
      })
    

     it('Redirects correctly when clicking "Branding" section', () => {
        cy.get('.css-1e0anuh > [href="/category/branding"]').click();
        cy.url().should('include','/category/branding');

     })

     it('Redirects correctly to "All" section', () => {
        cy.get('.css-1e0anuh > [href="/"]').click();
        cy.url().should('include','/');
    })
     
     it('Category link under image works correctly', () => {
         cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
         cy.wrap($el).click();
         cy.url().should('include', '/category/');
         cy.go('back');
      })      
     })


     it ('Each card has "by PROTOTYP" in description', () => {        
        cy.get(':nth-child(1) > div > .css-8ky4nb').each(($el) => {
        cy.wrap($el).click().should('include.text', 'PROTOTYP');
        })
    })

     it('Checks header and footer consistency', () => {
      cy.checkHeaderFooter();
      })
    
   //Negative test

       it('Fails if any article is not authored by PROTOTYP', () => {
         cy.get(':nth-child(1) > div > .css-8ky4nb').each(($el) => {
           const author = $el.text();
           expect(author).to.include('by PROTOTYP');
           expect(author).not.to.include('Terezija');
         })
       })
       

})