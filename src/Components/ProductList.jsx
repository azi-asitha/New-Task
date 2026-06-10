import ProductCard from "./ProductCard";

function ProductList(){
    const products=[
        {id:1,name:"shoes",price:3500,category:"footwear"},
        {id:2,name:"t-shirt",price:1500,category:"clothing"},
        {id:3,name:"watch",price:5000,category:"accessories"},
    ];
    return(
        <div>
            <h1>ProductList</h1>
            {products.map((product) =>(
                <ProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                />
            ))}
        </div>
    )
}
export default ProductList;