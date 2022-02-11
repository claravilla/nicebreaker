# NICEBREAKER

Created for anyone who struggles to come up with interesting topic of conversation.  
Sign up and create your own list of dark icebreaker questions, which you can categorised based on occasions.  
Don't worry if your mind is going blank, we will suggest questions to help you start.

---

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

---

## LINK

[NiceBreaker](https://nicebreaker.herokuapp.com/)

---

## BUILT WITH

- Express.js
- Handlebars
- Bootstrap
- MongoDB

## DATA MODELS

- User
- Private Cards
- Public Cards

## ROUTES

| Method | Route                   | Description                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------- |
| GET    | "/"                     | Home Page                                                                   |
| GET    | "/signp"                | Sign Up Form                                                                |
| POST   | "/signup"               | Create user                                                                 |
| GET    | "/login"                | Login Form                                                                  |
| POST   | "/login"                | Authenticate user                                                           |
| POST   | "/logout"               | Logout the user                                                             |
| GET    | "/mycards"              | Fetch all cards for the user                                                |
| GET    | "/mycards/create"       | Add new card form                                                           |
| POST   | "/mycards/create"       | Create new card for the user                                                |
| GET    | "/mycards/:id/edit"     | Display details of one card                                                 |
| POST   | "/mycards/:id/edit"     | Update detail of one card                                                   |
| POST   | "/mycards/:id/delete"   | Delete one card                                                             |
| POST   | "/mycards/bookmark/:id" | Create a new card in the user collection with the content of the public one |
| GET    | "/mycards/filter?"      | Fetch all cards for the user that match the filters                         |

---

## WIREFRAMES

![image](https://user-images.githubusercontent.com/52048170/153452905-a0abd4a0-1000-4e20-9cb6-4d0db6a761e7.png)

---

## USER STORIES

### **All Visitors**

- **As** a guest **I’d like** to have suggestion on conversation topics **So** I can handle better social encounters.

- **As** a guest **I’d like** to have a different suggestion card every time I get to the site **So** I can have more inspiration.

- **As** a guest **I want to** click on the refresh button on the home page **So** I can get a new suggestion.

- **As** a guest **I want to** see a sign up button **So** I can create my own account to save my suggestions card.

- **As** a guest **I want to** click on the sign up button **So** I can reach the sign up form.

- **As** a guest **I want to** be told if I have not filled mandatory fields **So** I know why my form is not submitting.

- **As** a guest **I want to** be told if the email I’m using to sign up is already taken **So** I can use a different one.

- **As** a guest **I want to** see a login button **So** I can access my profile.

- **As** a guest **I want to** click on the Login button **So** I can enter my credentials.

- **As** a guest **I want to** be told if my details are incorrect when I log in **So** I can double check them .

- **As** a guest **I want to** submit my login credentials **So** I can see my profile page.

### **Logged in**

- **As** a registered user of this app **I want to** be able to save a list of my favourite questions **So** I can refer back to it when needed.

- **As** a registered user of this app **I want to** see all my saved card in my profile **So** I can use them.

- **As** a registered user of this app **I want to** click on the bookmark sign on the suggested card **So** I can easily add it to my account.

- **As** a registered user of this app **I want to** click on ”my cards” button **So** I can go to my profile.

- **As** a registered user of this app **I want to** click on Create card button **So** I can save my own ideas.

- **As** a registered user of this app **I want to** be told which fields are mandatory when creating a card **So** I can create my card correctly.

- **As** a registered user of this app **I want to** click on the bin icon on the card **so** my card is removed from my profile.

- **As** a registered user of this app **I want to** click on the pencil icon on the card **So** I can edit it.

- **As** a registered user of this app **I want to** filter for specific occasion **So** I only see the relevant cards.

- **As** a logged in user of this app **I want to** see a logout button **So** I can log out.

- **As** a logged in user of this app **I don’t want to** see a signup and login button **So** I’m not confused where to navigate.

---

## COMING UP NEXT

- Mark your question as successfull or not
- Submit your nicebreaker to be added to the public ones
- Select multiple cards for deletion

---

## RESOURCES

[Bootstrap](https://getbootstrap.com/)  
[Express.js](https://expressjs.com/)  
[MongoDB](https://www.mongodb.com/atlas/database)  
[Mongoose](https://mongoosejs.com/)

---

## BUILT BY

[Clara Villa](https://github.com/claravilla)  
[David Vekony](https://github.com/davidvekony)
