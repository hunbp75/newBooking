import Button from "./Button";
import Layout from "./Layout";
import Introduction from "./Introduction";
import MenuAndToppings from "./MenuAndToppings";

const Welcome = () => {
  return (
    <div>
      <div className="Welcome">
        <h1 id="fabpizza">The Faboulos Pizza at Leányfalu</h1>
        <Layout />
      </div>
      <Introduction />
      <MenuAndToppings />
    </div>
  );
};

export default Welcome;
