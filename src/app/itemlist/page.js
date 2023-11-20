import Price from "./price";

async function cartItem() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page(){
    let product = await cartItem();
    return (
        <div>
            {
                product.map(item=>(
                    <div key={item.id}>
                        <h3>Item Name: {item.title}</h3>
                        <Price money={item.price}/>
                    </div>
                    
                ))
            }
        </div>
    )
}
