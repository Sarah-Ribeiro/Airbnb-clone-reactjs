import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/NavBar";
import data from "./data";

export function App() {
  const cards = data.map((item) => {
    return (
      <div>
        <Card key={item.id} item={item} />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}
