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
            <li key={customer.timestamp}>{customer.name}</li>
            <span>
              <RemoveCustomer key={customer.id} id={customer.id} />
            </span>
          </>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="wait-list">{this.displayCustomers()}</ul>
      </div>
    );
  }
}

export default graphql(getWaitListQuery)(WaitList);
