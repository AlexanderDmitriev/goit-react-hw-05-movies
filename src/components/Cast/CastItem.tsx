import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { CastStyledItem, CastText, ActorsPhoto } from './CastStyled';
import {ICastItem} from '../Interfaces/ICastItem';

export const CastItem: React.FunctionComponent<ICastItem> = ({ photo, name, character }) => {

  return (
    <CastStyledItem>
      {photo ? (
        <ActorsPhoto
          src={`https://image.tmdb.org/t/p/original${photo}`}
          alt={name}
          width="128"
        />
      ) : (
        <HiOutlineEmojiHappy size="128px" />
      )}
      <CastText>{name}</CastText>
      <CastText>{character}</CastText>
    </CastStyledItem>
  );
};
