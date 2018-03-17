const { getModels } = require("./src/middleware/model.middleware");

(async () => {
    const models = await getModels();
})();