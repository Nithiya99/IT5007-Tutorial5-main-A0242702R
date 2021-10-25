import React from "react";
import { graphql } from "react-apollo";
import { addCustomerMutation, getWaitListQuery } from "../queries/queries";

class AddCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hp: "",
      timestamp: new Date(),
    };
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
    // addCustomerMutation();
    this.props.addCustomerMutation({
      variables: {
        name: this.state.name,
        hp: this.state.hp,
        timestamp: this.state.timestamp,
      },
      refetchQueries: [{ query: getWaitListQuery }],
    });
  }
  render() {
    return (
      <form id="add-customer" onSubmit={this.submitForm.bind(this)}>
        <div className="name">
          <label>Customer name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="hps">
          <label>Mobile Number:</label>
          <input
            type="number"
            onChange={(e) => this.setState({ hp: e.target.value })}
          />
        </div>

        <button>Add</button>
      </form>
    );
  }
}

export default graphql(addCustomerMutation, { name: "addCustomerMutation" })(
  AddCustomer
);
