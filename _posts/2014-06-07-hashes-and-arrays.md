---
layout: post
title:  "Hashes and Arrays"
date:   2014-06-07 12:00:00
categories: DBC phase_0
---

##What are they?

Both arrays and hashes are ways of storing data in Ruby. They both use an index structure to record information. However, they do this in distinctly different ways.
<br>
<br>
An array is a straightforward list of objects. It is denoted with square brackets. Each object in the array is indexed to a number, beginning with the number 0. So the first object in an array is object 0, the second is object 1, the third is object 2, the fourth is object 3, and so on throughout the array. These objects can be accessed by their index number. This is done by using the command array_name[#], where # is the index number. Objects in an array can also be accessed in reverse order with negative numbers, so -1 would be the last object, -2 would be the second to last object, and et cetera. Arrays can grow indefinitely, but they get more and more unwieldy the longer they grow; any search has to remember the precise position of whatever element you wish to access.
<br>
<br>
A hash is slightly more complex. Hashes are also known as associative arrays. They consist of a list of what are called key-value pairs. The key is how these items are accessed. In that sense, it is equivalent to the index number in an array. However, in a hash, the key and the value can both be set to whatever you want it to be. You get to choose what key you associate with the value (thus the “associative array” sobriquet - geeks are incredibly imaginative). This can make it easier to remember - for example, if you were indexing a class of students, the keys could be their names, and the values could be the grades they receive. 
<br>
<br>
Hashes give you more options for how you want to index an array. Also, they are usually faster to search through than an array would be. This is because they feature a tree structure of smaller arrays. Any search can look for the smaller arrays, rather than simply a long list of items as you would have in an array. Hashes also have some downsides; since you have to enter the keys, there is the chance that an error will be made when a key is being entered, making it difficult to access the value. Generally though, hashes are a more flexible tool for storing data.

##What are they good for?

Arrays are good for storing shorter sets of information, or data sets where you only have to remember a single string or integer for each data point. Hashes are good for almost everything else, as they give you far more flexibility in building a storage solution that can match the specific custom keys you need with a multitude of values.

##How do you know which one to use?

I’m going to try to avoid coming off like a programming super genius handing down knowledge from on high, as the truth is that I’m still not entirely sure when to use each type of data storage system. Generally, I think that an array would be useful when you have a single piece of data or just a few pieces of data and you want the flexibility of array methods, whereas a hash in useful in pretty mush any other situation because of that increased flexibility described above. That said, I have noticed that I tend to default to arrays in my own coding because they are simple to build and for our current needs, they do the job well. For almost any reasonably small data set, arrays work well, but hashes seem like a far better option for any larger or more unwieldy datasets you may encounter.
<br>
<br>
<hr>
<br>
Update (September 25, 2014):

Once upon a time, this had images in it, as did a number of these posts. Unfortunately, they've been lost to the depths.