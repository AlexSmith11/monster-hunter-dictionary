## Monster Hunter Dictionary

An implementation of the [mhw-api](https://docs.mhw-db.com/).
It features many details of all the Monster Hunter World things. Cus I like it.

Design doc (temp - move to Gdoc later):
Emphasis on broad/shallow structure. Don't want any nested stuff unless required.

I.e: Main page -> Page to display all things (monsters, weapons, etc) -> Page with only monsters -> Specific monster.

There are ways to make levels 1 & 2 as well as 3 & 4 the same. This is for later - seperate into different pages for now.

Initial structure will have a home/main page with stuff, then a page for everything, with each different topic (i.e. weapons, monsters) having its own card.
Then there will be a page for that specific topic (monsters) each with its own card. Limit the amount of cards shown by 15 or smth. 
After clicking on a card, you will be taken to a seperate page that only shows details of a specific thing, such as a single weapon or monster.

This means that there will be nested pages of up to 4 levels. This will be reflected in the router: main/dictionary/monsters/monster

In the latter/final structure, layout will be refactored and flattened. /home and /dictionary will be one and the same (no reason having a whole home page for this.) In addition, monsters/monster will be the same, as when you click on a specific item (i.e monster) the card will simply expand, pushing other cards out of the way, to display more info.

This means that there will only be a route nest level of 2: dictionary/monster

This is a simple app where we pass the card container (topic component) the topic to fetch
via props. after an API request, the appropriate data is displayed.

Because of the broad range of topics, some conditional rendering may need be employed.

Reder all topics -> onclick, render only one topic, then on next click render specific item
IMPORTANT NOTE: Will 100% need several components for topics. One for weapons, another for monsters, etc. Cant reuse one component for all topics.
Therefore we need a way of determining the component that renders.
This is done via props. If props is 'weapon', render weapon component.

Additional functionality:
Search implementaion. Fuzzy?

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

react-router was used for web routing.

React-Bootstrap was used for styling.
