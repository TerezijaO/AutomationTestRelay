describe('Navigation links test', () => {
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
       
    })


    it ('Opens "Websites" section', () => {
        cy.get('[href="/category/websites"]').click();
        cy.url().should('include', '/category/websites');
        
    })

    it ('Opens "Product Design" section', () => {
        cy.get('[href="/category/product-design"]').click();
        cy.url().should('include', '/category/product-design');
       
    })

    it ('Opens "Illustration" section', () => {
        cy.get('.css-1e0anuh > [href="/category/illustration"]').click();
        cy.url().should('include', '/category/illustration');
       
    })

    it ('Opens "Architecture" section', () => {
        cy.get('.css-1e0anuh > [href="/category/architecture"]').click();
        cy.url().should('include', '/category/architecture');
        
    })

    it ('Opens "Branding" section', () => {
        cy.get('.css-1e0anuh > [href="/category/branding"]').click();
        cy.url().should('include', '/category/branding');
       
    })

    it ('Opens "Graphic Design" section', () => {
        cy.get('.css-1e0anuh > [href="/category/graphic-design"]').click();
        cy.url().should('include', '/category/graphic-design');
       
    })


  //Negative test  

    it ('Empty category test', () => {
        cy.visit('https://relay.prototyp.digital/category/design');
        cy.get('.css-18q7hyh > div > p').contains('There are currently no articles in this category');

     })

})



    
      
      
