// Contoh data produk
const products = {
    "Kangkung": {
        image: "image/kangkung.png",
        description: "Kangkung segar yang diproduksi dengan baik"
    },
    "Paving Block": {
        image: "image/pavingblock.png",
        description: "Paving block yang kuat dan tahan lama"
    },
    "Bawang Merah": {
        image: "image/bawangmerah.png",
        description: "Bawang merah berkualitas tinggi"
    },
    "Tomat": {
        image: "image/tomat.png",
        description: "Tomat segar dan manis"
    },
    "Bayam": {
        image: "image/bayam.png",
        description: "Bayam segar yang berkualitas"
    },
    "Pupuk": {
        image: "image/pupuk.png",
        description: "Pupuk yang berkualitas"
    },
    "Cabe": {
        image: "image/cabe.png",
        description: "Cabe segar dan berkualitas"
    },
    "Terong": {
        image: "image/terong.png",
        description: "Terong segar dan berkualitas"
    },
    // Tambahkan lebih banyak produk sesuai kebutuhan
};

function updateProduct(productName) {
    const product = products[productName];
    if (!product) return;

    const productImage = document.getElementById('productImage');
    const productNameEl = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');

    productImage.src = product.image;
    productImage.alt = productName;
    productNameEl.textContent = productName;
    productDescription.textContent = product.description;

    // Update active button
    document.querySelectorAll('.product-button').forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.product-button[onclick="updateProduct('${productName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize the first product as active
window.addEventListener('DOMContentLoaded', () => updateProduct('Kangkung'));