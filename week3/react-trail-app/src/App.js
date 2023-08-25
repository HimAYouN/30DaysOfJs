import "./App.css";

import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";


function App() {
  
  const response = [
    {
      itemName : "Nirma",
      itemDate:{
        itemDay: 20,
        itemMonth : "August",
        itemYear : 2000
      },
    },
    {
      itemName : "SrufExel",
      itemDate:{
        itemDay: 10,
        itemMonth : "July",
        itemYear : 2010
      }
    },
    {
      itemName : "555",
      itemDate:{
        itemDay: "02",
        itemMonth : "May",
        itemYear : 2012
      }
    }
  ];
  return (
    <div>
      <Card>

      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate.itemDay} month={response[0].itemDate.itemMonth} year={response[0].itemDate.itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate.itemDay} month={response[1].itemDate.itemMonth} year={response[1].itemDate.itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate.itemDay} month={response[2].itemDate.itemMonth} year={response[2].itemDate.itemYear}></ItemDate>

      
      </Card>
    </div>
  );
}

export default App;
