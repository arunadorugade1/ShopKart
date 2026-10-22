/* Combined Search and Category Filter */

function filterProducts() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleProducts = 0;

    products.forEach(function (product) {

        const productName = product.querySelector("h3").textContent.toLowerCase();

        const productCategory = product.getAttribute("data-category");
        console.log(productName, productCategory);

        const matchesSearch = productName.includes(searchText);

        const matchesCategory = selectedCategory === "all" ||
        productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });

    if (visibleProducts === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}
/* Search and Category Filter */

const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("searchBtn");

const products = document.querySelectorAll(".product-card");

const noResults = document.getElementById("noResults");

const categories = document.querySelectorAll(".category");

let selectedCategory = "all";


/* Filter Products */

function filterProducts() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleProducts = 0;

    products.forEach(function (product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        const productCategory =
            product.getAttribute("data-category");

        const matchesSearch =
            productName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}





/* Search Button */

searchBtn.addEventListener("click", function () {
    console.log("Search button clicked");
    console.log("Search:", searchInput.value);
    console.log("Category:", selectedCategory);

    filterProducts();

});


/* Category Filter */

categories.forEach(function (category) {

    category.addEventListener("click", function () {

        selectedCategory =
            category.getAttribute("data-category");
            console.log(selectedCategory);

        filterProducts();

    });

});


/* Cart Functionality */

const cartButtons =
    document.querySelectorAll(".add-cart");

const cartCount =
    document.getElementById("cart-count");

let count = 0;


cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        count++;

        cartCount.textContent = count;

        button.textContent = "Added!";

        setTimeout(function () {

            button.textContent = "Add to Cart";

        }, 1000);

    });

});