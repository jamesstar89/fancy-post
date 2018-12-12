// eslint-disable-next-line
const urlReg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
// eslint-disable-next-line
const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;

const isImage = (entry) => {
  const result = (entry.match(new RegExp(imageReg)) && true) || false;

  return result ? 'image' : false;
};
const isUrl = (entry) => {
  const result = (entry.match(new RegExp(urlReg)) && !isImage(entry) && true) || false;

  return result ? 'url' : false;
};
const isPost = (entry) => {
  const result = (!isUrl(entry) && true) || false;

  return result ? 'post' : false;
};

export {
  isImage,
  isUrl,
  isPost
};
