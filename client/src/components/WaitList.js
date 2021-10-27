import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getWaitListQuery } from "../queries/queries";
import RemoveCustomer from "./RemoveCustomer";

class WaitList extends Component {
  displayCustomers() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Wait List</div>;
    } else {
      return data.customers.map((customer) => {
        return (
          <>
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.hp}</td>
              <td>{new Date(customer.timestamp).toString()}</td>
              <td>
                <RemoveCustomer key={customer.id} id={customer.id} />
              </td>
            </tr>
          </>
        );
      });
    }
  }
  render() {
    console.log(this.props.data.customers);
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Time Stamp</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody id="wait-list">{this.displayCustomers()}</tbody>
        </table>
      </div>
    );
  }
}

export default graphql(getWaitListQuery)(WaitList);
