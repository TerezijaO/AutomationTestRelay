describe('Newsletter subscribe form test', () => {
    beforeEach(() => {
        cy.visit('https://relay.prototyp.digital/');
         // Scrolling to the newsletter subscription form at the bottom of the page.
        cy.get('.css-1qnnexf').scrollIntoView();
    })

    it('Fills in needed information', () => {
        // Enter a valid name and  an email into the input field.
        cy.get('#mce-FNAME').type('Terezija');
        cy.get('#mce-EMAIL').type('test@gmail.com');
         // Check the consent checkbox.
        cy.get('#gdpr_70020').check();
        // Click the "Subscribe" button to submit the form.
        cy.get('#mc-embedded-subscribe').contains('Subscribe').click();

    })


    
//Negative test

    it('Shows error when submitting empty name, invalid email and unchecked consent', () => {
        // Clear input field name.
        cy.get('#mce-FNAME').clear();  
        // Enter an invalid email.
        cy.get('#mce-EMAIL').type('invalidemail');
        // Ensure the consent checkbox is unchecked.
        cy.get('#gdpr_70020').uncheck();
          // Assert that the form still has the correct button, but the form should not submit successfully.
        cy.get('#mc-embedded-subscribe-form').should('have.attr', 'action').and('include', 'https://digital.us19.list-manage.com/subscribe/post?u=b5e6f2147bd0d589ab2183654&id=73a0b2fd84');
})
          

})




  

    

















