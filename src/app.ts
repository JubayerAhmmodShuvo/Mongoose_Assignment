
import express, { Application, Response, Request, NextFunction } from 'express';
import cors from 'cors';
import bookRoutes from './app/modules/book/book.route';
import { Schema, model } from 'mongoose';
const app: Application = express();


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRoutes);
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Hello World');


// //   interface IUser{
// //     id: string;
// //   name: string;
// //   email: string;
// //   password: string;
// // }

// //   const userSchema = new Schema<IUser>({
// //   id: { type: String, required: true },
// //   name: { type: String, required: true },
// //   email: { type: String, required: true },
// //   password: {type: String, required: true}



// // });
// // const User = model<IUser>("User", userSchema);

// //   const createUserToDB =async () => { 
// //     const user = new User({
// //       id: '2',
// //       name: 'Bill',
// //       email: 'bill@initech.com',
// //       password: 'password'

// //     });
// //     await user.save();
// //     console.log(user);
// //   }
// //   createUserToDB();
  
// //app.use('/', );



// });


export default app;