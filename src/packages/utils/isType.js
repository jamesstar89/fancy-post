// eslint-disable-next-line
const urlReg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
// eslint-disable-next-line
const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;

const isImage = entry => (entry.match(new RegExp(imageReg)) && true) || false;
const isUrl = entry => (entry.match(new RegExp(urlReg)) && !isImage(entry) && true) || false;
const isPost = entry => (!isUrl(entry) && true) || false;

export {
  isImage,
  isUrl,
  isPost
};
