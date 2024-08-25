//took awhile to figure out the best way to do this so we found some
//code out in the wild that looked like it did part of what we did
//and then adapted it from there. It did seem like turning each word
// as an entry into an array was the easiest way to make this happen 
//after doing research

const shortenText = (text, maxWords) => {
    let shortenedText = "";
    // put words from the summary into an array
    const textArray = text.split(" ");
    shortenedText = text;
    if (textArray.length > maxWords) {
            // slice the array, if it is larger than maxWords
            // and only return the shortened amount
      const slicedArray = textArray.slice(0, maxWords - 1);
      shortenedText = slicedArray.join(" ") + "...";
    }
    return shortenedText;
  };


//wanted to format the runtime so it doesn't say 123 minutes
//as that's a little clunky

  const reformatRuntime = (movieRuntime) => {
    // data will always arrives as a 2 or 3 digit number (hopefully), (minutes total)
    // if it is over 60 minutes, then it should return
    let hours = Math.floor(movieRuntime / 60);
    let minutes = Math.floor(movieRuntime % 60);
    if (hours) {
      return `${hours}h ${minutes}m`;
    } else {
      //if movie has no runtime yet, display NA
        if ( minutes == 0 || null ) {
          return "Runtime: N/A"
        }
      return `${minutes}m`;
    }
  };


// wanted a way to display the movie classification/genre which arrives 
//as it's own array within the movie object, so it's time for my good friend
//forEach to unpack it all, joy.

const displayGenres = (movieData) => {
  let genreTypes = [];
  movieData.genres.forEach((genre, index) => {
    genreTypes.push(<li key={index}>{genre.name}</li>);
  });
  return genreTypes;
};

const displayRating = (movieData) => {
  let rating = "";
  movieData.release_dates.results.forEach((country) => {
      if (country.iso_3166_1 === "US") {
        rating = country.release_dates[0].certification
          if ( rating == "" || rating == null || rating == undefined ) {
            rating = "N/A"
          } else {
            return rating
          }
      }
        
    }   
    );
    return rating;
  }

  function formatPercentage(votes) {
    return Math.ceil(votes * 10) + '%';
  }


  // similar to then way we turned eached movie summary into an array but with added steps
  //for converting the date further down the line
  const formatDate = (movieDate) => {
    const movieDateArray = movieDate.split("-");
    const [year, month, day] = movieDateArray;
    let date = new Date(`${month} ${day} ${year}`);
    let options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-us", options);
  };

  





  export {
    shortenText,
    reformatRuntime,
    displayGenres,
    displayRating,
    formatPercentage,
    formatDate
  };