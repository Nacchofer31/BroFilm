$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    console.log(searchText);
    getFilms(searchText);
    e.preventDefault();
  });
});

/**
* Conects to Axios service and get the response.
*/
function getFilms(searchText){
  axios.get('http://www.omdbapi.com?s='+searchText)
  .then((response) => {
    console.log(response);
    //Gets the Movies array.
    let movies = response.data.Search;
    let output = '';
    $.each(movies, (index, movie) => {
      output += `
      <div class="col-md-3">
        <div class="well text-center">
          <image src="${movie.Poster}">
          <h5>${movie.Title}</h5>
          <a onclick="movieSelected('${movie.imdbID}'')" class="btn btn-primary" href="#">Movie Details</a>
        </div>
      </div>
      `;
    });

    $('#movies').html(output);
  })
  .catch((err) =>{
    console.log(err);
  });
}
