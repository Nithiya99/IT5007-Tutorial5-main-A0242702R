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
    // console.log(this.state);
    // addCustomerMutation();
    if (this.state.name === "" || this.state.hp === "") {
      return alert("Please fill in all fields");
    } else {
      this.props.addCustomerMutation({
        variables: {
          name: this.state.name,
          hp: this.state.hp,
          timestamp: this.state.timestamp,
        },
        refetchQueries: [{ query: getWaitListQuery }],
      });
      return alert("Reservation successfully added");
    }
  }
  render() {
    return (
      <form id="add-customer" onSubmit={this.submitForm.bind(this)}>
        <div className="form-group row">
          <label for="name" class="col-sm-2 col-form-label">
            Customer Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="hp" class="col-sm-2 col-form-label">
            Handphone Number
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="hp"
              onChange={(e) => this.setState({ hp: e.target.value })}
            />
          </div>
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default graphql(addCustomerMutation, { name: "addCustomerMutation" })(
  AddCustomer
);
