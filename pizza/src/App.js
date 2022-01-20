import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Introduction from "./Components/Introduction";
import Welcome from "./Components/Welcome";
import MenuAndToppings from "./Components/MenuAndToppings";
import Form from "./Components/Form";
import DatePicker from "./Components/Datepicker";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route index element={<Welcome />} />
          <Route path="form" element={<Form />} />
          <Route path="menuandtoppings" element={<MenuAndToppings />} />
          <Route path="introduction" element={<Introduction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="formandbook" element={<Form />} />
          <Route path="introduction" element={<Introduction />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
        <div className="App">
      <Welcome />
      <Introduction />
      <MenuAndToppings />
      <Form />
    </div>


    
    
    */
