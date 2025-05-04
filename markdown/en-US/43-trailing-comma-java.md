In Java, the trailing comma in a multiline expression can be used in:

- **Arrays**

```java
final String[] heroes = {
	"Batman",
	"Wonder Woman",
	"Deadpool", /* <-- Here! */
};
```

- **Enums**

```java
public enum Role {
	MANAGER,
	REVIEWER,
	SUBSCRIBER, /* <-- Here! */
}
```

You may have encountered this approach before, but have you ever wondered why it is used?

While it might seem like a minor detail, this practice can improve code readability, maintainability, and organization.

In this article, I intend to explain why a trailing comma in multiline expressions is more than just a style convention — it’s a practice that can enhance your code quality.

## In Detail

Here are some reasons why you might want to adopt this practice:

### 1. Easier Modifications

By placing a comma at the end of each line, you simplify adding or removing items.

You can make changes without adjusting the last line, which can reduce formatting errors.

Below is a comparison of the changes needed when removing the last item from a list.

#### Without a Comma

Notice how line 3 had to be modified when removing line 4:

![Example without a comma](/images/trailing-comma-java/0-no-comma.png)

#### With a Comma

Here, only one line was modified:

![Example with a comma](/images/trailing-comma-java/0-comma.png)

### 2. Cleaner Diffs in Version Control

In version control systems like Git, cleaner diffs can be generated when you add or remove lines in multiline expressions, as the change is limited to the line that was modified, without affecting previous lines.

Below is a comparison of the diff generated when adding a new element to the end of an enum:

#### Without a Comma

In this example, multiple lines appear in the diff:

![Example without a comma](/images/trailing-comma-java/1-no-comma.png)

#### With a Comma

Here, only one line appears in the diff:

![Example with a comma](/images/trailing-comma-java/1-comma.png)

## Moral of the Story

It’s important to note that a trailing comma in multiline expressions is not strictly required by the Java compiler.

So, if the mentioned benefits do not seem valuable to you or your team, you are not obligated to use them.

Personally, if I’m working with code that might be frequently modified, I always opt for the trailing comma approach due to the benefit described in **“Cleaner Diffs in Version Control.”**

## Go Deeper

I decided to write about this topic because I was recently asked about this approach. When I searched for Java-related materials mentioning these benefits, I couldn’t find any texts in Portuguese on the subject.

Below are some of the references I used:

- <https://kariem.github.io/2016/05/04/trailing-comma-java/>
- <https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8>