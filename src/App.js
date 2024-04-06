import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import EventType from "./components/Patterns/CategoryPatterns/EventType";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import AddEventPage from "./components/AddEventPage/AddEventPage";


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/premier" element={<EventType category="Прем'єра" />}></Route>
          <Route path="/children" element={<EventType category="Для дітей" />}></Route>
          <Route path="/standup" element={<EventType category="Стендапи" />}></Route>
          <Route path="/concerts" element={<EventType category="Концерти" />}></Route>
          <Route path="/theater" element={<EventType category="Театри" />}></Route>
          <Route path="/circus" element={<EventType category="Цирк" />}></Route>
          <Route path="/vpo" element={<EventType category="ВПО" />}></Route>
          <Route path="/education" element={<EventType category="Освіта" />}></Route>
          <Route path="/auth" element={<AuthorizationPage />}></Route>
          <Route path="/addevent" element={<AddEventPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
