# NICEBREAKER

Created for anyone who struggles to come up with interesting topic of conversation.  
Sign up and create your own list of dark icebreaker questions, which you can categorised based on occasions.  
Don't worry if your mind is going blank, we will suggest questions to help you start.

## FEATURES

- Get as many suggested nicebreaker questions as you like with the refresh button
- Create your own profile and save your favourite questions from the home page
- Create your own question and select if it's suitable for:
  - Safe For Work
  - Dinner table
  - Night out
  - First Date
- Filter your question based on occasions
- Update your saved question
- Delete your question if you don't like them anymore

### **Try it yourself:**  

[NiceBreaker](https://nicebreaker.herokuapp.com/)

---

## WIREFRAMES


![image](https://user-images.githubusercontent.com/52048170/153452905-a0abd4a0-1000-4e20-9cb6-4d0db6a761e7.png)

---

## USER STORIES

### **All Visitors**

As a guest  
I’d like to have suggestion on conversation topics  
So I can handle better social encounters.  

As a guest  
I’d like to have a different suggestion card every time I get to the site  
so I can have more inspiration.  

As a guest  
I want to click on the refresh button on the landing page  
so I can get a new suggestion card.  

As a guest  
I want to see a sign up button  
so I can create my own account to save my suggestions card.  

As a guest  
I want to click on the sign up button  
So I can reach the sign up form. 

As a guest  
I want to be told if I have not filled mandatory field  
so I know why my form is not submitting.  

As a guest  
I want to be told if the email I’m using to sign up is already taken  
so I can use a different one.  

As a guest  
I want to see I popup that I need an account to bookmark the card  
so I can create a new account or log in.  

As a guest  
I want to see a login button  
so I can access my profile.  

As a guest  
I want to click on the Login button  
so I can enter my credentials.  

As a guest  
I want to be told if my details are incorrect when I log in  
so I can double check them . 

As a guest  
I want to submit my login credentials  
so I can see my profile page.  

### **Logged in**

As a registered user of this app  
I want to be able to save a list of my fav topic and question  
So I can refer back to it when needed.  

As a registered user of this app  
I want to see all my saved card in my profile  
so I can use them.  

As a registered user of this app  
I want to click on the bookmark sign on the suggested card  
So I can easily find it in my account.  

As a registered user of this app  
I want to click on ”my card” button  
so I can go to my profile.  

As a registered user of this app  
I want to click on Create card  
so I can save my own ideas.  

As a registered user of this app  
I want to be told which fields are mandatory  
so I can create my card correctly.  

As a registered user of this app  
I want to click on “create” button  
so my new card is added to my profile.  

As a registered user of this app  
I want to click on the bin icon on the card   
so my card is removed from my profile.

As a registered user of this app  
I want to click on the pencil icon on the card  
so I can edit it.  

As a registered user of this app  
I want to click on a button for specific occasion  
so I only see the relevant cards.  

As a logged in user of this app  
I want to see a logout button  
so I can log out.  

As a logged in user of this app  
I don’t want to see a signup and login button  
so I’m not confused where to navigate.  

---

## BUILT WITH

- Express Node.js
- Handlebars
- Bootstrap
- MongoDB

### Data Models

- User
- Private Cards
- Public Cards

### Route

| Method   | Route                   | Description                                                                 |
|----------|-------------------------|-----------------------------------------------------------------------------|
| GET      | "/"                     | Home Page                                                                   |
| GET      | "/signp"                | Sign Up Form                                                                |
| POST     | "/signup"               | Create user                                                                 |
| GET      | "/login"                | Login Form                                                                  |
| POST     | "/login"                | Authenticate user                                                           |
| POST     | "/logout"               | Logout the user                                                             |
| GET      | "/mycards"              | Fetch all cards for the user                                                |
| GET      | "/mycards/new"          | Add new card form                                                           |
| POST     | "/mycards/new"          | Create new card for the user                                                |
| GET      | "/mycards/:id/edit"     | Display details of one card                                                 |
| POST     | "/mycards/:id/edit"     | Update detail of one card                                                   |
| POST     | "/mycards/:id/delete"   | Delete one card                                                             |
| POST     | "/mycards/bookmark/:id" | Create a new card in the user collection with the content of the public one |
| GET      | "/mycards/filter?"      | Fetch all cards for the user that match the filters                         |

---

## COMING UP NEXT

- Mark your question as successfull or not
- Submit your nicebraker to be added to the public ones

---

## BUILD BY

[Clara Villa](https://github.com/claravilla)  
[David Vekony](https://github.com/davidvekony)
