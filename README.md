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

Usually, Bash can auto-fill directories. After typing the first few characters (i.e Des), push tab (i.e Desktop/). Try pushing tab twice. This frequently pulls up the files in that directory.

<a id='gitbasics'></a>
# Git Basics

Now, with your bash knowledge, we can learn about version control. Open your Bash Shell, cd into a new folder for web projects, and run the following:

```sh
git clone _____
```

You should see your terminal start flashing with messages until it says 'complete'. Now, run the following:

```sh
ls -a
```

You should see a new folder that contains all of the code in this repository.
