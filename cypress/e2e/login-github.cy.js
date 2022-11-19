/* eslint-disable no-undef */
describe('Navigate Page Home to Page SignIn Github', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
  })

  it('navigate singIn github', () => {
    cy.get('button').contains('conectar com Github').click()

    cy.url().should('include', '/api/auth/signin')

    cy.get('button').contains('Sign in with GitHub')
  })

  it('singIn github', () => {
    cy.get('button[type="submit"]').click()
    cy.wait(500)
    // cy.get('button[type="submit"]').click()

    cy.get('p').contains('Sign in to GitHub to continue to Ignite Lab Develop')

    cy.get('input[name="login"]').type(Cypress.env('GITHUB_EMAIL'), {
      force: true,
    })

    cy.get('input[name="password"]').type(Cypress.env('GITHUB_PASSWORD'), {
      force: true,
    })

    Cypress.Cookies.defaults({
      preserve: [
        'next-auth.session-token',
        'next-auth.callback-url',
        'next-auth.csrf-token',
      ],
    })

    cy.get('input[type="submit"]').click()

    cy.wait(500)

    // cy.visit(
    //   'http://localhost:3000/event/lesson/padronizando-mensagens-de-commit-do-git',
    // )
  })
})
