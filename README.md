```
__        __   _       _____      _             _       _
\ \      / /__| |__   |_   _|   _| |_ ___  _ __(_) __ _| |
 \ \ /\ / / _ \ '_ \    | || | | | __/ _ \| '__| |/ _` | |
  \ V  V /  __/ |_) |   | || |_| | || (_) | |  | | (_| | |
   \_/\_/ \___|_.__/    |_| \__,_|\__\___/|_|  |_|\__,_|_|
```
*The tutorial to rule them all*

# Contents

1. [Introduction](#intro)
1. [Setup](#setup)
1. [Bash Basics](#bashbasics)
1. [Git Basics]('#gitbasics')
1. [HTML Basics]('#html')
1. [CSS Basics]('#css')
1. [Node.js Basics]('#nodebasics')

<a id='intro'></a>
# Introduction

Welcome! Let's get you started on your web journey. There are a few major components to understanding how the web works, so we will break it down into each of those components.

<a id='setup'></a>
# Setup

Unfortunately, this tends to take a little time, but getting a development environment setup put together is critical to having a good experience with programming. Technically, you can use Notepad to do all of your coding. In practice, there are tools that are much more powerful for doing this stuff.

### Bash

Bash is a *Terminal Shell language* for most servers. Windows, unfortunately, does not have Bash support. For Windows, download [git for windows. link](https://gitforwindows.org).

### Node.js

Node.js is the primary server side language that we will be learning. Learn it, and learning other serverside languages will come easily, as the principles will transfer. For Windows, download [node.js link]('https://nodejs.org/en/download/').

### Text Editor

A good text editor will do so much more than edit text. It will give you suggestions, find bugs, color code different structures, and more. This is your choice, and you will likely use several over the course of time.

* Atom by Github
  * This is what I currently use. It allows users to create packages to extend the main code base, which means you get to pick and choose what you want it to look like. Atom is an electron app, meaning it is written in Javascript as well. This means if you ever want to dig in and customize it, you are completely able to.
* VSCode by Microsoft
  * I've heard a lot of good things about this. It is also an electron app, so you will be able to customize it as needed. It also has a lot of package support.
* WebStorm by Jetbrains
  * I'm pretty sure there is a community edition of this. JetBrains is nice if you plan on learning other languages, as each of their IDE's (Integrated Development Environments) are similar.
* Vim / Emacs
  * Both of these are commandline text-editors. They are useful to learn for when you connect to external servers and can't use a normal IDE, but I don't recommend them for everyday development. Some people swear by vim, but they are the old guard... :)

<a id='bashbasics'></a>
# Bash Basics

Bash Script is one of the ways we can directly communicate with the computer. At first, the commands look weird, but you get used to them over time. Bash is extremely helpful when you connect to external servers, and it is the primary way we run code on our local computers.

Open your Bash shell (Mac / Linux, open Terminal, Windows, open Git For Windows).

Here are some basic commands for navigating your file system:

| command                 | Result                                           |
|:----------------------- |:------------------------------------------------ |
| ls                      | Lists files in current directory                 |
| ls *path*               | Lists files in *path* directory                  |
| ls -a                   | Lists all hidden and non hidden files            |
| pwd                     | Print Working Directory                          |
| cd *path*               | change directory to *path*                       |
| cd ..                   | Go to parent Directory                           |
| mkdir *name*            | Make directory named *name* in current directory |
| rm *path/to/file*       | Deletes file                                     |
| rm -rf *path/to/folder* | Deletes everything in folder                     |

Be warned with rm... it will assume you know what you are doing...

Next, it is helpful to know about what the `.` means. After running `ls -a`, you will see there is a `.` `..` and sometimes `.<filename>`. `.` in Bash means your current folder. `..` in Bash means the folder's parent directory. `.<filename>` means it is a hidden file that you don't normally need to be aware of (or how hackers hide files from you... one of the two).

Usually, Bash can auto-fill directories. After typing the first few characters (i.e Des), push tab (i.e Desktop/). Try pushing tab twice. This frequently pulls up the files in that directory.

<a id='gitbasics'></a>
# Git Basics

Now, with your bash knowledge, we can learn about version control.

Git is a software known as Version Control. It allows us to track changes and 'jump' forward and backward through those changes. Additionally, it allows multiple people to work on the same project at the same time while reducing conflicts between those people.

One thing to note is that git is not the same thing as GitHub. Git is software that allows you to create 'Repositories' (code bases) and track the changes in those code bases. GitHub is a place to store those repositories (alternatives exist like BitBucket and Gitlab).

### First Git Command - git clone

Open your Bash Shell, cd into a new folder for web projects, and run the following:

```sh
git clone https://github.com/14gasher/webTutorial.git
```

You should see your terminal start flashing with messages until it says 'complete'. Now, run the following:

```sh
ls -a
```

You should see a new folder that contains all of the code in this repository. Open that folder with your text editor and take a look at it.

### Staging Process - git add and git commit -m

Git uses a 2 stage process to track changes:
```sh
git add <path/to/file/or/folder>
git commit -m 'Message about what changed'
```
So, we make changes to our program, we add those changes (called staging), then we commit them (make the changes official with a note of what we did).

Normally, the flow you will do is as follows:
```sh
git add .
git commit -m 'Message about what changed'
```
or, add everything in the project folder, commit it all, and say what you changed.

### Branches and history - git checkout and git log

How do we look back in time to see how this repository has changed?
Run `git log`. It will open a screen that shows you each commit within that repository. They look like the following:

```sh
commit 33ccdd6c2efd18553aceb68317b80ce05be071dd (HEAD -> master)
Author: 14gasher <asher.gunsay@gmail.com>
Date:   Thu Feb 14 11:08:15 2019 -0700

    Initialized
```

You'll note that every commit has an id (33ccdd6c2efd18553aceb68317b80ce05be071dd),
and some commits have additional 'pointers' to them like (HEAD -> master)
Type `q` to exit that screen.

We can 'jump' back and forth in time by running the following:
```sh
git checkout <commitId>
```

This will change the folder to become exactly the same as it was back when it was committed at that point. Try running

```sh
git checkout 33ccdd6c2
```
and looking at the change in the folder... Nearly everything is gone! That is because you jumped to the very first commit in this repository. You'll note that you didn't need the entire id, only about the first 8 characters. Git is smart enough to figure out what you mean.

To get back to the latest code, run
```sh
git checkout master
```

You'll note that we didn't give it a commit id, but gave it `master`. `master` is a 'branch' within our code base, and is usually the main branch of code for all projects.

Branches allow us to separate development if we are working on something new. We don't want to start working on something, then throw it all away when a new feature takes priority. Rather, we create a branch for each new feature. We do so by running the following:

```sh
git checkout -b newFeatureBranchName
```

This creates a new branch which starts out wherever the current branch we were on was (If I ran it while on the master branch, it will start with the same code as master), and then moves to the new branch. If we make commits to that branch, those changes will stay on that branch.

Now, you can switch back and forth between branches by running that same command:

```sh
git checkout anotherFeatureBranch
```

### Pushing code to servers - git push

Making changes on our local machine is great, but we want to share those changes. We do so by running the following:

```sh
git push origin myBranch
```

What this means is git will push the changes to the 'myBranch' branch of the code to the origin server.

Origin is setup to be the server where you first downloaded the code from. So, in our case, if you run the following:
```sh
git remote -v
```
you should get:
```sh
origin	https://github.com/14gasher/webTutorial.git (fetch)
origin	https://github.com/14gasher/webTutorial.git (push)
```

### Pulling code from servers - git pull

When working on a team, we will sometimes want to get the code that they pushed to the server. Run the following:
```sh
git pull origin myOtherBranch
```
to pull that branch from the server.

### Pull Requests - Github, Gitlab, Bitbucket

While it is possible to merge branches using Git, most teams use a process called pull requests to merge.

After pushing a branch up to the origin server, login to where the repository is held, and click on New Pull Request. Select the branch that you just pushed. This will alert all members of your team that you are ready for your changes to be merged in. Others will review your code, and approve, then merge your pull request in with the `master` branch.

<a id='html'></a>
# HTML Basics - The skeleton of web pages

Alright! You survived the gross stuff. Onto the reasons you came here, web development. HTML is a variant of XML which means you will get used to this syntax quickly: `<blah> ... </blah>`.

### Setup

With your Text Editor, open up the minidemos/myFirstHtml.html file. 



<a id='css'></a>
# CSS Basics - The skin of web pages

<a id='nodebasics'></a>
# Node.js Basics

Node.js is a server side language which implements Ecmascript. Ecmascript is the standard, and Javascript is the implementation of it, with each browser supporting various parts of the standard.
