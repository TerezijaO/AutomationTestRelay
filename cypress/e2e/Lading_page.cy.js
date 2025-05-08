describe('Landing page test', () => {
  beforeEach(() => {
    cy.visit('https://relay.prototyp.digital/');
    })

  it ('Navigates to any other page', () => {
     // Click on the "Product Design" category and confirm the right redirection.
     cy.contains('Product Design').click ();
     cy.contains('Product Design').should('exist');
  })

  it ('Clicking Relay logo leads to the homepage', () => {
    // Click the Relay logo in the header and confirm redirection to the homepage.
    cy.get('.css-1nf9552').contains('Relay').click();
    cy.url().should('include', '/');
    })
  
    it ('Navigate through pages with Next and Previuos buttons', () => {
      // Click the "Next page" button to go to next page.
      cy.get('.css-scukn3').contains('Next page').click();
      // Click the "Previuos page" button return to the previuos page.
      cy.get('[href="/?direction=previous&page=YXJyYXljb25uZWN0aW9uOjIw"]').contains('Previous page').click();

    })

  it ('Page shows max 20 cards', () => {
    // Verify that the number of cards on the page is not more than 20.
    cy.get('.css-18q7hyh > :nth-child(1) > div').should('have.length.lessThan', 20);
  })


  it('Clicks card images and titles on first two pages', () => {
     // Going through all card images on the first page, click each, then go back.
    cy.get(':nth-child(1) > div > .css-1m73zxv > img').each(($el) => {
      cy.wrap($el).click();
      cy.go('back');
      cy.url().should('eq', 'https://relay.prototyp.digital/');
    });
    // Going through all card titles on the first page, click each, then go back.
    cy.get(':nth-child(1) > div > .css-1m73zxv > .css-1qqgne3').each(($el) => {
      cy.wrap($el).click();
      cy.go('back');
      cy.url().should('eq', 'https://relay.prototyp.digital/');
    });
   // Clicking the "Next page" button.
    cy.get('.css-scukn3').click();
    // Going through all card images on the second page, click each, then go back.
    cy.get(':nth-child(1) > div > .css-1m73zxv > img').each(($el) => {
      cy.wrap($el).click();
      cy.go('back');
      cy.url().should('eq', 'https://relay.prototyp.digital/?direction=next&page=YXJyYXljb25uZWN0aW9uOjE5');
    });
    // Going through all card titles on the second page, click each, then go back.
    cy.get(':nth-child(1) > div > .css-1m73zxv > .css-1qqgne3').each(($el) => {
      cy.wrap($el).click();
      cy.go('back');
      cy.url().should('eq', 'https://relay.prototyp.digital/?direction=next&page=YXJyYXljb25uZWN0aW9uOjE5');
    });
  });

  it ('Cards have category name and description "by PROTOTYP"', () => {
     // Each card should have a visible category and "by PROTOTYP" description.
    cy.get('.css-18q7hyh').each(($img) => {
    cy.wrap($img).find(':nth-child(1) > div > .css-8ky4nb').should('exist').and('contain.text', 'PROTOTYP');
    
    })
})


   it ('Footer link redirects to the Prototyp website', () => {
    // Footer should contain a link to the official Prototyp website.
     cy.get('footer a').contains('PROTOTYP').should('have.attr', 'href', 'https://prototyp.digital');
    })


//Negative tests

  it('First page has only "Next page" button', () => {
    // Ensure "Previous page" button is not visible on the first page.
      cy.get('.css-scukn3').contains('Previous page').should('not.exist');
      })

  it('Last page has only "Previous page" button', () => {
    // Directly visit the last page.
    cy.visit('https://relay.prototyp.digital/?direction=next&page=YXJyYXljb25uZWN0aW9uOjc5');
     // Ensure the "Next page" button is not visible on the last page.
    cy.get('.css-scukn3').contains('Next page').should('not.exist');
})

})







  




