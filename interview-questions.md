# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: React uses components to create, track, and organize its objects. Each component can hold state, but it is best to keep state centralized at at the top of the data flow. Props is a way for other components to inherit logic  without actually giving them state. I have used props to create a tic-tac-toe game and update the state of players turns, clicking to make an x or an o, and to disable pointer events in each div that the user clicked on. I think it is best to have state centralized because it is easier to debug, the data is easier to read (abstraction), and the performance is increased (since it starts at the top most level).

  Researched answer: In React, everything is a component. Props is a keyword that is short for properties, and it allows components to communicate to each other. There are two types of components in React, they are smart components that hold state, and dumb components that do not hold state. It is best to keep state at the top parent component and to only change it there since props are passed from parent to child. I have used props in React to create a tic-tac-toe game. My parent object held state and updated the game board, while the board itself was held in a seperate component. I was able to pass props of clicking the board to make an x or o, disabling pointer events on the board, and to keep tract of each player's turn. 



2. What is a DOM event?

  Your answer: A DOM event is the effect of user interaction or behavior being triggered by user interaction with the DOM. The DOM (document object model) is what a user sees, it is the UI of the webpage. In React the DOM is compared against a Virtual DOM, so when a user clicks a button a DOM event is triggered and the Virtual DOM updates that specific component on the DOM. This is increadibly powerful because the whole DOM is not changed, just specific components. Recently I have been using React Three Fiber to leverage the power of React combined with WebGL. By having a 3d rendered website, user interaction is seamless because each 3d object is a component in React. The downside to this is that performance is based solely on the user's hardware. 

  Researched answer: A DOM event is something that is triggered by user interaction with the DOM (Document object model). The DOM is what the user sees and can interact with. In React, when that user does interact with the DOM, like clicking a button, the DOM is compared to the Virtual DOM and that specific component is updated. This is powerful because the whole DOM is not re-rendered or loaded just that specific component is. A specific example could be adding onClick to a button, when the button is clicked a DOM event is triggered and the logic is ran. Recently I have been using React-Three-Fiber to have 3d models render in the DOM. DOM events are literal interactions with 3d objects. The downside to this is that performance when loading is based on the user's hardware and could lead to limitations. 



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object oriented programming is an approach to programming that takes the philosophy of everything being an object. There are four pillars to object oriented programming. They are: abstraction, encapsulation, inheritance, and polymorphism. Abstraction is being able to read/write code in an understandable way -keeping it clear and simple. Encapsulation is keeping all of your code and logic contained inside of objects. This makes it easier to debug, and test specific features without breaking the whole application. Inheritance is keeping repeatable code and data stored in a parent class. A class is like a recipe or blueprint for your objects - and they pass down that code, data, or logic to the children through inheritance. Polymorphism is using simple naming conventions to similar logic. If it behaves the same way, call it the same thing. Object oriented programming is different than functional programming because you are trying to manipulate objects to create what you want. Functional programming is manipulating logic to create what you want. It is often easier to scale object oriented programming than it is to scale functional programming.

  Researched answer: Adding on to the top answer: Functional programming and Object oriented programming are different concepts. Functional programming does not store data in objects, and the data can only be manipulated through functions. Object Oriented programming data is stored in objects. 


4. What is the difference between a Float and an Integer in Ruby?

  Your answer: In Ruby a float is a fraction of a number or a decimal. An integer is a whole number. While everything in Ruby is an object they are considered different from each other. Floats and integers can still be used together and will become floats through type coercion. 

  Researched answer: An integer in Ruby is a whole number, and a float is a fraction/decimal of a number. Since everything in Ruby is an object, floats and integers are data types of the parent class numeric, and Numeric is a child of Object. In my experience integers are type coerced into floats when they are used together. (2 + 2.0)



5. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return is a feature of ES6 syntax. In ES6 the arrow of the function points to the body of code, and the return is implied. This means you do not have to declare 'return' when using ES6 syntax. You can use this method in a single line of code or with parenthesis in multiline of code.

  Researched answer: Implicit return is a feature of ES6 syntax. Implicit return is when a function returns values without the return keyword. In ES6 the arrow function defines the body of code, so the body is implied to be the return. There are two ways to use implicit return with ES6 syntax. The first way is single line, where all of the code is written on one line. The second way is multiline where the body is encapsulated by parenthesis.



## Looking Ahead: Terms for Next Week

1. Instance Variable: a variable starting with @ in Ruby. Each object created from that class will have its own data inside an instanced variable. A dynamic variable?

2. PostgreSQL: SQL is structured query language. Open sourced object-relational database management system. Relational database uses rows and columns - called a schema.

3. Ruby on Rails: Open source server-side web application framework written in Ruby.

4. ORM: Object relational mapping. Converts data between incompatible systems.

5. Active Record: the Ruby on Rails ORM. Takes data stored in database tables, and lets you interact with them as if they were Ruby objects.
