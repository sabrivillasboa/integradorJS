const products= [{
    nombre: 'collar',
    precio: 1000,
    imagen: "https://joyasgabena.com/wp-content/uploads/2021/08/Cadena-Collar-Ala-Plata-925-600x600.jpg"
},{
    nombre: 'pulsera',
    precio: 800,
    imagen: "https://stylewatch.vtexassets.com/arquivos/ids/217593-500-auto?v=637938484107500000&width=500&height=auto&aspect=true"
},{
    nombre: 'anillo',
    precio: 600,
    imagen: "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2021/06/24/16245456686072.jpg"
},{
    nombre: 'aros',
    precio: 500,
    imagen: "https://stylewatch.vtexassets.com/arquivos/ids/208602/Aros_Swarovski_5085608_01.jpg?v=637787986431430000"
}]


const parseProducts= localStorage.setItem('products', JSON.stringify(products));

const inputCard= document.querySelector('input');
const btn= document.getElementById('btn-find');
const cardProduct= document.getElementById('card-product');
const imgProduct= document.getElementById('img-product');
const nameProduct= document.getElementById('name-product');
const priceProduct = document.getElementById('price-product');


btn.addEventListener('click', (e) =>{
    const inputValue= inputCard.value;
    productFind = products.find((product) => product.nombre == inputValue)
    if(!productFind){
        alert('Ingresa un producto valido');
        inputCard.value= '';
        imgProduct.removeChild(imgProduct.firstChild);
        cardProduct.removeChild(nameProduct);
        cardProduct.removeChild(priceProduct);
    }else{
        const imagen= document.createElement('img');
        imagen.setAttribute('src',productFind.imagen);
        imgProduct.appendChild(imagen);
        imgProduct.removeChild(imgProduct.firstChild);
        nameProduct.innerText = productFind.nombre;
        priceProduct.innerText = `$ ${productFind.precio}`;
        inputCard.value= '';
    };
})