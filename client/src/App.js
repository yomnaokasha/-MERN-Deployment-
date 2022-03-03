import "./App.css";
import { Router } from "@reach/router";
import PetForm from "./componants/form";
import Edit from "./componants/edit";
import PetsList from "./componants/allpets";
import DisplayOne from "./componants/onepet";

function App() {
  return (
    <div className="App">
      <Router>
        <PetsList path="/" />
        <PetForm path="/pets/new" />
        <Edit path="/pets/:id/edit" />
        <DisplayOne path="/pets/:id" />
      </Router>
    </div>
  );
}

export default App;
