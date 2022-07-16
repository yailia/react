import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";


export interface IForm {
  commentText: string;
}
interface ICommentFormProps {
  value: string;
  submitHandle: UseFormHandleSubmit<IForm>;
  changeHandle: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  register: UseFormRegister<IForm>
}

export function CommentForm(props: ICommentFormProps) {

  return (
    <form className={styles.form} onSubmit={props.submitHandle((data) => {
      console.log(data);
      alert("Форма отправлена");
    })}>
      <textarea 
        className={styles.input}
        value={props.value} 
        {...props.register("commentText", {
          onChange: (e) => props.changeHandle(e)
        })}
      />
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
