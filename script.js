// Array of product objects
const products = [
            {
                id: 1,
                name: "PHANTOM X",
                category: "headphones",
                price: 349,
                description: "Wireless noise-cancelling headphones with premium sound quality",
                icon: "🎧",
                badge: "BEST SELLER"
            },
            {
                id: 2,
                name: "WAVE PRO",
                category: "speakers",
                price: 599,
                description: "High-fidelity bluetooth speaker with 360° sound",
                icon: "🔊",
                badge: "NEW"
            },
            {
                id: 3,
                name: "PULSE MINI",
                category: "earbuds",
                price: 179,
                description: "True wireless earbuds with active noise cancellation",
                icon: "🎵",
                badge: "HOT"
            },
            {
                id: 4,
                name: "SONIC ELITE",
                category: "headphones",
                price: 499,
                description: "Studio-grade over-ear headphones for professionals",
                icon: "🎧",
                badge: "PRO"
            },
            {
                id: 5,
                name: "BASS BOOM",
                category: "speakers",
                price: 299,
                description: "Portable speaker with powerful bass and 20hr battery",
                icon: "🔊",
                badge: null
            },
            {
                id: 6,
                name: "AIR PODS+",
                category: "earbuds",
                price: 149,
                description: "Lightweight wireless earbuds with crystal clear sound",
                icon: "🎵",
                badge: "SALE"
            },
            {
                id: 7,
                name: "CABLE PREMIUM",
                category: "accessories",
                price: 49,
                description: "Gold-plated audio cable for audiophile-grade connection",
                icon: "🔌",
                badge: null
            },
            {
                id: 8,
                name: "STUDIO RACK",
                category: "accessories",
                price: 89,
                description: "Premium headphone stand with USB charging ports",
                icon: "📱",
                badge: null
            },
            {
                id: 9,
                name: "THUNDER SUB",
                category: "speakers",
                price: 799,
                description: "Wireless subwoofer with deep bass response",
                icon: "🔊",
                badge: "PREMIUM"
            },
            {
                id: 10,
                name: "ECHO MAX",
                category: "headphones",
                price: 429,
                description: "Premium wireless headphones with spatial audio",
                icon: "🎧",
                badge: null
            },
            {
                id: 11,
                name: "VIBE 360",
                category: "speakers",
                price: 399,
                description: "Smart speaker with voice assistant and multi-room audio",
                icon: "🔊",
                badge: null
            },
            {
                id: 12,
                name: "MINI BEATS",
                category: "earbuds",
                price: 99,
                description: "Compact wireless earbuds perfect for workouts",
                icon: "🎵",
                badge: "BUDGET"
            }
        ];

// shopping cart array

let cart =[];

// function to display all products

    function displayProducts(){
    console.log(products);
    const grid= document.getElementById('productsGrid');
    let html ='';

// loop through products array and create HTML for each
        for(let i=0; i<products.length; i++) {
            const product = products[i];

            html += `
            
                <div class="product-card">
                    ${product.badge}
                    <div class="product-icon">${product.icon}</div>
                    <div class="product-category">${product.category}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>

                <div class="product-footer">
                    <div class="product-price">$${product.price}</div>
                    <button class="add-btn" onclick="addCart(${product.id})">
                    ADD TO CART
                    </button>

                </div>
                
                
                </div>
                `;
        }
        grid.innerHTML = html;

       
}


function addToCart(productId){

    let selectedProduct = null;
    for(let i=0; i<products.length;i++){
        if(products[i].id === productId)
        {
            selectedProduct = products[i];
            break;
        }

        if(selectedProduct){

            let existingItem = null;

            for(let i=0; i<cart.length;i++){
                if(cart[i].id === productId){
                    existingItem = cart[i];
                    break;
                }
                else{
                    cart.push({
                        id:selectedProduct.id,
                        name: selectedProduct.name,
                        price: selectedProduct.price,

                    });
                }
            }
        }
    }
}






displayProducts();













//control devil is watching. 
//i see your eye. 
//stop trying to hide. your bad at It. 
//Chainsaw is waiting
//stuck in my own trap bones are cracked as my lungs collapse remember that I always come back