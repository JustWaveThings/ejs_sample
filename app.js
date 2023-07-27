const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const mascots = [
    { name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012 },
    { name: 'Tux', organization: 'Linux', birth_year: 1996 },
    { name: 'Moby Dock', organization: 'Docker', birth_year: 2013 },
  ];
  const tagline = 'No programming concept is complete without a cute animal mascot.';
  res.render('pages/index', { title: 'Home', mascots, tagline });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
