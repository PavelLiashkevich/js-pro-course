import "./App.css";
import { CustomRouter } from "./CustomRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomRouter />
      </div>
    </Provider>
  );
}

export default App;
