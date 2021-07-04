import "./Emoji.css";
import { EmojiList } from "./EmojiList";
import { Search } from "./Search";
import { emojiesList } from "./emojiesList";

export const Emoji = () => {
  return (
    <div className="emoji-container">
      <div>
        <EmojiList array={emojiesList} />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};
