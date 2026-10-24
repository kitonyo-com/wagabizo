'use strict';
const products = [
  {name:'Red Signature Jort',price:45,image:'red.jpg',alt:'Red Wagabizo matching set with signature shopping bags',style:'red',colors:['red','black'],isNew:true},
  {name:'Safari Heritage Shirt',price:54,image:'heritage-shirt.jpg',alt:'Black and white heritage print shirt styled with sunglasses',style:'shirt',colors:['print','black']},
  {name:'Leopard Heritage Pant',price:54,image:'heritage-pants.jpg',alt:'Wide-leg Wagabizo leopard print trousers styled with a white hat',style:'pants',colors:['print']},
  {name:'Obsidian White Suit',price:65,image:'white-suit.jpg',alt:'White Wagabizo suit with a relaxed silhouette',style:'white',colors:['white','black']},
  {name:'WAGABIZO Heritage Set',price:44,image:'heritage-set.jpg',alt:'Black and white printed shirt and trouser matching set',style:'set',colors:['print']},
  {name:'WAGABIZO Heritage Short',price:20,image:'heritage-short.jpg',alt:'Close-up of black and white patterned shorts',style:'short',colors:['print']},
  {name:'WAGABIZO Graphic Shirt',price:25,image:'heritage-detail.jpg',alt:'White Wagabizo shirt with red graphic lettering and branded label',style:'detail',colors:['red','white']}
];
const grid = document.querySelector('#products');
for (const product of products) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `<div class="product-image"><img src="assets/${product.image}" class="image-${product.style}" alt="${product.alt}" loading="lazy" width="960" height="1280">${product.isNew?'<span class="new-tag">NEW</span>':''}<button class="favorite" type="button" data-preview aria-label="Save ${product.name} — preview only"><svg><use href="#i-heart"/></svg></button></div><div class="product-info"><h3>${product.name}</h3><p class="price" aria-label="Illustrative price ${product.price} US dollars">$${product.price}</p><div class="swatches" aria-label="Illustrative color options">${product.colors.map(color=>`<span class="swatch ${color}" aria-label="${color}"></span>`).join('')}</div><div class="sizes" aria-label="Illustrative sizes"><span>S</span><span>M</span><span>L</span><span>XL</span></div><button class="add-cart" type="button" data-preview><svg><use href="#i-cart"/></svg>Add to Cart</button></div>`;
  grid.appendChild(card);
}
let toastTimeout;
document.addEventListener('click', event => {
  if (!event.target.closest('[data-preview]')) return;
  const toast = document.querySelector('.preview-toast');
  toast.textContent = 'This is a design preview. Shopping and checkout are not enabled.';
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3500);
});
