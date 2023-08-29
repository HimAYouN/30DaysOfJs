import "./App.css";

// import Card from "./components/Card";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";

function App() {
  
  const products = [
    {
      id : 'p1',
      title : "Nirma",
      itemDate:{
        Day: 20,
        Month : "August",
        Year : 2000
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
      <Products items={products}/>
      {/* <Card>

      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate.itemDay} month={response[0].itemDate.itemMonth} year={response[0].itemDate.itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate.itemDay} month={response[1].itemDate.itemMonth} year={response[1].itemDate.itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate.itemDay} month={response[2].itemDate.itemMonth} year={response[2].itemDate.itemYear}></ItemDate>

      
      </Card> */}
    </div>
  );
}

export default App;
