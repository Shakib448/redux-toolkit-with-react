import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import {
  decrement,
  increment,
  totalCount,
  totalNumber,
  allPost,
  allPostById,
} from "./redux/slices/count";

function App() {
  const dispatch = useDispatch();
  const { count, nitCount, users, status, singleUser } = useSelector(
    totalNumber
  );

  useEffect(() => {
    if (status === "idle") dispatch(allPost());
  }, [allPost, dispatch]);

  useEffect(() => {
    dispatch(allPostById());
  }, [singleUser]);

  const onView = (id) => {
    dispatch(allPostById(id));
  };

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
      <>
        <Form />
      </>
      <h1>My Amazing Counter</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button> <br /> <br />
      <button onClick={() => submitCount(count)}>Submit Count</button>
      <ul style={{ listStyleType: "none" }}>
        {nitCount.map(({ total }, index) => (
          <div>
            <li key={index}>{total}</li>
            <button onClick={() => onView(index)}>delete</button>
          </div>
        ))}
      </ul>
      <ul>{users.length}</ul>
      <ul style={{ listStyleType: "none" }}>
        {status === "success" && (
          <>
            {users.map((user) => (
              <>
                <div key={user.id}>
                  <li> {user.title} </li>
                  <button onClick={() => onView(user.id)}>View</button>
                </div>
              </>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default App;
