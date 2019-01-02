import * as isValueType from 'is-value-type';
import * as templates from './templates';

const bibleReg = /([a-z]+)\s*(\d+)(:(\d+))/;
const markdownReg = /(#)(\s*)([a-z]+)/;

const isBibleVerse = typeHereValue => typeHereValue.match(new RegExp(bibleReg));
const isMarkdownReg = typeHereValue => typeHereValue.match(new RegExp(markdownReg));

export const formTemplate = (typeHereValue, activeOption) => {
  const newModel = {};
  if ((isMarkdownReg(typeHereValue) && !activeOption)
    || activeOption === 'markdown') {
    newModel.template = templates.markdownTemplate(typeHereValue);
    newModel.type = 'markdown';
    return newModel;
  }
  if ((isBibleVerse(typeHereValue) && !activeOption)
    || activeOption === 'sermon') {
    newModel.template = templates.sermonTemplate(typeHereValue);
    newModel.type = 'sermon';
    return newModel;
  }
  if ((isValueType.isPost(typeHereValue) && !activeOption)
    || activeOption === 'post') {
    newModel.template = templates.postTemplate(typeHereValue);
    newModel.type = 'post';
    return newModel;
  }
  if ((isValueType.isUrl(typeHereValue) && !activeOption)
    || activeOption === 'url') {
    newModel.template = templates.urlTempate(typeHereValue);
    newModel.type = 'url';
    return newModel;
  }
  if ((isValueType.isImage(typeHereValue) && !activeOption)
    || activeOption === 'image') {
    newModel.template = templates.imageTemplate(typeHereValue);
    newModel.type = 'image';
    return newModel;
  }
};

export default formTemplate;
