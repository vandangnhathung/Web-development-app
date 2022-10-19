const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"long","age":20}'));
  console.log(isValidJSON('{"name":"hair",age:"15"}'));
  console.log(isValidJSON(null));