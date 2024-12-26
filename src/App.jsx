import { useEffect, useState } from "react";
import "./App.css";
import ServiceItem from "./components/serviceItem/ServiceItem";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export function App1() {
  const [data, setData] = useState([]);
  const [loarding, setLoading] = useState(false);
  console.log(data);

  useEffect(() => {
    setLoading(true);
    const api = "https://dummyjson.com/products";
    async function getData() {
      const res = await fetch(api);
      const data = await res.json();
      setData(data.products);
      setLoading(false);
    }
    getData();
  }, []);

  if (loarding) {
    return <p>Загрузка...</p>;
  }

  return (
    <>
      <Header />
      <div className="container">
        {data.map((el) => {
          return (
            <ServiceItem
              text={el.title}
              prise={el.price}
              key={el.id}
              id={el.id}
              image={el.images}
              rating={el.rating}
              setData={setData}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import { AppProvider } from "./contekxt";

export function App2() {



  return (
    <div>
      <AppProvider>
      <AddForm />
        <TodoList 
        />
      </AppProvider>
  
    </div>
  );
}
