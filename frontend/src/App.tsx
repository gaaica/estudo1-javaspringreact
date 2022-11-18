import NotificationButton from "./components/NotificationButton";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="sales">
          <div className="main-container">
            <SalesCard></SalesCard>
          </div>
        </section>
      </main>
    </>

  )
}

export default App
