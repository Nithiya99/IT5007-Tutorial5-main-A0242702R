import { gql } from "apollo-boost";

const getWaitListQuery = gql`
  {
    customers {
      id
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

const removeCustomerMutation = gql`
  mutation ($id: String!) {
    removeCustomer(id: $id) {
      name
    }
  }
`;

export { getWaitListQuery, addCustomerMutation, removeCustomerMutation };
