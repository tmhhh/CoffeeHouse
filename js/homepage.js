


//search
var search = document.getElementById("search-button");

function clearProductContainer(container)
{
    document.querySelectorAll(container).forEach(e => {
        e.innerHTML="";
    });
}

search.addEventListener("click", function () {
    
    clearProductContainer(".card");
    var card = document.getElementsByClassName("card")[0];
    var searchValue = document.getElementById("search-input").value.toUpperCase();
    switch (searchValue) {
        case 'TRÀ SỮA MẮC CA TRÂN CHÂU':
            card.innerHTML = `            <div class="card" >
            <img src="https://product.hstatic.net/1000075078/product/ts-macca-tran-chau-trang_2116ef0b88fe448492f9994611f689ec_large.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">TRÀ SỮA MẮC CA TRÂN CHÂU</h5>
                <p class="card-text">50.000VND</p>
                <a href="cart.html" class="btn btn-warning">Buy Now</a>
                <a href="product-1.html" class="btn btn-outline-warning">More</a>
            </div>
        </div>`

            break;
        case 'ESPRESSO':
            card.innerHTML = ` <div class="card" >
            <img src="https://product.hstatic.net/1000075078/product/espresso-nong_4b32833e9a5f48768ea5d5d2a4df0303_large.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">ESPRESSO</h5>
                <p class="card-text">40.000VND
                </p>
                <a href="cart.html" class="btn btn-warning">Buy Now</a>
                <a href="product-2.html" class="btn btn-outline-warning">More</a>
            </div>
        </div>`
            break;
        case 'TRÀ MATCHA MACCHIATO':
            cardContainer.innerHTML = ` <div class="card" >
            <img src="https://product.hstatic.net/1000075078/product/matcha-macchiato_c37b0e0c1c714d0091ee4f3052088193_large.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">TRÀ MATCHA MACCHIATO</h5>
                <p class="card-text">45.000VND</p>
                <a href="cart.html" class="btn btn-warning">Buy Now</a>
                <a href="product-6.html" class="btn btn-outline-warning">More</a>
            </div>
        </div>`
            break;
        case 'TRÀ ĐÀO CAM SẢ':
            cardContainer.innerHTML = `  <div class="card">
            <img src="https://product.hstatic.net/1000075078/product/tra-dao-cam-sapng_58268b7877cd4209b8fc3fa1d4909511_large.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">TRÀ ĐÀO CAM SẢ</h5>
                <p class="card-text">45.000VND </p>
                <a href="cart.html" class="btn btn-warning">Buy Now</a>
                <a href="product-3.html" class="btn btn-outline-warning">More</a>
            </div>
        </div>`
            break;
        case 'COLD BREW TRUYỀN THỐNG':
            cardContainer.innerHTML = `<div class="card">
            <img src="https://product.hstatic.net/1000075078/product/americano-da_7495646eaad24b8cbe0e68e8e479f01f_large.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">COLD BREW TRUYỀN THỐNG</h5>
                <p class="card-text">45.000VND</p>
                <a href="cart.html" class="btn btn-warning">Buy Now</a>
                <a href="product-4.html" class="btn btn-outline-warning">More</a>
            </div>
        </div>`
            break;
        case 'CAPPUCCINO':
            cardContainer.innerHTML = `<div class="card " >
            <img src="https://product.hstatic.net/1000075078/product/capu-nong_a2a47a422fa94e8194e9d4c4badba9d3_large.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">CAPPUCCINO</h5>
                <p class="card-text">50.000VND
                </p>
                <a href="cart.html" class="btn btn-warning">Buy Now</a>
                <a href="product-5.html" class="btn btn-outline-warning">More</a>
            </div>
        </div>`
            break;
        default:
            
            break;

    }

});

