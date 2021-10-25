import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import WaitList from "./components/WaitList";
import AddCustomer from "./components/AddCustomer";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hotel California Waiting List Portal</h1>
        <WaitList />
        <AddCustomer />
      </div>
    </ApolloProvider>
  );
}

export default App;
