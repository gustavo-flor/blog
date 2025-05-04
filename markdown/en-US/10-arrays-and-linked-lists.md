Arrays and linked lists are data structures that store collections of elements but do so in different ways, each with its respective advantages and disadvantages.

## Arrays

One of the main characteristics of arrays is how they store data, **keeping elements contiguous** (side by side) in memory.

### In Detail

This behavior directly affects value insertion into the collection. If there is no adjacent space in memory when adding a new element, the computer will need to allocate a different memory location where all the array values can be placed side by side.

With this approach, we ensure fast element reading since all the data is stored close together.

Remember that although reading is fast, writing (insertion, updating, and deletion) can be slow because, in some cases, the entire collection will need to be reallocated in memory.

### Going Deeper

When creating an array, it is possible to reserve memory spaces to avoid data reallocation. However, this creates problems:

- You might not need all the reserved spaces, resulting in wasted memory;
- If more items need to be added than the reserved size, the collection will still need to be reallocated.

If you still have doubts, I recently read the book “*Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People*”—which inspired me to write this text. The author explained concepts through illustrations in a highly didactic way. Therefore, I strongly recommend reading it; for more details, [click here to see page 24](https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf).

## Linked Lists

Unlike arrays, linked lists do not require data to be stored contiguously. **Each element holds a reference to the next element's memory location**, creating a chain-like structure, hence the term "linked."

An illustration from the book *Grokking Algorithms* demonstrating how a linked list behaves in memory:

![image](/images/arrays-and-linked-lists/linked-lists-on-memory.png)

### In Detail

When inserting a new element into the list, the last existing element receives the memory location of the new element, which then becomes the last in the list.

- This behavior ensures fast writing (insertion, updating, and deletion). If we want to add a new element at the beginning, middle, or end of the list, we only need to adjust one element's reference.
- However, reading is affected. Since elements are not stored adjacently, finding a specific element may require traversing the entire collection, which can be challenging depending on its size.

### Going Deeper

It’s important to note that writing speed is only maintained when we have access to the element where the action is required. Therefore, it is common practice to keep track of the first and last items in the list.

## How It Works

It’s important to note that you don’t need to create any of this yourself. Most programming languages already provide implementations for these data structures.

Search online to learn how to use each of these structures in your preferred programming language.

## Moral of the Story

Given what we've read so far, we can conclude that there is no single correct choice—everything depends on the context of use.

- If you need **random access** (might need to access the beginning, middle, or end of the list at any time), using arrays might make sense.
- If you need to **connect elements** and/or intend to read them in an ordered way, using linked lists might make sense.

The choice will depend on your context. Remember, you can combine data structures to best fit your use case.

Thank you very much for reading this far!

## Go Deeper

- <https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf>