const PetController = require("../controllers/pets.controllers");

module.exports = (app) => {
  app.get("/api/pets", PetController.findAllPets);
  app.get("/api/pets/:id", PetController.findOneSinglePet);
  app.put("/api/pets/:id", PetController.updateExistingPet);
  app.post("/api/pets", PetController.createNewPet);
  app.delete("/api/pets/:id", PetController.deleteAnExistingPet);
};
