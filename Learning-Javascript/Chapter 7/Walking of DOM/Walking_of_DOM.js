/*
 DOM TREE refers to html page where all nodes of the tree are objects
there are mainly 3 types of nodes 
1.text nodes--> These are leaf nodes of the tree
2. element nodes ---><html> is at root node and head and body are its children
3. comment nodes

Auto correction:-Erroneous html is encountered by the browser it tends to correct it .
ex:- If we put something after body tag it moves it insude the body. Another example is
table tag must contain <tbody>

Walking of DOM
    RUN THIS COMMANDS IN BROWSER CONSOLE
    document--->will list all the nodes 
    document.body--->will give bodytag
    document.head---->will give head tag
    document.documentElement----> give document html tag
    to change page title  use document.title="your title"
    document.title will return title of document also
    the element returned is in the form of string.
    And the typeof will return object for document.head,document.body
    or document.documentElement
    Note:- document.body---> can be NULL if javascript is written before body
    THESE WILL GIVE NODES IN THE FORM OF ARRAY AND WE CAN APPLY ARRAY METHODS

 */