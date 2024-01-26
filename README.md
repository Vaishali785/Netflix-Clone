# Netflix Clone with ReactJS

A Netflix clone built using ReactJS, fetching movie data from an API, and utilizing the `react-youtube` and `movie-trailer` libraries to play trailers.

For a live demo, check out [Netflix Clone Demo](https://netflixbyvaishali.web.app).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API](#api)
- [Dependencies](#dependencies)

## Overview

This project is a Netflix clone developed with ReactJS, allowing users to browse a collection of movies and watch trailers for each. The application fetches movie data from a third-party API and uses the `react-youtube` library to embed YouTube trailers. Additionally, the `movie-trailer` library is employed to dynamically fetch YouTube trailer URLs.

## Features

- **Movie Listing**: Browse a comprehensive list of movies.
- **Trailer Playback**: Watch trailers for selected movies.
- **Responsive Design**: Enjoy a seamless experience on various screen sizes.

## Tech Stack

- **Frontend**: ReactJS + CSS
- **YouTube Embedding**: `react-youtube`
- **YouTube Trailer Fetching**: `movie-trailer`
- **API**: TMDB (The Movie Database) API
- **Hosting**: Firebase

## API

This Netflix clone uses the [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api) to fetch movie data. You will need to obtain an API key and set it in your project for the API calls to work.

Create a `.env` file in the root of your project and add the following:

```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual TMDB API key.

## Dependencies

- [React](https://reactjs.org/)
- [react-youtube](https://www.npmjs.com/package/react-youtube)
- [movie-trailer](https://www.npmjs.com/package/movie-trailer)
- [TMDB API](https://www.themoviedb.org/documentation/api)

For a complete list of dependencies, refer to the `package.json` file.

<!-- Master branch contains the original(first) hosted code, so don't change anything in it. -->
<!-- Main branch contains the latest changed code, and the latest build of hosted website -->
