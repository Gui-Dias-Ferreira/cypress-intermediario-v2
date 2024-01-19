import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: { 
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createProject(issue.project) 
  })

  it('successfully', () => {
    cy.gui_createIssue(issue) 

    cy.get('.issue-details')
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
    project: { 
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.gui_createProject(issue.project) 
  })

  it('successfully', () => {
    cy.gui_createIssue(issue) 

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