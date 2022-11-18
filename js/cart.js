// cart = JSON.parse(localStorage.getItem("cart")) || [];
let label = document.getElementById("label");
let price_details = document.getElementById("price_details");
let price_details_col = document.getElementById("price_details_col");
let shopping_cart = document.getElementById("shopping_cart");
let empty_cart = document.getElementById("empty_cart");


let generateCartItems = () => {
  if (cart.length !== 0) {
    return shopping_cart.innerHTML = cart.map((x) => {
      // console.log(x);
      let search = cart.find((y) => (y.id === x.id)) || [];
      return `      
        <div class="row  bg-white  p-3 border-bottom">      
          <div class="col-md-3 mx-auto col-11 d-flex justify-content-center align-items-center product_img">
            <img src="${search.img}" class="img-fluid" alt="">
          </div>
          <div class="col-md-9 col-11 mx-auto px-4 ps-1 pe-1 mt-2">
            <div class="mb-0 d-flex justify-content-start">
              <p class="cart_product_title">${search.name}</p>
              <p class="ms-4" style="font-size: 14px;">Delivery by Sat Nov 12 | <span class="text-success">Free</span></p>
            </div>
            <p class="text-muted small">Ratings: ${search.stars} &#9733;</p>
            <p class="fw-bold ms-2" id="itemval">₹${search.price * search.quantity}</p>
          </div>
          <div class="row">
            <div class="col-3 m-0">
              <ul class="pagination justify-content-center set_quantity mt-3 ">
                <li class="page-item">
                  <button onclick="decrement(${x.id})" id="minus_btn" class="page-link rounded-pill text-dark" ><i class="fas fa-minus"></i>
                  </button>
                </li>
                <li class="page-item"><input type="text" name="" class="page-link ms-2 me-2 text-center text-dark" value=${search.quantity} id=${x.id}>
                </li>
                <li class="page-item">
                  <button onclick="increment(${x.id})" id="plus_btn" class="page-link rounded-pill text-dark">
                    <i class="fas fa-plus"></i>
                  </button>
                </li>
              </ul>
            </div>
              <div class="col-9 d-flex justify-content-start mt-3">
                <a href="#"><p class="fw-bold">SAVE FOR LATER</p></a>
                <a href="#" onclick="removeItem(${x.id})"><p class="fw-bold ms-5">REMOVE</p></a>
              </div>
          </div>
        </div>`;
    }).join("");
  }
  else {
    // shopping_cart.innerHTML = ``;
    label.innerHTML = ``;
    price_details_col.innerHTML = ``;
    empty_cart.innerHTML = `
    <div class="card mt-5 mb-5 border-0" style="width: 18rem; ">
        <img src="./images/emptyCart.png" class="card-img-top" alt="...">
        <div class="text-center p-3">
          <h5 style="font-size:18px;">Your Cart is Empty!</h5>
          <a href="http://127.0.0.1:5500/index.html" class="btn btn-warning w-50 mt-3">Shop Now</a>
        </div>
      </div>`;
  }
};
generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => (x.id === selectedItem.id));
  search.quantity += 1;
  //save incremented data on local storage
  // console.log(cart);
  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => (x.id === selectedItem.id));
  if (search.quantity === 0) return;
  else {
    search.quantity -= 1;
  }
  // console.log(cart);
  update(selectedItem.id);
  cart = cart.filter((x) => (x.quantity !== 0));
  generateCartItems();
  localStorage.setItem("cart", JSON.stringify(cart));
};

let update = (id) => {
  let search = cart.find((x) => (x.id === id));
  // console.log(search.quantity);
  document.getElementById(id).value = search.quantity;
  calculation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  cart = cart.filter((x) => (x.id !== selectedItem.id));
  generateCartItems();
  totalAmount();
  calculation();
  localStorage.setItem("cart", JSON.stringify(cart));
};

let clearCart = () => {
  cart = [];
  generateCartItems();
  calculation();
  localStorage.setItem("cart", JSON.stringify(cart));
};



let totalAmount = () => {
  if (cart.length !== 0) {
    let amount = cart.map((x) => {
      return (x.price * x.quantity);
    }).reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    // console.log(amount);
    price_details.innerHTML = `
    <p class="fw-bold text-muted mb-3">PRICE DETAILS</p>
            <hr>
            <div class="price_indiv d-flex justify-content-between">
              <p>Price</p>
              <p>₹${amount}</p>
            </div>
            
            <div class="price_indiv d-flex justify-content-between">
              <p>Delivery Charges</p>
              <p class="text-success">FREE</p>
            </div>
            <hr />
            <div class="price_indiv d-flex justify-content-between" style="font-size: 18px;">
              <p class="fw-bold">Total Amount</p>
              <p class="fw-bold ">₹${amount}</p>
            </div>
            <hr>
            <div class="row mt-3 ms-2">
            <div class="safe col m-0 px-5 text-muted">
              <p class="fw-bold" style="font-size: 14px;">Safe and Secure Payments.Easy returns.100% Authentic products.
              </p>
            </div>
          </div>`;
  }
  else return;
};
totalAmount();

let calculation = () => {
  let cal1 = cart.map((x) => {
    return x.quantity;
  });
  // console.log(cal1);
  let cal2 = cal1.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  // console.log(cal2);
  document.querySelector(".cart_notification").setAttribute("current_count", cal2);
  // console.log(cart.map((x) => (x.quantity).reduce((acc, cur) => (acc + cur), 0)));
};
calculation();
