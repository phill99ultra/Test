"use strict";
const personalMovieDB = new Object({
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const q1 = prompt('Один из последних просмотренных фильмов?', ''),
                q2 = prompt('На сколько оцените его?', '');
            if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
                personalMovieDB.movies[q1] = q2;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    detectPersonalLvl: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisbleMyDB: function () {
        personalMovieDB.privat = (
            personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true
        );
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genreQuestion = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genreQuestion != null && genreQuestion != '') {
                personalMovieDB.genres.push(genreQuestion);
                // console.log('done');
            } else {
                console.log('Вы ввели некорректные данные');
                i--;
            }
        }
        personalMovieDB.genres.forEach((el, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${el}`);
        });
    }
});