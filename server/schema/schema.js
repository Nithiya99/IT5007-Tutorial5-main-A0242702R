const graphql = require("graphql");
const _ = require("lodash");
const Customer = require("../models/customer");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    hp: { type: GraphQLString },
    timestamp: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: CustomerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        return Customer.findById(args.id);
      },
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parent, args) {
        return Customer.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCustomer: {
      type: CustomerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        hp: { type: new GraphQLNonNull(GraphQLString) },
        timestamp: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let customer = new Customer({
          name: args.name,
          hp: args.hp,
          timestamp: args.timestamp,
        });
        return customer.save();
      },
    },
    removeCustomer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Customer.findByIdAndDelete(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
