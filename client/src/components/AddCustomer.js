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
    console.log(this.props);
    // addCustomerMutation();
    if (this.state.name === "" || this.state.hp === "") {
      return alert("Please fill in all fields");
    }
    // else if (this.props.data.customers.length() > 7) {
    //   return alert("N more reservations can be added");
    // }
    else {
      this.props.addCustomerMutation({
        variables: {
          name: this.state.name,
          hp: this.state.hp,
          timestamp: this.state.timestamp,
        },
        refetchQueries: [{ query: getWaitListQuery }],
      });
      this.setState({
        name: "",
        hp: "",
      });
      return alert("Reservation successfully added");
    }
  }
  render() {
    return (
      <form id="add-customer" onSubmit={this.submitForm.bind(this)}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Customer Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="hp" className="col-sm-2 col-form-label">
            Handphone Number
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="hp"
              value={this.state.hp}
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
