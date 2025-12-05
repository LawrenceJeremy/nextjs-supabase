FLOW OF CRUD OPERATION
----------------------------------------------------------------------------------
1. lib/supabaseClient - import createClient inside of client function is .env
2. types/users - define entity like document fill up form
3. app/serverAction - server action perform crud operation
4. app/page - actual UI client
----------------------------------------------------------------------------------

SERVER ACTION
----------------------------------------------------------------------------------
1. import 2 object supabaseClient / define types
2. make reusable export async/await function
3. it has type annotation params data: Types, so TypeScript knows what fields 
the object should contain
4. create object destructuring const { error }  to get/select data and insert document
5. error handling to test whether it has error or not "if" condition only
6. return the response success if there is no error
----------------------------------------------------------------------------------


CLIENT SIDE
----------------------------------------------------------------------------------
1. import 2 object useState and async function in Server Action
2. initialize useState for handling form
3. create async function for submit and it has parameter form event built in type in react
4. make const object destructure and await calls the server function name and
put inside parameter is the current state
5. make sure not reloaded using prevent default & clear form after submission
6. return the response after submit (if it have an error or not)
----------------------------------------------------------------------------------