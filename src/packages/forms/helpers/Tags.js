import React from 'react';
import {
  TagAdd,
  TagRemove
} from '../styles/styled';

export default (defaultToRender, context, method) => {
  const beforeText = context === 'url' ? 'web ' : '';
  const afterText = context === 'image' ? ' url' : '';
  const tagStyle = context === 'video'
    || context === 'podcast' ? { opacity: 0.5 } : {};

  if (defaultToRender === context) {
    return (
      <TagRemove>
        edit
        {' '}
        {beforeText}
        {context}
        {afterText}
      </TagRemove>
    );
  }
  if (!defaultToRender !== context) {
    return (
      <TagAdd
        data-tag-name={context}
        style={tagStyle}
        onClick={method}
      >
        add
        {' '}
        {beforeText}
        {context}
        {afterText}
      </TagAdd>
    );
  }
};
