"use strict";
//МОЙ ОТВЕТ:
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


//ОТВЕТ В КУРСЕ:
/* let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

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

console.log(personalMovieDB); */


//ПРАКТИКА ЧАСТЬ 2, Сокращаем код при помощи циклов и добавляем проверки:
let numberOfFilms; 
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let film1 = prompt('Один из последних просмотренных фильмов?', ''),
      grade1 = prompt('На сколько оцените его?', '');
  
  if (film1 != null && grade1 != null && film1 != '' && grade1 != '' && film1.length < 50) {
    personalMovieDB.movies[film1] = grade1;
    console.log('Done');
  } else {
    console.log('error');
    i--;
  }
  if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
      break;
  } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
      break;
  }else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
      break;
  } else {
    console.log('Произошла ошибка');
  }

}


console.log(personalMovieDB);