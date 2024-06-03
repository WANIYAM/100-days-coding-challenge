/*                        QUESTION 120
Use a for...of loop to iterate through an array of your favorite movies and log each one.
*/

// Array of favorite movies
const favoriteMovies = ["Iron Man", "The Avengers", "Guardians of the Galaxy", "Black Panther", "Thor: Ragnarok"];

// Function to log each movie in the array
function logFavoriteMovies() {
    // Use a for...of loop to iterate through the array
    for (const movie of favoriteMovies) {
        // Log each movie
        console.log(movie);
    }
}
logFavoriteMovies();