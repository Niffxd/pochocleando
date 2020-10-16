'use strict'
const containerCategories = document.getElementById("categories")
const categories = document.createElement("h1");
categories.innerHTML = "Categorías"
categories.classList.add("ml-2", "color3", "titlesandbtns")
containerCategories.appendChild(categories);
const containerFavs = document.getElementById("favorites-list")
const favoritesList = document.createElement("table");
containerFavs.appendChild(favoritesList);
const URL = 'http://localhost:3000/peliculas/';


let cats = ['Comedia', 'Terror', 'Drama', 'Acción', 'Ficción'];
for (let i = 0; i < cats.length; i++) {
    const cat = document.createElement('h2');
    const carrousel = document.createElement("div");
    cat.innerHTML = cats[i] + '...';
    cat.style.marginLeft = "20px"
    carrousel.id = cats[i];
    carrousel.innerHTML = `
    <button class="angle-left h-50 btn"><i class="fas fa-angle-left fa-2x angle-left color6"></i></button>
    <div class="d-flex p-5 carrousel-${cats[i]}">
    </div>
    <button class="angle-right h-50 btn"><i class="fas fa-angle-right fa-2x angle-right color6"></i></button>
    `
    carrousel.classList.add("d-flex", "align-items-center", "carrousel", "mt-0");
    cat.classList.add("color6", "commontexts", "mb-0");
    containerCategories.appendChild(cat);
    containerCategories.appendChild(carrousel);
}

async function getMovies() {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
async function getMovie(id) {
    const newURL = `${URL}/${id}`
    const response = await fetch(newURL);
    const data = await response.json();
    return data;
}

async function editMovie(id, newData) {
    const newURL = `${URL}/${id}`;
    const response = await fetch(newURL, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });
    const data = await response.json();
    return data;
}
const com = document.querySelector('.carrousel-Comedia');
const ter = document.querySelector('.carrousel-Terror');
const dra = document.querySelector('.carrousel-Drama');
const acc = document.querySelector('.carrousel-Acción');
const cie = document.querySelector('.carrousel-Ficción');

