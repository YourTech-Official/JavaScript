# 🚀 JavaScript Projects Repository

Welcome to the **YourTech-Official/JavaScript** repository! This is a collection of interactive web applications built with JavaScript, HTML, and CSS. The repository contains multiple projects showcasing different JavaScript concepts and API integration techniques.

---

## 📊 Repository Overview

- **Language Composition**: 75. 6% JavaScript, 24.4% HTML
- **Repository ID**: 1068545760
- **Total Projects**: 3 main projects

---

## 📁 Project Structure

```
JavaScript/
├── FoodZone/
│   ├── index. html
│   ├── index.js
│   └── style.css
├── Movies_website/
│   ├── index.html
│   ├── index.js
│   ├── data.js
│   └── style.css
├── JavaScript/
└── git-commands.txt
```

---

## 🍕 Project 1: FoodZone

### Overview
**FoodZone** is an interactive food recipe discovery application that fetches meal data from the TheMealDB API based on different cuisines and search queries.

### Features
- 🌍 Filter meals by cuisine (Indian, Canadian, American, Thai, British, Russian)
- 🔍 Search recipes by meal name
- 🎨 Dark-themed responsive UI with Bootstrap
- 📱 Mobile-friendly design

### File Structure

#### 📄 `FoodZone/index.html`
```html
<!-- DOCTYPE declaration for HTML5 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Character encoding for proper text display -->
    <meta charset="UTF-8" />
    <!-- Viewport meta tag for responsive design on mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FoodZone</title>
    
    <!-- Bootstrap CSS CDN for styling and responsive components -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <!-- Custom CSS stylesheet -->
    <link rel="stylesheet" href="style.css" />
  </head>
  
  <!-- Body with dark background and light text -->
  <body class="bg-black text-light">
    <!-- Container div with margin and text-center for button layout -->
    <div class="container my-3 text-center">
      <!-- Cuisine filter buttons - Each button has an id for JavaScript targeting -->
      <button id="indian" type="button" class="btn btn-outline-primary mx-3">
        Indian
      </button>
      <button id="canadian" type="button" class="btn btn-outline-warning mx-3">
        Canadian
      </button>
      <button id="american" type="button" class="btn btn-outline-success mx-3">
        American
      </button>
      <button id="thai" type="button" class="btn btn-outline-light mx-3">
        Thai
      </button>
      <button id="british" type="button" class="btn btn-outline-warning mx-3">
        British
      </button>
      <button id="russian" type="button" class="btn btn-outline-info mx-3">
        Russian
      </button>
    </div>

    <!-- Search container with input field for meal search -->
    <div class="searchContainer text-center">
      <!-- Input field where user can type meal names to search -->
      <input type="text" id="search" />
    </div>

    <!-- Container div where dynamically generated meal cards will be inserted -->
    <div class="food"></div>

    <!-- Link to JavaScript file that handles all interactivity -->
    <script src="./index.js"></script>
  </body>
</html>
```

#### 🎯 `FoodZone/index.js` - JavaScript Logic

```javascript
// ===== DOM ELEMENT SELECTION =====
// Select the container where meal cards will be displayed
let food = document.querySelector(". food");

// Select all cuisine filter buttons using their IDs
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let british = document.querySelector("#british");
let russian = document.querySelector("#russian");

// Variable to store fetched recipe data
let recipe;

// ===== FETCH DATA FROM API =====
/**
 * Asynchronous function to fetch meal data from TheMealDB API
 * @param {string} area - The cuisine/area to filter meals (e.g., 'Indian', 'American')
 * Uses the filter endpoint: https://www.themealdb.com/api/json/v1/1/filter.php? a={area}
 */
const fetchData = async (area) => {
  // Fetch data from TheMealDB API based on the area parameter
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter. php?a=${area}`
  );
  
  // Parse the response as JSON
  const data = await api.json();
  
  // Extract meals array from the response and store in recipe variable
  recipe = data.meals;
  
  // Call function to display the fetched meals on the page
  showData(recipe);
};

