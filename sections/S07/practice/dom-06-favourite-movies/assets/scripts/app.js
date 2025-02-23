const backdrop = document.getElementById("backdrop");
const entryTextElement = document.getElementById('entry-text');

const addMovieModal = document.getElementById("add-modal");
const showAddMovBtn = document.querySelector("header button");
const cancelAddMovieBtn = document.querySelector("#add-modal .btn--passive");
const addMovieBtn = cancelAddMovieBtn.nextElementSibling;

const delMovieModal = document.getElementById("delete-modal");
let delModYesBtn = document.querySelector('#delete-modal .btn--danger');
const delModCancelBtn = document.querySelector('#delete-modal .btn--passive');

const userInputs = document.querySelectorAll("input");
const moviesList = document.getElementById('movie-list');

let curMovieId = 0;
const movies = [];

const updateUI = () => {
  if(movies.length==0)
    entryTextElement.style.display = 'block';
  else  entryTextElement.style.display = 'none';
};

const delMovie = (movieId) => {
  let delInd = -1;
  // movies.forEach(movie => {
  //   if(movie.id === movieId){
  //     delInd = movieId;
  //   }
  // });
  for(let ind = 0;ind<movies.length;ind++){
    if(movies[ind].id === movieId){
      delInd = ind;
      break;
    }
  }
  movies.splice(delInd,1);
  moviesList.children[delInd].remove();
  closeDelMovieModal();
  updateUI();
};


const deleteMovieHandler = id => {
  console.log("Before id:",id);
  let shouldDel = false;
  showDelMovieModal();
  
  // delModYesBtn.removeEventListener('click',delMovie.bind(this,id)); // won't work
  delModYesBtn.replaceWith(delModYesBtn.cloneNode(true));
  delModYesBtn = document.querySelector('#delete-modal .btn--danger');
  delModYesBtn.addEventListener('click',delMovie.bind(this,id));

  delModCancelBtn.removeEventListener('click',closeDelMovieModal);
  delModCancelBtn.addEventListener('click',closeDelMovieModal);
}

const renderNewMovieElement = (movieObj) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.classList.add('movie-element');
  newMovieElement.innerHTML=`
    <div class="movie_element__image">
      <img src="${movieObj.imageURL}" alt="${movieObj.title}"/>
    </div>
    <div class="movie_element__info">
      <h2>${movieObj.title}</h2>
      <p>${movieObj.rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click',deleteMovieHandler.bind(null, movieObj.id));
  moviesList.append(newMovieElement);
};


const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  backdrop.classList.add("visible");
}
const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
  backdrop.classList.remove("visible");
}
const showDelMovieModal = () => {
  delMovieModal.classList.add("visible");
  backdrop.classList.add("visible");
}
const closeDelMovieModal = () => {
  delMovieModal.classList.remove("visible");
  backdrop.classList.remove("visible");
}


showAddMovBtn.addEventListener("click", () => {
  showMovieModal();
});

backdrop.addEventListener("click", () => {
  closeMovieModal();
  closeDelMovieModal();
});

cancelAddMovieBtn.addEventListener("click", () => {
  closeMovieModal();
  clearInputs();
});

const clearInputs = () => {
  userInputs.forEach(input => {
    input.value = "";
  });
};

const addMovieHandler = () => {
  const title = userInputs[0].value;
  const imgUrl = userInputs[1].value;
  const rating = userInputs[2].value;

  if (
    title.trim() === "" ||
    imgUrl.trim() === "" ||
    rating.trim() === "" ||
    rating < 0 ||
    rating > 5
  ) {
    alert("Please enter valid values (Ratings must be between 0 and 5).");
    return;
  }

  const newMovie = {
    id: curMovieId++,
    title: title,
    imageURL: imgUrl,
    rating: rating
  };
  movies.push(newMovie);

  showMovieModal();
  backdrop.classList.add("visible");
  clearInputs();
  updateUI();
  renderNewMovieElement(newMovie);
  closeMovieModal();
};

addMovieBtn.addEventListener("click", addMovieHandler);
