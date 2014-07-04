Summary
=======

The Qurio text format allows anyone to write questionnaires in an easy-to-read, easy-to-write, open, plain text format. Questions can be imported into http://qurio.co or converted into JSON with the open source parser.

Introduction
============

At [Qurio.co](http://qurio.co), our aim is to make creating questions, collecting and analysing the results, as simple as possible.

Although our users trust Qurio as the simplest way to create surveys, tests or quizzes, many of them still have their questions stored in InDesign or Microsoft Word files. While these formats make it easy for humans to read and modify questions, it becomes hard to convert questions into a format that computers can understand and use.

Copying and pasting every question and answer is tedious and error-prone. We, therefore, created the Qurio text format to assist our users in importing their existing library of questions into Qurio. The Qurio text format is:

1. **Easy to create, read and edit for both humans and machines:**

  To use it, you don't have to spend valuable resources on teaching yourself or training others. There's also no need for expensive software development to integrate it into your product or workflow.

2. **An open, plain text format:**

  By making the specifications of this format publicly available, anyone is free to create and edit content in this format and use it for their own project. Storing content in plain text also means it's easy for anyone to open and save files, as well as keep track of changes using existing version control software such as SVN, Mercurial or Git.

3. **Open Source and free from vendor lock-­in:**

  If Qurio or this format no longer meets your demands, you are free to adapt it to your liking without having to rewrite everything from scratch.

Quickstart
==========

To create a file for importing questions into Qurio, open your favourite plain text editor (such as Notepad for Windows, gedit for Ubuntu or Sublime text).

A valid file must contain at least one question and every question must contain at least one valid answer.

Add your question by simply typing it on the first line of your file:

```
Which year marks the start of World War Two?
```

Next add some answer options to your question. Answers are always on a new line and start with a ```-``` (dash) symbol. It's important to always keep a space between the dash and the answer. To add your first answer, change your text file as follows:

```
Which year marks the start of World War Two?
 - 1492
```

To add more answers, simply keep adding a new line, the dash symbol and your answer text. You can add as many answers as you want.

```
Which year marks the start of World War Two?
 - 1492
 - 1652
 - 1914
 - 1939
 - 2007
```

If your question is part of a test or quiz, you need to indicate which answer is correct. To do this, simply write ```[correct]``` behind the correct answer:

```
Which year marks the start of World War Two?
 - 1492
 - 1652
 - 1914
 - 1939 [correct]
 - 2007
```

Congratulations, you've created your first question. Now that your question and answers are typed out, you can save this file and import it into Qurio.

To add more questions, start on a new line and follow the same steps:

```
Which year marks the start of World War Two?
 - 1492
 - 1652
 - 1914
 - 1939 [correct]
 - 2007

Which one of the following countries weren't part of the Axis alliance?
 - Japan
 - United States of America [correct]
 - Italy
 - Germany
```

You can also write questions that consist of several paragraphs:

```
The Axis powers, also known as the Axis alliance, Axis nations, Axis countries, or the Axis, were the nations that fought in the Second World War against the Allied forces.

Which one of the following countries weren't part of the Axis alliance?
 - Japan
 - United States of America [correct]
 - Italy
 - Germany
```

To create multi-paragraph answers, each new paragraph has to be indented by pressing the tab key or at least two spaces:

```
The Axis powers, also known as the Axis alliance, Axis nations, Axis countries, or the Axis, were the nations that fought in the Second World War against the Allied forces.

Which one of the following countries weren't part of the Axis alliance?
 - Japan
   (known as the Empire of Japan)
 - United States of America [correct]
 - Italy
   (known as the Kingdom of Italy)
 - Germany
   (known as Nazi Germany)
```

Unless you specify a different question type, all questions will be imported as *multiple choice* questions. Multiple choice questions only allow one answer to be selected and, therefore, only have one correct answer.

You can also create *check box* questions, which allow several answers to be selected. To create a check box question simply write ```[checkbox]``` on the line above the question:

```
[checkbox]
Select all the countries that were part of the Alliance forces during World War II:
 - Soviet Union [correct]
 - Italy
 - United Kingdom [correct]
 - France [correct]
 - Japan
```
