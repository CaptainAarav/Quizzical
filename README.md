# Quizzical

This is a quiz app made by me(Aarav Sahni) to test my React skills since I have just finshed a React course.

## Quick start
run `npm install` to install dependencies in client aswell as server.
run `npm start` to start the server.
run `npm run client` to start the client.

## How it works
I use a state to store what page the user is on then changed that state on certain events like the user clicking the start quiz button or check answers button.

For the questions I used the OMDb API to get the questions and answers.
I handled the request for that API in my server code and then cleaned up the response so that my client code can use it without much hassle.

Each question is a `<form>` element with 4 radio inputs. Then at the bottom there a submit button that then takes all the data from each question(which radio did the user select) then stores it in a selcted state in an object.

In the results page I check whether all the answers in the selected state are correct using the correct_answer from the API request.
Using that i then condition render a class on the radio input labels that changes it's color depending on whether the user got it right or wrong.