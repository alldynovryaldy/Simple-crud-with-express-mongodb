const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/express_mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected!');
  })
  .catch((error) => {
    console.log('Cannot connect to database!', error);
    process.exit();
  });
