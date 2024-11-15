<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <div class="navbar">
      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo" class="logo" />
      <div class="navbar-links">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">TV Shows</a>
        <a href="#">About</a>
      </div>
      <div class="navbar-right">
        <span class="plus-symbol">+</span>
        <span class="language-box">EN</span>
        <a href="#">Login</a>
        <a href="#">Join TMDB</a>
        <span class="search-icon">🔍</span>
      </div>
    </div>
    <div class="menubar">
      <a href="#">Overview <span class="dropdown-icon">▼</span></a>
      <a href="#">Media <span class="dropdown-icon">▼</span></a>
      <a href="#">Fandom <span class="dropdown-icon">▼</span></a>
      <a href="#">Share <span class="dropdown-icon">▼</span></a>
    </div>
    <MovieList :movies="movies" />
  </div>
  <label class="toggle-switch">
        <input type="checkbox" @change="toggleDarkMode" />
        <span class="slider"></span>
      </label>
</template>

<script>
import MovieList from "@/components/MovieList.vue";

export default {
  name: "HomeView",
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
      isDarkMode: false,
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await this.$http.get('https://www.omdbapi.com/?i=tt3896198&apikey=d2132124');
        this.movies = [response.data];  // Assume API returns a list of movies
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    },
  }
};
</script>
