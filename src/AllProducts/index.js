// import './index.css';

// const products = [
//     { id: 1, name: 'Teva Sneakers', price: '$89.0', image: 'https://via.placeholder.com/150' },
//     { id: 2, name: 'City Bag', price: '$49.0', image: 'https://via.placeholder.com/150' },
//     { id: 3, name: 'Earrings for Women', price: '$29.0', image: 'https://via.placeholder.com/150' },
//     { id: 4, name: 'Ribbed Beanie Group', price: '$39.0 - $59.0', image: 'https://via.placeholder.com/150' },
//     { id: 5, name: 'Avalon Bloom Cotton', price: '$69.0', image: 'https://via.placeholder.com/150' },
//     { id: 6, name: 'Fashion Glasses', price: '$29.0', image: 'https://via.placeholder.com/150' },
//     { id: 7, name: 'Leather Shopper Bag', price: '$89.0', image: 'https://via.placeholder.com/150' },
//     { id: 8, name: 'Leather Convertible', price: '$59.0', image: 'https://via.placeholder.com/150' },
//   ];
// function AllProducts(){
//     return(
//         <div>
//              <div className="popular-products">
//       <h2>Popular Products</h2>
//       <div className="product-tabs">
//         <button className="tab active">New Arrivals</button>
//         <button className="tab">Featured</button>
//         <button className="tab">Onsale</button>
//       </div>
//       <div className="product-grid">
//         {products.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       <button className="load-more">LOAD MORE</button>
//         </div>
//         </div>
//         </div>
//     );
// }

// export default AllProducts;