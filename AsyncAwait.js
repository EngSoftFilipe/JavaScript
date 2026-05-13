async function getProduct(){
    try{
        const answer = await fetch("https://fakestoreapi.com/products/1");
        const product = await answer.json();
        console.log(`Nome do produto: ${product.id}\nID: ${product.id}\nPreço: R$ ${product.price}`);
    }

    catch(error){
        console.log("Deu erro aqui, presta atenção!", error);  
    }
}
getProduct();