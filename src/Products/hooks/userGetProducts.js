
import {getProducts} from "../utils";
import { useEffect, useState } from "react";


export function useGetProducts (){
    const [products, setProducts] = useState([]);
    const [error,setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                setLoading(true);
                const result= await getProducts();
                setProducts(result);
                setLoading(false);
            }
    catch(error){
        setError(`Error: ${error.message}`);
        setLoading(false);
    }
            }
            fetchProducts();
        }, []);
        return {products,error,loading}
    }
