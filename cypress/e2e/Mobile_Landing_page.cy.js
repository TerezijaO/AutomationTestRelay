describe('Landing page test', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
      cy.visit('https://relay.prototyp.digital/');
      })
  
    it ('Navigates to any other page', () => {
       cy.contains('Product Design').click ();
       cy.contains('Product Design').should('exist');
    })
  
    it ('Clicking Relay logo leads to the homepage', () => {
      cy.get('.css-1nf9552').contains('Relay').click();
      cy.url().should('include', '/');
      })
    
      it ('Navigate throught pages with Next and Previuos buttons', () => {
        cy.get('.css-scukn3').contains('Next page').click();
        cy.get('[href="/?direction=previous&page=YXJyYXljb25uZWN0aW9uOjIw"]').contains('Previous page').click();
  
      })
  
    it ('Page shows max 20 cards', () => {
      cy.get('.css-18q7hyh > :nth-child(1) > div').should('have.length.lessThan', 20);
    })
  
  
      it('Clicks on every card image and title on the page', () => {
        cy.get(':nth-child(1) > div > .css-1m73zxv > img').each(($el) => {
        cy.wrap($el).click();
        cy.go('back'); 
      });
  
        cy.get(':nth-child(1) > div > .css-1m73zxv > .css-1qqgne3').each(($el) => {
        cy.wrap($el).click();
        cy.go('back'); 
      });
    });
  
  
    it ('Cards have category name and description "by PROTOTYP"', () => {
      cy.get('.css-18q7hyh').each(($img) => {
      cy.wrap($img).find(':nth-child(1) > div > .css-8ky4nb').should('exist').and('contain.text', 'PROTOTYP');
      
      })
  })
  
  
     it ('Footer link redirects to the Prototyp website', () => {
       cy.get('footer a').contains('PROTOTYP').should('have.attr', 'href', 'https://prototyp.digital');
      })
  
  
  //Negative tests
  
    it('First page has only "Next page" button', () => {
        cy.get('.css-scukn3').contains('Previous page').should('not.exist');
        })
  
    it('Last page has only "Previous page" button', () => {
      cy.visit('https://relay.prototyp.digital/?direction=next&page=YXJyYXljb25uZWN0aW9uOjc5');
      cy.get('.css-scukn3').contains('Next page').should('not.exist');
  })
  
  })