/// <reference types = "Cypress" />

import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Set label on issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  const label = {
    name: `label-${faker.random.word()}`,
    color: '#ffaabb'
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createIssue(issue)
      .then(response => {
        cy.api_createLabel(response.body.project_id, label)
        cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
      })
  })

  it('successfully', () => {
    cy.gui_setLabelOnIssue(label)

    cy.get('.qa-labels-block').should('contain', label.name)
    cy.get('.qa-labels-block span')
      .should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
  })
})
// import { faker } from '@faker-js/faker'

// describe('Create label', () => {

//     beforeEach(() => {
//         cy.login()
//     })

//     const label = {
//         title: faker.random.words(3),
//         description: faker.random.words(5),
//         color: '#FF0000'
//     }
//     it('successfully', () => {
//         cy.visit(`root/project-1f734af1-db8b-4dcc-9b6e-d672d1f8673e/-/labels`)
//         cy.get('#new_label_link')
//           .should('be.visible')
//           .click()
        
//         cy.get('#label_title').type(label.title)
//         cy.get('#label_description').type(label.description)
//         cy.get('a[data-color="#FF0000"]').click()
//         cy.get('input[name="commit"]').click()
//         cy.visit('/root/project-1f734af1-db8b-4dcc-9b6e-d672d1f8673e/issues/')
           
        
        
//     })
// })