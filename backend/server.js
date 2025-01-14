const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => console.log(`Servidor em execução em http://localhost:${PORT}`));

