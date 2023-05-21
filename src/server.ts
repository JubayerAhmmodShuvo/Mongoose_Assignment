
import mongoose from 'mongoose';
import app from './app';


const port: number = 5000;



async function bootstrap() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
  try {
    console.log(`Database Connection is Successful😀`);
    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    })
  } catch (error) {
    console.log(`Failed to connect with the database`, error);
  }

}





bootstrap();