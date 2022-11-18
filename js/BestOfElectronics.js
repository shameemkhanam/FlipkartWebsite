let BestOfElectronics = document.getElementById("BestOfElectronics_container");
let generate_BestOfElectronics_shop = () => {
  return (BestOfElectronics.innerHTML = bestOfElectronics.map((x) => {
    let { id, name, href, price, perOff, img } = x;
    return `<div class="col-md-3 mx-0 " id="stationery_item">
              <a href="${href}" class=" link_block">
                <div class="card text-center border-0 mb-3 me-2" style="width: 350px; padding:25px 15px; ">
                  <div class="mb-2" style="width: 248px; height: 200px;">
                    <img src="${img}" class="card-img-top py-0 px-4 img-fluid h-100"
                      alt="...">
                  </div>
                  <div class="card-body" style="font-size: 14px;">
                    <p class="card-title s_cardTitle text-dark">${name}</p>
                    <p class="text-muted mt-2">${perOff}</p>
                    <p class="card-text text-success mb-0">Buy Now! </p>
                  </div>
                </div>
              </a>
            </div>`;
  }).join(""));
};
generate_BestOfElectronics_shop();

