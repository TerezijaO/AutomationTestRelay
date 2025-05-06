describe('Navigation links test', () => {
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
       
    })


    it ('Opens "Websites" section', () => {
        // Clicking on the "Websites" category link and checking the correct URL.
        cy.get('[href="/category/websites"]').click();
        cy.url().should('include', '/category/websites');
        
    })

    it ('Opens "Product Design" section', () => {
        // Clicking on the "Product Design" category link and checking the correct URL.
        cy.get('[href="/category/product-design"]').click();
        cy.url().should('include', '/category/product-design');
       
    })

    it ('Opens "Illustration" section', () => {
        // Clicking on the "Illustration" category link and checking the correct URL.
        cy.get('.css-1e0anuh > [href="/category/illustration"]').click();
        cy.url().should('include', '/category/illustration');
       
    })

    it ('Opens "Architecture" section', () => {
        // Clicking on the "Architecture" category link and checking the correct URL.
        cy.get('.css-1e0anuh > [href="/category/architecture"]').click();
        cy.url().should('include', '/category/architecture');
        
    })

    it ('Opens "Branding" section', () => {
        // Clicking on the "Branding" category link and checking the correct URL.
        cy.get('.css-1e0anuh > [href="/category/branding"]').click();
        cy.url().should('include', '/category/branding');
       
    })

    it ('Opens "Graphic Design" section', () => {
        // Clicking on the "Graphic Design" category link and checking the correct URL.
        cy.get('.css-1e0anuh > [href="/category/graphic-design"]').click();
        cy.url().should('include', '/category/graphic-design');
       
    })


  //Negative test  

    it ('Empty category test', () => {
        // Visiting a category page that has no articles and has following message: "There are currently no articles in this category".
        cy.visit('https://relay.prototyp.digital/category/design');
        cy.get('.css-18q7hyh > div > p').contains('There are currently no articles in this category');

     })

})



    
      
      
