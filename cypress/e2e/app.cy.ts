/* eslint-disable */

describe('Product Offer Templates', () => {
    it('should navigate to each unique product offer page', () => {
        // Visit and snapshot first product offer page
        cy.visit('http://localhost:8000/product-offers/1/')
        cy.percySnapshot('first product offer page')

        // Visit and snapshot second product offer page
        cy.visit('http://localhost:8000/product-offers/2/')
        cy.percySnapshot('second product offer page')
    })
})

// Prevent TypeScript from reading file as legacy script
export {}