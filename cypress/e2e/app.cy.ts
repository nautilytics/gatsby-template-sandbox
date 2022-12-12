/* eslint-disable */

describe('Product Offer Templates', () => {
    it('should navigate to first product offer page', () => {

        // Visit and snapshot first product offer page
        cy.visit('http://localhost:8000/product-offers/1/')
        cy.get('h3').contains('This is the first header in play')
        cy.percySnapshot('first product offer page')
    })
    it('should navigate to second product offer page', () => {

        // Visit and snapshot second product offer page
        cy.visit('http://localhost:8000/product-offers/2/')
        cy.get('h3').contains('This is the second header in play')
        cy.percySnapshot('second product offer page')
    })
})

// Prevent TypeScript from reading file as legacy script
export {}