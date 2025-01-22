const express = require("express");
const bodyParser = require("body-parser");
const { error } = require("console");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set up EJS for templating
app.set("view engine", "ejs");

// Sample data
let items = [
  { id: 1, name: "Item 1", category: "Category A" },
  { id: 2, name: "Item 2", category: "Category B" },
];
let loggedIn = false;

// Routes
app.get("/", (req, res) => {
  res.render("index", { items, loggedIn, error: null });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    loggedIn = true;
    res.redirect("/");
  } else {
    res.render("index", { items, loggedIn, error: "Invalid credentials" });
  }
});

app.post("/logout", (req, res) => {
  loggedIn = false;
  res.redirect("/");
});

app.post("/add-item", (req, res) => {
  const { name, category } = req.body;
  const id = items.length + 1;
  items.push({ id, name, category });
  res.redirect("/");
});

app.post("/delete-item/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  items = items.filter(item => item.id !== id);
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
