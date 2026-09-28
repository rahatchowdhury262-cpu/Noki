// ==========================================
// NOKI V3 MARKETPLACE - script.js
// ==========================================

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "Smart Watch",
    category: "Watches",
    price: 2499,
    oldPrice: 3299,
    stock: 25,
    seller: "Noki Store",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
  },
  {
    id: "p2",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1899,
    oldPrice: 2499,
    stock: 30,
    seller: "Tech Zone",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
  },
  {
    id: "p3",
    name: "Sports Shoes",
    category: "Shoes",
    price: 2999,
    oldPrice: 3999,
    stock: 18,
    seller: "Sport House",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
  },
  {
    id: "p4",
    name: "Digital Camera",
    category: "Electronics",
    price: 15999,
    oldPrice: 18999,
    stock: 8,
    seller: "Camera World",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700"
  },
  {
    id: "p5",
    name: "Gaming Mouse",
    category: "Gaming",
    price: 1299,
    oldPrice: 1799,
    stock: 40,
    seller: "Gaming Hub",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700"
  },
  {
    id: "p6",
    name: "Mechanical Keyboard",
    category: "Gaming",
    price: 3499,
    oldPrice: 4499,
    stock: 20,
    seller: "Gaming Hub",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700"
  },
  {
    id: "p7",
    name: "Gaming Headset",
    category: "Gaming",
    price: 2799,
    oldPrice: 3599,
    stock: 22,
    seller: "Game Store",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=700"
  },
  {
    id: "p8",
    name: "Travel Backpack",
    category: "Bags",
    price: 1599,
    oldPrice: 2199,
    stock: 35,
    seller: "Bag Point",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700"
  },
  {
    id: "p9",
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 999,
    oldPrice: 1499,
    stock: 50,
    seller: "Fashion Hub",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700"
  },
  {
    id: "p10",
    name: "Running Watch",
    category: "Watches",
    price: 3299,
    oldPrice: 4299,
    stock: 16,
    seller: "Fit Life",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700"
  },
  {
    id: "p11",
    name: "Football",
    category: "Sports",
    price: 899,
    oldPrice: 1199,
    stock: 45,
    seller: "Sports Zone",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=700"
  },
  {
    id: "p12",
    name: "Basketball",
    category: "Sports",
    price: 1099,
    oldPrice: 1399,
    stock: 32,
    seller: "Sports Zone",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=700"
  },
  {
    id: "p13",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 2199,
    oldPrice: 2999,
    stock: 27,
    seller: "Sound World",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700"
  },
  {
    id: "p14",
    name: "Power Bank",
    category: "Accessories",
    price: 1499,
    oldPrice: 1999,
    stock: 38,
    seller: "Mobile Zone",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1609592424849-8f6a5e8c0e8d?w=700"
  },
  {
    id: "p15",
    name: "Smartphone",
    category: "Mobiles & Tablets",
    price: 18999,
    oldPrice: 21999,
    stock: 12,
    seller: "Mobile Zone",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
  },
  {
    id: "p16",
    name: "Premium Hoodie",
    category: "Fashion",
    price: 1799,
    oldPrice: 2499,
    stock: 24,
    seller: "Style House",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700"
  },
  {
    id: "p17",
    name: "Classic T-Shirt",
    category: "Fashion",
    price: 799,
    oldPrice: 1099,
    stock: 60,
    seller: "Style House",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700"
  },
  {
    id: "p18",
    name: "Laptop",
    category: "Computers & Laptops",
    price: 64999,
    oldPrice: 72999,
    stock: 7,
    seller: "Computer World",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700"
  },
  {
    id: "p19",
    name: "Gaming Controller",
    category: "Gaming",
    price: 2999,
    oldPrice: 3799,
    stock: 19,
    seller: "Game Store",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=700"
  },
  {
    id: "p20",
    name: "Smart LED Lamp",
    category: "Home & Living",
    price: 1299,
    oldPrice: 1699,
    stock: 28,
    seller: "Home Store",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700"
  }
];

// ==========================================
// STORAGE
// ==========================================

function getProducts() {
  let saved = JSON.parse(localStorage.getItem("nokiProducts") || "null");

  if (!saved || !Array.isArray(saved)) {
    saved = DEFAULT_PRODUCTS;
    localStorage.setItem("nokiProducts", JSON.stringify(saved));
  }

  return saved;
}

