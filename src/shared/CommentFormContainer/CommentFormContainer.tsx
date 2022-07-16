import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateComment } from '../../store/store';
import { CommentForm, IForm } from '../CommentForm/CommentForm';
import { useForm } from "react-hook-form";



export function CommentFormContainer() {
  const value = useSelector<TRootState, string>(state => state.commentText);
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm<IForm>()

  function handleChange (e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }
  
  return (
    <CommentForm
      changeHandle={handleChange}
      submitHandle={handleSubmit}
      value={value}
      register={register}
    />
  );
}
