describe('"All" section test', () => {
    beforeEach( () => {
      // Set viewport for mobile testing.
        cy.viewport('iphone-x');
        cy.visit ('https://relay.prototyp.digital/');


    })

    it('Contains articles from all categories', () => {
      //Verifing that we are on correct URL. 
      cy.url().should('eq', 'https://relay.prototyp.digital/');
      //Checking if every category is shown, and that every category name has a link.
      const expectedCategories = ['Websites', 'Product Design', 'Illustration', 'Architecture', 'Branding', 'Graphic design'];
      cy.get('[href*="/category/"]').each(($el) => {
         const categoryText = $el.text();
         expect(expectedCategories).to.include(categoryText);
      })
  })
  

     it('Measures page load time', () => {
      //Measure time between page load start and load complete.
        cy.visit('https://relay.prototyp.digital/').window().then((win) => {
             const time = win.performance.timing;
             const loadTime = time.loadEventEnd - time.navigationStart;
             cy.log(`Load time: ${loadTime}ms`);
             expect(loadTime).to.be.lessThan(3000);
           })
       })

       
    it('Verifies that all text elements are correctly forrmated', () => {
       //Checking the font size of the "Relay" title - should be 24px.
         cy.get('.css-1nf9552').should('have.css', 'font-size', '24px');
         //Checking the font size of category names - should be 12px.
         cy.get('.css-nzumy8').each(($el) => {
            cy.wrap($el).should('have.css', 'font-size', '12px');
         })
         //Checking the size of the article title - should be 32px.
         cy.get(':nth-child(1) > div > .css-1m73zxv > .css-1qqgne3').each(($el) => {
            cy.wrap($el).should('have.css', 'font-size', '32px');
            })
         //Checking the size of the article description - should be 12px.
         cy.get(':nth-child(1) > div > .css-8ky4nb').each(($el) => {
            cy.wrap($el).should('have.css', 'font-size', '12px');
         })    
        
})

      //Verifing that after clicking on the card, detail page opens with following information:
      //image, title, "Visit" button, link that leads to the previous page and article description.    
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
       //Visit button should have link that leads to the external website.
      cy.get('.css-scukn3', { timeout: 10000 }).contains('Visit').should('have.attr','href');
               
      })
    

     it('Redirects correctly when clicking "Branding" section', () => {
        cy.get('.css-1e0anuh > [href="/category/branding"]').click();
        cy.url().should('include','/category/branding');

     })

     it('Redirects correctly to "All" section', () => {
       //User should be back on the landing page after clicking the "All" section.
        cy.get('.css-1e0anuh > [href="/"]').click();
        cy.url().should('include','/');
    })
     
     it('Category link under image works correctly', () => {
       //Checking if each link under the article works correctly, after every click user is taken back the landing page.
         cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each(($el) => {
         cy.wrap($el).click();
         cy.url().should('include', '/category/');
         cy.go('back');
         cy.url().should('eq', 'https://relay.prototyp.digital/');
      })      
     })


     it ('Each card has "by PROTOTYP" in description', () => {        
        cy.get(':nth-child(1) > div > .css-8ky4nb').each(($el) => {
        cy.wrap($el).click().should('include.text', 'PROTOTYP');
        })
    })

     it('Checks header and footer consistency', () => {
       //Checking if footer and header stays the same while going trough page, there is a command for this test in the support.
      cy.checkHeaderFooter();
      })
    
   //Negative test

       it('Fails if any article is not authored by PROTOTYP', () => {
         cy.get(':nth-child(1) > div > .css-8ky4nb').each(($el) => {
         //Asserts that the author must be "by PROTOTYP" and not by any other name. If any other name occurs, the test should fail.
           const author = $el.text();
           expect(author).to.include('by PROTOTYP');
           expect(author).not.to.include('Terezija');
         })
       })
       

})