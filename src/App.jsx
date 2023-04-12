import Header from "./components/Header";
import Box from "./components/Box";

function App() {
  return (
    <div className="App w-full h-full">
      <Header />
      <div className="flex justify-center items-center">
        <Box />
      </div>
    </div>
  );
}

export default App;
