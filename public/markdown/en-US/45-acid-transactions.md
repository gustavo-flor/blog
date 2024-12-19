In a database system, a transaction represents a unit of work (a logical operation).

This operation must be executed atomically, meaning either everything is executed (*committed*) or nothing is executed (*rolled back*).

For example, consider the operation of withdrawing money from an ATM. Regardless of what happens, there is no intermediate state; the money is either withdrawn or not. In other words, the operation is performed in its entirety.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Transactions basically consist of one or more database operations, such as read operations (<code>SELECT</code>), write operations (<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>), and more.</p>
  </div>
</aside>

## In Detail

ACID transactions are a set of characteristics that ensure the reliability of operations processed in a database.

The acronym ACID stands for **Atomicity**, **Consistency**, **Isolation**, and **Durability**.

![Image showing each letter of the word ACID and its definition: A: Atomicity, C: Consistency, I: Isolation, D: Durability](/images/acid-transactions/banner.png)

Now let's understand what each characteristic represents:

- **Atomicity**: Refers to the fact that every transaction is “all or nothing.” If any part of the operations fails, the entire transaction must fail, and, consequently, the database state must remain unchanged.

- **Consistency**: Ensures that the transaction cannot violate the database's consistency rules. In other words, if any operation leaves the database in an invalid state, the transaction is rolled back.

- **Isolation**: Ensures that multiple transactions can occur concurrently without interfering with each other. Each transaction operates independently, as if it were the only one running in the database. Isolation levels define the degree to which transactions are isolated from each other.

- **Durability**: Guarantees that once a transaction is executed (*committed*), its changes are permanent, meaning they must survive system failures. It's important to note that changes remain permanent until a new change operation is executed.

## Moral of the Story

In summary, ACID transactions are essential for ensuring integrity, reliability, and consistency in our database systems.

By ensuring that operations are atomic, consistent, isolated, and durable, these transactions provide a foundation for reliable processing, even in complex environments, offering a robust and fault-tolerant database system.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Although ACID transactions are widely used in relational databases, don't be mistaken—some non-relational databases also implement their own ACID versions.</p>
  </div>
</aside>

## Go Deeper

- <https://www.databricks.com/br/glossary/acid-transactions>
- <https://www.mongodb.com/basics/acid-transactions>
- <https://medium.com/opensanca/o-que-%C3%A9-acid-59b11a81e2c6>