function saveProducts(products) {
  localStorage.setItem("nokiProducts", JSON.stringify(products));
}

function getCart() {
  return JSON.parse(localStorage.getItem("nokiCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("nokiCart", JSON.stringify(cart));
}

// ==========================================
// HELPERS
// ==========================================

function money(value) {
  return "৳" + Number(value || 0).toLocaleString("en-BD");
}

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ==========================================
// PRODUCT CARD
// ==========================================

function productCard(product, flash = false) {
  return `
    <article class="card">

      <div class="pic">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/700x500?text=Noki+Product'"
        >

        ${flash ? `<span class="badge">🔥 FLASH SALE</span>` : ""}

        <button
          class="heart"
          onclick="toggleFavourite('${product.id}')"
          aria-label="Favourite"
        >♡</button>

      </div>

      <div class="card-body">

        <div class="title">
          ${product.name}
        </div>

        <div class="rating">
          ⭐ ${product.rating || "4.5"}
        </div>

        <div>
          <span class="price">
            ${money(product.price)}
          </span>

          ${
            product.oldPrice
              ? `<span class="old">${money(product.oldPrice)}</span>`
              : ""
          }
        </div>

        <div class="stock">
          ${product.stock > 0 ? `Stock: ${product.stock}` : "Out of stock"}
          · ${product.seller || "Noki Seller"}
        </div>

        <div class="actions">

          <button
            class="btn btn-primary"
            onclick="addToCart('${product.id}')"
            ${product.stock <= 0 ? "disabled" : ""}
          >
            🛒 Add
          </button>

        </div>

      </div>
    </article>
  `;
}

// ==========================================
// HOME PAGE
// ==========================================

function renderHome() {
  const products = getProducts();

  const flashGrid = document.getElementById("flashGrid");
  const productGrid = document.getElementById("productGrid");

  if (flashGrid) {
    flashGrid.innerHTML = products
      .slice(0, 4)
      .map(p => productCard(p, true))
      .join("");
  }

  if (productGrid) {
    productGrid.innerHTML = products
      .map(p => productCard(p))
      .join("");
  }
}

// ==========================================
// PRODUCTS PAGE
// ==========================================

function renderProductsPage() {
  const grid = document.getElementById("productGrid");

  if (!grid) return;

  let products = getProducts();

  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("cat");

  const searchInput = document.getElementById("productSearch");
  const categorySelect = document.getElementById("catFilter");

  if (urlCategory && categorySelect) {
    categorySelect.value = urlCategory;
  }

  function applyFilters() {
    let result = getProducts();

    const search = (
      searchInput ? searchInput.value : ""
    ).toLowerCase().trim();

    const category =
      categorySelect ? categorySelect.value : "";

    if (search) {
      result = result.filter(p =>
        `${p.name} ${p.category} ${p.seller}`
          .toLowerCase()
          .includes(search)
      );
    }

    if (category) {
      result = result.filter(
        p => p.category === category
      );
    }

    grid.innerHTML = result.length
      ? result.map(p => productCard(p)).join("")
      : `
        <div class="empty">
          <h2>😔 No products found</h2>
          <p>Try another search or category.</p>
        </div>
      `;
  }

  const apply = document.getElementById("applyFilters");

  if (apply) {
    apply.onclick = applyFilters;
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  applyFilters();
}

// ==========================================
// SEARCH
// ==========================================

function setupGlobalSearch() {
  const form = document.querySelector("[data-search-form]");
  const input = document.getElementById("globalSearch");

  if (!form || !input) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const value = input.value.trim();

    if (value) {
      location.href =
        "products.html?search=" +
        encodeURIComponent(value);
    }
  });
}

// ==========================================
// CART
// ==========================================

function updateCartCount() {
  const cart = getCart();

  const count = cart.reduce(
    (total, item) => total + Number(item.qty || 1),
    0
  );

  document
    .querySelectorAll("[data-cart-count]")
    .forEach(el => {
      el.textContent = count;
    });
}

function addToCart(id) {
  const products = getProducts();
  const product = products.find(p => p.id === id);

  if (!product) return;

  if (Number(product.stock) <= 0) {
    showToast("❌ Product is out of stock");
    return;
  }

  const cart = getCart();

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {
    existing.qty = Number(existing.qty || 1) + 1;
  } else {
    cart.push({
      id: id,
      qty: 1
    });
  }

  saveCart(cart);
  updateCartCount();

  showToast("✅ Added to cart!");
}

function removeFromCart(id) {
  let cart = getCart();

  cart = cart.filter(item => item.id !== id);

  saveCart(cart);

  updateCartCount();
  renderCartPage();
}

function changeQty(id, amount) {
  const cart = getCart();

  const item = cart.find(
    x => x.id === id
  );

  if (!item) return;

  item.qty = Number(item.qty || 1) + amount;

  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart(cart);

  updateCartCount();
  renderCartPage();
}

function renderCartPage() {
  const list = document.getElementById("cartList");
  const summary = document.getElementById("cartSummary");

  if (!list || !summary) return;

  const products = getProducts();
  const cart = getCart();

  if (!cart.length) {
    list.innerHTML = `
      <div class="empty">
        <h2>🛒 Your cart is empty</h2>
        <p>Add some products to your cart.</p>
        <a class="btn btn-primary"
           href="products.html"
           style="display:inline-block">
           Continue Shopping
        </a>
      </div>
    `;

    summary.innerHTML = "";
    return;
  }

  let total = 0;

  list.innerHTML = cart.map(item => {

    const product = products.find(
      p => p.id === item.id
    );

    if (!product) return "";

    const qty = Number(item.qty || 1);
    const subtotal = product.price * qty;

    total += subtotal;

    return `
      <div class="cart-row">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <div>
          <h3>${product.name}</h3>
          <p>${money(product.price)}</p>
        </div>

        <div class="qty">

          <button
            onclick="changeQty('${product.id}', -1)"
          >−</button>

          <strong>${qty}</strong>

          <button
            onclick="changeQty('${product.id}', 1)"
          >+</button>

        </div>

        <div>
          <strong>${money(subtotal)}</strong>

          <br>

          <button
            class="btn btn-secondary"
            onclick="removeFromCart('${product.id}')"
          >
            Remove
          </button>
        </div>

      </div>
    `;
  }).join("");

  summary.innerHTML = `
    <h2>Order Summary</h2>

    <p>
      Items:
      <strong>${cart.length}</strong>
    </p>

    <h2>
      Total: ${money(total)}
    </h2>

    <button
      class="btn btn-primary"
      style="width:100%"
      onclick="openCheckout()"
    >
      Checkout →
    </button>
  `;
}

// ==========================================
// CHECKOUT
// ==========================================

function openCheckout() {
  const modal =
    document.getElementById("checkoutModal");

  if (modal) {
    modal.style.display = "flex";
  }
}

function closeCheckout() {
  const modal =
    document.getElementById("checkoutModal");

  if (modal) {
    modal.style.display = "none";
  }
}

function setupCheckout() {
  const form =
    document.getElementById("checkoutForm");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    localStorage.setItem(
      "nokiLastOrder",
      JSON.stringify({
        date: new Date().toISOString(),
        customer: Object.fromEntries(
          new FormData(form)
        ),
        cart: getCart()
      })
    );

    localStorage.removeItem("nokiCart");

    closeCheckout();

    const success =
      document.getElementById("orderSuccess");

    if (success) {
      success.style.display = "block";
    }

    updateCartCount();
    renderCartPage();

    showToast("🎉 Order confirmed!");
  });
}

