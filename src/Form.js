import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formData, formSelector } from "./redux/slices/form";

const Form = () => {
  const dispatch = useDispatch();
  const selector = useSelector(formSelector);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    dispatch(formData(data));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test" ref={register} />

        <input name="exampleRequired" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
