---
layout: post
title:  "Test-Driven Development"
date:   2014-07-08 12:00:00
categories: DBC phase_0
---

I decided to write about test-driven development for two reasons. The first is that I love it. I have been using elements of test-driven development in my day-to-day life for as long as I can remember, even if I didn't describe it as such. The second reason isn't quite as positive: I'm still struggling with writing good test code. I hope that writing this blog about TDD will let me go a little more in-depth on the subject and hopefully (somewhat selfishly) let me comprehend test-driven development on a deeper level.

## What is Test-Driven Development?

The initial question, of course, is what test-driven development actually is. The simplest way to describe it is that it is a paradigm of programming wherein the programmer writes tests for code that doesn't exist, then writes code to pass those tests. Of course, even this simple explanation starts to get a little complicated: why or how could you write tests for something that doesn't exist yet? This question, though, brings to light what I believe is the biggest advantage of TDD: it forces you to think things through. I know that I, and I assume many other people writing code, have a tendency to jump into projects. We tend to think that we can hold the entirety of whatever project we are designing in our heads and get everything written, and it is always tempting to just get started. Test-driven development forces you to slow down that process and actually think through your code before you write it. You have to consider what your goals are, and what code you need to meet those goals. Then you can actually start writing the code to meet those specific goals.

So the broad outline of test-driven development is that you think, write tests, and then code. But what are the specific steps that a developer must take to follow good practices for TDD? The primary process consists of five steps. They are:

<ol>
    <li>Write a test: this is your first step. You write a test that you know will fail. You write this test based on the requirements you have for the program you are writing. Generally you consult user stories and use cases to figure out what those requirements are.</li>
    <li>Run the test: it fails. It has to fail on this step. If it passes, either you already have this functionality or you screwed the test up.</li>
    <li>Write some code: the basic principle of TDD is that you write the bare minimum code necessary to pass the test. When you write this code, it doesn't need to be pretty, it doesn't need to be perfect, it <em>just needs to pass</em>.</li>
    <li>Run the test again: this time, your test should succeed. If it doesn't, return to step 3 and keep writing code until the test passes.</li>
    <li>Refactor: this is where you make your code pretty. You clean up variable and method names, move it to where it logically belongs, remove duplication, and generally touch up the code so that it meets your impeccable standards. </li>
</ol>

## Why Test-Driven Development?

Test-driven development gives you some advantages over a more classic approach of writing programs, system testing (or testing the program as a whole). It forces programmers to write more modular code, code that can essentially function as plug-and-play code anywhere it might be needed. Because you write tests, write code to pass those tests, and then test constantly, it decreases the need to debug. Errors are caught quickly, as they are being written, rather than days or weeks later. Finally, as mentioned above, TDD forces the programmer to think through their code and comprehend what they want to do before they start doing it. This might be most valuable for rookie developers who haven't built this habit, but there's no reason it wouldn't benefit programmers at any skill level.

## Why Not Test-Driven Development?

In my research, I have found three primary reasons why test-driven development might not be the best idea. The first is that, if you do not fully understand the scope of what you need to write when you start writing the tests, the tests and the code could share blind spots. If you missed some edge case in writing your test, or you simply misunderstood or misinterpreted the user stories, your tests will be incomplete. If your tests are incomplete, your code will be incomplete, and worse, there's no way for you to be sure you haven't made this error.

The second is that, just like any type of code, test code can be poorly written. If that is the case, you've just doubled your pain by writing bad tests. Now you have to fix those and fix your own code. The third and final issue, highlighted in <a href="http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html">this post by David Heinemeier Hansson</a>, is that the focus on modular code, while it can have benefits, also has downsides. It can create "some truly horrendous monstrosities of architecture[,  a] dense jungle of service objects, command patterns, and worse."

## So What's the Verdict?

There are benefits and downsides to test-driven development, but at this stage in my career, and in the career of my fellow boots, I think that TDD is generally a very good thing. I suspect that, as we grow and develop as software engineers, some of us may gravitate away from TDD depending on what projects we're working on and what personal process we settle on that best fits us. But TDD is a good practice and test-driven code will generally be better code that is easier to work with and easier to reuse.