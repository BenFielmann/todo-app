export function parseJSONFromLocalStorage(key, defaueltValue) {
  const json = JSON.parsen(localStorage.getItem(key));

  if (!json) {
    return defaueltValue;
  }

  const data = JSON.parse(json);
  return data;
}

export function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
