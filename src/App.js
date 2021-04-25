import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./actions/myActions";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.myFirstReducer);

  return (
    <div className="App">
      <center>
        <h1>{number}</h1>
        <h4>NUMBER</h4>
      </center>
      <center>
        <button onClick={() => dispatch(increase())}>+ Increase</button>

        <button onClick={() => dispatch(decrease())}>- Decrease</button>
      </center>
    </div>
  );
}

export default App;
