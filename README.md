# Result Checking

Project created by Anish Khandelwal.

## Libraries Used

In the project, I used the following libraries -

### react
### react-dom
### react-router-dom
### axios
### body-parser
### express
### bootstrap

## Frontend

App.js file handles the client side routing. Since single page has to be displayed, a single route is defined with a `Redirect` set to redirect all the unknown routes back to home.

The App.js file calls a functional component `CheckResult` which has the main logic defined in it.

`CheckResult` displays an input box for the user to enter the roll numbers and return a table with the result displayed along with roll numbers.

The `input` takes the rool numbers separeted wuth `,`.

The input is split and stored as an array and cleaned using `trim()` method.

Using `axios` the array of roll numbers is passed to the backend.

The result received from the backend is then looped through `map()` function inside the JSX.

If no input is given and the submit button is pressed, the input box shines up and displays the error message.


## Backend

Using `express` the incoming request is caught and further passed on to the external API.

To get the result from the external API `axios` is used.

Each unique request is passed through a loop with the help of `Promise`.

Use of `Promise.all()` helps in resolving the pending promise and return the result after the whole array is resolved.

Once it is resolved the request is returned with array of result as the payload.

## Test Cases

### 1st Test Case - `5,6,9,12,18,20,25,30,32,36,37,38,40,42,45,47,49,50`

Output - 

![image](https://user-images.githubusercontent.com/55437843/112727138-f7095a00-8f46-11eb-8221-a8c7b3dc5de9.png)


### 2nd Test Case - `2,4546,7658,55,77,234235`

Output - 

![image](https://user-images.githubusercontent.com/55437843/112727308-fae9ac00-8f47-11eb-8684-08d7ec745000.png)

### 3rd Test Case - `1234567890`

Output - 

![image](https://user-images.githubusercontent.com/55437843/112727339-25d40000-8f48-11eb-873c-2d7b56e9a912.png)


### 4th Test Case - ``

Output- 

![image](https://user-images.githubusercontent.com/55437843/112727368-397f6680-8f48-11eb-97a6-a5088221148c.png)


