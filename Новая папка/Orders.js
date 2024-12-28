const products = [
    { id: 1, name: 'Biodegradable paper bags and packaging', price: 0.69, image: 'https://www.europaket.ru/wp-content/uploads/2018/10/Bread-Paper-Bag.png' },
    { id: 2, name: 'Biodegradable cups', price: 0.16, image: 'https://avatars.mds.yandex.net/i?id=9ca415ac10ecad7419262fedbf5de94d_l-5228562-images-thumbs&n=13' },
    { id: 3, name: 'Biodegradable cutlery (forks, spoons and knives)', price: 0.30, image: 'https://m.media-amazon.com/images/I/81ElZ6H780L.jpg' },
    { id: 4, name: 'Biodegradable straws', price: 0.10, image: 'https://ligabarshop.ru/upload/iblock/c89/jgu08qik6k9d66qy64p5cam1wpu3ytj9.jpg' },
];

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const totalPrice = document.getElementById('total-price');
let cart = [];

function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 product-card';
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price} €</p>
                    <button onclick="addToCart(${product.id})" class="btn btn-add-to-cart">
                        <i class="fas fa-shopping-cart"></i> Add to cart
                    </button>
                </div>
            </div>`;
        productList.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price} €`;
        cartList.appendChild(listItem);
        total += product.price;
    });

    totalPrice.textContent = total;
}

function clearCart() {
    cart = [];
    updateCart();
}

document.getElementById('clear-cart').addEventListener('click', clearCart);


displayProducts();