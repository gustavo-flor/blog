Concurrency and parallelism are related concepts in computing, often used interchangeably. However, they have distinct meanings. Understanding this difference can be crucial for efficient software design.

## Concurrency

Concurrency refers to a system's ability to perform multiple tasks, **not necessarily simultaneously**. These **tasks can be started, executed, and finished in overlapping periods**.

For example, consider a chess match. We can say the game occurs concurrently because while one person makes their move (performs a task), the other must wait their turn. In other words, both are playing, but not at the same time.

An interesting way to associate this concept is to think that tasks are competing for execution.

## Parallelism

Parallelism, on the other hand, refers to a system's ability to **execute multiple tasks simultaneously**. In a parallel system, tasks can run at the same time, which is only possible due to multiple processors or system *cores*.

For example, consider a soccer match. Everyone on the field is playing, and unlike chess, players don't have to wait for others to make their moves.

Parallelism implies concurrency, as multiple tasks are being performed, but the reverse is not necessarily true.

## Moral of the Story

In summary, concurrency is about managing the execution of multiple tasks and enabling them to run efficiently by sharing the same resources, while parallelism is about executing multiple tasks simultaneously.

## Go Deeper

- <https://www.studysmarter.co.uk/explanations/computer-science/computer-programming/concurrency-vs-parallelism>
- <https://www.youtube.com/watch?v=cx1ULv4wYxM>
- <https://matheuskiel.medium.com/paralelismo-x-concorrência-3939376766b3>