describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})



// TESTE CRIADO ANTES DE SEGUIR O EXEMPLO DO INSTRUTOR
// describe('Testando a funcionalidade Login', () => {
//   it('visitando e realizando login', () => {
//     cy.visit('/')
//     cy.contains('Sign in')
//     cy.get('#user_login').type(Cypress.env("user_name"))
//     cy.get('#user_password').type(Cypress.env("user_password"))
//     cy.get('#new_user > .submit-container > .btn').click()
//     cy.contains('Welcome to GitLab')
//   })
// })