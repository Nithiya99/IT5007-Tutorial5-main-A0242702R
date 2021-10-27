const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Allow cross-origin request
app.use(cors());

// mongodb://127.0.0.1:27017
// Use this cloud DB if local DB does not work or not installed
// mongodb+srv://Nithiya:March1999@nodeapi.gcycb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect("mongodb://127.0.0.1:27017");
mongoose.connection.once("open", () => {
  console.log("Connected to DB");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("Now listening reqestis for port 5000");
});
