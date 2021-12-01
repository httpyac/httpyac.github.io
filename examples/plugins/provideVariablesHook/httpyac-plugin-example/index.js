module.exports = (api) => {
  api.hooks.provideVariables.addHook('getCoffee', async function (envs) {
    if (envs && envs.length > 0) {
      return {
        system: envs[0],
        coffee: 'coffee with milk, no sugar',
      }
    }
    return {
      system: 'none',
      coffee: 'black',
    };
  });
  api.hooks.provideEnvironments.addHook('getCoffeeEnvironments', async function () {
    return ['kitchen', 'Riedbachstüberl'];
  });
}
