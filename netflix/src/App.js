import Body from "./components/Body";
import { Toaster } from 'react-hot-toast';
import {createBrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Body />
      <Toaster />
    </div>
  );
}

export default App;
