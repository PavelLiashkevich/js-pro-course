import React, { useState } from "react";
import { Input } from "../Input";
import { emojiesList } from "../emojiesList";
import { EmojiList } from "../EmojiList";
import "./search.css";

export const Search = () => {
  const [arrayEmojies, setArrayEmojies] = useState(emojiesList);

  const mySearch = (value) => {
    const arrayEmojies = emojiesList.filter((emoji) => {
      return (
        emoji.keywords.toLowerCase().includes(value.toLowerCase()) ||
        emoji.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setArrayEmojies(arrayEmojies);
  };
  return (
    <div className="search">
      <div className="input-container">
        <Input
          onChange={(elem) => {
            mySearch(elem.target.value);
          }}
        />
      </div>
      <EmojiList array={arrayEmojies} />
    </div>
  );
};
