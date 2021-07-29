export function parseJSONFromLocalStorage(key, defaueltValue) {
  const json = JSON.parsen(localStorage.getItem(key));

  if (!json) {
    return defaueltValue;
  }

  return json;
}

export function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
