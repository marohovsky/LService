import Customers from "./Customers";
import Footer from "./Footer";
import Header from "./Header";
import Razbor from "./Razbor";
import RepairAuto from "./RepairAuto";
import RepairServices from "./repair-services/RepairServices";

function App() {
  return (
    <div className="App space-y-6">
      <Header/>
      <RepairAuto/>
      <RepairServices/>
      <Razbor/>
      <Customers/>
      <Footer/>
    </div>
  );
}

export default App;
