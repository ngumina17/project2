# Project Overview


## Project Description

For project 2, I will be creating a recipe app that houses recipes from TheMealDB.com API. When the user first opens the site, they will see a page that gives a brief description of the site. There will be a link that will then take them to the listing of recipes gathered from the API. Each recipe will also have a link that takes them to the website of origin.  

## Project Links

- [Recipes](https://ngumina17.github.io/project2)
- [deployment]()

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- ![Architecture](https://res.cloudinary.com/drz8x4anh/image/upload/v1578664899/Screen_Shot_2020-01-10_at_8.01.04_AM_qpzflw.png)
- ![Wire-Frame-1](https://res.cloudinary.com/drz8x4anh/image/upload/v1578333614/Screen_Shot_2020-01-06_at_11.59.16_AM_urf8ux.png)


### MVP/PostMVP
 

#### MVP EXAMPLE
- Find and use external recipe API 
- Render data (recipes) on Recipes page
- Use react router to go from home page to list of recipes
- User can click on a link to take them to the website they wish to make


#### PostMVP EXAMPLE

- Add additional pages option in the footer to show the remaining recipes contained in API (pagenation).
- User can search for a recipe using keywords.
- When a user clicks on a recipe, instead of being taken to a website, they will be taken to another react component (using react-router) that lists the instructions, ingredients, and measurements.
- Breadcrumbs will render at the top of the page.
- Find a themed API (if available), i.e. just use French food and apply French themes to the site.
- Implement/ include tests.

## Components 

| Component | Description | 
| --- | :---: |  
| App | App will render the header, footer, and a basic description of the site. | 
| Home | Fetch call will take place here, and this component will render the images and link for all of the recipes. | 
| Header | The name of the site "Food Therapy" will be held here. | 
| recipeContainer | Entirety of the meal image and link. |
| Image | Image from API data. |
| mealTitle | Title of meal from API data |
| Footer | Name and year are included |


## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Overview/ Description | H | 2.5hrs | 1.5hrs | 3hrs|
| CSS Styling | M | 3hrs | 7hrs | 7hrs|
| Working with API | H | 12hrs| 10hrs | 10-12hrs |
| Render Images | H | 4hrs| 3hrs | 6hrs|
| React Router | H | 6hrs | 6hrs | 6hrs|
| All PostMVP components | L | 15hrs | 0hrs| 0hrs|
| Total | H | 42.5hrs| 27.5hrs | 33hrs |

## Additional Libraries
 I discovered axios for this project to gather the API data! See code snippet below.

## Code Snippet
Axios was a new discovery for me during this project, I saw it in almost every youtube tutorial/blogpost/web page, etc.

```
componentDidMount() {
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        axios
          .get(url)
          .then(res => {
            const meal = res.data.meals;
            if (typeof meal === "object") {
              this.setState({ meal });
            }
          })
```
Credit for above: https://www.youtube.com/watch?v=M-X0Jw2e68A

