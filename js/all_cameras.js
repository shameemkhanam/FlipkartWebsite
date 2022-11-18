let filterArray = [];
let checkedArr = [];

// let cameras = document.getElementById("cameras_container");
// let generate_camera_shop = () => {
//   return (cameras.innerHTML = cameras_items_data.map((x) => {
//     let { id, name, href, stars, ratingsReviews, desc, price, realRate, perOff, img } = x;
//     return `<div id="${id}" class="camera_item">
//   <a href="${href}" class="link_block">
//             <div class="row ms-2 pt-3 pb-3">
//               <div class="col-md-2 p-0 m-0 d-flex justify-content-center ">
//                 <img src="${img}" class="m-0 img-fluid" alt="">
//               </div>
//               <div class="col-md-6 ms-0">
//                 <p class="link_color" style="font-size:18px; line-height:5px;">${name}</p>
//                 <p class="text-muted mt-0" style="font-size:14px; font-weight:bold;"><span class="me-2 badge bg-success"
//                     style="font-size:12px;">${stars} &#9733;</span>${ratingsReviews}</p>
//                 <ul class="text-dark" style="font-size:14px;">
//                   <li>${desc.line1}</li>
//                   <li>${desc.line2}</li>
//                   <li>${desc.line3}</li>
//                   <li>${desc.line4}</li>
//                   <li>${desc.line5}</li>
//                 </ul>
//               </div>
//               <div class="col-md-4">
//                 <p class="text-dark" style="font-size: 25px; font-weight:bold; line-height:5px;">&#8377;${price}</p>
//                 <p class="mt-4 text-dark" style="font-size: 14px; line-height:5px;"><s>&#8377;${realRate}</s> <span
//                     class="text-success">${perOff}</span></p>
//                 <p class="text-dark" style="font-size: 12px; line-height:5px;">Free delivery</p>
//                 <p class="text-success" style="font-size: 14px; font-weight:bold; line-height:5px;">Bank Offer</p>
//               </div>
//             </div>
//           </a>
//           <hr />
//           </div>`;
//   }).join(""));
// };
// generate_camera_shop();

let cameras = document.getElementById("cameras_container");
let generate_camera_shop = (camArr) => {
  return (cameras.innerHTML = camArr.map((x) => {
    let { id, name, href, stars, ratingsReviews, desc, price, realRate, perOff, img } = x;
    return `<div id="${id}">
  <a href="${href}" class="link_block">
            <div class="row ms-2 pt-3 pb-3">
              <div class="col-md-2 p-0 m-0 d-flex justify-content-center ">
                <img src="${img}" class="m-0 img-fluid" alt="">
              </div>
              <div class="col-md-6 ms-0">
                <p class="link_color" style="font-size:18px; line-height:5px;">${name}</p>
                <p class="text-muted mt-0" style="font-size:14px; font-weight:bold;"><span class="me-2 badge bg-success"
                    style="font-size:12px;">${stars} &#9733;</span>${ratingsReviews}</p>
                <ul class="text-dark" style="font-size:14px;">
                  <li>${desc.line1}</li>
                  <li>${desc.line2}</li>
                  <li>${desc.line3}</li>
                  <li>${desc.line4}</li>
                  <li>${desc.line5}</li>
                </ul>
              </div>
              <div class="col-md-4">
                <p class="text-dark" style="font-size: 25px; font-weight:bold; line-height:5px;">&#8377;${price}</p>
                <p class="mt-4 text-dark" style="font-size: 14px; line-height:5px;"><s>&#8377;${realRate}</s> <span
                    class="text-success">${perOff}</span></p>
                <p class="text-dark" style="font-size: 12px; line-height:5px;">Free delivery</p>
                <p class="text-success" style="font-size: 14px; font-weight:bold; line-height:5px;">Bank Offer</p>
              </div>
            </div>
          </a>
          <hr />
          </div>`;
  }).join(""));
};
generate_camera_shop(cameras_items_data);

// let filter_buttons = document.querySelector(".filter_buttons");
// let generate_filter_buttons = (cArr) => {
//   return (filter_buttons.innerHTML = cArr.map((x) => {
//     return `
//     <button>${x}</button>`;
//   }));
// };

let checkboxes = document.querySelectorAll(".checkbox");
for (let checkbox of checkboxes) {
  checkbox.addEventListener("click", function () {
    if (this.checked == true) {
      checkedArr.push(this.value);
    }
    else {
      //remove unchecked value from array
      checkedArr = checkedArr.filter((e) => (e != this.value));
    }
    // console.log(checkedArr);   
    filterArray = cameras_items_data.filter((ele) => {
      for (let e in checkedArr) {
        if (ele.name.toLowerCase().includes(checkedArr[e].toLowerCase())) {
          return ele.name;
        }
      }
    });
    generate_camera_shop(filterArray);
    // generate_filter_buttons(checkedArr);
    filter_buttons.innerHTML = checkedArr.map((x) => {
      return `
      <div class="d-inline-flex ">
      <button class="btn text-dark bg-light border-dark mb-2">${x}</button> 
      </div>    
      `;
    }).join("");
  });
}

