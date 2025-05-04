Today, let's talk about JSON, a mainstream technology when it comes to communication between systems over a network. Our goal is to understand its features and why it's so widely used.

Come along...

---

The acronym **JSON** stands for **JavaScript Object Notation**. It’s a lightweight format for storing and transporting data, commonly used in client-server application communication. It’s **self-descriptive** and **easy to understand**.

Here’s a simple example:

```json
{
 "movies": [
  {
   "name": "The Hateful Eight",
   "directedBy": "Quentin Tarantino",
   "cast": ["Samuel L. Jackson", "Jennifer Jason Leigh"],
   "year": 2015,
   "awarded": false
  },
  {
   "name": "Inglourious Basterds",
   "directedBy": "Quentin Tarantino",
   "cast": ["Brad Pitt", "Christoph Waltz"],
   "year": 2009,
   "awarded": true
  }
 ]
}
```

As you can see, it’s easy to figure out that this is a list of movies directed by Quentin Tarantino.

## Let’s Dive In

### Syntax

- **Key-Value Pairs**: Data is written in key-value pairs.
- **Key**: Must define the attribute name and be written with double quotes.
- **Value**: Can be a string, boolean, number, array, object, or even null.
- **Commas**: Separate key-value pairs.
- **Braces `{}`**: Define an object.
- **Brackets `[]`**: Define an array.

### Why JSON is Awesome

#### Easy to Understand

JSON is simple for humans to read and write, making it a popular choice for configuration files and data transfer between services.

#### Language-Agnostic

JSON isn’t tied to any specific programming language and is supported by a wide range of languages, making it incredibly versatile.

#### Lightweight

JSON is lightweight because it only includes necessary information to represent data, making it efficient for system communication.

## Key Takeaway

JSON is very similar to creating objects in JavaScript, with a few key differences, such as requiring double quotes around attribute names.

Often used in REST architectural style with HTTP, don’t know what REST is? [Click here to learn more](./1-what-is-rest).

Even though JSON resembles JavaScript, **any programming language** can read and write JSON, making it popular due to its simplicity, self-descriptive nature, and wide compatibility.

## References

- <https://www.w3schools.com/whatis/whatis_json.asp>
- <https://restfulapi.net/json/>