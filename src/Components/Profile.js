import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  totalCount,
  totalNumber,
  allPost,
  allPostById,
  deleteCountById,
  deletePostById,
} from "../redux/slices/count";
import Form from "./Form";

const Profile = () => {
  const dispatch = useDispatch();
  const { count, nitCount, users, loading } = useSelector(totalNumber);

  useEffect(() => {
    dispatch(allPost());
  }, [allPost, dispatch]);

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
    <div>
      <>
        <Form />
      </>
      <h1>My Amazing Counter</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button> <br /> <br />
      <button onClick={() => submitCount(count)}>Submit Count</button>
      <ul style={{ listStyleType: "none" }}>
        {nitCount.map(({ total }, id) => (
          <div>
            <li key={id}>{total}</li>
            <button onClick={() => dispatch(deleteCountById(id))}>
              delete
            </button>
          </div>
        ))}
      </ul>
      <ul>{users.length}</ul>
      <ul style={{ listStyleType: "none" }}>
        {!loading ? (
          <>
            {users.map((user) => (
              <>
                <div key={user.id}>
                  <li> {user.title} </li>
                  <Link to={`/post/${user.id}`}>
                    <button onClick={() => onView(user.id)}>View</button>
                  </Link>
                  <button onClick={() => dispatch(deletePostById(user.id))}>
                    delete
                  </button>
                </div>
              </>
            ))}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
};

export default Profile;
