Code review is a crucial part of the software development process. It is the moment when developers examine the source code written by other developers to provide suggestions/feedback on the changes made. This practice helps increase code quality, reduce the occurrence of **bugs**, and improve code maintainability.

Besides these points, code review has a strong impact on creating a collaborative environment and fostering continuous learning, as developers can share their experiences with other developers — often less experienced ones. The goal of this text is to share some tips and best practices I have learned during these years of writing code.

## What Are the Benefits of This Practice?

As previously mentioned, the practice of code review brings numerous benefits to the software development process. Therefore, I have selected some of what I understand as the main benefits of this activity to share with you. They are:

### Improving Code Quality

Through continuous analysis for potential errors, performance issues, and implementations that deviate from best practices, code review helps maintain a high level of code quality and maintainability, ensuring that new developers can increment and modify existing behaviors easily, simply, and scalably.

### Bug Prevention

The sooner a problem is identified, the better — meaning finding **bugs** during code review will consequently save time and resources that would be spent resolving this problem if it were caught at a later stage, while also preventing an impact on the end customer of our product.

### Knowledge Sharing

**Developers can learn from experiences already lived by other developers**, meaning we can sometimes add **years of knowledge** with just a few comments in a code review.

At the end of this text, I will share a brief story about how this positively impacted me when I was starting in programming.

---

🌀 Besides the benefits mentioned, code review mitigates risks, improves development efficiency, promotes collaboration among developers, ensures code consistency, and so on.

## Best Practices for Code Reviewers

I believe we can notice that code review brings numerous benefits to the software development process. Knowing this, I have listed some things that should not be missing from your _checklist_ when conducting a code review.

### 1. Know the Current State of the Project/Product

One very important thing when reviewing code is understanding the current situation of the project/product in which that code is being written. Is the project mature and stable? Is the project in its early stages? Does the product have a clear direction?

At first, it may seem that the current state of the project should not be related to code review because — in theory — it is always necessary to review code effectively and maintain high standards, right?

The thinking is correct. However, it is important to note that in less mature projects, perhaps we should not focus so much on how the business logic is implemented or whether everything has been implemented in the most scalable way, because perhaps, next week, everything changes and the project simply needs to be rewritten.

On the other hand, in an already stable and mature project, we will need to focus more on code maintainability, performance impacts, and security, meaning we will spend more time reviewing code in a mature project. I am not saying that in a less mature project we will not look at performance, security, and code maintainability — the point here is that the more mature the project, the more attention we will pay to these details.

### 2. Define a Review Scope

The idea here is to understand what points we will review in the code: if the code follows the project's code style, if it meets the requirements for fulfilling its purpose, what are the side effects, whether variables were well named, whether best practices are being followed, whether internal agreements were implemented, and many other points we can select for review.

Therefore, identify the necessary items for your review. With a well-defined scope, it becomes simple to know what to look for in the code and what points to pay more attention to.

### 3. Provide Feedback and Share Experience

With your scope in hand, whenever you find something that deviates from expectations (or raises any doubt), be sure to comment on the code about it. Question the author about the reason for the implementation and describe why you think that implementation violates one of the items in your checklist. Leave your feedback on each point in the code that deviates from expectations (in your view).

Additionally, share experience. If you see a point that could cause unexpected behavior (_bug_) or an implementation that could be done more simply, do not leave it for later. Share what you know and help the developer improve that code.

It is important to emphasize that the code does not belong to you, nor to the person who wrote it — the code belongs to the team that works on that product. Therefore, everyone must take care of it.

If possible, **always** leave links and references about what you are talking about. Show examples, etc. This makes it easier for the author to understand what you are thinking and also facilitates problem correction (if applicable).

### 4. Use Emoticons 🤟

We know that no feedback on our code should be taken personally. However, human beings are naturally uncomfortable with criticism (whatever they may be). Therefore, keep giving your feedback and sharing experiences, but if you want to make it lighter, how about using some emoticons?

I confess that I use them a lot — it makes the discussion lighter and makes it clear that I am not attacking anyone, but rather raising questions about a nebulous point in the code.

**Now an Extra Tip…**

### [Extra] 5. Give Praise

Have you ever reviewed code where the author did an awesome refactor? Or that code that follows best practices, is well described, and makes your review easier?

