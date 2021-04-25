var totalPrice=document.querySelector(".inCart-tprice");
var pricePerDrink=0;
var listDoUong = [];
var listbtnAdd = document.querySelectorAll('.btn-outline-warning');
var cartMain = document.querySelector('.inCart__main')
listbtnAdd.forEach((e) => {
    e.addEventListener(
        'click', () => {
            let temp = e.parentElement.parentElement;
            let douong = new doUong(temp.querySelector('.card-title').innerHTML, temp.querySelector('.card-price').innerHTML)
            let tempDoUong = listDoUong.find((e) => e.tenDoUong == douong.tenDoUong);
            if (tempDoUong) {
                tempDoUong.soLuong++

            }
            else{
                listDoUong.push(douong);
            }
             pricePerDrink+=parseInt(douong.gia);
             totalPrice.innerHTML=pricePerDrink+".000VND";
            
            cartMain.innerHTML = renderCart(listDoUong);
        }
    )
})

var renderCart = function (listDoUong) {
    let listDoUongao = ``;
    for (let doUong of listDoUong) {
        listDoUongao = listDoUongao + renderItem(doUong);
    }
    return listDoUongao;
}
var renderItem = function (doUong) {
    return ` <div class="cart-view border-bottom">
    <div class="row p-2">
        <div class="col-1 mr-2">
            <span class="inCart-quantity">${doUong.soLuong}</span>
        </div>
        <div class="col-7">
            <span class="inCart-title">
                ${doUong.tenDoUong}
            </span>
        </div>
        <div class="col-3">
            <span class="inCart-price">${doUong.gia} </span>
        </div>
    </div>

</div>`
}


