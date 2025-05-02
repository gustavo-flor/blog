Continuing from the last post, today we'll talk about two more data structures that deal with a collection of elements.

Queues and stacks are widely used data structures when we need to chain elements in a collection. They are very similar to linked lists but more restricted and specific for their use cases. Let's understand...

## Queues

Queues are data structures that follow the **FIFO** (First In, First Out) principle.

The idea is that the first element added to the queue is also the first element that will be removed.

### In Detail

The basic operations of a queue consist of:

- **Enqueue**: Adding an element to the end of the collection
- **Dequeue**: Retrieving and removing an element from the beginning of the collection

![image](/images/queues-and-stacks/queue.png)

Use cases where elements need to be processed in order are common for queues. If I need to execute a sequence of tasks, I can store them in a queue and loop through this collection.

## Stacks

Stacks are data structures that follow the **LIFO** (Last In, First Out) principle; in Portuguese, UEPS (Último a Entrar, Primeiro a Sair).

Essentially, the last element added to the stack will be the first to be removed.

### In Detail

The basic operations of a stack consist of:

- **Push**: Adding an element to the top of the stack
- **Pop**: Retrieving and removing the last element added

![image](/images/queues-and-stacks/stack.png)

Stacks are commonly used in scenarios where elements need to be processed in reverse order. For example, the "undo" feature in a text editor: changes are added to a stack, and each undo action removes the last change from the stack.

## Moral of the Story

We can see that each of these data structures handles elements in an ordered manner, but each with its specific characteristics.

We conclude that queues are ideal for ordered and sequential processing, while stacks are necessary for scenarios where reverse processing is needed, or at least when the last added element needs to be accessed.

## Go Deeper

- <https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html>
- <https://guides.codepath.com/compsci/Stacks-and-Queues>
- <https://web.mit.edu/javadev/packages/jgl_2_0/doc/user/Queues.html>
- <https://medium.com/@elfrmkr98/getting-started-with-stacks-and-queues-a-practical-guide-with-examples-d92ab09fdf62>