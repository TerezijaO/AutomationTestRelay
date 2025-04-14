describe('Newsletter subscribe form', () => {
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
        cy.get('footer').scrollIntoView();
    })

    it('Fills in your name', () => {
        cy.get('#mce-FNAME').type('Terezija');

    })

    it('Fills in your email', () => {
        cy.get('#mce-EMAIL').type('test@gmail.com');

    })

    it('Checks the checkbox', () => {
        cy.get('#gdpr_70020').check();

    })

    it('Clicks the "Subscribe" button', () => {
        cy.get('#mc-embedded-subscribe').contains('Subscribe').click();

    })
    
//Negative test

    it('Leaving the "Your name" field empty', () => {
        cy.get('#mce-FNAME').clear();
  })

     it('Entering an invalid email address', () => {
        cy.get('#mce-EMAIL').type('invalidemail');
  })

     it('Leaving the checkbox unchecked', () => {
        cy.get('#gdpr_70020').uncheck();
    })

     it('Clicking the "Subscribe" button', () => {
        cy.get('#mc-embedded-subscribe').click();   
        
   })

})

    

















