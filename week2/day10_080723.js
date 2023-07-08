//Day 10: Introduction to JSON, parsing and stringifying JSON data.

//Introduction to JSON:
    //JSON (Javascript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and for machines to parse and generate.
    //It is widely used for transmitting data between a server and a web application, as well as storing and exchanging data within application.

    //JSON syntax is based on javascript object syntax, making it easy to work within javascript.
    //It consists of key- value pairs, arrays, and nested objects.

    //Example
    var person = {
        "name" : "jhon",
        "age" : 25,
        "isStudent" : false,
        "hobbies": ["reading", "playing football"]
    };

//Parsing  JSON

    //To work with JSON data in javascript, we can use the 'JSON.parse()' method to parse a JSON string and convert it into a javascript object. This allows us to access and manipulate the data within the object.
    //Example
    var jsonString = '{"Name" : "JHON", "age": 25}';
    var jsonObj = JSON.parse(jsonString);

    console.log(jsonObj.Name);
    console.log(jsonObj.age);

//Stringifying JSON

    //Conversely, if we have a js object  and want to convert it into 