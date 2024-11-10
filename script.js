// JavaScript to handle button click functionality for each product
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.parentElement.querySelector('h3').textContent;
        alert(`You have added ${productName} to your cart!`);
    });
});
