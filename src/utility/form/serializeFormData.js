export function serializeFormData(form) {
  const formData = new FormData(form);
  const formObject = {};

  for (const key of formData.keys()) {
    formObject[key] = formData.get(key);
  }

  return formObject;
}
