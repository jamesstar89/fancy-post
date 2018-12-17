const applyRules = (entry, settings) => settings.schema.filter((schemaType) => {
  if (!settings.rules[schemaType](entry)) {
    return false;
  }
  return true;
}).map(type => ({
  types: settings.types[type],
  templates: settings.templates,
}));

const fields = (fieldTypeSchema) => {
  const fieldSchema = fieldTypeSchema[0];
  if (fieldSchema.types.fields && fieldSchema.types.fields.length > 0) {
    return fieldSchema.types.fields.map(field => fieldSchema.templates[field]);
  }
  return false;
};

// eslint-disable-next-line
export const getFormType = (entry, settings) => fields(applyRules(entry, settings));

export default getFormType;
