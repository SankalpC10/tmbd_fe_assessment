<!-- src/components/MovieCard.vue -->
<template>
  <div class="movie-card">
    <img :src="movie.Poster" alt="Movie Poster" class="movie-poster" />
    <div class="movie-info">
      <h1>{{ movie.Title }} ({{ movie.Year }})</h1>
      <div class="movie-details">
        <span class="rated-box">{{ movie.Rated }}</span>
        <span class="release-date">Release Date: 2017-05-05</span> 
        <span class="bullet-point">•</span>
        <span class="genre">{{ movie.Genre }}</span>
        <span class="bullet-point">•</span>
        <span class="duration">2h 17m</span>
      </div>
      <div class="user-score">
        <div class="imdb-rating-circle">
          <svg class="circular-chart" viewBox="0 0 100 100">
            <circle class="circle-bg" cx="50" cy="50" r="45"></circle>
            <circle class="circle" cx="50" cy="50" r="45" :stroke-dasharray="`${(movie.imdbRating * 10)}, 100`"></circle>
          </svg>
          <div class="percentage">{{ (movie.imdbRating * 10).toFixed(0) }}%</div>
        </div>
        <span class="user-text">User Score</span>
        <span class="emoji">😀</span> <!-- Grinning face emoji -->
        <span class="emoji">❤️</span> <!-- Loving face emoji -->
        <button class="vibe-button">
          What's your vibe? <span class="info-icon">ℹ️</span> <!-- Info icon inside the button -->
        </button>
      </div>
      <div class="action-icons">
        <div class="icon-circle">
          <span class="menu-icon">🍔</span> <!-- Menu icon -->
        </div>
        <div class="icon-circle">
          <span class="love-icon">❤️</span> <!-- Love icon -->
        </div>
        <div class="icon-circle">
          <span class="bookmark-icon">🔖</span> <!-- Bookmark icon -->
        </div>
        <button class="play-trailer-button">
          ▶️ Play Trailer <!-- Play symbol -->
        </button>
      </div>
      <h2> Overview</h2>
      <span>{{ movie.Plot }}</span>
       <div class="director-characters">
        <div class="column">
          <h3>Director</h3>
          <p>{{ movie.Director }}</p>
        </div>
        <div class="column">
          <h3>Characters</h3>
          <p>{{ movie.Actors }}</p>
        </div>
        <div class="column">
          <h3>Box Office</h3>
          <p>{{ movie.BoxOffice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  }
};
</script>

<style scoped>
.movie-card {
  background-color: #324367;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding-bottom: 10 %;
  color: #fff;
}
.movie-poster {
  padding-top : 20px;
  padding-left: 10%;  
  width: 20%;
  height: auto;
  margin-right: 20px;
  padding-bottom :20px;
}
.movie-info {
  max-width: 600px;
}
.movie-details {
    display: flex; /* Use flexbox for alignment */
    align-items: center; /* Center items vertically */
}

.rated-box {
    background-color: #fff; /* Background for the rating box */
    color: #032541; /* Text color */
    padding: 5px 10px; /* Padding for the rating box */
    border-radius: 5px; /* Rounded corners */
    margin-right: 10px; /* Space between rating and release date */
}

.release-date {
    margin-right: 5px; /* Space between release date and bullet point */
}

.bullet-point {
    margin: 0 5px; /* Space around the bullet point */
}

.genre {
    margin-left: 5px; /* Space before the genre */
}

.user-score {
    display: flex; /* Use flexbox for alignment */
    align-items: center; /* Center items vertically */
    margin-top: 10px; /* Space above the user score section */
}

.imdb-rating-circle {
    position: relative;
    width: 100px; /* Set the size of the circle */
    height: 100px; /* Set the size of the circle */
    margin: 20px auto; /* Center the circle */
}

.emoji {
    margin: 0 5px; /* Space around emojis */
}

.user-text {
    margin-right: 10px; /* Space between user score text and emojis */
}
.circular-chart {
    transform: rotate(-90deg); /* Rotate to start from the top */
}

.circle-bg {
    fill: none;
    stroke: #e6e6e6; /* Background color of the circle */
    stroke-width: 10; /* Width of the circle */
}

