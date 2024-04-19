import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import EventType from "./components/Patterns/CategoryPatterns/EventType";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import AddEventPage from "./components/AddEventPage/AddEventPage";
import AccountPage from "./components/AccountPage/AccountPage";
import EventPage from "./components/EventPage/EventPage";
import BuyPage from "./components/BuyPage/BuyPage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/premier" element={<EventType header="Категорії: " subtitle="Прем'єра" />}></Route>
          <Route path="/children" element={<EventType header="Категорії: " subtitle="Для дітей" />}></Route>
          <Route path="/standup" element={<EventType header="Категорії: " subtitle="Стендапи" />}></Route>
          <Route path="/concerts" element={<EventType header="Категорії: " subtitle="Концерти" />}></Route>
          <Route path="/theater" element={<EventType header="Категорії: " subtitle="Театри" />}></Route>
          <Route path="/circus" element={<EventType header="Категорії: " subtitle="Цирк" />}></Route>
          <Route path="/vpo" element={<EventType header="Категорії: " subtitle="ВПО" />}></Route>
          <Route path="/education" element={<EventType header="Категорії: " subtitle="Освіта" />}></Route>
          <Route path="/auth" element={<AuthorizationPage />}></Route>
          <Route path="/addevent" element={<AddEventPage />}></Route>
          <Route path="/cabinet" element={<AccountPage />}></Route>
          <Route path="/liked" element={<EventType header="Улюблені " subtitle="заходи:" />}></Route>
          <Route path="/myevents" element={<EventType header="Мої " subtitle="заходи:" />}></Route>
          <Route path="/event/:category" exact element={<EventPage />}></Route>
          <Route path="/howtobuy" element={<BuyPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
