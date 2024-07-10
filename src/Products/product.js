import React, { useState } from 'react';
import{useGetProducts} from './hooks/userGetProducts'
import ProductCard from "../Atom/ProductCard";
import Search from '../Search';
import './product.css';

function Products() {
    const { products, error, loading } = useGetProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const handleSearch = (searchResults) => {
        setFilteredProducts(searchResults);
    };
    
    const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;
    
    return (
        <div className="container">
            <Search onSearch={handleSearch} />
            <h1>Popular Products</h1>
            <div className='product-grid'>
                {loading && <div className="loading">Loading products ...</div>}
                {error && <div className="error">{error}</div>}
                {displayProducts.length > 0 ? displayProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        category={product.category}
                        price={product.price}
                        productName={product.title}
                    />
                )) : !loading && <div className="error">No products found</div>}
            </div>
        </div>
    )
}

export default Products;