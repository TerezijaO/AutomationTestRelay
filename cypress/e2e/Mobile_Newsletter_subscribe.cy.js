describe('Newsletter subscribe form test', () => {
    beforeEach(() => {
        cy.viewport('iphone-x');
        cy.visit('https://relay.prototyp.digital/');
        cy.get('.css-1qnnexf').scrollIntoView();
    })

    it('Fills in your name', () => {
        cy.get('#mce-EMAIL').type('Terezija');

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

    it('Shows error when submitting empty name, invalid email and unchecked consent', () => {
        cy.get('#mce-FNAME').clear();  
        cy.get('#mce-EMAIL').type('invalidemail');
        cy.get('#gdpr_70020').uncheck();
        cy.get('#mc-embedded-subscribe-form').should('have.attr', 'action').and('include', 'https://digital.us19.list-manage.com/subscribe/post?u=b5e6f2147bd0d589ab2183654&id=73a0b2fd84');
})
          

})