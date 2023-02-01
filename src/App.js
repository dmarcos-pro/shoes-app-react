import "./styles/reset.module.scss";
import { Provider } from "react-redux";
import store from "./store";
import Products from "./component/products";
import Filter from "./component/filter";


function App() {
  return (
    <Provider store={store}>
      <main>
        {/* <Filter /> */}
        <Products />
      </main>
    </Provider>
  );
}

export default App;