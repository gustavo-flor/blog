Today we’ll talk about JSON, a mainstream technology when it comes to communication between network-based systems. The goal is to understand its characteristics and, most importantly, the reasons behind its widespread use.

Come with me…

---

The acronym JSON stands for JavaScript Object Notation. It’s a lightweight format for recording and transporting data, commonly used in client-server communication. It is "self-descriptive" and easy to understand.

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

As you can see, it’s easy to identify that we’re receiving a representation of a list of movies directed by Quentin Tarantino.

## Syntax

- Data is written in key-value pairs
- **Key**: Defines the attribute’s name and must be written with double quotes
- **Value**: Can be a _string_, _boolean_, _number_, _array_, _object_, or even _null_
- Data entries are separated by commas
- Curly braces (`{` and `}`) define an _object_
- Square brackets (`[` and `]`) define an _array_

## Characteristics

### Easy to Understand

JSON is simple for humans to read and write, making it a popular choice for configuration files and data exchange between services.

### Language-Agnostic

JSON isn’t tied to any programming language and is supported by a wide range of them, making it highly adaptable.

### Lightweight

JSON is lightweight because it doesn’t include "unnecessary" information to represent data. This makes it efficient for use in system communication.

## Conclusion

JSON is very similar to creating objects in JavaScript, with some small differences, like the requirement to use double quotes for attribute names.

Commonly used in REST architectural style alongside HTTP. Don’t know what REST is? [Click here to learn more](./1-what-is-rest).

Despite its similarity to JavaScript, any programming language can read and write JSON. This is undoubtedly one of the main reasons for its popularity, alongside its ease of understanding and self-descriptive nature, which are also major advantages.

## References

- <https://www.w3schools.com/whatis/whatis_json.asp>
- <https://restfulapi.net/json/>