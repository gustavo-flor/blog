**Classification**: Behavioral

The **Observer** Design Pattern allows creating a mechanism — _pub/sub_ — for event-driven processing, meaning it enables the _subscriber_ to be notified about changes without constantly checking the _publisher_ (the source).

## The Problem

Imagine you live in an apartment and are expecting a package. You repeatedly go down to the front desk (the source) to check with the concierge if your package has arrived. This situation can be frustrating and time-consuming, as you might spend days performing a repetitive action until the expected event (package arrival) occurs.

How can we solve this problem?

## The Solution

Following the previously presented problem, a solution is to reverse the responsibility of checking for the event (package arrival). Instead of checking with the concierge daily, how about asking the concierge to call your apartment when the package arrives?

This way, you avoid wasting time by unnecessarily checking if the event has occurred, and the concierge (_subscriber_) notifies you when needed.

This is the main idea behind the **Observer** pattern: a source object allows other objects to become its subscribers, and upon a new event, the source object notifies all its subscribers about a specific change.

## Go Deeper

- <https://refactoring.guru/design-patterns/observer>
- <https://sourcemaking.com/design_patterns/observer>