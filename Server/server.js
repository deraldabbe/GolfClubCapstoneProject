const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;


app.use(cors());

app.use(express.json());

const clubController = require('./controllers/clubController');


app.get('/clubs', clubController.getClubs);

app.post('/clubs', clubController.createClub);

app.put('/clubs/:id', clubController.updateClub);

app.delete('/clubs/:id', clubController.deleteClub);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
