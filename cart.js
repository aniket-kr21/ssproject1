document.addEventListener('DOMContentLoaded', function() {
    // Function to update the total for a single row
    function updateRowTotal(row) {
        const quantity = row.querySelector('.quantity').value;
        const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
        const total = row.querySelector('.total');
        const rowTotal = quantity * price;
        total.textContent = `$${rowTotal.toFixed(2)}`;
    }

    // Function to update the cart total
    function updateCartTotal() {
        const rows = document.querySelectorAll('tbody tr');
        let cartTotal = 0;
        rows.forEach(row => {
            const total = parseFloat(row.querySelector('.total').textContent.replace('$', ''));
            cartTotal += total;
        });
        document.querySelector('.cart-total').textContent = `$${cartTotal.toFixed(2)}`;
    }

    // Event listener for quantity changes
    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('change', function() {
            const row = this.closest('tr');
            updateRowTotal(row);
            updateCartTotal();
        });
    });

    // Event listener for remove buttons
    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            row.remove();
            updateCartTotal();
        });
    });

    // Initial calculation of totals
    document.querySelectorAll('tbody tr').forEach(row => {
        updateRowTotal(row);
    });
    updateCartTotal();
});