Take the opportunity and leave a compliment for the author in these cases. It may seem silly and just ego-boosting, but if the code was so well written, why not encourage this type of attitude? Go ahead without fear and compliment — I am sure this developer will strive to do even more of that.

This action benefits everyone. The author gains recognition for their work and efforts, and you benefit in future reviews because well-written code is always easier to review.

## Best Practices for Those Requesting Code Reviews

Now that we know some good practices for conducting a code review, let’s discuss best practices for those requesting a review, since reviewers can only perform an exceptional review when provided with an exceptional environment for reviewing. Here are some good practices to follow when asking others to review your code:

### 1. Review It Yourself First

Before requesting others to review your code, **review it yourself first.**

It might seem unnecessary since you wrote the code, but while immersed in implementation, you might overlook some best practices. You could accidentally commit a part of the code added just for a “quick test.” Who hasn’t left a `log("test")` in the code by mistake?

For these reasons, it’s essential to review your code first.

This saves the reviewers’ time, allowing them to focus on crucial aspects of the code.

### 2. Ensure You Understand Your Entire Implementation

Nothing is more embarrassing than not being able to explain the code you wrote and your motivations. So, ensure you understand **your entire implementation.**

What’s the relationship between understanding your implementation and requesting a code review?

If the author of the code cannot understand the implementation, imagine the reviewers. Ensure your code is clear, self-explanatory, and leaves no doubts for reviewers.

Additionally, understanding your implementation helps you defend your ideas and motivations if a reviewer questions something.

### 3. Write a Good Description

Your code should explain **what it does,** while your description should explain **why it does it.** In other words, while your code should be self-explanatory, the description should explain the nuances and motivations behind the changes. Are you modifying the code to fix a bug? Adding a new feature? What is the expected impact of this functionality?

At first glance, these details might seem unnecessary, but they help the reviewer understand potential side effects and whether all requirements are covered as expected.

### 4. Select Reviewers and Send a Clear Message Describing Your Changes

If all previous items have been done correctly, it’s time to send your code for review.

Select reviewers with sufficient knowledge to analyze your code, write a clear message explaining your change, and send it to the selected reviewers (individually or in a team group).

**Now an Extra Tip…**

### [Extra] 5. Review Your Colleagues’ Code

Here’s my extra tip for getting your code reviewed more quickly and effectively: review others’ code. By reviewing other people’s code, you learn ways to improve your code.

Additionally, it shows other developers you care about their code. Humans value attention, meaning developers will likely return the favor by reviewing your code.

It’s important to maintain high review standards — don’t seek **approval trades,** but rather **review trades** and **experience sharing.**

## Sharing an Experience

During my first job, one of my initial tasks was to manipulate a *String* by concatenating a series of values received through a **loop**. Here is what my code looked like:

```java
public String handleLoop() {
    String value = "";
    for (int i = 0; i < N; i++) {
        value += i;
    }
    return value;
}
```

You see any potential problems with the above code? If not, let’s think through the implications.

We know that `String` is an immutable class, meaning every time we change its value, a new instance of the string is created in memory. In the above code, the constant `N` has an undefined value. If this constant is small, the impact might be minimal, but if it is large, the code could cause a performance issue. As a junior developer at the time, I had no idea about this.

A more experienced developer pointed out this problem during code review and suggested a better approach using `StringBuilder`:

```java
public String handleLoop() {
    final var value = new StringBuilder();
    for (int i = 0; i < N; i++) {
        value.append(i);
    }
    return value.toString();
}
```

## Conclusion

We can conclude that code review is a very important process in the software development workflow. Through this text, I tried to share some tips and best practices that I have learned over the years working in the field.

I hope you can apply some of the items I mentioned above and that they improve your code review process.

With sincere gratitude, thank you very much for reading this far. If you have any questions and/or suggestions for improving the post, contact me `@gustavoflor.dev` on Instagram/Twitter.

## References

- <https://medium.com/@alexandragrosu03/the-art-of-code-review-building-a-collaborative-and-quality-focused-development-culture-5b10dc0ecbc7>
- <https://blog.stackademic.com/4-things-to-keep-in-mind-when-undergoing-a-code-review-63f858205648>
- <https://blog.stackademic.com/are-you-doing-the-vcode-review-88ff05a2694b>
