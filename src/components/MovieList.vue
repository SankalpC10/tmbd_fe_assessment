<!-- src/components/MovieList.vue -->
<template>
  <div class="movie-list">
    <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  props: {
    movies: Array,
  }
};
</script>
