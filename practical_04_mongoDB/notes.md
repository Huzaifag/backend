## Mongo DB , Mongoose & Database Server

- Mongo DB is a NoSQL database that uses JSON-like documents with optional schemas.
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- Database Server is a software application that manages a database, allowing for data storage, retrieval, and management.

**1. Storage types**

- Relational Database: Uses tables with rows and columns to store data.
- NoSQL Database: Uses collections of documents with varying structures.
- Key-Value Store: Stores data as key-value pairs.
- Document Database: Stores data as documents with nested structures.
- Column-Oriented Database: Stores data in columns and rows.
- Graph Database: Stores data as nodes and edges.

**2. Types of DB's**

- SQL: Relational Database
- NoSQL: Non-relational Database

**3. What and Why**

MongoDB is a popular open-source NoSQL database that stores data in flexible, JSON-like documents. Instead of using traditional table-based relational database structure, MongoDB allows documents with varying sets of fields, with the ability to add or remove fields as needed.

MongoDB is chosen for many projects because:
- Flexible Schema: Can handle unstructured data easily
- Scalability: Horizontal scaling through sharding
- High Performance: Fast queries and indexing
- JSON/BSON Format: Natural fit for JavaScript/Node.js applications
- Large Data Volumes: Excellent for handling big data
- Real-time Analytics: Good for applications requiring real-time data processing


**4. Termnologies**

- Collection: A collection is a group of documents.
- Document: A document is a record in a MongoDB database.
- Schemas: A schema is a blueprint for a collection.
- Model: A model is an instance of a schema.
- Keys: Keys are the unique identifiers for a document.
- Values: Values are the data stored in a document.
- Fields: Fields are the individual data points stored in a document.
- Types: Types are the data types of the values stored in a document.

**5. Collections**

- Collections are similar to tables in a relational database.
- Collections are a group of documents.
- Collections are created using the `db.createCollection()` method.
- Collections are named using a string.
