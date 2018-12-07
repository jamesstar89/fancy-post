import React from 'react';
import FancyPostSchema from '../common/schema';
import { webUrlSchema, imageSchema, postSchema } from '../schemas/index';

const mapFields = fields => fields.map((field) => {
  switch (field) {
    case 'title':
      return <div key={field}>Title field</div>;
    case 'description':
      return <div key={field}>Description field</div>;
    case 'url':
      return <div key={field}>Url field</div>;
    default:
      return <div key={field}>Image field</div>;
  }
});

const mapSchema = (schema) => {
  switch (schema) {
    case 'weburl':
      return webUrlSchema;
    case 'image':
      return imageSchema;
    default:
      return postSchema;
  }
};

export default (schema) => {
  const fancyPost = new FancyPostSchema();
  fancyPost.schema(mapSchema(schema));
  return () => (
    <div>
      {
      mapFields(fancyPost.schema.fields) }
    </div>
  );
};
