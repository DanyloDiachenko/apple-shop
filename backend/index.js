const express = require('express');
const macbooksRouter = require('./routes/macbooks');
const app = express();

app.listen(5000, () => { console.log('Server started on port: 5000') });

app.use('/macbooks', macbooksRouter);
