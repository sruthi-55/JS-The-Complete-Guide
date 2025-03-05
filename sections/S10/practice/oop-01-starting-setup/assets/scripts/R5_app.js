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

class ElAttribute{
  constructor(atName,atVal){
    this.name = atName;
    this.value = atVal;
  }
}

class Component{
  constructor(renderHookId, shouldRender = true){
    this.hookId = renderHookId;
    // another solution to handle rendering early where data is still unavailable
    if(shouldRender)
      this.createElAndRender();
  }

  createElAndRender(){}

  createRootElement(tagName,classes,attributes){
    const rootEl = document.createElement(tagName);
    if(classes && classes.length>0){
      for(const cl of classes){
        rootEl.classList.add(cl);
      }
    }

    if(attributes && attributes.length>0){
      for(const at of attributes){
        rootEl.setAttribute(at.name,at.value);
      }
    }

    document.getElementById(this.hookId).append(rootEl);
    return rootEl;
  }
}

class ProductList extends Component{
  
  constructor(renderHookId){
    super(renderHookId);      // calling parent class (Component) constructor
    // super class constructor must be called first

    // if it requires data that is not yet available, we should seperate rendering and fetching data 
    this.fetchProducts();
  }

  fetchProducts(){
    this.products = [
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
    for(const prod of this.products){
      new ProductItem(prod,'prod-list');
    }
  }

  createElAndRender(){
    this.createRootElement('ul',['product-list'],[new ElAttribute('id','prod-list')]);
    if(this.products && this.products.length>0){
      this.renderProducts();
    }
  }
}

class ProductItem extends Component{
  constructor(product,renderHookId){
    super(renderHookId, false);
    this.product = product;
    this.createElAndRender();
  }

  addToCartHandler(){
    App.addProductToCart(this.product);    
  }

  createElAndRender(){
    const prodEl = this.createRootElement('li',['product-item']);
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

    const addToCartBtn = prodEl.querySelector('button');
    addToCartBtn.addEventListener('click',this.addToCartHandler.bind(this));  
    // to make 'this' inside addToCartHandler to refer to what 'this' refers here so that it can access product
  }
}

class Cart extends Component{
  items = [];
  constructor(renderHookId){
    super(renderHookId);
  }

  set cartItems(value){
    this.items = value;
    this.totalOutputEl.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount(){
    let sum = 0;
    sum = this.items.reduce((prevVal,curProd)=>{
      return prevVal + curProd.price;
    },0);
    return sum;
  }

  addProduct(product){
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  createElAndRender(){
    const cartEl = this.createRootElement('section',['cart']);
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order now!</button>
    `;
    this.totalOutputEl = cartEl.querySelector('h2');   // add property to obj
  }
}

class Shop {
  createElAndRender(){
    this.cart = new Cart('app');     // adding property

    new ProductList('app');
  }
}


class App{
  static cart;
  
  static init(){
    const shopObj = new Shop();
    shopObj.createElAndRender();
    this.cart = shopObj.cart;     // creating property
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();
