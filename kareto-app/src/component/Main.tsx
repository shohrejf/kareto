import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { sendGetRequest } from "../function/get";
import { RootState } from "../store/RootState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Wrapper,
  Form,
  WordInput,
  SubmitButton,
  Title,
  ResultWrapper,
} from "./Style";

interface IWord {
  word: string;
}

export const Main: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.resultState);

  const onSubmit = async (data: IWord) => {
    if (data.word) {
      await sendGetRequest(data.word, dispatch);
    } else {
      toast.dark("input any word.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <Wrapper>
      <p>Dictionary Application</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <WordInput {...register("word")} placeholder="Please input any word" />
        <SubmitButton type="submit" value="search" />
      </Form>
      {result.meaningArray.length > 0 ? (
        <ResultWrapper>
          <Title>The meaning of the selected word:</Title>
          {result.meaningArray.map((mean, index) => (
            <p key={index}>
              <span>{index + 1}. </span> {mean}
            </p>
          ))}
        </ResultWrapper>
      ) : null}
      <ToastContainer />
    </Wrapper>
  );
};
