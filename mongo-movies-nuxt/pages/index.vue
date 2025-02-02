<script setup lang="ts">
import { useAsyncData } from '#app';

interface Movie {
  _id: string;
  title: string;
  releaseYear: number;
  rated: string;
  actors: string;
  plot: string;
  director: string;
  stars: number;
  posterUrl: string;
}

const { data, error } = await useAsyncData<Movie[]>(
  'movies',
  async () => {
    const response = await fetch(`${useRuntimeConfig().public.API_ROOT}/get-all-movies`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    return await response.json();
  }
);

const movies : Array<Movie> = data.value as Array<Movie> ?? Array<Movie>;
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-6">Movies</h1>

    <div v-if="error">
      <p>Error fetching movies: {{ error.message }}</p>
    </div>

    <div v-if="!error && (!movies || movies.length === 0)">
      <p>No movies available. Please try again later.</p>
    </div>

    <div v-if="!error && movies?.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="movie in movies"
        :key="movie._id"
        class="card bg-white rounded-2xl shadow-lg p-4">
        <img
          :src="movie.posterUrl"
          :alt="movie.title"
          class="rounded-lg mb-4 object-cover w-full max-h-64">
        <h2 class="text-2xl font-semibold mb-2">{{ movie.title }}</h2>
        <p><strong>Release Year:</strong> {{ movie.releaseYear }}</p>
        <p><strong>Rated:</strong> {{ movie.rated }}</p>
        <p><strong>Director:</strong> {{ movie.director }}</p>
        <p><strong>Actors:</strong> {{ movie.actors }}</p>
        <p><strong>Plot:</strong> {{ movie.plot }}</p>
        <p><strong>Stars:</strong> {{ movie.stars }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 400px;
}
</style>
