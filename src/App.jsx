import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="p-4 absolute w-full top-[120px] md:flex md:items-center md:flex-col">
        <Todos />
      </div>
    </div>
  );
}

export default App;
