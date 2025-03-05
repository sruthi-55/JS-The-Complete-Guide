class Product {
  // // these are called fields
  // // when they are based on some object they're called properties
  // title = "DEFAULT"; // initial value
  // imageUrl;
  // description;
  // price;
  constructor(title, image, desc, price) {
    this.title = title;     // property
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductList{
  products = [
    new Product(
      "Pillow",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSC_FnNMgwxM5AN_3WLI0j6I6RJdmCxQNNp2kXE8V6Ot_xncUC_SIJ7R7bCTKgvwtWUsiG4HRqg__Dz0xPbIOlLuCjEt8Z5QxrPDifaV0o1V7nZL0wZRWZV",
      "A nice pillow",
      90
    ),
    new Product(
      "Bedsheet",
      "https://sleepycat.in/wp-content/uploads/2020/09/All-season-comforter-Nude-Pink-PDP-Img-2.jpg",
      "A smooth bedsheet",
      970
    ),
  ];

  render(){
    const content = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.classList.add('product-list');

    for(const prod of this.products){
      const prodItem = new ProductItem(prod);
      const prodEl = prodItem.createItem();
      prodList.append(prodEl);
    }
    content.append(prodList);
  }
}

class ProductItem{
  constructor(product){
    this.product = product;
  }

  createItem(){
    const prodEl = document.createElement('li');
      prodEl.classList.add('product-item');
      prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" />
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
      `;
    return prodEl;
  }
}

const productListObj = new ProductList();
productListObj.render();