// ==========================================
// FAVOURITES
// ==========================================

function toggleFavourite(id) {
  let favs = JSON.parse(
    localStorage.getItem("nokiFavourites") || "[]"
  );

  if (favs.includes(id)) {
    favs = favs.filter(x => x !== id);
    showToast("Removed from favourites");
  } else {
    favs.push(id);
    showToast("❤️ Added to favourites");
  }

  localStorage.setItem(
    "nokiFavourites",
    JSON.stringify(favs)
  );
}

// ==========================================
// THEME
// ==========================================

function setupTheme() {
  const button =
    document.querySelector("[data-theme]");

  const saved =
    localStorage.getItem("nokiTheme");

  if (saved === "dark") {
    document.body.classList.add("dark");
  }

  if (!button) return;

  button.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "nokiTheme",
      dark ? "dark" : "light"
    );

    button.textContent =
      dark ? "☀️" : "🌙";
  });
}

// ==========================================
// CATEGORY MENU
// ==========================================

function setupMenu() {
  const menu = document.getElementById("menu");

  const openButton =
    document.querySelector("[data-open-menu]");

  const closeButton =
    document.querySelector("[data-close-menu]");

  if (openButton && menu) {
    openButton.addEventListener("click", () => {
      menu.classList.add("open");
    });
  }

  if (closeButton && menu) {
    closeButton.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  }

  if (menu) {
    menu.addEventListener("click", e => {
      if (e.target === menu) {
        menu.classList.remove("open");
      }
    });
  }

  document
    .querySelectorAll(".cat-menu")
    .forEach(item => {

      item.addEventListener("click", () => {
        item.classList.toggle("open");
      });

    });
}

