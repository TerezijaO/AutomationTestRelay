describe('Landing Page Test', () => {
  beforeEach(() => {
    cy.visit('https://relay.prototyp.digital/');
    });

  it ('Navigate to any other page then homepage', () => {
     cy.visit('https://relay.prototyp.digital/');
     cy.contains('Product Design').click ();
     cy.contains('Product Design').should('exist');
  });

  it ('Clicking Relay logo leads to the homepage', () => {
    cy.get('.css-1nf9552').contains('Relay').click();
    cy.url().should('eq', 'https://relay.prototyp.digital/');
    });
  
  it ('Navigate throught pages with Next and Previuos buttons', () => {
    cy.get('.css-scukn3').contains('Next page').click();
    cy.get('[href="/?direction=previous&page=YXJyYXljb25uZWN0aW9uOjIw"]').contains('Previous page').click();

    });

  it ('Number of the cards on the page', () => {
    cy.get('img[src]').should('have.length.at.most', 20);
  });

  it ( 'Card and title elements exist and are clickable', () => {
    cy.get(':nth-child(1) > div > .css-1m73zxv').should('be.visible').click();
    
});

  it ('Description indicating the section and posted by PROTOTYP', () => {
    cy.get('.css-18q7hyh').each(($img) => {
    cy.get('.css-18q7hyh > :nth-child(1) > div').should('exist').and('contain.text', 'PROTOTYP');
    cy.get('.css-18q7hyh > :nth-child(2) > div').should('exist').and('contain.text', 'PROTOTYP');
       
    });
});

it ('Footer link redirects to the Prototyp website', () => {
  cy.get('footer a').contains('PROTOTYP').click();
  cy.origin('https://prototyp.digital', () => {
  cy.url().should('include', 'https://prototyp.digital');
});
});

    
})