describe("Registration negativ test", () => {
    it('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('Click on registration button', () => {
        cy.get("a[href='/register']").click()
    })
    it('Registration without first name', () => {
        cy.get('#first-name').type()
        cy.get('#last-name').type('Stojanovski')
        cy.get('#email').type('Stojanovski1234end@gmail.com')
        cy.get('#password').type('andrijana93')
        cy.get('#password-confirmation').type('Markoa93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration without last name', () => {
        cy.get('#first-name').type('Marko')
        cy.get('#last-name').type()
        cy.get('#email').type('Stojanovski12345end@gmail.com')
        cy.get('#password').type('Marko93')
        cy.get('#password-confirmation').type('Marko93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration without @', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').type('Stojanovski1234endgmail.com')
        cy.get('#password').clear().type('andrijana93')
        cy.get('#password-confirmation').clear().type('aMarko93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration without domain', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').clear().type('Stojanovski1234end@gmail')
        cy.get('#password').clear().type('andrijana93')
        cy.get('#password-confirmation').clear().type('Marko93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration with incorrect password less than 8 characters', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').clear().type('Stojanovski12349end@gmail.com')
        cy.get('#password').clear().type('andr93')
        cy.get('#password-confirmation').clear().type('andrijana93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration with incorrect password, 8 characters but no numbers ', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').clear().type('Stojanovski12348end@gmail.com')
        cy.get('#password').clear().type('andrijana')
        cy.get('#password-confirmation').clear().type('Marko93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration with incorrect confirmed password less than 8 characters', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').clear().type('Stojanovski12347end@gmail.com')
        cy.get('#password').clear().type('andrijana93')
        cy.get('#password-confirmation').clear().type('Mark93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration with incorrect password, 8 characters but no numbers ', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').clear().type('Stojanovski12346end@gmail.com')
        cy.get('#password').clear().type('Marko93')
        cy.get('#password-confirmation').clear().type('Marko')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
   it('Registration with incorrect password, with special characters', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').clear().type('Stojanovski123421end@gmail.com')
        cy.get('#password').clear().type('-Marko93')
        cy.get('#password-confirmation').clear().type('aMarko93')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
    })
    it('Registration without required input', () => {
        cy.get('#first-name').clear().type('Marko')
        cy.get('#last-name').clear().type('Stojanovski')
        cy.get('#email').clear().type('Stojanovski12359end@gmail.com')
        cy.get('#password').clear().type('Marko93')
        cy.get('#password-confirmation').clear().type('Marko93')
        cy.get('button').click()
    })
})