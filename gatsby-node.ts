import {resolve} from 'path';
import type { GatsbyNode } from "gatsby"

type ProductOffer = {
    id: number;
    header: string;
}

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
    const { createPage } = actions;

    // Gatsby gives us access to a GraphQL client that we can
    // use to query any GraphQL API.
    // Make a query to our server to get all the product ids
    // in our database
    // TODO - make call to Google Sheets
  //   const queryResults = await graphql(`
  //   query AllProducts {
  //     AllProducts {
  //       nodes {
  //         id
  //       }
  //     }
  //   }
  // `);

    const apiResults: ProductOffer[] = [{
        id: 1,
        header: 'This is the first header in play'
    },
        {
            id: 2,
            header: 'This is the second header in play'
        }];

    // Create a page for every single offer ID
    apiResults.forEach(offer => {
        createPage({
            path: `/product-offers/${offer.id}`, // The URL where this particular page will live
            component: resolve(`./src/templates/product-offer.tsx`),
            context: {
                offer
            }
        });
    });
};