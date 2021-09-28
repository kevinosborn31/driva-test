# Driva Engineer Tech Challenge 

## Approach
I have decided to use React with a Node back end for this project. I have opted to use a one-page style without routes, though I have future plans to implement them. 

### Structure
I have opted to structure this using a simple react component for each "page" of the form, and using a switch statement with a "step" variable to determine which part of the process the user is currently on. This will allow easy implementation of breadcrumbs in the future, or different user experiences depending on which step they are at without reloading the page or changing the route.

My main goal was to create a one-page form seamless across 3 pages. Navigation is done through the nextStep and prevStep functions.

### Back end
Back end dev is certainly my weakest point, and I had significant issues getting the SQL database up and running on my machine using docker. I have created a simple query "create_quote" to post the data into the back end table. It currently is not working which I will be mention in my future development section.

Data is sent to the back end in Form.js under the handleSubmit function.

Any feedback or suggestions on how I have done this or where I have gone wrong will be greatly appreciated, whether I am successful or not.

### Styling
I have created basic styles, but didn't spend too long on it. Would like to have the opportunity to clean this up and make it look nice.

I have used CSS modules as that is my preferred method of styling react apps. There is only one module but in a bigger application I'd usually use one for each page, or component as well as one or two for the entire site.

### Form Validation
I have implemented simple form validation for the First Name and Email fields. Now that I have done this I believe it will be easy to implement validation for the other fields. Time constraints have stopped me from doing this.

Currently validation doesn't show up on the individual fields that aren't valid. It is currently displaying as an alert, but I know how to easily fix this.

### Future Development / Wishlist (In order of priority)
* UNIT TESTS!!!! - Really wish I had time to do this. Particularly for the form validation functions.
* Implement form validation for all fields, and have some styling on the inputs to indicate where the issues lie
* Investigate where I have gone wrong with the back end, as it isn't posting to the database.
* General styling touch ups. Currently the second page in particular doesn't look great.
* General code clean-up
* Improvements on the "Success" page e.g. "back to home" button
