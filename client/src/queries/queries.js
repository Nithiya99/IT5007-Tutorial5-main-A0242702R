import { gql } from "apollo-boost";

const getWaitListQuery = gql`
  {
    customers {
      name
      hp
      timestamp
    }
  }
`;

const addCustomerMutation = gql`
  mutation ($name: String!, $hp: String!, $timestamp: String!) {
    addCustomer(name: $name, hp: $hp, timestamp: $timestamp) {
      name
      hp
      timestamp
    }
  }
`;

export { getWaitListQuery, addCustomerMutation };
