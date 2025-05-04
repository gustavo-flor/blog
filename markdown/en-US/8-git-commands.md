For modern developers, Git is an indispensable tool. Mastering its commands is essential to optimizing the workflow. This guide contains some of the commands I use most frequently during my development process.

## 1. Create and Access a Branch

This is undoubtedly one of the commands I use most during development. If I need to create a new branch and access it, I simply use:

```bash
git checkout -b branchName
```

This command combines two other Git commands:

```bash
git branch branchName
```

```bash
git checkout branchName
```

## 2. Delete a Branch

If you need to delete a branch, you can use `git branch -d` or `git branch -D`. The difference between the two approaches is that when using `-d`, Git checks if the branch has been merged before deleting it. With `-D`, there is no such verification; the branch will be deleted even if there are unmerged changes.

- **Safe delete**

```bash
git branch -d branchName
```

- **Non-safe delete**

```bash
git branch -D branchName
```

#### In Detail:

- [Git Branch Delete Option Docs.](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--d)

## 3. Rename a Branch

Would you like to rename one of your branches but don’t know how? Just use:

```bash
git branch -m oldBranchName newBranchName
```

Or, if you need to rename the current branch, you can do it with:

```bash
git branch -m newBranchName
```

## 4. Commit All Your Changes

Would you like to stage your modifications and commit them right away? Execute:

```bash
git commit -am "commit message"
```

Similar to the first item on this list, this command also combines two other Git commands:

```bash
git add *
```

```bash
git commit -m "commit message"
```

## 5. Stash Your Changes

Want to take a break from development but don’t want to lose your changes? Use:

```bash
git stash
```

This command will stash all the *non-staged* modifications in your project. The stash works as a stack, meaning every time you execute this command, you add a new layer to the stash stack.

If you need to retrieve a stashed change, just execute:

```bash
git stash pop
```

This command retrieves the last stashed change and removes it from the stack.

If you plan to use *stash* multiple times, I recommend checking out the documentation linked below.

#### In Detail:

- [Git Stash Docs.](https://git-scm.com/docs/git-stash)

## 6. Revert a Commit

If you need to revert a commit, execute:

```bash
git revert commitHash
```

This command undoes the changes made by the specified commit without removing it from Git’s commit history.

You can check the hash of a commit using the command `git reflog`.

Interestingly, you can execute the command using only the first six characters of the commit hash.

#### In Detail:

- [Git Revert Docs.](https://git-scm.com/docs/git-revert)

## Moral of the Story

I saw a similar text in English and decided to write my version about it. The idea behind this text was to share a bit of what I know/use regarding some Git commands that help improve our work efficiency.

Consider revisiting this text from time to time and adding new commands.

## Go Deeper

- <https://git-scm.com/docs>
- <https://levelup.gitconnected.com/10-must-know-git-commands-for-software-engineers-ffc6687d6dfd>