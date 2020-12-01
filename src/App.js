import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  totalCount,
  totalNumber,
  allPost,
} from "./redux/slices/count";

function App() {
  const dispatch = useDispatch();
  const { count, nitCount, users, status } = useSelector(totalNumber);

  useEffect(() => {
    if (status === "idle") dispatch(allPost());
  }, [allPost, dispatch]);

  const handleUp = () => {
    dispatch(increment());
  };
  const handleDown = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const submitCount = (total) => {
    dispatch(totalCount({ total }));
  };
  return (
    <div className="App">
      <h1>My Amazing Counter</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button> <br /> <br />
      <button onClick={() => submitCount(count)}>Submit Count</button>
      <ul style={{ listStyleType: "none" }}>
        {nitCount.map(({ total }, index) => (
          <li key={index}>{total}</li>
        ))}
      </ul>
      <ul>{users.length}</ul>
      <ul>
        {status === "success" && (
          <>
            {users.map((user) => (
              <li key={user.id}> {user.title} </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default App;
