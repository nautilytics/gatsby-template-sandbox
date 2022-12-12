/* eslint-disable */

// Define at the top of the spec file or just import it
function terminalLog(violations) {
    cy.task(
        'log',
        `${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
        ({ id, impact, description, nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length
        })
    )

    cy.task('table', violationData)
}

describe('Product Offer Templates', () => {
    it('should navigate to first product offer page', () => {

        // Visit and snapshot first product offer page
        cy.visit('http://localhost:8000/product-offers/1/')
        cy.injectAxe()
        cy.get('h3').contains('This is the first header in play')
        cy.checkA11y(null, null, terminalLog)
        cy.percySnapshot('first product offer page')
    })
    it('should navigate to second product offer page', () => {

        // Visit and snapshot second product offer page
        cy.visit('http://localhost:8000/product-offers/2/')
        cy.injectAxe()
        cy.get('h3').contains('This is the second header in play')
        cy.checkA11y(null, null, terminalLog)
        cy.percySnapshot('second product offer page')
    })
})

// Prevent TypeScript from reading file as legacy script
export {}