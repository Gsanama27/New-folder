document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.getElementById('total-price');

    cartItems.forEach(item => {
        const decreaseBtn = item.querySelector('.quantity-btn[data-action="decrease"]');
        const increaseBtn = item.querySelector('.quantity-btn[data-action="increase"]');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-btn');
        const quantityEl = item.querySelector('.item-quantity');
        const priceEl = item.querySelector('.item-price');
        
        const updateTotalPrice = () => {
            let total = 0;
            document.querySelectorAll('.cart-item').forEach(cartItem => {
                const quantity = parseInt(cartItem.querySelector('.item-quantity').textContent);
                const price = parseInt(cartItem.querySelector('.item-price').textContent);
                total += quantity * price;
            });
            totalPriceEl.textContent = total;
        };

        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityEl.textContent);
            if (quantity > 1) {
                quantityEl.textContent = --quantity;
                updateTotalPrice();
            }
        });

        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityEl.textContent);
            quantityEl.textContent = ++quantity;
            updateTotalPrice();
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });

        updateTotalPrice();
    });
})