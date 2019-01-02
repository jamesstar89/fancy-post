import React from 'react';
import * as isValueType from 'is-value-type';
import { ImageList } from '../styles/styled';

export default (typeHereValue) => {
  const checkIsArrayImage = typeHereValue
    ? isValueType.isArrayImage(typeHereValue) : false;
  if (checkIsArrayImage
    && checkIsArrayImage.length > 1) {
    return (
      <ImageList>
        {checkIsArrayImage.map(item => <div key={item}>{item}</div>)}
      </ImageList>
    );
  }
};
