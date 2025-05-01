

var movies = ['CHAVVA', 'CAPTAIN AMERICA'];
function bodyload() {
  document.getElementById("moviename").innerHTML = "";
  movies.map(function (movie) {
    var option = document.createElement("option");
    option.text = movie.toUpperCase();
    option.value = movie.toUpperCase();
    document.getElementById("moviename").appendChild(option);
  });
  document.getElementById("count").innerHTML = `Total Movies Count is : ${movies.length}`;
}

function Addnew() {
  var newmovie = document.getElementById("newmovie").value;
  if (newmovie.length === 0) {
    alert('please enter a movie name');
  }
  else {
    var movieIndex = movies.indexOf(newmovie.toUpperCase());
    if (movieIndex === -1) {
      movies.push(newmovie.toUpperCase());
      alert(`${newmovie.toUpperCase()} Added to list`);
      bodyload();
      document.getElementById("newmovie").value = "";
    }
    else {
      alert(`${newmovie} Exists`)
      bodyload();
      document.getElementById("newmovie").value = "";

    }
  }
}

function Ascending() {
  movies.sort();
  bodyload();
}

function Descending() {
  movies.sort().reverse();
  bodyload();
}

function ClearAll() {
  var conform = confirm('Are you sure you want to delete all movies');
  if (conform === true) {
    movies.length = 0;
    bodyload();
  }
}

function Deleteitem() {
  var selected = document.getElementById("moviename").value;
  var selectedIndex = movies.indexOf(selected);
  var conform = confirm(`Are you sure? \n You want to delete \n ${selected}`);
  if (conform === true) {
    movies.splice(selectedIndex, 1);
    bodyload();
  }

}
function Edit() {
  var selected = document.getElementById("moviename").value;
  var selectedIndex = movies.indexOf(selected);
  document.getElementById("editedmovie").value = selected;
}

function saveClick() {
  var selected = document.getElementById("moviename").value;
  var selectedIndex = movies.indexOf(selected);
  var edited = document.getElementById("editedmovie").value;
  movies[selectedIndex] = edited.toUpperCase();
  bodyload();
}
