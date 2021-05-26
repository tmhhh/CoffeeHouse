class Drink {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}



var listProduct = [new Drink('TRÀ SỮA MẮC CA TRÂN CHÂU', '50.000VND', 'https://product.hstatic.net/1000075078/product/ts-macca-tran-chau-trang_2116ef0b88fe448492f9994611f689ec_large.jpg'),
new Drink('ESPRESSO', '40.000VND', 'https://product.hstatic.net/1000075078/product/espresso-nong_4b32833e9a5f48768ea5d5d2a4df0303_large.jpg'),
new Drink('TRÀ MATCHA MACCHIATO', '45.000VND', 'https://product.hstatic.net/1000075078/product/matcha-macchiato_c37b0e0c1c714d0091ee4f3052088193_large.jpg'),
new Drink('TRÀ ĐÀO CAM SẢ', '45.000VND', 'https://product.hstatic.net/1000075078/product/tra-dao-cam-sapng_58268b7877cd4209b8fc3fa1d4909511_large.jpg'),
new Drink('COLD BREW TRUYỀN THỐNG', '45.000VND', 'https://product.hstatic.net/1000075078/product/americano-da_7495646eaad24b8cbe0e68e8e479f01f_large.jpg'),
new Drink('CAPPUCCINO', '50.000VND', 'https://product.hstatic.net/1000075078/product/capu-nong_a2a47a422fa94e8194e9d4c4badba9d3_large.jpg')];
//search

var search = document.getElementById("search-button");

function clearProductContainer(container) {
    document.querySelectorAll(container).forEach(e => {
        e.innerHTML = "";
    });
}

function Render(productName) {
    for (let e of listProduct) {
        console.log(productName);
        console.log(e.name);
        console.log("-------");
        if (e.name == productName) {
            return `<div class="card" >
        <img src="${e.image}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${e.name}</h5>
            <p class="card-text">${e.price}</p>
            <a href="cart.html" class="btn btn-warning">Buy Now</a>
            <a href="product-1.html" class="btn btn-outline-warning">More</a>
        </div>
    </div>`
        }
      
    }

    return ` `;
}

search.addEventListener("click", function () {

    clearProductContainer(".card");
    var card = document.getElementsByClassName("card")[0];
    var searchValue = document.getElementById("search-input").value.toUpperCase();
    card.innerHTML = Render(    );

   


});

