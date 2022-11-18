let cameras_items_data = [
  {
    id: "cam1",
    name: "Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens",
    href: "http://127.0.0.1:5500/prod_cam_canon.html",
    stars: "4.4",
    ratingsReviews: "778 Ratings & 84 Reviews",
    desc: {
      line1: "Effective Pixels : 24.1 MP",
      line2: "Sensor Type : CMOS",
      line3: "WiFi Available",
      line4: "MP4",
      line5: "2 Year Warranty",
    },
    price: "57890",
    realRate: "60,995",
    perOff: "5% off",
    img: "./images/electronics/cameras.png",
    quantity: 1
  },
  {
    id: "cam2",
    name: "SONY ZV-E10L Mirrorless Camera Interchangeable-lens Vlog Camera",
    href: "http://127.0.0.1:5500/prod_cam_sony.html",
    stars: "4.5",
    ratingsReviews: "113 Ratings & 20 Reviews",
    desc: {
      line1: "Effective Pixels : 24.2 MP",
      line2: "Sensor Type : CMOS",
      line3: "WiFi Available",
      line4: "4K",
      line5: "2 Year Warranty",
    },
    price: "67990",
    realRate: "69,990",
    perOff: "2% off",
    img: "./images/cameras/cam1.png",
    quantity: 1
  },
  {
    id: "cam3",
    name: "FUJIFILM NA X-S10 Mirrorless Camera Body with XC35mm F2 Lens",
    href: "http://127.0.0.1:5500/prod_cam_fujifilm.html",
    stars: "4.4",
    ratingsReviews: "778 Ratings & 84 Reviews",
    desc: {
      line1: "Effective Pixels : 26.1 MP",
      line2: "Sensor Type : BSI CMOS",
      line3: "WiFi Available",
      line4: "4K",
      line5: "2 Year Warranty",
    },
    price: "99999",
    realRate: "1,10,000",
    perOff: "2% off",
    img: "./images/cameras/fuji.png",
    quantity: 1
  },
];

let monitors_items_data = [
  {
    id: "m1",
    name: "SAMSUNG 22 inch Full HD IPS Panel Monitor (LF22T354FHWXXL)",
    href: "http://127.0.0.1:5500/prod_monitor_sam.html",
    stars: "4.4",
    ratingsReviews: "4442 Ratings & 558 Reviews",
    desc: {
      line1: "Panel Type: IPS Panel",
      line2: "Screen Resolution Type: Full HD",
      line3: "Brightness: 250 nits",
      line4: "MP4",
      line5: "HDMI Ports - 1",
    },
    // price: "100",
    price: "8699",
    realRate: "17,290",
    perOff: "49% off",
    img: "./images/monitors/samsung.png",
    quantity: 1
  },
  {
    id: "m2",
    name: "DELL S Series 24 inch Full HD IPS Panel Monitor (S2421HN)",
    href: "http://127.0.0.1:5500/prod_monitor_dell.html",
    stars: "4.5",
    ratingsReviews: "2739 Ratings & 397 Reviews",
    desc: {
      line1: "Panel Type: IPS Panel",
      line2: "Screen Resolution Type: Full HD",
      line3: "Response Time: 4 ms | Refresh Rate: 75 Hz",
      line4: "3 Years Warranty",
      line5: "HDMI Ports - 2",
    },
    // price: "200",
    price: "12999",
    realRate: "20,849",
    perOff: "37% off",
    img: "./images/monitors/dell.png",
    quantity: 1
  },
  {
    id: "m3",
    name: "LG 21.5 inch Full HD IPS Panel Ultra Thin Monitor (22MK600M)",
    href: "http://127.0.0.1:5500/prod_monitor_lg.html",
    stars: "4.4",
    ratingsReviews: "7349 Ratings & 1194 Reviews",
    desc: {
      line1: "Panel Type: IPS Panel",
      line2: "Screen Resolution Type: Full HD",
      line3: "Brightness: 250 nits",
      line4: "Response Time: 5 ms | Refresh Rate: 75 Hz",
      line5: "HDMI Ports - 2",
    },
    // price: "300",
    price: "9479",
    realRate: "13,000",
    perOff: "27% off",
    img: "./images/monitors/lg.png",
    quantity: 1
  }];

let stationery_items_data = [
  {
    id: "s1",
    name: "Cello Bling Pastel Ball Pen",
    href: "http://127.0.0.1:5500/prod_st_cellopen.html",
    stars: "4.2",
    desc: "Pack of 25, Blue",
    price: "139",
    realRate: "150",
    perOff: "7% off",
    img: "./images/stationery/celloPen.png",
    quantity: 1
  },
  {
    id: "s2",
    name: "Classmate Pulse Regular Notebook Single Line 300 Pages",
    href: "http://127.0.0.1:5500/prod_st_nbook.html",
    stars: "4.5",
    desc: "Multicolor",
    price: "138",
    realRate: "145",
    perOff: "4% off",
    img: "./images/stationery/classmateNotebook.png",
    quantity: 1
  },
  {
    id: "s3",
    name: "Fevicryl Mould It, Clay Set for Modelling and Sculpting",
    href: "http://127.0.0.1:5500/prod_st_clayset.html",
    stars: "4.5",
    desc: "900g",
    price: "285",
    realRate: "300",
    perOff: "5% off",
    img: "./images/stationery/claySet.png",
    quantity: 1
  },
  {
    id: "s4",
    name: "Classmate Colour Fest Series Ball Pen ",
    href: "http://127.0.0.1:5500/prod_st_colorpen.html",
    stars: "4.5",
    desc: "Pack of 10, Blue",
    price: "96",
    realRate: "100",
    perOff: "4% off",
    img: "./images/stationery/classmateBallPen.png",
    quantity: 1
  },
];

let BFT_items_data = [
  {
    id: "beauty1",
    name: "Lakme Perfecting Liquid Foundation  (Natural Shell, 27 ml)",
    href: "http://127.0.0.1:5500/prod_bty_foundn.html",
    stars: "4.2",
    ratingsReviews: "38,776 Ratings & 2,934 Reviews",
    desc: "Natural Shell, 27ml",
    price: "130",
    realRate: "170",
    perOff: "23% off",
    img: "./images/BFT/foundn1.png",
    quantity: 1
  },
  {
    id: "beauty2",
    name: "MamaEarth CoCo Tinted 100% Natural Lip Balm for women, with Cocoa and Vitamin E Coco ",
    href: "http://127.0.0.1:5500/prod_bt_lipbalm.html",
    stars: "4.3",
    ratingsReviews: "1,485 Ratings & 120 Reviews",
    desc: "Pack of: 1, 2 g",
    price: "269",
    realRate: "299",
    perOff: "10% off",
    img: "./images/BFT/lipBalm1.png",
    quantity: 1
  }
];

let bestOfElectronics = [...cameras_items_data, ...monitors_items_data];
let beautyStationery = [...BFT_items_data, ...stationery_items_data];

let allProducts = [...cameras_items_data, ...monitors_items_data, ...stationery_items_data, ...BFT_items_data];
// console.log(allProducts);

// localStorage.setItem("products", JSON.stringify(allProducts));
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}