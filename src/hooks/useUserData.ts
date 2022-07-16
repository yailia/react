import { useEffect } from "react";
import { meRequestAsync } from "../store/me/action";
import {  useDispatch, useSelector } from "react-redux";
import { TRootState } from "../store/store";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData () {
  const token = useSelector<TRootState, string>(state => state.token);
  const data = useSelector<TRootState, IUserData>(state => state.me.data);
  const dispatch = useDispatch();
    useEffect(() => {
      if(!token) return;
      //@ts-ignore
      dispatch(meRequestAsync());
    }, [token]);
    return [data]
}