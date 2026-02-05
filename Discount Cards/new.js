



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
                <p class="price">PKR: <span id="price">${card.price}<span>  </p>
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


let userInput = document.getElementById("userInput");

let overlay = document.getElementById("overlay");

let aHDWindow = document.getElementById("aHDWindow")

let newWindow = document.getElementById("newWindow");

let hint = document.getElementById("hint");

let couponCode = ["WMA BATCH (18)"];

let newSpan = document.createElement("span");

let submitBtn = document.getElementById("submit");

let addBtn = document.getElementsByClassName("addBtn");

let priceValueElement = 0;

let discountPrice = 0;




for (let i = 0; i < addBtn.length; i++) {

  
  addBtn[i].addEventListener("click", function () {
    
    let priceChildrens = this.parentElement.querySelector(".price").children;

    if(priceChildrens.length > 1 && priceChildrens[1].textContent.trim() !== ""){

      alreadyHaveDiscountWindowOpen();

    }else{
      windowOpen();
      priceValueElement = this.parentElement.querySelector("#price");
      newSpan = document.createElement("span");
      addBtn[i].parentElement.querySelector(".price").appendChild(newSpan);
    }
    });
}

function codeValidation() {
  let inputValue = userInput.value.trim();

  for (let i = 0; i < couponCode.length; i++) {

    if (inputValue == couponCode[i]) {

      priceValueElement.classList.add("text-style");

      let priceValue = parseFloat(priceValueElement.textContent);

      discountPrice = priceValue - (priceValue * (10 / 100));

      newSpan.innerText = discountPrice.toFixed();

      windowClosed();

    } else {

      hint.className = "hint"

    }
  }
}

submitBtn.addEventListener("click", codeValidation);

overlay.addEventListener("click", windowClosed);

overlay.addEventListener("click", alreadyHaveDiscountWindowClosed);


function windowOpen() {
  newWindow.classList.add("open");
  overlay.classList.add("show");
}

function windowClosed() {
  newWindow.classList.remove("open");
  overlay.classList.remove("show");
}



function alreadyHaveDiscountWindowOpen() {
  aHDWindow.classList.add("open");
  overlay.classList.add("show");
}

function alreadyHaveDiscountWindowClosed() {
  aHDWindow.classList.remove("open");
  overlay.classList.remove("show");
}