module.exports = (api) => {
  api.hooks.replaceVariable.addHook('changeXCoffeeHeader', async function (text, type) {
    if (type === 'X-Coffee') {
      return 'Black';
    }
    return text;
  });
}
