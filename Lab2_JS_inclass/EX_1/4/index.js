const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"name":"nhat","age":20}'));
console.log(isValidJSON('{"name":"Hung",age:"15"}'));
console.log(isValidJSON(null));
