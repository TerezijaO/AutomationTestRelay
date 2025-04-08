describe('Newsletter subscribe form', () => {
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
        cy.get('footer').scrollIntoView();
    })

    it('Fills in your name', () => {
        cy.get('input[name="Your name"]').type('Terezija');

    })

    it('Fills in your email', () => {
        cy.get('input[email="Your e-mail"]').type('test@gmail.com');

    })

    it('Checks the checkbox', () => {
        cy.get('input[checkbox="Yes, I agree"]').check({ forse : true });

    })

    it('Clicks the "Subscribe" button', () => {
        cy.get().contains('Subscribe').click();

    })
    


    
















})
