'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];



const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if(extraName.trim() === '' || extraValue.trim() === '')  return ;

  const newMovie = {
    info: {
      // title,   // if key name is same as value assigned to it

      // setters and getters
      // _title is internal variable created on the fly, which is accessed using getters and setters
      // if setter is omitted property is read-only
      set title(val){
        if(val.trim() === ''){
          this._title = 'DEFAULT';
          return ;
        }
        this._title = val;
      },
      get title(){
        return this._title;
      },
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormattedTitle(){    // diff and shorter method syntax
      console.log(this);
      return this.info.title.toUpperCase();
      // this refers to who or what is resposible for calling this fn
      // movie.getFormattedTitle() - this refers to movie

      // getFormattedTitle() - this refers to global execution context
      // in non-strict mode this will refer to window object
      // in strict mode it is undefined

      // to make 'this' to refer the right thing we use bind()
      // bind() is used to preconfigure a fn for future execution
      // bind() can be used to preconfigure which args a fn takes which we don't execute directly but add to an event listener
      // bind() can also be used to preconfigure what this will refer to
    }

      // getFormattedTitle: () => {    
      //   console.log(this);    // window
      //   return this.info.title.toUpperCase();
      // }
  }

  newMovie.info.title = title;    // set title
  console.log(newMovie.info.title);   // get title

  movies.push(newMovie);
  renderMovies();
};



const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if(!movies.length){  
    movieList.classList.remove('visible');
    return ;
  }
  else  movieList.classList.add('visible');

  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie=>{
    return movie.info.title.includes(filter);
  });

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');

    if(('info' in movie) || (movie.info === undefined)){    //2 ways to check if obj has some property
      console.log("movie obj has info property");
    }

    // movieEl.textContent = movie.info.title + movie.info['[extraName]'];
    // can't do it like this. instead


    const { info, ...otherProps } = movie;     // object destructuring
    // name info should match property in movie obj
    console.log(otherProps);
    // const {title: movieTitle } = info;    // to give another name to pulled property


    let {getFormattedTitle} = movie;    // can't use bind() directly on fn here
    // getFormattedTitle = getFormattedTitle.bind(movie);   
    // this means when this fn is executed this should not refer to what it normally refers to
    // but should refer to movie obj


    // let text = movie.getFormattedTitle() + ' - ';    // works fine
    // let text = getFormattedTitle() + ' - ';     // a little challenge 
    // to make it refer to movie obj instead of global execution context using bind(this,..) 

    // let text = getFormattedTitle.call(movie) + ' - ';     // call(this,.,.,) - executes fn right away
    let text = getFormattedTitle.apply(movie) + ' - ';   // apply(this,[]) - same as call but takes additional args as an arr

    for(const key in info){
      if(key!='title' && key!='_title'){
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};



//// normal fn
// const searchMovieHandler = function() {
//   console.log(this);   // button
//   // here this refers to what is responsible for calling this fn
//   // an event or more specifically the searchBtn that is clicked
//   // the browser binds "this" for you to the DOM ele that triggered the event
//   // not for arrow fns

//   const filterVal = document.getElementById('filter-title').value;
//   renderMovies(filterVal);
// };


//// arrow fn - special behavior
const searchMovieHandler = () => {
  console.log(this);    // Window
  // arrow fns don't know this unlike traditional fns
  // so this here refers to what it would refer to if it is outside of the fn - global window
  // even by using strict mode - window is logged not undefined


  const filterVal = document.getElementById('filter-title').value;
  renderMovies(filterVal);
};

addMovieBtn.addEventListener('click',addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler);
