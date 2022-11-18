// single product gallery
var p_img = document.querySelector("#p_img");

function mouseOverFunc(imgs) {
  p_img.src = imgs.src;
  p_img.parentElement.parentElement.style.display = "block";
}
//--------------------------------------------------------------




//----------------------------------------------
// let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(products);
// console.log(cart);

function addItemToCart(productId) {

  let product = allProducts.find((product) => {
    return product.id == productId;
  });

  if (cart.length == 0) {
    cart.push(product);
  }
  else {
    let res = cart.find((element) => (element.id == productId));
    if (res === undefined) {
      cart.push(product);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartIconCount();

}

function updateCartIconCount() {
  let cartCount = cart.length;
  document.querySelector(".cart_notification").setAttribute("current_count", cartCount);
}

//but on page refresh, cart value turns to 0
function onLoadCartIconCount() {

  if (cart) {
    document.querySelector(".cart_notification").setAttribute("current_count", cart.length);
  }
  else {
    document.querySelector(".cart_notification").setAttribute("current_count", 0);
  }

}
// //call this function:
onLoadCartIconCount();





//Add to cart btn
// let cart = document.querySelectorAll(".addToCart");
// console.log(cart);
// // data array of monitors: monitors_items_data

// for (let i = 0; i < cart.length; i++) {
//   cart[i].addEventListener("click", () => {
//     cartNumbers(monitors_items_data[i]);
//     // totalCost(products[i]);
//   })
// }

// function cartNumbers(product) {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   productNumbers = parseInt(productNumbers);
//   if (productNumbers) {
//     //means there is some value in local storage
//     localStorage.setItem("cartNumbers", productNumbers + 1);
//     document.querySelector(".cart_notification").setAttribute("current_count", productNumbers + 1);
//   }
//   else {
//     localStorage.setItem("cartNumbers", 1);
//     // let cart_counter = document.querySelector(".cart_notification");
//     document.querySelector(".cart_notification").setAttribute("current_count", 1);
//   }
// }

// //but on page refresh, cart value turns to 0
// function onLoadCartNumbers() {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   if (productNumbers) {
//     document.querySelector(".cart_notification").setAttribute("current_count", productNumbers);
//   }
//   else {
//     document.querySelector(".cart_notification").setAttribute("current_count", 0);
//   }
// }
// // //call this function:
// onLoadCartNumbers();
//==============================================
// let basket = JSON.parse(localStorage.getItem("data")) || [];
// function addToCart(id) {
//   // let item = document.getElementById("m1");
//   // let search = basket.find((x) => { x.id === monitors_items_data.id });

//   basket.push({
//     id: id,
//     item: 1
//   });
//   localStorage.setItem("data", JSON.stringify(basket));

//   console.log(basket);

// }






// let basket = [];




// let cart_counter = document.querySelector(".cart_notification");
// cart_counter.setAttribute("current_count", 1 );

// let cart = document.querySelectorAll(".addToCart");
// console.log(cart);

//=============================================================
// let cart_product_title = document.querySelectorAll(".cart_product_title").value;
// console.log(cart_product_title);
// for (let i = 0; i < cart_product_title.length; i++) {
//   if (cart_product_title[i].length >= 40) {
//     cart_product_title[i] = cart_product_title[i].substr(0, 40) + "...";
//   }
// }


// const decreaseNumber = (incdec, itemPrice) => {
//   var itemval = document.getElementById(incdec);
//   var itemPrice = document.getElementById(itemPrice);
//   // console.log(itemPrice.innerHTML);
//   if (itemval.value <= 1) {
//     itemval.value = 1;
//   } else {
//     itemval.value = parseInt(itemval.value) - 1;
//     itemval.style.background = "white";
//     itemval.style.color = "black";
//     itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 138;

//   }
// };

// const increaseNumber = (incdec, itemPrice) => {
//   var itemval = document.getElementById(incdec);
//   var itemPrice = document.getElementById(itemPrice);
//   // console.log(itemPrice.innerHTML);
//   if (itemval.value >= 5) {
//     itemval.value = 5;
//     alert("maximum 5 allowed!");
//     itemval.style.background = "red";
//     itemval.style.color = "white";
//   } else {
//     itemval.value = parseInt(itemval.value) + 1;
//     itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 138;
//   }
// };
//============================================================================
//ADD TO CART: SINGLE PRODUCT DETAILS====>

// let cart = document.querySelectorAll(".addToCart");
// console.log(cart);

// // let products = [
// //   {
// //     name: "classmate regular notebook",
// //     price: 138,
// //     inCart: 0
// //   }
// // ];
// for (let i = 0; i < cart.length; i++) {
//   cart[i].addEventListener("click", () => {
//     cartNumbers(monitors_items_data[i]);
//     // totalCost(monitors_items_data[i]);
//   })
// }

// function totalCost(product) {
//   //v should add prev items also...
//   let cartCost = localStorage.getItem("totalCost");
//   if (cartCost != null) {
//     //means there is already some val in the cart...
//     cartCost = parseInt(cartCost);
//     localStorage.setItem("totalCost", cartCost + product.price);
//   }
//   else {
//     localStorage.setItem("totalCost", product.price);
//   }
// }

// function cartNumbers(product) {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   productNumbers = parseInt(productNumbers);
//   if (productNumbers) {
//     //means there is some value in local storage
//     localStorage.setItem("cartNumbers", productNumbers + 1);
//     document.querySelector(".cart_notification").setAttribute("current_count", productNumbers + 1);
//   }
//   else {
//     localStorage.setItem("cartNumbers", 1);
//     // let cart_counter = document.querySelector(".cart_notification");
//     document.querySelector(".cart_notification").setAttribute("current_count", 1);
//   }
// }

// //but on page refresh, cart value turns to 0
// function onLoadCartNumbers() {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   if (productNumbers) {
//     document.querySelector(".cart_notification").setAttribute("current_count", productNumbers);
//   }
//   else {
//     document.querySelector(".cart_notification").setAttribute("current_count", 0);
//   }
// }
// //call this function:
// onLoadCartNumbers();

