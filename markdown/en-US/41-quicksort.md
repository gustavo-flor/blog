**Quicksort**, an efficient sorting algorithm, is based on dividing the problem into smaller parts — a technique known as _Divide and Conquer_ or _DC_ — using recursion to solve the task.

## Overview

Before diving into **Quicksort**, it's important to understand its core concepts:

- **Divide and Conquer (DC)**:  

  It is the strategy of **splitting the problem into smaller parts** (divide) and then solving them (conquer).

- **Recursion**:  

  **When a function calls itself**; a recursive function has two main parts: the recursive case and the base case. The recursive case refers to the function calling itself, and the base case defines the condition that stops the recursive call, preventing an infinite loop.

---

## In Detail

Let's return to **Quicksort**, which essentially uses a strategy called partitioning to solve the sorting problem.

### Partitioning

Partitioning involves selecting any number from the array — called the _pivot_ — and positioning it such that all numbers to its left are smaller and all numbers to its right are larger.

<aside class="callout">
  <div class="icon">🎯</div>
  <div class="content">
    <p>Although numbers on the left are smaller and those on the right are larger, this doesn't necessarily mean the elements are sorted. But we can ensure the pivot is in the correct position, meaning we now only need to sort the numbers on its left and right.</p>
  </div>
</aside>

#### How It Works

- Let's partition the following array: [3, 7, 4, 2, 0].

There are various ways to choose the pivot, but for now, let's focus only on understanding partitioning. We'll explore pivot selection later.

In this example, the pivot will always be the first number in the array.

- Before partitioning: [<span style="color: red">3</span>, 7, 4, 2, 0].
- After partitioning: [2, 0] + [<span style="color: red">3</span>] + [7, 4].

---

Now that we understand partitioning, let's see how to sort an array using this strategy…

#### How to Use It

Continuing from where we left off: [2, 0] + [3] + [7, 4].

Note that in this representation, we have two unsorted arrays ([2, 0] and [7, 4]). Therefore, we can partition them too. Remember the DC strategy and recursion? That's exactly what we're doing here, dividing the sorting problem into smaller parts recursively.

- Before partitioning: [<span style="color: blue">2</span>, 0] and [<span style="color: green">7</span>, 4].
- After partitioning: [0, <span style="color: blue">2</span>] and [4, <span style="color: green">7</span>].

Now the array looks like this: [0, 2] + [3] + [4, 7] = [0, 2, 3, 4, 7].

Notice that in this example, the array is already sorted. However, in a scenario where there are still unsorted arrays on the left or right of your pivot, the strategy remains the same: keep partitioning until no unsorted cases remain.

<aside class="callout">
  <div class="icon">🤹</div>
  <div class="content">
    <p>There are various ways to sort numbers during partitioning. The two most common approaches are <i>Lomuto</i> and <i>Hoare</i>. Both strategies will be discussed in an upcoming article, detailing their pros and cons.</p>
    </br>
    <p>You can check out the implementations in the source code provided at the end of this article.</p>
  </div>
</aside>

---

### Selecting a Pivot

Choosing a pivot is one of the most critical actions in **Quicksort**, as selecting a poor sequence of pivots directly affects the algorithm's performance.

#### What Is a Bad Pivot?

The goal of a pivot is to divide the array into two groups: numbers larger and smaller than the pivot.

A pivot is considered bad when selecting it results in an empty group on one side. Frequent selection of bad pivots increases the recursion stack and memory usage.

Consider the array: [3, 7, 4, 2, 0].

Imagine our pivot is **always** the last number in the array, starting with the number 0.

- Before partitioning:  [3, 7, 4, 2, <span style="color: orange">0</span>]
- After partitioning: [] + [<span style="color: orange">0</span>] + [3, 7, 4, 2]

Now let's partition the right array:

- Before partitioning: [3, 7, 4, <span style="color: purple">2</span>]
- After partitioning: [] + [<span style="color: purple">2</span>] + [3, 7, 4]

Notice how we frequently end up with an empty left array, indicating poor pivot choices.

This happens because we aren't dividing the problem into the smallest possible size, making our algorithm less efficient by requiring more steps.

#### How to Choose a Pivot

There are various ways to select a pivot, each with its pros and cons:

- **Constant**: The simplest but most likely to result in a bad pivot. Here, we define a constant index for the pivot, such as always choosing the first, last, or middle element.
- **Random**: A great way to avoid choosing a bad pivot. We select a random number within the array, reducing the chances of sequential numbers causing poor cases. This is a good option if you're implementing Quicksort and want a quick, reliable choice.
- **Median**: The most complex of the three. It involves calculating the median between the first, middle, and last elements of the array. After determining the median, find the closest number in the array — this becomes the pivot. While this method is complex, it can be worth the effort for large arrays.

<aside class="callout">
  <div class="icon">💡</div> 
  <div class="content">
    <p>Though we won't dive into <i>Big O notation</i> in this article, selecting a bad pivot can degrade the algorithm's performance to O(n²) in the worst case, while a good pivot selection keeps the expected average efficiency at O(n log n).</p>
    </br>
    <p>If you're not familiar with <i>Big O notation</i>, don't worry — we'll cover this topic in the future.</p>
  </div>
</aside>

## Moral of the Story

We didn't cover the actual code for the **Quicksort** algorithm in this article.

The goal here was to understand its operation and purpose, especially since most major programming languages already have built-in implementations.

If you're still interested in seeing the algorithm's implementation, here's a source code repository:

- [🐱 Java Quicksort Sample](https://github.com/gustavo-flor/java-quicksort)

---

Thank you for reading! 🍻

## Go Deeper

Here are some reference materials used for this article. 🎨

- <https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf>
- <https://www.geeksforgeeks.org/quick-sort>
- <https://joaoarthurbm.github.io/eda/posts/quick-sort>
- <https://www.youtube.com/watch?v=NuQYFXmLUrM>
- <https://www.youtube.com/watch?v=86WSheyr8cM>