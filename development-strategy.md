# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

* `index.html` and folder structure with empty files

## 1. Data & Log

* `data/strings.js` & `log.js`

## 2. Init (not finished!)

* The code in `init.js` that renders the current list for users is complete.
  * But the `renderList` DOM Component function is not!  you will need to write this
* `renderList` list 
* `index.html` is complete, just waiting for the code behind it

## 3. User Story: `reset` (completed for you)

* A user can reset stat & see a cleared User Interface
* I wrote the code in `listeners/reset.js` & `handlers/reset.js`
* The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`.  in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: Save

> * I started with 'Save' button as it is first and most important button that takes user input and sorts it into "odds", "evens" and "nany"
> * write from scratch `handlerSave.js`


## 5. User Story: Odds

> * Added code to `handlerOdds.js`
> * simply added code from `init.js` file


## 6. User Story: Evens

> * Added code to `handlerEvens.js`
> * simply added code from `init.js` file

## 7. User Story: NaNy

> * Added code to `handlerNany.js`
> * simply added code from `init.js` file
