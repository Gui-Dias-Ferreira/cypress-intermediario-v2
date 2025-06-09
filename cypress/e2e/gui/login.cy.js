describe("Login", () => {
  it("successfully", () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  

    // cy.visit('/')
    // cy.get('[data-qa-selector = "login_field"]')
    //   .type(Cypress.env("user_name"))
    // cy.get('[data-qa-selector="password_field"]')
    //   .type(Cypress.env("user_password"))
    // cy.get('[data-qa-selector="sign_in_button"]')
    //   .click()
    // cy.get('[data-qa-selector="welcome_title_content"]').should('be.visible')
  });
});
