const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Serve static files from the client/public directory
// Keeping the assets in the public directory allows direct access, better organization,and improved performance for static files.
app.use(express.static(path.join(__dirname, "../client/public")));

let storage = [
  {
    name: "Croissant",
    stock: 12,
    price: 1.7,
    image: "/assets/images/croissant.png",
  },
  {
    name: "Bread",
    stock: 7,
    price: 1.5,
    image: "/assets/images/bread.png",
  },
  {
    name: "Cupcake",
    stock: 25,
    price: 1.6,
    image: "/assets/images/cupcake.png",
  },
  {
    name: "Pretzel",
    stock: 18,
    price: 0.8,
    image: "/assets/images/pretzel.png",
  },
  {
    name: "Muffin",
    stock: 31,
    price: 2.3,
    image: "/assets/images/muffin.png",
  },
  {
    name: "Pancake",
    stock: 10,
    price: 1.5,
    image: "/assets/images/pancake.png",
  },
  {
    name: "Waffle",
    stock: 14,
    price: 2.2,
    image: "/assets/images/waffle.png",
  },
  {
    name: "Cake",
    stock: 3,
    price: 8.5,
    image: "/assets/images/cake.png",
  },
];

app.get("/api/storage", urlencodedParser, (req, res) => {
  res.json({ storage });
});

app.post("/api/order", jsonParser, (req, res) => {
  const items = req.body.items;
  let error = "";
  let errorItem = "";

  items.every((item) => {
    const filtered = storage.filter((el) => el.name === item.name);
    const match = filtered.length ? filtered[0] : null;

    if (item.quantity > match.stock) {
      error = `There are not enough ${item.name} in stock`;
      errorItem = match.name;
      return false;
    }

    match.stock = match.stock - item.quantity;
    return true;
  });

  if (error) {
    return res.status(400).json({ error, errorItem });
  }
  res.json({ message: "success" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
