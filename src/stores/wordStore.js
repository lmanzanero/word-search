import { writable } from "svelte/store";

export const word = writable([]);

export const searchWord = async () => {
  const url = 'https://www.wordsapi.com/mashape/words/anxiety?when=2021-07-18T06:45:41.513Z&encrypted=8cfdb18be722949beb9907bfe958babcaeb42c0935fe94b8';
  const res = await fetch(url);
  const data = await res.json(); 
  word.set(data);
} 