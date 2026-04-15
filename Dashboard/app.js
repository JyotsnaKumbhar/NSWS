let CategoryListElements = document.querySelector("aside ul");
let productListElements = document.querySelector(".products");
let currentSlug = '';
let getProductFromApi = async (catSlug = '') => {

    let apiUrl;

    if (catSlug == '') {
        apiUrl = 'https://dummyjson.com/products';
    }
    else {
        apiUrl = `https://dummyjson.com/products/category/${catSlug}`
    }
    let apiFirstResponse = await fetch(apiUrl);
    let finalResponse = await apiFirstResponse.json();
    let productArray = finalResponse.products;

    let addElements = '';
    productArray.forEach((object) => {
        addElements += `<div class="productItems">
                        <img src="${object.thumbnail}" alt="">
                        <div class="priceCart">
                            <b>Rs ${object.price}</b>
                            <button>Add to cart</button>
                        </div>
                        <h3>${object.title}</h3>
                    </div>`
    });
    productListElements.innerHTML = addElements;
}

getProductFromApi();



let getCategoryFromApi = async () => {
    let apiFirstResponse = await fetch('https://dummyjson.com/products/categories');
    let finalResponse = await apiFirstResponse.json();
    let strElement = '';
    finalResponse.forEach(element => {
        let elmentName = element.name;
        strElement += `<li class = "${element.slug == currentSlug ? "activeCat" : ''}" data-slug = "${element.slug}">${elmentName}</li>`;
    });

    CategoryListElements.innerHTML = strElement;
}
CategoryListElements.addEventListener("click", (e) => {
    console.log("HI", e)
    if (e.target.tagName === "LI") {
        currentSlug = e.target.getAttribute('data-slug');
        getProductFromApi(currentSlug);
        getCategoryFromApi();
    }
}
);
getCategoryFromApi()