const MenuItem = (props) => {
  return (
    <div>
      <p>
        {props.name}: {props.price} {props.currency}
      </p>
    </div>
  );
};

const MenuAndToppings = (props) => {
  const menu = [
    { id: "1", name: "Margaréta", price: 1360, currency: "Ft" },
    { id: "2", name: "Vegetáriánus", price: 1570, currency: "Ft" },
    { id: "3", name: "Hawaii", price: 1640, currency: "Ft" },
    { id: "4", name: "Frutti di Mare", price: 1840, currency: "Ft" },
    { id: "5", name: "Pizza Nicoise", price: 2000, currency: "Ft" },
    { id: "6", name: "Vasmacska", price: 2100, currency: "Ft" },
    { id: "7", name: "Frankfurti", price: 1790, currency: "Ft" },
    { id: "8", name: "Bismarck", price: 1790, currency: "Ft" },
    { id: "9", name: "Carbonara", price: 1840, currency: "Ft" },
    { id: "10", name: "Inferno", price: 1640, currency: "Ft" },
  ];

  const toppings = [
    { id: "1", name: "sajt", price: 200, currency: "Ft" },
    { id: "2", name: "csirkemell", price: 500, currency: "Ft" },
    { id: "3", name: "tonhal", price: 500, currency: "Ft" },
    { id: "4", name: "kolbász", price: 200, currency: "Ft" },
    { id: "5", name: "kelbimbó", price: 200, currency: "Ft" },
    { id: "6", name: "brokkoli", price: 300, currency: "Ft" },
    { id: "7", name: "gomba", price: 200, currency: "Ft" },
    { id: "8", name: "kukorica", price: 200, currency: "Ft" },
    { id: "9", name: "jalapeno", price: 500, currency: "Ft" },
    { id: "10", name: "sonka", price: 200, currency: "Ft" },
  ];
  return (
    <div className="Menu">
      <div className="Pizzas">
        <h1 id="pizzak">Pizzák</h1>
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            currency={item.currency}
          />
        ))}
      </div>
      <div className="Toppings">
        <h1 id="feltetek">Extra Feltétek</h1>
        {toppings.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            currency={item.currency}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuAndToppings;
