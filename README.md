# Whiskey Thief Client

# Whiskey Thief API

Whiskey Thief is a single page application designed to allow users to store, view, and update information about their favorite whiskeys. A "whiskey thief" is a tool that master distillers use to extract small portions of whiskey from aging barrels for sampling. This application serves as a whiskey thief of sorts, allowing users to "sample" information about whiskeys they've tried. This application works with a backend API - see deployed site link under "Important Links".

I came up with this idea after spending the last year collecting over 50 bottles of whiskey with my husband. We are somewhat obsessed. I thought it would be fun and useful to have a way of storing information about the bottles we own, as well as basic information about what stood out to me about each whiskey (I've tried a lot, and can't remember them all!).

## Important Links

* [Whiskey Thief API Repo] https://github.com/MelNesbitt12/whiskey-thief-api
* [Deployed Whiskey Thief API] https://rocky-fjord-04258.herokuapp.com/
* [Deployed Whiskey Thief Client Application] https://melnesbitt12.github.io/whiskey-thief-client/

## Planning Story

I began the planning process by creating a wireframe for each portion of the app: sign in and create account, a page where the user could update their password, add a whiskey to their shelf, update a whiskey, see all whiskeys, delete a whiskey and sign out.

Before beginning my front end work, I first completed all user authentication and schema/model-building in my API file. Once I moved on to front end work, I started by testing my user authentication curl scripts. Once I was certain they were working, I moved on to writing and testing user authnetication functions, using the localhost development environment. Once I was able to successfully make requests to sign up, sign in, change password, and sign out, I moved on to CRUDing my user resource, again testing curl scripts first before moving on to creating click events and ajax requests for create, index, update and destroy.

Front end styling came next: I created sign up, sign in, change password, and sign out fields. I then moved on to creating forms for adding, indexing, updating and deleting items, making use of the user's token in order to do so. I worked the use of handlebars into my front end styling within my index and delete requests.

My stretch goals for this project were to make use of modals in some way, which I was able to do a number of times. I added modals to update users when they sign up, sign in, update and delete a resource.

My problem-solving/debugging strategy consisted of:
  * Going to the documentation
  * Searching online for information to help solve the issue
  * Trial and error, making use of the console and developer tools to figure out where my issues were coming from
  * Issue queue

### User Stories

* As a user, I need to be able to sign in, create an account, sign out, and change my password.
* As a user, I need to be able to add new whiskeys to my whiskey shelf.
* As a user, I need to be able to update information about my whiskeys, including adding comments specific to each whiskey.
* As a user, I need to be able to see a list of all whiskeys that I've tried.
* As a user, I need to be able to delete whiskeys from my account.

### Technologies Used
My Whiskey Thief application was built with:
  * Handlebars
  * Bootstrap
  * HTML
  * CSS
  * Javascript
  * Ajax

### Unsolved Problems
I have a mix of modals and text appearing on the page itself to update my users, so I'd like to put all messages into modals in a future version of my project.

I want to put my "Add a Whiskey to your Shelf" form into a modal to be consistent with my use of a modal for my "Update a Whiskey" form.

Users need to copy and paste the ID of the whiskey they would like to change into the Update Whiskey form, which feels cumbersome. I tried using handlebars to add an update button to each individual whiskey; while I was able to successfully send the PATCH request through by clicking the update button, the modal I was using to store the update form never fully closed. In a future version of this project, I'd like to tackle this issue.

Right now, users can only see the full list of whiskeys on their shelves. In a future version of this project, I would like to give users the ability to view just one whiskey at a time.

My page does not render properly on a mobile device, so adding mobile responsive design will be a focus for a future version.

## Images:

#### Wireframe:
![Whiskey Thief Client Wireframe] https://imgur.com/a/VJGwNSA


---
