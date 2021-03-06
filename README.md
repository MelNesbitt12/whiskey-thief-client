# Whiskey Thief Client
![Whiskey Thief App](https://user-images.githubusercontent.com/59749085/95343338-664e9d00-0886-11eb-8974-ac23c1288d67.png)

Whiskey Thief is a single page application designed to allow users to store, view, and update information about their favorite whiskeys. A "whiskey thief" is a tool that master distillers use to extract small portions of whiskey from aging barrels for sampling. This application serves as a whiskey thief of sorts, allowing users to "sample" information about whiskeys they've tried. This application works with a backend API - see deployed site link under "Important Links".

I came up with this idea after spending the last year collecting over 50 bottles of whiskey with my husband. We are somewhat obsessed. I thought it would be fun and useful to have a way of storing information about the bottles we own, as well as basic information about what stood out to me about each whiskey (I've tried a lot, and can't remember them all!). I would like this application to eventually allow users to view and comment on each other's whiskey shelves.

## Important Links

- [Whiskey Thief API Repo](https://github.com/MelNesbitt12/whiskey-thief-api)
- [Deployed Whiskey Thief API](https://rocky-fjord-04258.herokuapp.com/)
- [Deployed Whiskey Thief Client Application](https://melnesbitt12.github.io/whiskey-thief-client/)

## Planning Story

I began the planning process by creating a wireframe for each portion of the app: sign in and create account, a page where the user could update their password, add a whiskey to their shelf, update a whiskey, see all whiskeys, delete a whiskey and sign out.

Before beginning my front end work, I first completed all user authentication and schema/model-building in my API file. Once I moved on to front end work, I started by testing my user authentication curl scripts. Once I was certain they were working, I moved on to writing and testing user authnetication functions, using the localhost development environment. Once I was able to successfully make requests to sign up, sign in, change password, and sign out, I moved on to CRUDing my user resource, again testing curl scripts first before moving on to creating click events and ajax requests for create, index, update and destroy.

Front end styling came next: I created sign up, sign in, change password, and sign out fields. I then moved on to creating forms for adding, indexing, updating and deleting items, making use of the user's token in order to do so. I worked the use of handlebars into my front end styling within my index and delete requests.

My stretch goals for this project were to make use of modals in some way, which I was able to do a number of times. I added modals to update users when they sign up, sign in, update and delete a resource.

My problem-solving/debugging strategy consisted of:
  - Going to the documentation
  - Searching online for information to help solve the issue
  - Trial and error, making use of the console and developer tools to figure out where my issues were coming from
  - Issue queue

### User Stories

- As a user, I need to be able to sign in, create an account, sign out, and change my password.
- As a user, I need to be able to add new whiskeys to my whiskey shelf.
- As a user, I need to be able to update information about my whiskeys, including adding comments specific to each whiskey.
- As a user, I need to be able to see a list of all whiskeys that I've tried.
- As a user, I need to be able to delete whiskeys from my account.

### Technologies Used
My Whiskey Thief application was built with:
  - Handlebars
  - Bootstrap
  - HTML
  - CSS
  - Javascript
  - Ajax

  ## Tasks

  `npm` is used as a task runner for this project. These are the commands available:

  | Command                | Effect                                                                                                      |
  |------------------------|-------------------------------------------------------------------------------------------------------------|
  | `npm run server`       | Starts a development server with `nodemon` that automatically refreshes when you change something.                                                                                         |
  | `npm test`             | Runs automated tests.                                                                                       |
  | `npm run debug-server` | Starts the server in debug mode, which will print lots of extra info about what's happening inside the app. |

  Developers should run these often!

  - `npm run nag`: runs code quality analysis tools on your code and complains.
  - `npm run make-standard`: reformats all your code in the JavaScript Standard
    Style.
  - `npm run start`: generates bundles, watches, and livereloads.
  - `npm run build`: place bundled styles and scripts where `index.html` can find
      them
  - `npm run deploy`: builds and deploys master branch

  ### Authentication Routes

  | Verb   | URI Pattern            | Controller#Action |
  |--------|------------------------|-------------------|
  | POST   | `/sign-up`             | `users#signup`    |
  | POST   | `/sign-in`             | `users#signin`    |
  | PATCH  | `/change-password/`    | `users#changepw`  |
  | DELETE | `/sign-out/`           | `users#signout`   |

  ### Resource Routes

  | Verb   | URI Pattern            | Controller#Action |
  |--------|------------------------|-------------------|
  | GET    | `/whiskeys`            | `whiskeys#index`  |
  | GET    | `/whiskeys/:id`        | `whiskey#show`    |
  | POST   | `/whiskeys/create-whiskey`| `whiskey#create`|
  | PATCH  | `/whiskeys/:id/update` | `whiskey#update`  |
  | DELETE | `/whiskeys/:id`        | `whiskey#delete`  |


### Unsolved Problems
*Version 2:*
- I have a mix of modals and text appearing on the page itself to update my users, so I'd like to put all messages into modals in a future version of my project.

- I will put 'Change your Password' and 'Add a Whiskey to Your Shelf' into a nav bar

- Upon clicking "Change Password" or "Add a Whiskey to your Shelf" from the nav bar, modals with forms will appear, allowing the user to update their password/add a whiskey directly within the modal.

- Right now, users can only see the full list of whiskeys on their shelves. In a future version of this project, I would like to give users the ability to view just one whiskey at a time.

*Version 3:*
- My page does not render properly on a mobile device, so adding mobile responsive design will be a focus for a future version.

- I will give users the option to include photos of their whiskeys when adding a whiskey to their shelf

*Version 4:*
- I will create a User model so that users can have their own profiles on the site
- Users will be able to comment on other users' posts
- The app will make recommendations for other whiskeys to try based on users' posts

#### Wireframe:
![Whiskey Thief Client Wireframe: Part 1](https://user-images.githubusercontent.com/59749085/95343702-d5c48c80-0886-11eb-83cd-f59a12dca4be.jpg)
![Whiskey Thief Client Wireframe: Part 2](https://user-images.githubusercontent.com/59749085/95343720-d9f0aa00-0886-11eb-9742-2e25a5dc07b2.jpg)


---
