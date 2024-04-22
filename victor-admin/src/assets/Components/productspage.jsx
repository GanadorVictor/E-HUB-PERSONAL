import { useEffect,useState } from "react";
import './App.css'
function AdminProductsPage(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5555/admin")
            .then((response) => response.json())
            .then((data)=>setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    
                    <li className="cont" key={product.id}>
                      
                        <div>
                            {console.log(product)}
                            <img 
                                src={product.product.image_url} 
                                alt={product.product.name}
                                className="product-image"
                            />

                            <h3>{product.product.name}</h3>
                            <p>Price: ${product.product.price}</p>
                            
                            <button>Add</button> 
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminProductsPage;