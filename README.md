# Questions & Answers 


###  Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

Ans: The purpose of creating a  model with interface and schema in MongoDB is to  define the structure and behavior of a collection and provide a consistent way to interact with the collection. This makes it easier to develop applications that use the collection, and it also makes it easier to maintain the collection.

By using an interface, we can define the shape of the documents in the collection, including the types and names of fields. The interface defines the methods that can be used to interact with the collection. These methods can be used to create, read, update, and delete documents in the collection. The interface can also be used to query the collection for documents that match certain criteria.

The schema, on the other hand, defines the validation rules, default values, and other properties of the fields in the collection. It allows us to enforce data integrity and provide a clear structure for the collection.

```
interface IUser {
  name: string;
  age: number;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const UserModel = model<IUser>("IUser", userSchema);

```

### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Ans: Field filtering in MongoDB allows you to specify which fields to include or exclude in the returned documents. To include specific field we can use projection parameter with `find` method with the specific field value with `1` and to exclude we can use specific field value with `0`. 

For example, the following query will return all documents from the products collection, but only the name and price fields will be returned in the query result:
```
db.products.find({}, {name: 1, price: 1})

```

And this  query will return all documents from the products collection, but the description field will be excluded from the query result:

```
db.products.find({}, {name: 1, price: 1, description: 0})

```
### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

Ans:  Instance methods in MongoDB models are custom methods that can be defined on individual documents of a collection. They are typically used to perform operations on the document that the instance represents.

As an example let's consider User. First define an instance method called `getFullName` that concatenates the first name and last name of the user:

```
userSchema.methods.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const UserModel = model<User>("User", userSchema);


```

Now it can be called on a document like this:
```
const user = new UserModel({ firstName: "Jubayer", lastName: "Ahmmod" });
console.log(user.getFullName());

```

### Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

Ans: Comparison operators like `$ne`, `$gt`, `$lt`, `$gte`, and `$lte`  are used in MongoDB queries to compare field values with specified values.
```
Finding documents where the price is not equal to 20:

db.products.find({ price: { $ne: 20 } });

Finding documents where the price is greater than 50:

db.products.find({ price: { $gt: 50 } });

Finding documents where the price is less than 10:

db.products.find({ price: { $lt: 10 } });

Finding documents where the price is greater than or equal to 30:

db.products.find({ price: { $gte: 30 } });

Finding documents where the price is less than or equal to 50:

db.products.find({ price: { $lte: 50 } });


```

### Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

Ans: MongoDB's $in and $nin operators are used to match values against an array of values or exclude values from a given array.

The `$in` operator matches documents where the specified field's value is equal to any value in the provided array.

```

db.products.find({color: { $in: ["red", "blue"] }})

```
The `$nin` operator takes an array of values as its argument and matches documents where the value of a field is not equal to any of the values in the array.

```
db.products.find({color: { $nin: ["red"] }})

```

Extra Questions:
### Question 6: Explain the logical operators "$and," "$or," "$not," and "$nor" in MongoDB queries. Provide examples to demonstrate their usage.

Ans: Logical operators in MongoDB queries allow for combining multiple conditions using logical operations like `$and`, `$or`, `$not` and `$nor`.

 `$and` (logical AND) Operation returns documents that match all of the specified conditions.
 `$or` (logical OR) Operation returns documents that match any of the specified conditions.
 `$not` ( logical NOT) Operation returns documents that do not match the specified condition.
 `$nor` (logical NOR) Operation returns documents that do not match any of the specified conditions.

 ```
 Finding documents where the price is greater than 10 and the category is `Cars`:
 db.products.find({ $and: [{ price: { $gt: 10 } }, { category: "Cars" }] });

Finding documents where the price is greater than 10 or the category is `Cars`:
 db.products.find({ $or: [{ price: { $gt: 10 } }, { category: "Cars" }] });

Finding documents where the price is not equal to 20:
 db.products.find({ price: { $not: { $eq: 20 } } });

 Finding documents where the price is not equal to 10 and the category is not `Cars`:
 db.products.find({ $nor: [{ price: 10 }, { category: "Cars" }] });

 ```

### Question 7: What is the difference between the "explicit" and "implicit" "$and" operations in MongoDB? How does each behave when combining multiple conditions?

### Question 8: How do you use the "$exists" operator in MongoDB to check if a field exists or not in a document? Provide an example.

### Question 9: What is the purpose of the "$type" operator in MongoDB? How can you use it to match documents based on the data type of a field?

### Question 10: Explain the use of the "$size" operator in MongoDB. How does it work when querying documents based on the size of an array field?


