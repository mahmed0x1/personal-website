---
title: Python Decorators, What Are They And How To Use Them
slug: python-decorators-what-are-they-and-how-to-use-them
date: 2023-08-20
cover: /images/articles/article1.jpg
categories: ["Python", "Python Development"]
description: In this article I will be explaining one of the most powerful features in Python that allows programmers to achieve more behavior with regular functions.
---

## 📌 Introduction to Python Decorators

In Python programming language, functions can be treated as objects, meaning we can assign them to variables or pass them to other functions. This feature of python was the basis for introducting another powerful feature which is function decorators.

Decorators are wrappers or higher order functions, which in simple terms are functions that take another function as an argument and try to add or extend the behavior of that passed function. Decorators allow us to add or restrict the behavior of wrapped functions without having to modify their source code as I will be showing in the follwing examples.

## 📌 Exploring Syntax and Basic Examples

Recall that In python, we can define and invoke a function very easily as follow:

```python
def greet():
  print("Hello, World!")

greet()
```

We get the output:

```text
Hello, World!
```

Let's say that I want to wrap my output with two horizontal lines before and after printing my output.
I will define a new function called wrapWithLines that takes another function as an argument and returns a new function that addes lines before and after the execution of the given function:

```python
def wrapWithLines(func):
  def new_function():
    print("-----------------")
    func()
    print("-----------------")
  return new_function
```

What you see above is the implementaions of a Python decorator. Decorators take a function as input, and must return a new function that replaces the original function with additional features. What is left now is to assign the decorator we made to the function we want to modify its behavior. We can do this by using the @ operator follwed by the name of decorator function and placing them right above the defintion of our function as follow:

```python
@wrapWithLines
def greet():
  print("Hello, World!")

greet()
```

That's it. We have successfuly defined and assigned a decorator to our function. Now we can see that our output will look like this:

```text
-----------------
Hello, World!
-----------------
```

We can use this decorator to output lines around any function output we want simply by putting this one line before any function definition:

```python
@wrapWithLines
```

## 📌 More Examples

Now let's try to implement a decorator that delays the execution of a function for a given number of seconds.

Recall that in python you can stop the execution of your code for given amount of time using using [time library](https://docs.python.org/3/library/time.html#time.sleep) as follow:

```python
import time

time.sleep(1)

print("This message should appears 1 second later")
```

We can create a new decorator that takes the duration we want to delay the execution of our function as follow

```python
import time

def delayExecution(seconds):
  def actual_decorator(func):
    def new_function():
      time.sleep(seconds)
      func()
    return new_function
  return actual_decorator
```

You can see that we are able to pass special arguments to decorators by wrapping the decorator itself by another function. We have 3 nested functions here that make the code a bit hard to read through, take your time to fully understand what's happening there.

We can now use our new decorator as follow:

```python
@delayExecution(5)
@wrapWithLines
def greet():
  print("Hello, World!")

greet()
```

Now we can get this output roughly after 5 seconds have passed:

```text
-----------------
Hello, World!
-----------------
```

You might have noticed that we are using two decorators for our greet function, and yes that is perfectly valid. It is important just to put your decorators in the right order and assure correct implementation to avoid any strange bugs!

## 📌 Niche Examples In Web Develpoment

![Flask](https://www.educative.io/v2api/editorpage/6196871006519296/image/6316021754363904)

[Flask](https://flask.palletsprojects.com) is a very popular and light-weight python framework that is used in making server back-ends for web applications. Flask was the very first web framework that I learned few years ago and I recommend it for any beginners because it has such an easy learning curve.

In Flask we can use python decorators most commonly to validate whether a user has the appropriate credentials of accessing a certain page on our website or not.

Let's create a simple profile page in Flask as follow:

```python
from flask import Flask
app = Flask(__name__)

@app.route('/profile')
def profile():
    return "Welcome to your profile page!"
```

We can see that Flask by default uses decorators to implement routing. Let's try and make the profile page only accessible if the user is currently logged in. We will have to import few more things from the Flask library to build our login decorator:

```python
from flask import Flask, redirect, session
app = Flask(__name__)

app.secret_key = 'session_secret_key'

def requires_login(func):
    def wrapper(*args, **kwargs):
        if not "logged_in" in session:
            return redirect(url_for('login'))
        return func(*args, **kwargs)
    return wrapper

@app.route('/profile')
@requires_login
def profile():
    return "Welcome to your profile page!"
```

The decorator function above checks if we have a valid login status stored in our session, if so then the code execution continues normally and the user is shown their profile page, otherwise, the user is redirected to login page since they don't have valid credentials.

## 📌 Conclusion

Python function decorators are a powerful way to extend or modify the behavior of functions without altering their source code. Decorators have many usecases, they enable code reusability, encapsulation, and cleaner code organization.
