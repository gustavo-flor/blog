- A type of **Monad**

## 💬 Intent

**State Monad** is a functional programming pattern that helps manage mutable state in a pure and composable way. It encapsulates state-passing computations, making them easier to compose and reason about.

## 🙁 Problem

Let's say you're building a simple 2D grid game where a player moves around and collects fruits.

```clj
(def initial-state
  {:position [0 0]
   :fruits   {[1 0] :apple
              [1 1] :banana}
   :score    0})
```

Each step in the game updates the state: moving the player or picking up a fruit.

```clj
(defn move 
  [direction state]
  (let [[x y]        (:position state)
        new-position (case direction
                      :up    [x (inc y)]
                      :down  [x (dec y)]
                      :left  [(dec x) y]
                      :right [(inc x) y]
                      [x y])]
    (assoc state :position new-position)))

(defn pick-up-fruit 
  [state]
  (let [position (:position state)
        fruits   (:fruits state)]
    (if-some [fruit (get fruits position)]
      (-> state
          (update :score inc)
          (update :fruits dissoc position))
      state)))
```

The code looks functional and clean enough. You can chain operations using the thread-first macro (`->`):

```clj
(-> initial-state
    (move :right)
    (pick-up-fruit)
    (move :down)
    (pick-up-fruit))
```

However, problems arise when your game logic needs to make decisions based on the current state. For example, consider this behavior:

1. Move to the right
2. If there's a fruit at the current position, pick it up
3. Otherwise, move down

With basic threading, the code becomes hard to compose and reason about:

```clj
(let [state-1 (move :right initial-state)
      fruit   (get-in state-1 [:fruits (:position state-1)])
      state-2 (if fruit 
                (pick-up-fruit state-1) 
                (move :down state-1))]
  state-2)
```

This approach has several issues:

- It forces you to manually manage state passing
- It makes control flow explicit and hard to compose
- It becomes unwieldy when you need to repeat logic or make it dynamic
- The state management is mixed with the business logic

## 😄 Solution

The **State Monad** provides a solution by encapsulating state-passing computations in a composable way. Each operation is written as a function that takes a state and returns a pair: [result new-state]. These are called stateful computations.

Here's the core implementation of the **State Monad** in Clojure:

```clj
(defn bind 
  [step-fn next-fn]
  (fn [state]
    (let [[result new-state] (step-fn state)]
      ((next-fn result) new-state))))

(defn return
  [value]
  (fn [state]
    [value state]))

(defn then 
  [step-fn next-step-fn]
  (bind step-fn (fn [_] next-step-fn)))
```

Let's refactor our game actions to use this interface:

```clj
(defn move
  [direction]
  (fn [state]
    (let [[x y]        (:position state)
          new-position (case direction
                        :up    [x (inc y)]
                        :down  [x (dec y)]
                        :right [(inc x) y]
                        :left  [(dec x) y]
                        [x y])]
      [new-position (assoc state :position new-position)])))

(defn pick-up-fruit
  []
  (fn [state]
    (let [position (:position state)
          fruits   (:fruits state)]
      (if-some [fruit (get fruits position)]
        [fruit (-> state
                   (update :score inc)
                   (update :fruits dissoc position))]
        [nil state]))))

(defn get-fruit
  []
  (fn [state]
    [(get-in state [:fruits (:position state)]) state]))
```

Now we can implement the branching behavior in a composable way:

```clj
(def maybe-pick-or-move
  (bind (get-fruit) 
        (fn [fruit]
          (if fruit
            (pick-up-fruit)
            (move :down)))))
```

And compose multiple operations:

```clj
(def play
  (-> (move :right)
      (then maybe-pick-or-move)
      (then maybe-pick-or-move)))

;; Run it
(play initial-state) ;; => [[1 -1] {:position [1 -1], :fruits {[1 1] :banana}, :score 1}]
```

This version of the game logic is:

- **Composable**: Operations can be combined like building blocks
- **Pure**: All state changes are explicit and contained
- **Declarative**: Control flow is defined through composition rather than explicit conditionals
- **Reusable**: Stateful computations can be passed around and reused

## 🏗️ Structure

The **State Monad** pattern consists of these key components:

### 1. Stateful Computation

A function that takes a state and returns a pair of [result new-state]:

```clj
(fn [state] [result new-state])
```

### 2. Bind

The core operation that chains computations:

```clj
(defn bind 
  [step-fn next-fn]
  (fn [state]
    (let [[result new-state] (step-fn state)]
      ((next-fn result) new-state))))
```

### 3. Return

Lifts a value into the State Monad:

```clj
(defn return
  [value]
  (fn [state]
    [value state]))
```

### 4. Helper Functions

Combinators like `then` that make common patterns easier to express:

```clj
(defn then 
  [step-fn next-step-fn]
  (bind step-fn (fn [_] next-step-fn)))
```

## ⚖️ Pros and Cons

### Pros

- ✅ Makes state management explicit and composable
- ✅ Enables pure functional programming with state
- ✅ Separates state handling from business logic
- ✅ Allows for complex stateful computations to be built from simple ones

### Cons

- ❌ Adds complexity for simple cases
- ❌ Has a steeper learning curve
- ❌ May be overkill for straightforward state management
- ❌ Requires understanding of monadic concepts

## Extra Content

- The State Monad is part of a larger family of monads in functional programming
- It's particularly useful in languages that emphasize immutability
- Many functional programming libraries provide State Monad implementations
- The pattern can be extended with additional operations like `get` and `put` for more complex state management
