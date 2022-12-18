const express = require("express");
const logger = require("morgan");
const path = require("path")
const cors = require("cors");
const app = express();
const passport = require('passport');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
let $ = jQuery = require('jquery')(window);
require('dotenv').config();

const sequelize = require('./models/index');
const user_route = require('./routes/userRoutes');
const role_route = require("./routes/roleRoutes");
const brand_route = require("./routes/brandRoutes");
const category_route = require("./routes/categoryRoutes");
const order_route = require("./routes/orderRoutes");
const order_product_route = require("./routes/orderproductRoutes");
const payment_route = require("./routes/paymentRoutes");
const product_route = require("./routes/productRoutes");
const product_size_route = require("./routes/productsizeRoutes");
const shipping_route = require("./routes/shippingRoutes");

const { googlePassport } = require("./auth/google");
const Relation = require('./models/relation.model')



process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '/config')
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(passport.initialize());
googlePassport(passport);

// Use static files
app.use(express.static(path.join(__dirname, "../public")));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// Routes
require("./routes/viewRoutes")(app);
app.use(user_route);
app.use(role_route);
app.use(category_route);
app.use(brand_route);
app.use(product_route);
app.use(product_size_route);
app.use(order_product_route);
app.use(order_route);
app.use(shipping_route);
app.use(payment_route);
Relation()

// Handle unauthorized requests
const port = process.env.PORT || 7000;
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.sendFile(path.join(__dirname, "/views/404.html"));
  }
});

sequelize.sync().then(async (result) => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}).catch(error => {
  console.log(error)
})