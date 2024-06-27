import { Provider } from "react-redux";
import { store } from "./components/state/store";
import RepositoriesList from "./components/repositories-list/RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
