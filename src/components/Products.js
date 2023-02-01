import React,{useState,useEffect} from 'react'
import './Products.css'



const Products = () => {

    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() =>{
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
        }
        getProducts();
    },[]);

    const Loading = () => {
        return(
            <>
                Loading....
            </>
        )
    }

    const ShowProducts = () => {

        return(
            <>
            <div className= "product-list">
              <ul>
                <li>All Products</li>
                <li>Coats & Jackets</li>
                <li>Dressed</li>
                <li>Playsuit</li>
                <li>Short</li>
                <li>Skirt</li>
                <li>T-Shirt</li>
              </ul>
            </div>
            {filter.map((product)=>{
                return(
                    <>
                    <div className="col-md-3">
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.image} class="card-img-top" alt = {product.title}/>
                            <div class="card-body">
                                <h5 class="card-body">{product.title}</h5>
                                <p class="card-text"></p>
                                {product.price}
                                <p/>
                                <a href="#" class="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    </>
                )
                })}
                </>
        );
            };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className='row'>
            <div className='col-12'>
               <h1 className='row-name'>Our Premium Collection</h1> 
            </div>
        </div>
        <div className="Products">
            {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>
    </div>
  );
}

export default Products;