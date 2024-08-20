//took awhile to figure out the best way to do this so we found some
//code out in the wild that looked like it did part of what we did
//and then adapted it from there. It did seem like turning each word
// as an entry into an array was the easiest way to make this happen 
//after doing research

const shortenSummary = (text, maxWords) => {
    let shortSummary = "";
    // put words from the summary into an array
    const textArray = text.split(" ");
    shortSummary = text;
    if (textArray.length > maxWords) {
            // slice the array, if it is larger than maxWords
            // and only return the shortened amount
      const slicedArray = textArray.slice(0, maxWords - 1);
      shortSummary = slicedArray.join(" ") + "...";
    }
    return shortSummary;
  };


//wanted to format the runtime so it doesn't say 123 minutes
//as that's a little clunky

  const reformatRuntime = (movieRuntime) => {
    // data will always arrives as a 2 or 3 digit number, (minutes total)
    // if it is over 60 minutes, then it should return
    let hours = Math.floor(movieRuntime / 60);
    let minutes = Math.floor(movieRuntime % 60);
  
    if (hours) {
      return `${hours}h ${minutes}m`;
    } else {
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
      } else {
        return;
      }
        
    }   
    );
    return rating;
  }






  export {
    shortenSummary,
    reformatRuntime,
    displayGenres,
    displayRating


  };