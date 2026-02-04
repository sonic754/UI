const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max 2TB",
    desc: "Apple flagship smartphone with A17 chip",
    price: 1.999 ,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQwOphbJ6R10NpveJTRf3X83Y7aEk-KMiRQ&s",
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    desc: "Powerful Android phone with amazing camera",
    price: 1659.99,
    img: "https://macbro.uz/cdn/shop/files/2_9a18e226-5a2e-4e78-a1cd-c650c3007bdc.jpg?v=1748345598",
  },
  {
    id: 3,
    name: "MacBook Air M4",
    desc: "Lightweight laptop with Apple M3 chip",
    price: 1.199,
    img: "https://macbro.uz/cdn/shop/files/21_3d47750c-aa31-443a-83ef-0a5b8b9a078b.png?v=1744803481",
  },
  {
    id: 4,
    name: "Dell XPS 18",
    desc: "Premium ultrabook for developers",
    price: 1.499 ,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuNKuRK3tfx_d-M6OEdYnvAHypJ6k1AKf4A&s",
  },
  {
    id: 5,
    name: "AirPods 4",
    desc: "Noise cancelling wireless earbuds",
    price: 179,
    img: "https://cdn.mediapark.uz/imgs/a401ef39-3965-4282-86ef-d4e46e34eaf6_Artboard-1.webp",
  },
  {
    id: 6,
    name: "Apple Watch Ultra 3",
    desc: "Smartwatch for extreme sports",
    price: 899 ,
    img: "https://hozyaingorbushki.ru/upload/iblock/a7b/35ml3csrrwsb2uetam5q70eio43zdmnn.jpg",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    desc: "Best noise cancelling headphones",
    price: 299.99,
    img: "https://spphone.uz/wp-content/uploads/2024/07/sony_wh1000xm5_black.webp",
  },
  {
    id: 8,
    name: "iPad Pro 13 M4",
    desc: "Powerful tablet for design and work",
    price: 2.299 ,
    img: "https://gadgetstore.kz/wa-data/public/shop/products/07/10/1007/images/2826/2826.970.jpg",
  },
  {
    id: 9,
    name: "Logitech MX Master 3S",
    desc: "Wireless mouse for productivity",
    price: 99.99,
    img: "https://maxcom.uz/storage/product/thumb/jfSJXhmZ4u3otqg0ljXWkbfqF2vT6ykW0zu3iGDa.jpeg",
  },
  {
    id: 10,
    name: "Keychron K6 Pro RGB",
    desc: "Mechanical keyboard with RGB",
    price: 99,
    img: "https://static.tildacdn.com/tild6339-3036-4331-a639-333637346536/K6P.jpg",
  },
];

const parent = document.getElementById("parent")

products.forEach( item =>{
console.log(item.name);
const div = document.createElement("div");
div.innerHTML = `
<div class="card bg-base-100 w-96 shadow-sm mt-10">
  <figure>
    <img
      src="${item.img}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.name}</h2>
    <p>${item.desc}</p>
    <div class="card-actions justify-end">
    <p>${item.price}$</p>
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

`
parent.append(div)






})