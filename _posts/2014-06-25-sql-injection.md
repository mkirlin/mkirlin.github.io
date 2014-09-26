---
layout: post
title:  "SQL Injection"
date:   2014-06-25 12:00:00
categories: DBC phase_0
---

## What is it? Why is it a problem?

SQL injection is a type of attack that can be launched against a website. Virtually every website in the world has at least a few places where people can input data. Typically, when a user inputs data, the web application executes a series of SQL commands on the database or databases it is associated with to deliver the result of the user's input. SQL injection uses these input forms to send their own SQL queries from a user input form. This could potentially let them access the backend database.

The basic pattern of an SQL injection is that the attacker writes into a form with a command that causes the database to allow access to a hidden section, or to return sensitive information. If the attacker is lucky and guesses a correct database name, they can get a considerable amount of information

## What can newbie programmers do to combat this issue?

There are a few different ways to protect against SQL injection. One common way is to prohibit SQL syntax from being entered into user input forms, but that's not an ideal solution. Most of that syntax naturally occurs in language and could be useful to your users. A better way is to do what is called parameterizing queries. This means that the parameters for any and all user inputs are marked in your SQL code with an @ sign; this tells the program that these parameters are not to be executed as SQL code, no matter what they contain. If you remember to do this, you will avoid SQL injection.