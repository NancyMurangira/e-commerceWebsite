// const ProductCard = ({image, title}) => {
//     return(
//         <>
//         <img src = {image} alt={`${title} profile`}/>
//         <h2>{title}</h2>
//         </>
//     )
// }

// export default ProductCard;
import React from 'react';

function ProductCard({ image, category, price, productName }) {
    return (
        <div className="product-card">
            <img src={image} alt={productName} />
            <h3>{productName}</h3>
            <p className="category">{category}</p>
            <p className="price">${price}</p>
        </div>
    );
}

export default ProductCard;