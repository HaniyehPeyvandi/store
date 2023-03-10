import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
      <ToastContainer />
    </Provider>
  );
}

export default App;
