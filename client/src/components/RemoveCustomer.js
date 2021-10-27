import React, { Component } from "react";
import { graphql } from "react-apollo";

import { removeCustomerMutation, getWaitListQuery } from "../queries/queries";

class RemoveCustomer extends Component {
  removeCust() {
    console.log(this.props);
    this.props.removeCustomerMutation({
      variables: {
        id: this.props.id,
      },
      refetchQueries: [{ query: getWaitListQuery }],
    });
  }
  render() {
    return (
      <div>
        <button
          key={this.props.id}
          id={this.props.id}
          onClick={(e) => {
            this.removeCust(this.props.id);
          }}
        >
          x{" "}
        </button>
      </div>
    );
  }
}

export default graphql(removeCustomerMutation, {
  name: "removeCustomerMutation",
})(RemoveCustomer);
