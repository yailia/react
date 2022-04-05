import React from "react";

function pickFromSynteticEvent<T extends HTMLElement>() {
  return <K extends keyof T> (key: K) =>
  <E extends ((t: T[K]) => void )> (fn: E) =>
  (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key])
}

export const getValue = pickFromSynteticEvent<HTMLInputElement>()('value')
export const getChecked = pickFromSynteticEvent<HTMLInputElement>()('checked')