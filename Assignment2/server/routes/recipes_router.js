const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");

// GET route to fetch all recipes [/recipe]
router.get("/", (req, res) => { 
    Recipe.find({})
        .then((recipes) => {
            res.json(recipes); 
        })
        .catch((err) => {
            res.status(500).send({ message: "Error fetching recipes", error: err.message });
        });
});


// POST route to add a recipe to our Collection [/recipe]
router.post("/", (req, res) => {
    const { name, description, difficulty, ingredients, steps } = req.body;
    console.log(req.body);

    // Create a new recipe instance
    const newRecipe = new Recipe({
        name,
        description,
        difficulty,
        ingredients,
        steps,
    });

    newRecipe
    .save()
    .then((savedRecipe) => {
        res.status(201).json(savedRecipe);
    })
    .catch((err) => {
        res.status(400).json({ message: "Failed to create recipe", error: err.message });
    });
});

// GET route with param of id to find and send content to the client app [/recipe/:id]
router.get("/:id", (req, res) => {
    Recipe.findById(req.params.id)
    .then((recipe) => {
        if (!recipe) {
            return res.status(404).send({ message: "Recipe not found" });
        }
        res.json(recipe);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

// PUT route with param of id to update a recipe in our Collection [/recipe/:id]
router.put("/:id", (req, res) => {
    Recipe.findByIdAndUpdate(req.params
    .id, req.body, { new: true })
    .then((updatedRecipe) => {
        if (!updatedRecipe) {
            return res.status(404).send({ message: "Recipe not found" });
        }
        res.json(updatedRecipe);
    }) 
    .catch((err) => {
        res.status(500).send(err); 
    });
});
    
// DELETE route with param of id to delete a recipe in our Collection [/recipe/:id]
router.delete("/:id", (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
    .then((deletedRecipe) => {
        if (!deletedRecipe) {
            return res.status(404).send({ message: "Recipe not found" });
        }
        res.json(deletedRecipe);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;