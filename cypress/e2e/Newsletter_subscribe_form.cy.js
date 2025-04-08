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
    


    
















})
