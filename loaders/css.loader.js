var cssToObject = require("css-to-object");

module.exports = function (source) {
  const cssObj = cssToObject(source, { camelCase: true });
  for (const key in cssObj) {
    if (cssObj.hasOwnProperty(key)) {
      const value = cssObj[key];
      cssObj[key.substring(1)] = value;
    }
  }
  console.debug("css.loader processing file: ", this.resourcePath);
  console.debug("Processed css obj:", cssObj);

  return `module.exports = ${JSON.stringify(cssObj)}`;
};
