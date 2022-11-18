let filterArray = [];
let checkedArr = [];

let beauty = document.getElementById("beauty_container");
let generate_beauty_shop = (bArr) => {
  return (beauty.innerHTML = bArr.map((x) => {
    let { id, name, href, stars, ratingsReviews, desc, price, realRate, perOff, img } = x;
    return `<div class="col-md-3 mx-0 " id="stationery_item">
              <a href="${href}" class=" link_block">
                <div class="card text-start border-0 mb-3 me-2" style="width: 350px; padding:25px 15px; ">
                  <div class="mb-2" style="width: 248px; height: 200px;">
                    <img src="${img}" class="card-img-top py-0 px-4 img-fluid h-100" alt="...">
                  </div>
                  <div class="card-body text-start" style="font-size: 14px;">
                    <p class="link_color" style="font-size:16px;">${name}</p>
                <p class="text-muted mt-0" style="font-size:14px; font-weight:bold;"><span class="me-2 badge bg-success"
                    style="font-size:12px;">${stars} &#9733;
                    <p class="text-dark" style="font-size: 25px; font-weight:bold; line-height:5px;">&#8377;${price}</p>
                <p class="mt-4 text-dark" style="font-size: 14px; line-height:5px;"><s>&#8377;${realRate}</s> <span
                    class="text-success">${perOff}</span></p>
                    
                  </div>
                </div>
              </a>
            </div>`;
  }).join(""));
};
generate_beauty_shop(BFT_items_data);

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
    filterArray = BFT_items_data.filter((ele) => {
      for (let e in checkedArr) {
        if (ele.name.toLowerCase().includes(checkedArr[e].toLowerCase())) {
          return ele.name;
        }
      }
    });
    generate_beauty_shop(filterArray);
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