// ===== SEARCH FUNCTIONALITY =====
/**
 * Function to handle meal search on Enter key press
 * Allows users to search for meals by name
 */
const searchRecipe = () => {
  // Get reference to the search input element
  let input = document.querySelector("#search");

  // Add event listener for keydown event on the search input
  input.addEventListener("keydown", async (e) => {
    // Check if the pressed key is Enter
    if (e.key === "Enter") {
      // Get the search query from input value
      let inputValue = input.value;
      
      // Fetch meals matching the search query from API
      const api = await fetch(
        `https://www. themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      
      // Parse the API response as JSON
      const data = await api.json();
      
      // Store meals data in recipe variable
      recipe = data.meals;
      
      // Display the search results
      showData(recipe);
    }
  });
};

// Initialize search functionality when page loads
searchRecipe();

// ===== DISPLAY DATA =====
/**
 * Function to render meal cards on the page
 * @param {Array} recipe - Array of meal objects to display
 * Creates HTML cards with meal image and name
 */
let showData = (recipe) => {
  // Use map to transform each meal object into HTML string
  food.innerHTML = recipe
    .map(
      (meal) => `
        <!-- Container for each meal card -->
        <div class="mealContainer">
          <!-- Meal image section -->
          <div>
            <!-- Display meal thumbnail image -->
            <img src="${meal.strMealThumb}" class="mealImg" />
          </div>
          <!-- Meal name heading -->
          <h5>${meal.strMeal}</h5>
        </div>
      `
    )
    // Join all HTML strings together without separator
    .join("");
};

// ===== EVENT LISTENERS FOR BUTTONS =====
// Load Indian meals by default when page loads
fetchData("indian");

// Add click listener to Indian button
indian.addEventListener("click", () => {
  fetchData("indian");
});

// Add click listener to Canadian button
canadian.addEventListener("click", () => {
  fetchData("canadian");
});

// Add click listener to American button
american.addEventListener("click", () => {
  fetchData("american");
});

// Add click listener to Thai button
thai.addEventListener("click", () => {
  fetchData("thai");
});

// Add click listener to British button
british.addEventListener("click", () => {
  fetchData("british");
});

// Add click listener to Russian button
russian.addEventListener("click", () => {
  fetchData("russian");
});
```

#### 🎨 `FoodZone/style.css` - Styling

```css
/* ===== BUTTON STYLING ===== */
/* Make all buttons bold for better visibility */
button {
    font-weight: bold ! important;
}

/* ===== SEARCH INPUT STYLING ===== */
input {
    /* Set width to 20rem (320px) for search bar */
    width: 20rem;
    /* Dark brownish background color */
    background-color: rgb(70, 44, 44);
    /* Remove default browser border */
    border: none;
    /* Add padding inside the input */
    padding: 5px;
    /* White text color for contrast */
    color: white;
    /* Rounded corners on input field */
    border-radius: 10px;
}

/* Remove the blue outline that appears when input is focused */
input:focus {
    outline: none;
}

/* ===== FOOD CONTAINER LAYOUT ===== */
/* Main container for displaying meal cards */
.food {
    /* Use flexbox for responsive layout */
    display: flex;
    /* Center items horizontally */
    justify-content: center;
    /* Center items vertically */
    align-items: center;
    /* Allow items to wrap to next line on smaller screens */
    flex-wrap: wrap;
    /* Add 2rem gap between meal cards */
    gap: 2rem;
    /* Add margin around the container */
    margin: 2rem;
}

/* ===== MEAL IMAGE STYLING ===== */
/* Style for meal thumbnail images */
.mealImg {
    /* Set fixed width for uniform cards */
    width: 220px;
    /* Add rounded corners to images */
    border-radius: 10px;
}

/* ===== MEAL CONTAINER ===== */
/* Container for each individual meal card */
.mealContainer {
    /* Center text within meal card */
    text-align: center;
}

/* ===== SCROLLBAR STYLING ===== */
/* Hide the scrollbar while keeping scroll functionality */
body::-webkit-scrollbar {
    display: none;
}

/* ===== HEADING STYLING ===== */
/* Style for meal name headings */
h5 {
    /* Add margin around heading */
    margin: 10px;
}

/* ===== SEARCH CONTAINER ===== */
/* Container for search input area */
.searchContainer {
    /* Use flexbox for centering */
    display: flex;
    /* Center content horizontally */
    justify-content: center;
    /* Center content vertically */
    align-items: center;
    /* Allow wrapping on smaller screens */
    flex-wrap: wrap;
}
```

---

## 🎬 Project 2: Movies_website

### Overview
**Movies_website** is a movie browsing application that displays popular movies categorized by genre.  Users can filter movies by action, thriller, animation, horror, drama, and sci-fi.

### Features
- 🎞️ Browse movies with poster images
- 🏷️ Filter by genre (Action, Thriller, Animation, Horror, Drama, Sci-Fi)
- 🖼️ Hover effects on movie posters
- 📅 Display title
- 🎨 Dark theme with Bootstrap styling

### File Structure

#### 📄 `Movies_website/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Character encoding for proper text rendering -->
    <meta charset="UTF-8" />
    <!-- Viewport meta for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1. 0" />
    <title>MoviesZone</title>
    
    <!-- Custom stylesheet for project-specific styles -->
    <link rel="stylesheet" href="style.css" />
    
    <!-- Bootstrap CSS for responsive grid and utilities -->
    <link
      href="https://cdn.jsdelivr. net/npm/bootstrap@5. 3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
  </head>
  
  <!-- Dark theme: black background with light text -->
  <body class="bg-black text-light">
    <!-- Header with genre filter buttons -->
    <div class="container my-3 text-center">
      <!-- "All Movies" button - Shows complete movie list -->
      <button id="all" type="button" class="btn btn-outline-primary mx-3">
        All
      </button>
      
      <!-- Action movies filter button -->
      <button id="action" type="button" class="btn btn-outline-primary mx-3">
        Action
      </button>
      
      <!-- Thriller movies filter button -->
      <button id="thriller" type="button" class="btn btn-outline-light mx-3">
        Thriller
      </button>
      
      <!-- Animation movies filter button -->
      <button id="animation" type="button" class="btn btn-outline-danger mx-3">
        Animation
      </button>
      
      <!-- Horror movies filter button -->
      <button id="horror" type="button" class="btn btn-outline-warning mx-3">
        Horror
      </button>
      
      <!-- Drama movies filter button -->
      <button id="drama" type="button" class="btn btn-outline-info mx-3">
        Drama
      </button>
      
      <!-- Sci-Fi movies filter button -->
      <button id="sci-fi" type="button" class="btn btn-outline-light mx-3">
        Sci-Fi
      </button>
    </div>

    <!-- Main container where movie cards will be dynamically inserted -->
    <div class="dom_container"></div>

    <!-- Link to JavaScript file containing all logic and event handlers -->
    <script src="index.js"></script>
  </body>
</html>
```

#### 🎯 `Movies_website/index. js` - JavaScript Logic

```javascript
// ===== MOVIE DATA ARRAY =====
/**
 * Array containing movie objects with details
 * Each movie object includes:
 * - id: Unique identifier for the movie
 * - title: Movie name
 * - release_date: Date movie was released
 * - backdrop_path: URL for background image
 * - poster_path: URL for poster/thumbnail image
 * - category: Genre classification (Action, Thriller, etc.)
 */
const movies = [
  {
    id: 533535,
    title: "Deadpool & Wolverine",
    release_date: "2024-07-24",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    category: "Action",
  },
  {
    id: 718821,
    title: "Twisters",
    release_date: "2024-07-10",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/58D6ZAvOKxlHjyX9S8qNKSBE9Y.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
    category: "Thriller",
  },
  {
    id: 1022789,
    title: "Inside Out 2",
    release_date: "2024-06-11",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    category: "Animation",
  },
  {
    id: 519182,
    title: "Despicable Me 4",
    release_date: "2024-06-20",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    category: "Animation",
  },
  {
    id: 573435,
    title: "Bad Boys: Ride or Die",
    release_date: "2024-06-05",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/oGythE98MYleE6mZlGs5oBGkux1.jpg",
    category: "Action",
  },
  {
    id: 1160018,
    title: "Kill",
    release_date: "2024-07-03",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
    category: "Thriller",
  },
  {
    id: 762441,
    title: "A Quiet Place: Day One",
    release_date: "2024-06-26",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
    category: "Horror",
  },
  {
    id: 831815,
    title: "Saving Bikini Bottom: The Sandy Cheeks Movie",
    release_date: "2024-08-01",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg",
    category: "Animation",
  },
  {
    id: 1079091,
    title: "It Ends with Us",
    release_date: "2024-08-07",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/8yPSYhooj8nyBbmV3GVdLDwuE7e.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg",
    category: "Drama",
  },
  {
    id: 945961,
    title: "Alien: Romulus",
    release_date: "2024-08-13",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    poster_path:
      "https://image. tmdb.org/t/p/original/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    category: "Sci-Fi",
  },
];

// ===== DOM ELEMENT SELECTION =====
// Select the main container where movie cards will be rendered
let dom_container = document.querySelector(". dom_container");

// Select all genre filter buttons using their IDs
let all = document.querySelector("#all");
let action = document.querySelector("#action");
let thriller = document.querySelector("#thriller");
let animation = document.querySelector("#animation");
let horror = document.querySelector("#horror");
let drama = document.querySelector("#drama");
let sci_fi = document.querySelector("#sci-fi");

// ===== DISPLAY DATA FUNCTION =====
/**
 * Function to render movie cards dynamically on the page
 * @param {Array} movies - Array of movie objects to display
 * Creates HTML cards with poster image, title, and release date
 */
let showData = (movies) => {
  // Use map to convert each movie object into HTML string
  dom_container.innerHTML = movies
    .map(
      (movie) => `
        <!-- Main container for individual movie card -->
        <div class='main'>
          <!-- Hover effect container with image -->
          <div class='hover_effect'>
            <!-- Movie poster image -->
            <img src=${movie.poster_path} class='img' />
          </div>
          <!-- Movie title heading -->
          <h5>${movie.title}</h5>
          <!-- Movie release date paragraph -->
          <p>${movie.release_date}</p>
        </div>
      `
    )
    // Join all HTML strings without separator (empty string)
    .join("");
};

// ===== EVENT LISTENERS FOR GENRE FILTERS =====

// "All Movies" button - Display all movies when clicked
all.addEventListener("click", () => {
  // Call showData with complete movies array to display all
  showData(movies);
});

// "Action" button - Filter and display only action movies
action.addEventListener("click", () => {
  // Use filter method to create new array containing only action movies
  let actionMovies = movies.filter((movie) => {
    // Return true only if movie category is "Action"
    return movie.category === "Action";
  });
  // Display filtered action movies
  showData(actionMovies);
});

// "Thriller" button - Filter and display only thriller movies
thriller.addEventListener("click", () => {
  // Filter movies array for thriller category
  let thrillerMovies = movies.filter((movie) => {
    return movie.category === "Thriller";
  });
  // Display filtered thriller movies
  showData(thrillerMovies);
});

// "Animation" button - Filter and display only animation movies
animation.addEventListener("click", () => {
  // Filter movies array for animation category
  let animationMovies = movies.filter((movie) => {
    return movie.category === "Animation";
  });
  // Display filtered animation movies
  showData(animationMovies);
});

// "Horror" button - Filter and display only horror movies
horror.addEventListener("click", () => {
  // Filter movies array for horror category
  let horrorMovies = movies.filter((movie) => {
    return movie.category === "Horror";
  });
  // Display filtered horror movies
  showData(horrorMovies);
});

// "Drama" button - Filter and display only drama movies
drama.addEventListener("click", () => {
  // Filter movies array for drama category
  let dramaMovies = movies.filter((movie) => {
    return movie.category === "Drama";
  });
  // Display filtered drama movies
  showData(dramaMovies);
});

// "Sci-Fi" button - Filter and display only sci-fi movies
sci_fi.addEventListener("click", () => {
  // Filter movies array for sci-fi category
  let sci_fiMovies = movies. filter((movie) => {
    return movie.category === "Sci-Fi";
  });
  // Display filtered sci-fi movies
  showData(sci_fiMovies);
});
```

#### 📊 `Movies_website/data. js` - Data Module

```javascript
// ===== EXPORTED MOVIES DATA =====
/**
 * This file contains the movies data that can be imported into other modules
 * using: import { movies } from './data.js'
 * 
 * Each movie object contains:
 * - id: Unique movie identifier
 * - title: Movie name
 * - release_date: Official release date
 * - backdrop_path: Large background image URL
 * - poster_path: Movie poster thumbnail URL
 * - category: Genre classification
 */
export const movies = [
  // Movie entries (same as in index.js)
  // This file serves as a centralized data source
  // that can be reused across multiple components
];
```

#### 🎨 `Movies_website/style.css` - Styling

```css
/* ===== BODY AND GLOBAL STYLING ===== */
body {
    /* Set black background for dark theme */
    background-color: black;
    /* White text for contrast on dark background */
    color: white;
}

/* Hide scrollbar while maintaining scroll functionality */
body::-webkit-scrollbar {
    display: none;
}

/* ===== BUTTON STYLING ===== */
button {
    /* Make button text bold for better visibility */
    font-weight: bold ! important;
}

/* ===== MAIN CONTAINER LAYOUT ===== */
/**
 * Container for displaying movie grid
 * Uses flexbox for responsive layout
 */
.dom_container {
    /* Enable flexbox layout */
    display: flex;
    /* Center items horizontally */
    justify-content: center;
    /* Center items vertically */
    align-items: center;
    /* Allow items to wrap to next line */
    flex-wrap: wrap;
    /* Center text alignment within container */
    text-align: center;
    /* Fixed width for large screens */
    width: 1300px;
    /* Center container horizontally on page */
    margin: auto;
    /* Add top margin for spacing from header */
    margin-top: 1. 5rem;
}

/* ===== HOVER EFFECT CONTAINER ===== */
/**
 * Container for creating hover zoom effect on movie posters
 */
.hover_effect {
    /* Add padding around image */
    padding: 10px;
    /* Use flexbox for centering image */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Use relative positioning for 3D effects */
    position: relative;
    /* Set fixed dimensions for card */
    width: 300px;
    height: 350px;
    /* Hide content that overflows the container */
    overflow: hidden;
    /* Smooth transition for hover effects */
    transition: 0.7s ease;
}

/* ===== IMAGE HOVER ANIMATION ===== */
/**
 * Image element within hover_effect container
 * Prepares for transform animation
 */
.hover_effect . img {
    /* Apply transition to transform property */
    transition: transform 0.7s ease;
    /* Enable 3D transforms */
    transform: translateZ(0);
}

/**
 * Hover state animation for images
 * Scales image up by 10% and creates 3D effect
 */
.hover_effect:hover .img {
    /* Scale image to 1.1x (10% larger) and create depth */
    transform: scale(1.1) translateZ(50px);
}

/* ===== MOVIE IMAGE STYLING ===== */
. img {
    /* Set fixed width for consistent card size */
    width: 200px;
    /* Set fixed height to maintain aspect ratio */
    height: 280px;
    /* Round image corners for modern look */
    border-radius: 10px;
    /* Add yellow border around image for styling */
    border: 1px solid yellow;
}

/* ===== MOVIE CARD CONTAINER ===== */
. main {
    /* Set maximum width for card */
    max-width: 280px;
    /* Center text within card */
    text-align: center;
}
```

---

## 🛠️ Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - these are static applications
- Internet connection (for API calls and CDN resources)

### Installation & Running

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourTech-Official/JavaScript. git
   cd JavaScript
   ```

2. **For FoodZone Project**:
   ```bash
   cd FoodZone
   # Open index.html in your web browser
   ```

3. **For Movies Website Project**:
   ```bash
   cd Movies_website
   # Open index.html in your web browser
   ```

### Usage

#### FoodZone Application
- Click on cuisine buttons to filter meals from around the world
- Type a meal name in the search box and press Enter to search
- Browse through available recipes with meal images and names

#### Movies Website Application
- Click "All" to see all available movies
- Click on genre buttons to filter by category
- Hover over movie posters for a zoom effect
- View movie titles

---

## 💡 Key JavaScript Concepts Used

### 1. **Fetch API & Async/Await**
   - Used in FoodZone to retrieve meal data from TheMealDB API
   - Handles asynchronous operations smoothly

### 2. **DOM Manipulation**
   - `document.querySelector()` - Selects DOM elements
   - `innerHTML` - Dynamically inserts HTML content
   - Event listeners for user interactions

### 3. **Array Methods**
   - `. map()` - Transforms arrays into HTML strings
   - `.filter()` - Filters movies by category
   - `.join()` - Combines array elements into strings

### 4.  **Event Handling**
   - `addEventListener()` - Attaches event listeners to buttons
   - Keyboard events (Enter key detection)
   - Click events for filtering

### 5. **Arrow Functions**
   - `async () => {}` - Asynchronous arrow functions
   - Used for clean, concise function syntax

### 6.  **Template Literals**
   - Used with backticks for dynamic HTML generation
   - Allows embedding variables with `${}`

---

## 📚 API References

### FoodZone - TheMealDB API
- **Filter by Area**: `https://www.themealdb.com/api/json/v1/1/filter.php?a={AREA}`
- **Search by Name**: `https://www.themealdb.com/api/json/v1/1/search.php?s={MEAL_NAME}`
- **Documentation**: [TheMealDB API Docs](https://www.themealdb.com/api.php)

---

## 📁 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **JavaScript (ES6+)** | Core application logic |
| **HTML5** | Page structure and semantics |
| **CSS3** | Styling and animations |
| **Bootstrap 5. 3.8** | Responsive UI components |
| **TheMealDB API** | Meal data for FoodZone |
| **TMDB Images** | Movie poster images |

---

## 🎓 Learning Outcomes

By studying this repository, you'll learn:

✅ How to work with modern JavaScript ES6+ features
✅ How to fetch data from external APIs
✅ How to manipulate DOM elements dynamically
✅ How to create responsive designs with Bootstrap
✅ How to handle user events and interactions
✅ How to use CSS for animations and hover effects
✅ How to implement search and filter functionality
✅ How to structure JavaScript applications

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues and suggest improvements

---

## 📝 Git Commands Reference

A `git-commands.txt` file is included in the repository with useful Git commands for version control.

---

## 📄 License

This project is open source and available under the MIT License. 

---

## 👨‍💻 Author

**YourTech-Official**

---

## 🔗 Links

- **Repository**: [GitHub - YourTech-Official/JavaScript](https://github.com/YourTech-Official/JavaScript)
- **FoodZone API**: [TheMealDB](https://www.themealdb.com)
- **Bootstrap Documentation**: [Bootstrap 5](https://getbootstrap.com)

---

## ❓ FAQ

**Q: Do I need to set up a backend server?**
A: No! These are frontend-only applications that work directly in the browser.

**Q: Can I run these offline?**
A: FoodZone and Movies_website require internet connection for API calls and loading images from CDNs.

**Q: How do I customize the movies list?**
A: Edit the `movies` array in `Movies_website/index.js` with your own movie data.

**Q: Can I add more cuisines to FoodZone?**
A: Yes! Add more buttons in `index.html` and corresponding event listeners in `index.js`.

---

## 🚀 Future Enhancements

Potential improvements for these projects:
- Add pagination for better performance
- Implement favorites/bookmarking feature
- Add filter by rating or preparation time
- Create a dark/light mode toggle
- Add more detailed movie information
- Implement local storage for user preferences
- Add animations and transitions
- Create responsive mobile layouts

---

**Last Updated**: December 2, 2025
**Repository ID**: 1068545760
**Language Composition**: JavaScript 75. 6% | HTML 24.4%

```
