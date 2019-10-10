// Practical example


fetch('https://api.nytimes.com/svc/movies/v2/critics/part-time.json?api-key=SUAr48VgLWG5WakojAVihj9zq6Q8fiQB')
  .then(response => response.json())
  .then(data => {
                  for (var i = 0; i< data.results.length; i++){
                    $('#demo').append('<p></p>');
                    $('#demo').append(data.results[i].display_name);
                  }  
                })
