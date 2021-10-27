import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Nav, Tab, Card } from "react-bootstrap";

import WaitList from "./components/WaitList";
import AddCustomer from "./components/AddCustomer";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h2">
            Hotel California Waiting List Portal
          </span>
        </nav>
        <div className="container pt-5">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Card>
              <Card.Header>
                <Nav variant="pills">
                  {/* <Nav.Item>
                    <Nav.Link eventKey="first">Home</Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link eventKey="first">Waitlist</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      // onClick={(e) => {
                      //   if (this.props.data.customers > 7) {
                      //     alert("No more reservations can be made.");
                      //   }
                      // }}
                      eventKey="second"
                    >
                      Add Reservation
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Tab.Content>
                  {/* <Tab.Pane eventKey="first">lalaa</Tab.Pane> */}
                  <Tab.Pane eventKey="first">
                    <WaitList />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <AddCustomer />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
