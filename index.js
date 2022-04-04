import express from 'express';
import pets from './pets.js';

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.get('/animals/:type', (req, res) => {
  const {
    params: { type }
  } = req;
  const species = ['dogs', 'cats', 'rabbits'];
  const availablePets = pets[type];
  species.includes(type.toLowerCase())
    ? res.render('animalType', { type, availablePets })
    : res.render('notFound', { msg: `Sorry, we don't have those animals here` });
});

app.get('/animals/:type/:id', (req, res) => {
  const {
    params: { type, id }
  } = req;
  const availablePets = pets[type] || [];
  const pet = availablePets.find(pet => pet.id === parseInt(id));
  pet
    ? res.render('singlePet', { pet })
    : res.render('notFound', { msg: `The pet you are trying to visit, is not here` });
});

app.get('*', (req, res) =>
  res.render('notFound', { msg: `The link you are trying to access doesn't exist` })
);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
