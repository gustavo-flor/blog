We recently talked about REST, what it is, and its main characteristics. However, one topic remained open for discussion, and now is the time to address it. Let's talk about what HATEOAS is and its relationship with REST…

## Introduction

_HATEOAS_ stands for _Hypermedia as the Engine of Application State_. In some articles, it is translated as "motor" instead of "engine," but "engine" seems to fit better (in my view). Let's learn more about this mechanism in the next section.

## The Mechanism

The concept of hypermedia as the engine of application state is simply the ability of a REST client to navigate through the application using links provided by the system when returning a specific resource. Not clear? Here's an example:

```json
{
  "movies": [
    {
      "name": "The Hateful Eight",
      "directedBy": "Quentin Tarantino",
      "cast": ["Samuel L. Jackson", "Jennifer Jason Leigh"],
      "year": 2015,
      "awarded": false,
      "_links": [
        {
          "rel": "self",
          "href": "http://localhost:8080/movies/1"
        },
        {
          "rel": "awards",
          "href": "http://localhost:8080/movies/1/awards"
        },
        {
          "rel": "parent",
          "href": "http://localhost:8080/movies"
        }
      ]
    }
  ],
  "_links": [
    {
      "rel": "self",
      "href": "http://localhost:8080/movies"
    }
  ]
}
```

The example above shows the return of a list of movies (using JSON). For educational purposes, the list contains only one movie.

Don't know what JSON is? [Read here](./2-what-is-json)

Let's focus on the `_links` properties in this response. Notice how interesting it is: each object within this property represents a possible navigation path for that specific resource. In other words, the REST client receiving this response can understand what other possible navigations are allowed from a resource.

Got the idea now? Imagine the possibilities. The application state engine works like this: the server itself can inform the client about what can or cannot be accessed according to the state of each resource.

**Disclaimer**: There are **many** ways to implement _HATEOAS_. Don't get stuck on the example above. You can return links in the response body, headers, or within a specific field — it's up to you. The most important point here is maintaining a contract respected between client and server.

## What Is the Relationship Between HATEOAS and REST?

_HATEOAS_ is directly related to the concept of Uniform Interfaces, meaning it is one of the attributes that should define a communication contract between client and server.

Roy Fielding mentions _HATEOAS_ in his article when discussing data elements. He also comments on using metadata to send useful information about the resource.

**Is it mandatory to implement HATEOAS in my REST application?**

If you intend to have a RESTful application: yes (since it is part of the Uniform Interface requirements). But perhaps the real question here is another…

## Do You Need a RESTful Application?

Most of the time, the answer is: **NO**

If your clients don't need and/or won't use the links you provide, why implement them? Just to follow a standard? We should implement what makes sense for each system, not get stuck on specific architectural patterns. Standards are here to guide, not to be rules. In other words, **if you don't need it, don't do it**.

## Conclusion

Despite its strange name, _HATEOAS_ is a simple concept. Don't be fooled: despite its simplicity, the impact of this functionality can be significant. We can create entirely dynamic interactions with our REST clients, enabling seamless navigation through our responses.

Again, let's use common sense: **if your application doesn't need it, don't do it**. However, if your application does need it, use it — without a doubt, you will gain enormous advantages from this mechanism.

Thank you very much!

## References

- <https://ics.uci.edu/~fielding/pubs/dissertation/top.htm>
- <https://restfulapi.net/>
- <https://medium.com/@alexandre.highrollers/restful-api-for-distributed-hypermedia-system-78dbfb8a58b9>