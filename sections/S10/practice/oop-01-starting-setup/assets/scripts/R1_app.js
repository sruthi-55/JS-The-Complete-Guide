const productList = {
  products: [
    {
      title: 'Pillow',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSC_FnNMgwxM5AN_3WLI0j6I6RJdmCxQNNp2kXE8V6Ot_xncUC_SIJ7R7bCTKgvwtWUsiG4HRqg__Dz0xPbIOlLuCjEt8Z5QxrPDifaV0o1V7nZL0wZRWZV',
      price: 90,
      description: "A nice pillow"
    },
    {
      title: 'Bedsheet',
      imageUrl: 'https://sleepycat.in/wp-content/uploads/2020/09/All-season-comforter-Nude-Pink-PDP-Img-2.jpg',
      price: 970,
      description: "A smooth bedsheet"
    }
  ],
  render(){
    const content = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.classList.add('product-list');

    for(const prod of this.products){
      const prodEl = document.createElement('li');
      prodEl.classList.add('product-item');
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" />
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    content.append(prodList);
  }
};

productList.render();