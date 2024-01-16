import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    const issue = {
        name_project: "project-33a2ac5a-8fe2-4bec-bd91-9814d8c9be0c",
        title: faker.random.words(5),
        description: faker.random.words(5)
    }

    cy.gui_createIssue(issue)

    
    cy.get('.detail-page-description')
        .should('contain', issue.title)
        .and('contain', issue.description)
  })
})


/** EXEMPLO DO INSTRUTOR NO CURSO 
 import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: { AQUI ELE CRIOU UM NOVO PROJETO, EU USEI UM PROJETO JÁ CRIADO
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.login()
    cy.gui_createProject(issue.project) CRIOU PROJETO
  })

  it('successfully', () => {
    cy.gui_createIssue(issue) CRIOU A ISSUE PARA O PROJETO

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})


cypress/support/ Criou esse comando.
Cypress.Commands.add('gui_createIssue', issue => {
  cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

  cy.get('.qa-issuable-form-title').type(issue.title)
  cy.get('.qa-issuable-form-description').type(issue.description)
  cy.contains('Submit issue').click()
})
 */