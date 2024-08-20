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










  export {
    shortenSummary,
    reformatRuntime


  };