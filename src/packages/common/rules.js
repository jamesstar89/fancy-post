import { isUrl, isImage, isPost } from '../utils/isType';
import fields from '../utils/fields';

export default (entry, schema) => {
  if (isUrl(entry) && schema.includes('weburl')) {
    return fields('weburl');
  }

  if (isImage(entry) && schema.includes('image')) {
    return fields('image');
  }

  if (isPost(entry) && schema.includes('post')) {
    return fields('post');
  }
};
