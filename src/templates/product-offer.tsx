import * as React from "react"

type ProductOffer = {
    id: number;
    header: string;
}

const ProductOffer = ({pageContext: {offer}}: {pageContext: {offer: ProductOffer}}) => {
    return (
        <h3>
            {offer.header}
        </h3>
    );
}
export default ProductOffer