---
layout: post
title:  "Variable Scope"
date:   2014-06-20 12:00:00
categories: DBC phase_0
---

## What kinds of variables does Ruby support?

Ruby supports 4 different types of variables. They are as follows:

<ul>
    <li>Global Variables, denoted with a $ sign at the beginning of variable ($var1)</li>
    <li>Class Variables: denoted with two @ signs (@@var2)</li>
    <li>Instance Variables: denoted with an @ sign (@var3)</li>
    <li>Local Variables: any variable that begins with a lowercase letter (var4)</li>
</ul>

## Where are they accessible?

Each is accessible at different levels of any given program. The list above displays them in order of accessibility from broadest to narrowest. A global variable is available anywhere throughout the program it is assigned in. It can be accessed by any class or method. A class variable, as could perhaps be predicted from its name, can only be accessed within the class in which it is assigned. They can be described as "global variables within the context of a single class". An instance variable is  a variable that is only available to a single instance of one specific object. Finally, local variables are only available within the method or loop that calls them.

## When would you use them and what makes them different?

<strong>Global Variables:</strong> generally, these should be avoided. Global variables are too easy to mess up - any method that accidentally changes a global variable could break an entire program. Therefore, programmers should avoid using global variables.

<br>
<br>

<strong>Class Variables:</strong> these variables are useful tools, in that they give you consistent variables through a class, but they have a downside, which is that they are automatically inherited by any subclasses of the original class, and if they are changed in the subclass, they change in the primogenitor class as well. Because of this, it is usually better to use our next type of variable in classes. 

<br>
<br>

<strong>Instance Variables:</strong> these variables are probably the most frequently used and thus possibly the most useful. This has the same useful features as a class variable (which is to say, it lets you set and access variables through every instance of a class) without the inheritance issues that make using class variables a double-edged sword.

<br>
<br>

<strong>Local Variables:</strong> this type of variable is useful for quarantining information that you only need in a single method or for reusing common variable names across multiple methods and loops without getting errors. This might not always be best practices - constantly reusing variable names could make your code difficult to read - but judicious use allows you to write multiple snippets of code that do similar things and that benefits from variable names that you used elsewhere.