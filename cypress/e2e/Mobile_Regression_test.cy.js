describe('Regression test', () => {
    beforeEach(() => {
     cy.viewport('iphone-x');
     cy.visit('https://relay.prototyp.digital/');
     
 })

 it('"All" category has articles from all sections', () => {
     const expectedCategories = ['Branding','Websites','Product design','Illustration','Architecture','Graphic Design'];
     cy.get(':nth-child(1) > div > .css-8ky4nb > .css-1081t4c').each($el => {
     const category = $el.text();
     expect(expectedCategories).to.include(category);
     })
   })     


 it('Navigates trough sections', () => {
     cy.get('[href="/category/websites"]').click({ multiple: true });
     cy.url().should('include', '/category/websites');
     cy.go('back');

     cy.get('[href="/category/product-design"]').click({ multiple: true });
     cy.url().should('include', '/category/product-design');
     cy.go('back');

     cy.get('.css-1e0anuh > [href="/category/illustration"]').click({ multiple: true });
     cy.url().should('include', '/category/illustration');
     cy.go('back');

     cy.get('.css-1e0anuh > [href="/category/architecture"]').click({ multiple: true });
     cy.url().should('include', '/category/architecture');
     cy.go('back');

     cy.get('.css-1e0anuh > [href="/category/branding"]').click({ multiple: true });
     cy.url().should('include', '/category/branding');
     cy.go('back');

     cy.get('.css-1e0anuh > [href="/category/graphic-design"]').click({ multiple: true });
     cy.url().should('include', '/category/graphic-design');
     cy.go('back');

     cy.checkHeaderFooter();     


 }) 


 it('Verifies correct detail page opens from card click categories', () => {
     const categories = ['websites', 'product-design', 'illustration', 'architecture', 'branding', 'graphic-design'];
     categories.forEach(category => {
         cy.visit(`https://relay.prototyp.digital/category/${category}`);
         cy.get(':nth-child(1) > div > .css-1m73zxv').each(($el, $list) => {
            cy.wrap($el).click();
               
         cy.url().should('include', 'https://relay.prototyp.digital/article');
         cy.get('img').should('be.visible');
         cy.get('.css-scukn3').contains('Visit').should('be.visible');
         cy.get('.css-1w4tnhi').should('be.visible');
         cy.get('.css-3y6ecr > p').should('be.visible');
         cy.go('back');
         
       })
     })
   })
   

  it ('"Visit" button leads to external redirection', () => {
     const categories = ['websites', 'product-design', 'illustration', 'architecture', 'branding', 'graphic-design'];
     categories.forEach(category =>{
         cy.visit(`https://relay.prototyp.digital/category/${category}`);
         cy.get(':nth-child(1) > div > .css-1m73zxv').each(($el, $list) => {
         cy.wrap($el).click();

     cy.get('.css-scukn3').contains('Visit').and('have.attr', 'href');
     
     })
   })
 })

})