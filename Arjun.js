// Arjun.js - Complete Inventory Database for Android & iPhones
const inventoryProducts = [
    // --- APPLE IPHONES ---
    {
        name: "Apple iPhone 15 Pro Max (Natural Titanium, 256 GB)",
        price: 9999,
        originalPrice: 159900,
        discount: "93% off",
        rating: "4.8 ★",
        reviews: "9,120",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=300"
    },
    {
        name: "Apple iPhone 15 (Black, 128 GB)",
        price: 7999,
        originalPrice: 79900,
        discount: "90% off",
        rating: "4.6 ★",
        reviews: "12,450",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300"
    },
    {
        name: "Apple iPhone 14 (Blue, 128 GB)",
        price: 6999,
        originalPrice: 69900,
        discount: "88% off",
        rating: "4.5 ★",
        reviews: "18,340",
        image: "https://images.unsplash.com/photo-1663499482523-1c0c1ba4ceef?w=300"
    },
    {
        name: "Apple iPhone 13 (Starlight, 128 GB)",
        price: 5999,
        originalPrice: 59900,
        discount: "89% off",
        rating: "4.5 ★",
        reviews: "45,210",
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c2?w=300"
    },

    // --- ANDROID PHONES (VIVO, SAMSUNG, ONEPLUS, ETC.) ---
    {
        name: "vivo V60e (Elite Purple, 256 GB)",
        price: 849,
        originalPrice: 29999,
        discount: "97% off",
        rating: "4.5 ★",
        reviews: "8,385",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300"
    },
    {
        name: "vivo V50 5G (Rose Red, 128 GB)",
        price: 899,
        originalPrice: 36999,
        discount: "98% off",
        rating: "4.5 ★",
        reviews: "6,267",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
    },
    {
        name: "Samsung Galaxy S24 Ultra (Titanium Gray, 256 GB)",
        price: 9499,
        originalPrice: 134999,
        discount: "92% off",
        rating: "4.8 ★",
        reviews: "14,200",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300"
    },
    {
        name: "OnePlus 12 (Flowy Emerald, 256 GB)",
        price: 6499,
        originalPrice: 64999,
        discount: "90% off",
        rating: "4.7 ★",
        reviews: "11,500",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300"
    },
    {
        name: "Realme GT 6T (Fluid Silver, 256 GB)",
        price: 2499,
        originalPrice: 32999,
        discount: "92% off",
        rating: "4.4 ★",
        reviews: "5,410",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300"
    },
    {
        name: "Xiaomi 14 Pro (Titanium Black, 512 GB)",
        price: 7499,
        originalPrice: 99999,
        discount: "92% off",
        rating: "4.6 ★",
        reviews: "7,830",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300"
    }
];

// Website load hote hi inventory ko HTML mein load karne ka function
document.addEventListener("DOMContentLoaded", function() {
    let productGrid = document.getElementById('product-list');
    if(!productGrid) return;

    let htmlContent = "";
    inventoryProducts.forEach(product => {
        htmlContent += `
            <div class="bg-white p-3 rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                    <img src="${product.image}" class="w-full h-36 object-cover rounded-lg mb-2">
                    <h3 class="text-xs font-semibold text-gray-800 line-clamp-2">${product.name}</h3>
                    <div class="flex items-center gap-1 mt-1">
                        <span class="bg-green-700 text-white text-[10px] px-1 rounded font-bold">${product.rating}</span>
                        <span class="text-[10px] text-gray-500">(${product.reviews})</span>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-gray-400 line-through">₹${product.originalPrice}</span>
                        <span class="text-[10px] text-green-600 font-bold">${product.discount}</span>
                    </div>
                    <div class="text-sm font-black text-gray-900">₹${product.price}</div>
                    <button onclick="openAddressModal('${product.name}', ${product.price})" class="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-bold py-2 rounded shadow-sm">
                        Buy Now
                    </button>
                </div>
            </div>
        `;
    });
    productGrid.innerHTML = htmlContent;
});

// Checkout aur UPI Redirection Logic
let selectedProduct = { name: '', price: 0 };

function openAddressModal(name, price) {
    selectedProduct = { name, price };
    document.getElementById('address-modal').classList.remove('hidden');
}

function closeModals() {
    document.getElementById('address-modal').classList.add('hidden');
    document.getElementById('summary-modal').classList.add('hidden');
    document.getElementById('payment-modal').classList.add('hidden');
}

function goToSummary(e) {
    e.preventDefault();
    document.getElementById('address-modal').classList.add('hidden');
    document.getElementById('summary-product-name').innerText = selectedProduct.name;
    document.getElementById('summary-product-price').innerText = "₹" + selectedProduct.price;
    document.getElementById('summary-modal').classList.remove('hidden');
}

function goToPayment() {
    document.getElementById('summary-modal').classList.add('hidden');
    document.getElementById('payment-modal').classList.remove('hidden');
}

function payNow() {
    let upiID = "yourname@paytm"; // Yahan apni UPI ID daal dein
    let amount = selectedProduct.price;
    let note = encodeURIComponent(selectedProduct.name);
    window.location.href = `upi://pay?pa=${upiID}&pn=Store&am=${amount}&cu=INR&tn=${note}`;
}