function buildMovieCards(movies) {
    movies.map(movie => {
        if (movie.publicada === true) {
            switch (movie.genero) {
                case 'Comedia':
                    const movieCardco = document.createElement("div");
                    movieCardco.classList.add("movie-card")
                    movieCardco.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title color6 m-2 pt-1 text-center border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="color6 movie-resume mb-0 mt-3 mx-3 text-center commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    com.appendChild(movieCardco);
                    break;
                case 'Terror':
                    const movieCardte = document.createElement("div");
                    movieCardte.classList.add("movie-card")
                    movieCardte.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    ter.appendChild(movieCardte);
                    break;
                case 'Drama':
                    const movieCarddr = document.createElement("div");
                    movieCarddr.classList.add("movie-card")
                    movieCarddr.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    dra.appendChild(movieCarddr);
                    break;
                case 'Acción':
                    const movieCardac = document.createElement("div");
                    movieCardac.classList.add("movie-card")
                    movieCardac.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    acc.appendChild(movieCardac);
                    break;
                case 'Ciencia Ficcion':
                    const movieCardci = document.createElement("div");
                    movieCardci.classList.add("movie-card")
                    movieCardci.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 pt-1 text-center color6 border-bottom titlesandbtns">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center color6 commontexts">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light fav-btn"><i class="fas fa-star fa-2x fav-btn"></i></a>
                </div>
                </div>
                </div>
                </div>
                `;
                    cie.appendChild(movieCardci);
                    break;
            }
        }
        com.scrollLeft = ter.scrollLeft = dra.scrollLeft = acc.scrollLeft = cie.scrollLeft = 28;
    })
}



function modifyFavServer(movie) {
    movie.fav = (movie.fav === true) ? false : true;
    const newData = {
        id: movie.id,
        nombre: movie.nombre,
        descripcion: movie.descripcion,
        director: movie.director,
        genero: movie.genero,
        categoria: movie.categoria,
        publicada: movie.publicada,
        año: movie.año,
        imagen: movie.imagen,
        video: movie.video,
        fav: movie.fav
    };
    editMovie(movie.id, newData);
}

function deleteFav(e) {
    if (e.target.classList.contains("delete-fav"))
        e.preventDefault(); {
        let id = e.target.parentElement.parentElement.id;
        getMovie(id)
            .then(movie => modifyFavServer(movie))
    }
}

getMovies()
    .then(movies => buildMovieCards(movies))
getMovies()
    .then(movies => buildFavsList(movies))

containerCategories.addEventListener("click", (event) => {
    if (event.target.classList.contains("angle-right")) {
        console.log(event.target.parentElement.parentElement.parentElement);
        console.log(event.target.parentElement.parentElement);
        if (event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia') {
            com.scrollLeft += 260;
        } else if (event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror') {
            ter.scrollLeft += 260;
        } else if (event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama') {
            dra.scrollLeft += 260;
        } else if (event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción') {
            acc.scrollLeft += 260;
        } else{
            cie.scrollLeft += 260;
        }
    }
})
containerCategories.addEventListener("click", (event) => {
    if (event.target.classList.contains("angle-left")) {
        if (event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia') {
            com.scrollLeft += -260;
        } else if (event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror') {
            ter.scrollLeft += -260;
        } else if (event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama') {
            dra.scrollLeft += -260;
        } else if (event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción') {
            acc.scrollLeft += -260;
        } else{
            cie.scrollLeft += -260;
        }
    }
})

// containerCategories.addEventListener("click",modifyFav)
// favoritesList.addEventListener("click", deleteFav)









//----------------------FAVORITOS CON LOCAL STORAGE--------------------

// function getMoviesLS()
// {
//     let movies;
//     if(localStorage.getItem('movies')===null)
//     {
//         movies=[]
//     }else{
//         movies=JSON.parse(localStorage.getItem('movies'));
//     }
//     return movies;
// }

// function saveMoviesLS(movieInfo)
// {
//     let movies = getMoviesLS();
//     movies.push(movieInfo);
//     localStorage.setItem('movies', JSON.stringify(movies));
// }
// function addMovieToFavs(productInfo)
// {
//     const favorite=document.createElement("tr")
//     favorite.id=`${productInfo.id}`;
//     favorite.innerHTML=`
//         <td class="img-fav">
//             ${productInfo.imagen}
//         </td>
//         <td class="name-fav">
//             ${productInfo.nombre}
//         </td>
//         <td class="close-fav">
//             <a href=# class="delete-fav">&times</a>
//         </td>
//     `;
//     favoritesList.appendChild(favorite);
// }
// function rendermoviesLS()
// {
//     let movies = getMoviesLS();
//     movies.forEach((movie)=>{
//     const favorite=document.createElement("tr")
//     favorite.id=`${movie.id}`;
//     favorite.innerHTML=`
//         <td class="img-fav">
//             ${movie.imagen}
//         </td>
//         <td class="name-fav">
//             ${movie.nombre}
//         </td>
//         <td class="close-fav">
//             <a href=# class="delete-fav">&times</a>
//         </td>
//     `;
//     favoritesList.appendChild(favorite);
//     })
// }
// function deleteFav(e)
// {
//     e.preventDefault();
//     if(e.target.classList.contains("delete-fav"))
//     {
//         const removedElement = e.target.parentElement.parentElement
//         const deleteId= removedElement.id;
//         e.target.parentElement.parentElement.remove();
//         console.log(deleteId);
//         deleteFavLS(deleteId);
//     }
// }
// function deleteFavLS(deleteId)
// {
//     console.log("hola");
//     let movies = getMoviesLS();
//     movies.forEach((movie,index)=>{
//         if(movie.id === deleteId)
//         {
//             console.log("hola");
//             movies.splice(index,1);
//         }
//     })
//     localStorage.setItem("movies",JSON.stringify(movies));
// }
// document.addEventListener("DOMContentLoaded",rendermoviesLS);
// containerCategories.addEventListener("click",(e)=>{
//     e.preventDefault();
//     if(e.target.classList.contains("fav-btn"))
//     {
//         let movieInfo=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
//         if(movieInfo.classList.contains("movie"))
//         {
//             e.target.classList.add("color3")
//             movieInfo=
//             {
//                 imagen: movieInfo.style.backgroundImage.slice(5,-2),
//                 nombre: movieInfo.querySelector(".movie-title").textContent,
//                 id: movieInfo.id
//             }
//         }
//         else
//         {
//             e.target.children.classList.add("color3")
//             movieInfo=movieInfo.querySelector(".movie");
//             movieInfo=
//             {
//                 imagen: movieInfo.style.backgroundImage.slice(5,-2),
//                 nombre: movieInfo.querySelector(".movie-title").textContent,
//                 id: movieInfo.id
//             }
//         }
//         addMovieToFavs(movieInfo)
//         saveMoviesLS(movieInfo)
//     }
// })
// document.addEventListener("click",deleteFav);