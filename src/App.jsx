import "./App.css";
import Products from "./COMPONENTS/Products";
import Header from "./COMPONENTS/Header";
import ContextProvider from "./COMPONENTS/ContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <ContextProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={600}
        hideProgressBar={true}
      />
      <Header />
      <Products />
    </ContextProvider>
  );
}

export default App;
