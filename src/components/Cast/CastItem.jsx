import { HiOutlineEmojiHappy } from 'react-icons/hi';

export const CastItem = ({ photo, name, character }) => {
  return (
    <li>
      {photo ? (
        <img
          src={`https://image.tmdb.org/t/p/original${photo}`}
          alt={name}
          width="128"
        />
      ) : (
        <HiOutlineEmojiHappy size="128px" />
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
