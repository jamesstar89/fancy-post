# Fancy post

![Fancy post](screenshots/fancy-post-example-1.png) <!-- .element height="100%" width="100%" -->

## Motivation
With Facebook, YouTube and more services giving you the power to publish user driven content like posts and videos, this library will help you implement `Fancy post` so your users can get excited about publishing their own content through your app.

## Supported React versions
This package requires React 16.6.0 and higher.

## License
### Commercial license
If you want to use Fancy post to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary.

### Open source license
If you are creating an open source application under a license compatible with the GNU GPL license v3, you may use Fancy post under the terms of the GPLv3.

## Usage
Type some text, “hello kitty”, into the textarea and the `Rules` will help determine which `FormType` to render, such as, `Post`, `Web Url` or `Image`. After this, fine-tune your form details and click Save.

## Styles
This library leverages a few different library styles and patterns, such as `Ant Design`, `Material UI`, `SASS` and `BEM (Block Element and Modifier)`.

## Rules
Use `Rules` in combination with `Schema` and `TypeHere` to help render which `FormType` will show. If user types, `https://tenor.com/search/kitten-gifs hello kitty`, then the `weburl` FormType will be rendered.

## API

### Schema type
Create and use Schema types, there are 3 out-of-the-box schema types.

#### Post
`Use the Post schema.`

```jsx
fancyPost.schema({
  type: 'post',
  fields: [‘title', 'description', 'url', 'image']
});
```

#### Web Url
`Use the Web Url schema.`

```jsx
fancyPost.schema({
  type: 'weburl',
  fields: [‘title', 'description', 'url', 'image']
});
```

#### Image
`Use the Image schema.`

```jsx
fancyPost.schema({
  type: 'image',
  fields: ['title', 'description', 'url', 'image']
});
```

#### Create your own

```jsx
fancyPost.schema({
  type: 'video',
  fields: ['title', 'description', 'url', 'image']
});
```

### Component: TypeHere
`import {  TypeHere } from '../index.js';`

| Name | Type | Description |
| ------ | ------ | ------ |
| preview | component | Render TypeHere results |

### Component: Preview
`import {  Preview } from '../index.js';`

| Name | Type | Description |
| ------ | ------ | ------ |
| showResponsive | prop | Show render at width 400px |

### Component: FormType
`import {  FormType } from '../index.js';`

| Name | Type | Description |
| ------ | ------ | ------ |
| default | string | String for Schema types, such as: post, weburl or image |

## Example
```jsx
import React, { Component } from 'react';
import { TypeHere, Preview, FormType } from '../index.js';
import { Wrapper } from './styles/js/styled';
import './styles/scss/styles.scss';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <TypeHere
          preview={Preview}
        />
        <FormType default="post" />
      </Wrapper>
    );
  }
}

export default App;
```

By Puff Stream 🚀🐳, 2018