import React from 'react';
import { isPost, isImage, isUrl } from './isType';

const typeConstants = {
  post: 'post',
  image: 'image',
  weburl: 'weburl',
};

const rules = {
  [typeConstants.post]: isPost,
  [typeConstants.image]: isImage,
  [typeConstants.weburl]: isUrl,
};

const types = {
  [typeConstants.post]: {
    fields: ['title', 'description', 'url', 'image']
  },
  [typeConstants.image]: {
    fields: ['title', 'description', 'url', 'image']
  },
  [typeConstants.weburl]: {
    fields: ['title', 'description', 'url', 'image']
  },
};

const templates = {
  title: <div key="title">Title field</div>,
  description: <div key="description">Description field</div>,
  url: <div key="url">Url field</div>,
  image: <div key="image">Image field</div>,
};

const applyRules = (entry, schema) => schema.split(',').filter((schemaType) => {
  if (!rules[schemaType](entry)) {
    return false;
  }
  return true;
}).map(type => types[type]);

const fields = (fieldTypes) => {
  if (fieldTypes && fieldTypes.length > 0) {
    return fieldTypes[0].fields.map(field => templates[field]);
  }
  return false;
};

export const getFormType = (entry, schema) => fields(applyRules(entry, schema));

export default getFormType;
