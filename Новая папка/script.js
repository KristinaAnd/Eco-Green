document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById('checkoutForm');
    const ccNumberInput = document.getElementById('cc-number');
    const ccExpirationInput = document.getElementById('cc-expiration');

    function formatCreditCardNumber(event) {
        let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i += 4) {
            formattedValue += value.substring(i, i + 4) + ' ';
        }
        event.target.value = formattedValue.trim();
    }

    function formatExpirationDate(event) {
        let value = event.target.value.replace(/[^0-9]/gi, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        event.target.value = value;
    }

    ccNumberInput.addEventListener('input', formatCreditCardNumber);
    ccExpirationInput.addEventListener('input', formatExpirationDate);

    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        let isValid = true;

        const productName = document.getElementById('productName').value.trim();
        const productQuantity = document.getElementById('productQuantity').value.trim();
        const productDescription = document.getElementById('productDescription').value.trim();
        const productPrice = document.getElementById('productPrice').value.trim();
        const productCategory = document.getElementById('productCategory').value.trim();
        const deliveryDate = document.getElementById('deliveryDate').value.trim();

        const ccName = document.getElementById('cc-name').value.trim();
        const ccNumber = document.getElementById('cc-number').value.trim();
        const ccExpiration = document.getElementById('cc-expiration').value.trim();
        const ccCvv = document.getElementById('cc-cvv').value.trim();

        if (productName === '') {
            alert('Product Name is required.');
            isValid = false;
        }
        if (productQuantity === '' || isNaN(productQuantity) || productQuantity <= 0) {
            alert('Valid Product Quantity is required.');
            isValid = false;
        }
        if (productDescription === '') {
            alert('Product Description is required.');
            isValid = false;
        }
        if (productPrice === '' || isNaN(productPrice) || productPrice <= 0) {
            alert('Valid Product Price is required.');
            isValid = false;
        }
        if (productCategory === '') {
            alert('Product Category is required.');
            isValid = false;
        }
        if (deliveryDate === '') {
            alert('Delivery Date is required.');
            isValid = false;
        }

        if (ccName === '') {
            alert('Name on Card is required.');
            isValid = false;
        }
        if (ccNumber === '' || !/^\d{4} \d{4} \d{4} \d{4}$/.test(ccNumber)) {
            alert('Valid Credit Card Number is required.');
            isValid = false;
        }
        if (ccExpiration === '' || !/^\d{2}\/\d{2}$/.test(ccExpiration)) {
            alert('Valid Expiration Date is required.');
            isValid = false;
        }
        if (ccCvv === '' || !/^\d{3}$/.test(ccCvv)) {
            alert('Valid CVV is required.');
            isValid = false;
        }

        if (isValid) {
            alert(`Product Name: ${productName}\nQuantity: ${productQuantity}\nDescription: ${productDescription}\nPrice: ${productPrice}\nCategory: ${productCategory}\nDelivery Date: ${deliveryDate}`);

            // Change CSS styles for two elements
            const header = document.querySelector('h2');
            header.style.color = 'purple';
            header.style.fontSize = '5em';

            const button = document.querySelector('button[type="submit"]');
            button.style.backgroundColor = 'pink';
            button.style.color = 'purple';
        }

        checkoutForm.classList.add('was-validated');
    });

});

(function () {
    'use strict';
    const form = document.getElementById('checkoutForm');
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const question = document.getElementById('about').value;
            alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nQuestion: ${question}`);
        }
        form.classList.add('was-validated'); 
    });
})();