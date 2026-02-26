const getPrice = function () {

    const input = document.getElementById("checkPrice");
    const price = document.getElementById("price");

    fetch(`http://localhost:3000/priceCheck/${input.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Item not found');
            }
            return response.json();
        })
        .then(data => {
            price.innerHTML = `<p> price is: ${data.price}</p>`;
        })

}