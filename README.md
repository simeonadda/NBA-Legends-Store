# NBA-Legends-Store
App to collect cards and admire your favorite basketball players from the 80s and 90s

## Project Choice (Tell us which project you're doing!)
> NBA Legends Store 

## Project Description
> Include:<br />
> General App Idea/Purpose<br />
The purpose of the app is to provide a place for old school NBA enthusiasts to collect "cards" about their favorite players of yesteryear. 

> Models including field names and their datatypes<br />
First name: String
Last name: String
Position: String
Height_feet: Number
Height_inches: number
Weight_pounds: number
Team: {
   City: String, 
   Conference: String, 
   Division: String,
   Full_name: String,
   Nickname: String
}

> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)<br />
GET '/' index to see front page
GET '/:id' show player information
GET '/new' acquire new (random) card
POST '/' add new card to collection

## Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.
![Sign Up@1x](https://media.git.generalassemb.ly/user/36801/files/735cae80-1b20-11ec-9f4b-4ae6f57ca172)
![Sign In@1x](https://media.git.generalassemb.ly/user/36801/files/7eafda00-1b20-11ec-84f5-432a06ea13f0)
![Index@1x (1)](https://media.git.generalassemb.ly/user/36801/files/c9315680-1b20-11ec-847a-071097f2f545)
![Show@1x](https://media.git.generalassemb.ly/user/36801/files/84a5bb00-1b20-11ec-88d9-ecb2e2493b90)
![New@1x](https://media.git.generalassemb.ly/user/36801/files/866f7e80-1b20-11ec-9ed1-98328c01b69c)


## User Stories
> User stories detailing app functionality<br />
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.

### MVP Goals
~As a user, I want to be able to see my card/player collection
~As a user, I want to be able add a new card/player to my collection
~As a user, I want to be able to view a specific card

### Stretch Goals
~As a user, I want to be able to rank my favorite cards/players
~As a user, I want to be able display my favorite cards/layers
~As a user, I don't want to add the same card/player to my collection
~As a user, I want to be able to add a new card/player every day I login
~As a user, I want to be able to acquire tokens for new cards/player
~As a user, I want to be able to trade cards with other players
