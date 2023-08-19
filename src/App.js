import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Cart></Cart>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
