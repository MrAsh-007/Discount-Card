



const products = [
  {
    id: 1,
    name: "Samsung Galaxy S23",
    description: "Flagship phone with powerful performance and camera.",
    price: "399999",
    image: "",
    stock: 25,
    likes: 120,
    reviews: 45
  },
  {
    id: 2,
    name: "iPhone 14",
    description: "Premium design with A15 Bionic chip.",
    price: "188999",
    image: "",
    stock: 15,
    likes: 200,
    reviews: 60
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 12",
    description: "Budget-friendly phone with solid features.",
    price: "57999",
    image: "",
    stock: 40,
    likes: 80,
    reviews: 30
  },
  {
    id: 4,
    name: "OnePlus 11",
    description: "Fast performance with smooth display.",
    price: "139999",
    image: "",
    stock: 20,
    likes: 110,
    reviews: 50
  },
  {
    id: 5,
    name: "Oppo Reno 8",
    description: "Stylish design with excellent camera quality.",
    price: "84999",
    image: "",
    stock: 30,
    likes: 90,
    reviews: 35
  },
  {
    id: 6,
    name: "Vivo Y20",
    description: "Reliable daily-use smartphone with big battery.",
    price: "23999",
    image: "",
    stock: 50,
    likes: 60,
    reviews: 20
  },
  {
    id: 7,
    name: "Google Pixel 7",
    description: "Best Android camera experience.",
    price: "99999",
    image: "",
    stock: 18,
    likes: 130,
    reviews: 55
  },
  {
    id: 8,
    name: "Infinix Zero Ultra",
    description: "Affordable phone with premium look.",
    price: "109999",
    image: "",
    stock: 35,
    likes: 70,
    reviews: 25
  }
];



let cardsContainer = document.getElementById("productsContainer");


const createsCardHTMLThroughMap = () => {
  const mapReturn = products.map((card) => {
    return `<div class="products">
              <div class="images">
                <img src="${card.image}"/>
              </div>
              <div class="info">
                <h3 class="title">${card.name}</h3>
                <p class="description">${card.description}</p>
                <p class="price">PKR: <span id="price">${card.price}<span></p>
                <p class="stock">Stock: ${card.stock}</p>
                <p class="likes">Likes: ${card.likes}</p>
                <p class="reviews">Reviews: ${card.reviews}</p>    
              </div>
              <div class="addBtn">+ Add To Cart</div>
        </div>`

  });

  cardsContainer.innerHTML = mapReturn.join("");
}

createsCardHTMLThroughMap()




let couponCode = ["WMA"];
let addBtn = document.getElementsByClassName("addBtn")

for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", function () {
    let numberr =  this.parentElement.querySelector("#price").textContent;
    let price = parseFloat(numberr)
    console.log(price)
  })
}









