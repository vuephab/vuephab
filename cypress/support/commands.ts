declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Get DOM element by data-cy attribute
       * @example cy.getCy('tokenField')
       */
      getCy(name: string): Chainable<Element>
    }
  }
}

export function getCy(name: string) {
  return cy.get(`[data-cy=${name}]`)
}

Cypress.Commands.add('getCy', getCy)
