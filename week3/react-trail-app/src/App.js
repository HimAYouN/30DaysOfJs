import "./App.css";

// import Card from "./components/Card";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";

function App() {
  
  const product = [
    {
      id : 'p1',
      title : "Nirma",
      itemDate:{
        itemDay: 20,
        itemMonth : "August",
        itemYear : 2000
      },
      amount : 100
    },
    {
      id : 'p2',
      title : "SrufExel",
      itemDate:{
        itemDay: 10,
        itemMonth : "July",
        itemYear : 2010
      },
      amount : 100
    },
    {
      id : 'p3',
      title : "555",
      itemDate:{
        itemDay: "02",
        itemMonth : "May",
        itemYear : 2012
      },
      amount : 100
    }
  ];
  return (
    <div>

      <NewProduct/>
      <Products product={product}/>
      
    </div>
  );
}

export default App;
