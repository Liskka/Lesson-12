"use strict";

/* let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let film1 = prompt('Один из последних просмотренных фильмов?', ''),
    grade1 = prompt('На сколько оцените его?', ''),
    film2 = prompt('Один из последних просмотренных фильмов?', ''),
    grade2 = prompt('На сколько оцените его?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {
    [film1]: [grade1],
    [film2]: [grade2]
  },
  actors: {},
  genres: [],
  privat: false
};

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies); */

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let film1 = prompt('Один из последних просмотренных фильмов?', ''),
    grade1 = prompt('На сколько оцените его?', ''),
    film2 = prompt('Один из последних просмотренных фильмов?', ''),
    grade2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[film1] = grade1;
personalMovieDB.movies[film2] = grade2;

console.log(personalMovieDB);