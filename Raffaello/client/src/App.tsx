import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="app">
      <Header />{" "}
      <main className="main">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
