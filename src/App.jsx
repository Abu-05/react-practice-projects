import TimerRef from "./TimeRef";
import Navbar from "./pages/Navbar";
import ChangeUser from "./ChangeUser";
import CounterReducer from "./CounterReducer";
import TodoReducerApp from "./TodoReducerApp";
import UsernameSaver from "./UsernameSaver";

function App() {
  return (
    <div>
      <TimerRef/>
      <Navbar/>
      <ChangeUser/>
      <CounterReducer/>
      <TodoReducerApp/>
      <UsernameSaver/>
    </div>
  );
}

export default App;
