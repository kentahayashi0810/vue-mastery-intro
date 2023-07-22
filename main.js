const app = Vue.createApp({
  data() {
    return {
<<<<<<< HEAD
=======
      cart: 0,
>>>>>>> L6-start
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
<<<<<<< HEAD
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: ["Small", "Medium", "Large"],
    };
  },
=======
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeItem() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
>>>>>>> L6-start
});