.circle {
    fill: none;
    stroke: #4caf50; /* Color of the percentage circle */
    stroke-width: 10; /* Width of the circle */
    transition: stroke-dasharray 0.5s ease; /* Animation for the circle */
}

.percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center the text */
    font-size: 16px; /* Font size for the percentage */
    color: #4caf50; /* Color of the percentage text */
}

.vibe-button {
    margin-left: 10px; /* Space between emojis and button */
    padding: 5px 10px; /* Padding for the button */
    background-color: #032541; /* Button background color */
    color: white; /* Button text color */
    border: none; /* Remove border */
    border-radius: 20px; /* Rounded corners for the button */
    cursor: pointer; /* Pointer cursor on hover */
    display: flex; /* Use flexbox for button content */
    align-items: center; /* Center items vertically */
}

.vibe-button:hover {
    background-color: #45a049; /* Darker green on hover */
}

.info-icon {
    margin-left: 5px; /* Space between button text and info icon */
    font-size: 20px; /* Size for the info icon */
}

.action-icons {
    display: flex; /* Use flexbox for alignment */
    align-items: center; /* Center items vertically */
    margin-top: 20px; /* Space above the action icons */
}

.icon-circle {
    background-color: #e6e6e6; /* Background color for the circular icons */
    border-radius: 50%; /* Make it circular */
    width: 40px; /* Width of the circle */
    height: 40px; /* Height of the circle */
    display: flex; /* Use flexbox for centering the icon */
    justify-content: center; /* Center the icon horizontally */
    align-items: center; /* Center the icon vertically */
    margin-right: 10px; /* Space between icons */
}

.play-trailer-button {
    background-color: white; /* White background for the button */
    color: #032541; /* Text color */
    border: none; /* Remove border */
    border-radius: 20px; /* Rounded corners for the button */
    padding: 5px 15px; /* Padding for the button */
    cursor: pointer; /* Pointer cursor on hover */
    display: flex; /* Use flexbox for button content */
    align-items: center; /* Center items vertically */
}

.play-trailer-button:hover {
    background-color: #f0f0f0; /* Light gray on hover */
}

.director-characters {
    display: flex; /* Use flexbox for alignment */
    justify-content: space-between; /* Space out columns */
    margin-top: 20px; /* Space above the section */
}

.column {
    flex: 1; /* Allow columns to grow equally */
    margin-right: 20px; /* Space between columns */
}

.column:last-child {
    margin-right: 0; /* Remove margin from the last column */
}

h3 {
    margin: 0; /* Remove default margin */
    font-size: 16px; /* Font size for headings */
    font-weight: bold; /* Bold headings */
}

p {
    margin: 5px 0 0; /* Space above the paragraph */
    font-size: 14px; /* Font size for content */
}

@media (max-width: 768px) {
    .movie-card {
        flex-direction: column; /* Stack elements vertically */
        align-items: center; /* Center items */
        padding: 10px
    }

    .navbar-links{
        display: none;
    }

    .movie-poster {
        width: 80%; /* Increase width of poster on mobile */
        margin: 0; /* Remove right margin */
        padding: 0; /* Remove padding */
    }

    .movie-info {
        max-width: 100%; /* Allow full width on mobile */
        padding: 0 10%; /* Add some padding */
    }

    .movie-details {
        flex-direction: column; /* Stack details vertically */
        align-items: flex-start; /* Align items to the start */
    }

    .user-score {
        flex-direction: column; /* Stack user score elements vertically */
        align-items: center; /* Center items */
    }

    .imdb-rating-circle {
        margin: 10px 0; /* Adjust margin for mobile */
    }

    .action-icons {
        flex-wrap: wrap; /* Allow icons to wrap on smaller screens */
        justify-content: center; /* Center icons */
    }

    .icon-circle {
        margin: 5px; /* Adjust margin for icons */
    }

    .director-characters {
        flex-direction: column; /* Stack columns vertically */
        align-items: center; /* Center columns */
        margin-top: 10px; /* Adjust margin */
    }

    .column {
        margin-right: 0; /* Remove right margin */
        margin-bottom: 10px; /* Add bottom margin for spacing */
        text-align: center; /* Center text in columns */
    }

    .play-trailer-button {
        width: 100%; /* Full width for the button */
        margin-top: 10px; /* Add margin above the button */
    }
}
</style>