// ==========================================
// SELLER
// ==========================================

function renderSellerList() {
  const list =
    document.getElementById("sellerList");

  if (!list) return;

  const products = getProducts();

  const sellerProducts =
    JSON.parse(
      localStorage.getItem("nokiSellerProducts") || "[]"
    );

  if (!sellerProducts.length) {
    list.innerHTML = `
      <div class="empty">
        <h3>No demo products yet.</h3>
        <p>Publish a product from the seller form.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = sellerProducts.map(id => {

    const product =
      products.find(p => p.id === id);

    if (!product) return "";

    return `
      <div class="cart-row">

        <img src="${product.image}" alt="${product.name}">

        <div>
          <h3>${product.name}</h3>
          <p>${money(product.price)}</p>
        </div>

        <div>
          ${product.category}
        </div>

        <div>
          Stock: ${product.stock}
        </div>

      </div>
    `;

  }).join("");
}

// ==========================================
// SELLER FORM
// ==========================================

function setupSellerForm() {
  const form =
    document.getElementById("sellerForm");

  if (!form) return;

  const imageInput =
    document.getElementById("image");

  const preview =
    document.getElementById("preview");

  if (imageInput && preview) {

    imageInput.addEventListener("change", () => {

      const file = imageInput.files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = e => {
        preview.src = e.target.result;
      };

      reader.readAsDataURL(file);
    });

  }

  form.addEventListener("submit", e => {

    e.preventDefault();

    const products = getProducts();

    const name =
      document.getElementById("f_name").value.trim();

    const category =
      document.getElementById("f_category").value;

    const price =
      Number(document.getElementById("f_price").value);

    const oldPrice =
      Number(document.getElementById("f_oldPrice").value || 0);

    const stock =
      Number(document.getElementById("f_stock").value);

    const seller =
      document.getElementById("f_seller").value.trim();

    const description =
      document.getElementById("f_description").value.trim();

    const specs =
      document.getElementById("f_specs").value.trim();

    if (!name || !price || !stock || !seller) {
      showToast("⚠️ Fill all required fields");
      return;
    }

    const id =
      "seller_" + Date.now();

    const product = {
      id,
      name,
      category,
      price,
      oldPrice,
      stock,
      seller,
      rating: 5,
      description,
      specs,
      image:
        preview && preview.src
          ? preview.src
          : "https://via.placeholder.com/700x500?text=Noki+Product"
    };

    products.push(product);

    saveProducts(products);

    let sellerProducts =
      JSON.parse(
        localStorage.getItem("nokiSellerProducts") || "[]"
      );

    sellerProducts.push(id);

    localStorage.setItem(
      "nokiSellerProducts",
      JSON.stringify(sellerProducts)
    );

    form.reset();

    if (preview) {
      preview.removeAttribute("src");
    }

    showToast("🎉 Product published!");

    renderSellerList();
  });
}

// ==========================================
// SEARCH FROM URL
// ==========================================

function applyURLSearch() {
  const params =
    new URLSearchParams(location.search);

  const search =
    params.get("search");

  const input =
    document.getElementById("productSearch");

  if (search && input) {
    input.value = search;
  }
}

// ==========================================
// INIT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  getProducts();

  renderHome();

  renderProductsPage();

  renderCartPage();

  renderSellerList();

  updateCartCount();

  setupGlobalSearch();

  setupCheckout();

  setupTheme();

  setupMenu();

  setupSellerForm();

  applyURLSearch();

});
