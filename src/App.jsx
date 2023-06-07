// In this exercise, I hope to get you all more familiar with state management and with creating controlled React forms (aka forms that respond dynamically to user inputs, like updating the page automatically after hitting submit).

// Since some of the steps in this exercise will require us to jump around the codebase below, the steps will not be written in order from top to bottom. Instead, I have labeled each step with their corresponding number. So just be sure not to complete the steps from top to bottom, but rather by numerical order. 

// Our goal in this exercise will be to create a site that lists out a bunch of blog posts, and allow us to create a new blog post in an HTML form. We also want to see our website update automatically with the new blog post once we finish writing it and hit submit! 

// STEP 1: First, let's import some useful tools that we'll need to accomplish this exercise. That means we'll need to import the useState and useEffect hooks from the React dependency. 
// Write your code below: 
import { useEffect, useState  } from 'react'
// Write your code above: 
import './App.css'

function App() {
  // STEP 2: Next, we'll want to create some state management to hold our data. Use the useState hook to create a new piece of state. Call the getter "allPosts", and the setter, "setAllPosts". You can also set the default value of this state to an empty array, since we know that we will eventually be fetching a dataset which will be an array of objects, where each object is an individual blog post. 
  // Write your code below:
const [allPosts, setAllPosts] = useState([])
  // Write your code above: 

  // STEP 5: In order to accomplish the next goal of adding a React form, we'll need some more state management for each of that form's inputs. 
  // STEP 5a: Use the useState hook to create a new pair of state variables. The getter should be called "newPostTitle" and the setter "setNewPostTitle". Set the default value of this state as a string.
  // STEP 5b: Use the useState hook to create another new pair of state variables. The getter should be called "newPostBody", and the setter "setNewPostBody". Set the default value of this state as a string. 
  
  // Write your code for step 5 below: 
  const [newPostTitle, setNewPostTitle] = useState("")
  // Write your code for step 5 above: 


  // STEP 3: Now we'll have to actually write some code to fetch the blog post data for our site. We also want this data fetching to occur the moment our site loads up on the browser (aka the mounting phase!). So we'll want to use the appropriate hook (the useEffect hook) to "hook" into this phase and run a callback function that we'll write to fetch our data.
  // STEP 3A: First start off by writing the skeleton of this useEffect. We'll want this useEffect to only run on mounting, so make sure your dependency array has been set accordingly! 
  // STEP 3B: Next, we'll need that callback function to run when our website mounts, or loads, for the first time. Let's write an asynchronous function called "fetchBlogPosts". 
    // STEP 3B-i: Inside this callback function, we'll need to first set up our try/catch block, so don't forget to do that first.
    // STEP 3B-ii: In the try block of the callback function, we'll need to first fetch the untranslated data from the API. Write some code that will fetch the data and await it so the rest of our function waits for this line of code to finish. Be sure to save the data into a variable. 
      // Note: Here's the API URL we'll be using: 'https://dummyjson.com/posts'
    // STEP 3B-iii: Next, translate the data into a format readable by JavaScript (i.e. JSON). Be sure to also save that now translated data to a variable, and to await it (we don't know how long it will take for our site to translate the data into JSON). 
    // STEP 3B-iv: For this step, we'll need to be sure to check how the data we just fetched is formatted. Is it a nested object? Is the data we want 2 or more levels down in this nested object? We have to check for that. So take a look at the dummyjson documentation for all posts, and see what the data looks like when it is fetched by you. 
      // We will want the specific syntax for that array of blog posts. Once we know the syntax, use our setter, setAllPosts, to save that array of blog posts to our allPosts state getter. 
    // All done! To summarize, this callback function, when run, will fetch some data from an API, translate it, and then save that data to our state. Now we'll be able to render that data on our site in step 4. 

  // Write your code for step 3 below: 
  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('https://dummyjson.com/posts');
  
        const translatedData = await response.json(); 
  
        setAllPosts(translatedData.results)

        console.log(translatedData.results)
      } catch (error) {
        console.log(error); 
      }
    }
  // Write your code for step 3 above:
  
  // *******
  // STEP 7: Now we'll need to write a callback function for the form such that, when a user hits the submit button, *something* will occur. That something is a POST request sending the data for our new blog post to the API, whereby the API processes that request and sends us back some info about our new blog post. 
  // STEP 7A: Write an asynchronous function called sendNewPostReq. 
  // STEP 7B: Inside this function, add its try/catch block. Don't forget to log the error. 
  // STEP 7C: Next, we'll need to fill out the try block. First, we'll need to send a POST request (not forgetting to use the await keyword) and save the response data to a variable. However, because this is not a default GET request, we'll need to configure our fetch API a bit. To figure out how to do so, check out the dummyJSON API docs for "Adding a post". They will show you a sample of how to write the config object (the 2nd argument) of our fetch request. 
  // STEP 7D: Once you've finished writing the fetch request, we'll need to translate the response variable to JSON format. Note how similar this process is to sending a normal GET request, minus the config object in the step above. 
  // STEP 7E: Now comes a tricky step. The API docs for dummyJSON say they have sent us back the new post object that we have just created. We need to add this new post to our array of all posts, or the first state getter we created when we first started this exercise. Use the setter, setAllPosts, to accomplish this to update our state data. 
  // Note: There are a number of different ways to do this step, so do some experimenting and see what works for you (I personally prefer using the spread operator, being sure to also include the new post object as well in that new array). 
  // STEP 7F: We're almost done! Now we need to go attach this callback function to an on submit event listener in our form below. 
  return (
    <>
      <div>
        <h2>hello world</h2>
        {/* 
        STEP 4: Now we have to render the data onto our site. However, we have to be careful. During the mounting of our site, there will be a brief moment in time where our state will have no blog post data inside of it. We don't want our site to crash when that inevitably happens. So we'll want to write some JavaScript that can do something when there is blog post data in our getter, and something else when there isn't. 

        STEP 4a: If you haven't guessed it yet, we'll use a ternary operator! Our logical condition will be whether there is a truthy or falsy length to our allPosts state getter. If the length is truthy, we want to map through all of the array and render some HTML for each post. Go ahead and just render each blog post's title and blog data. Be sure to set a unique key value to the container element for this HTML. 
        // STEP 4b: If the length is falsy, we can just render a basic "Loading" text in a paragraph, or something similar. 

        Note: This part of writing the truthy condition with the mapping can be tricky, so be sure to refer to my demo code for an example of how you might perform a similar operation for a different dataset. 

        If you've done everything correctly, you should see all of the posts data show up on your site!
        Write your code below:  
        */}

{
        allPosts.length ? allPosts.map((singlePoke) => {
          return (
            <div>
              <form>
                
              </form>
            </div>
          )
        }) : <p>Loading...</p>
      }
        {/* 
        STEP 6: Now we want to set up a React form that will allow us to add new blog posts to the list we created in step 4. 
        STEP 6a: First, create a form element.
        STEP 6b: Inside that form element, create two inputs, one for the blog post's title, and the other for the body text. 
        STEP 6c: Now we'll have to connect our state to those HTML inputs. Inside the opening tag of each input element, add a new attribute of "value" and set its value, using JS curly braces, to the appropriate state getter variable (i.e. the title input should be using the newPostTitle getter). 
        STEP 6d: Now we'll have to add an event listener to each of those inputs so that, once the web user begins typing in that input, our state data for that input gets changed as well. We'll use an onChange event listener to accomplish this. Be sure to add a callback function to that event listener that uses the event parameter and the appropriate state setter function to set the event.target.value. 
        (Note: This is one of the most difficult steps of this exercise, so if the above was mumbo jumbo to you, refer to the demo code. Compare and contrast how I did it with how you might approach it here.)
        */}

        {/* STEP 8: In the form that we created, we need to attach the callback function we wrote in step 7 to an onSubmit event listener in the form's opening tag. That way, once a user clicks the submit button, the onSubmit listener is triggered, which then triggers our sendNewPostReq callback function.
        If you've done everything correctly up to this step, you should now see your list of all posts being updated in live time when you create a new blog post yourself! 
        */}
      </div>
    </>
  )
}

export default App
