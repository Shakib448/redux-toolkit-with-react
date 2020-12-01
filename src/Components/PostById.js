import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { totalNumber, allPostById } from "../redux/slices/count";

const PostById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postById, loading } = useSelector(totalNumber);

  useEffect(() => {
    dispatch(allPostById());
  }, [postById, id]);

  return (
    <div>
      <h1>
        see Id is working <strong>{id}</strong>{" "}
      </h1>
      {!loading ? (
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          <>
            <li>
              {" "}
              <strong>Title: </strong> {postById.title}
            </li>
            <li>
              {" "}
              <strong>Body: </strong> {postById.body}
            </li>
          </>
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default PostById;
