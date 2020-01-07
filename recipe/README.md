# Project Overview


## Project Description

For project 2, I will be creating a recipe app that houses recipes from TheMealDB.com API. There will be a homepage showing images and a title of what the recipe is. When a user clicks on the 'make' button, it will take them to another page listing out the ingredients and instructions. 

## Project Links

- [Recipes](https://ngumina17.github.io/project2)
- [deployment]()

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- ![Architecture] (https://res.cloudinary.com/drz8x4anh/image/upload/v1578411369/Screen_Shot_2020-01-07_at_9.35.40_AM_wyglrn.png)
- ![Wire-Frame-1] (https://res.cloudinary.com/drz8x4anh/image/upload/v1578333614/Screen_Shot_2020-01-06_at_11.59.16_AM_urf8ux.png)
- ![Wire-Frame-2] (https://res.cloudinary.com/drz8x4anh/image/upload/v1578333798/Screen_Shot_2020-01-06_at_12.03.03_PM_g9yc7n.png)




Define the the React components and the architectural design of your app.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external recipe api 
- Render data (recipes) on page 
- User can click on images to take them to the recipe they wish to make
- User can search for a recipe using keywords

#### PostMVP EXAMPLE

- Add additional pages option in the footer to show the remaining recipes contained in API 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home Page | This will render the images for all of the recipes  | 
| Results | Fetch call will take place here, and will render the breadcrumbs, search bar, and the 'make' button. | 
| Make button| this button will take users to the recipe description. It will include ingredients and instructions |
| Search Bar | Users can search for recipes with a keyword |
| Breadcrumbs| This will show the path of the pages |



## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Overview/ Description | H | 2.5hrs | 1.5hrs | 1.5hrs|
| Search Bar | H | 3hrs| Xhrs | Xhrs |
| CSS grid/ layout | H | 3hrs | Xhrs | X hrs|
| Working with API | H | 12hrs| 3hrs | Xhrs |
| Render Ingredients | H | 5hrs| 7hrs | Xhrs |
| Render Images | H | 2hrs| Xhrs | Xhrs|
| Implement Scroll past (post MVP) | L | 3hrs | Xhrs| Xhrs|
| React Router | H | 6hrs | Xhrs | X hrs|
| Total | H | 34hrs| 11.5hrs | Xhrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
