class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  getAvarageRating() {
    const sum = this._ratings.reduce((a, b) => a + b, 0);
    return sum / this._ratings.length || null;
  }
  addRating(newRating) {
    return this._ratings.push(newRating);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
  }
  get artist() {
    return this._artist;
  }
}

//TODO
// Add more properties to each class (movieCast, songTitles, etc.)
// Create a CD class that extends Media.
// In .addRating(), make sure input is between 1 and 5.
// Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
// Create class called Catalog that holds all of the Media items in our library.


// TEST 

// const historyOfEverything = new Book('A Short History of Nearly Everything', ' Bill Bryson', 544)
// historyOfEverything.toggleCheckOutStatus();
// console.log(historyOfEverything.isCheckedOut)
// historyOfEverything.addRating(4)
// historyOfEverything.addRating(5)
// historyOfEverything.addRating(5)
// console.log(historyOfEverything.getAvarageRating())

// const speed = new Movie('Speed', 'Jan de Bont', 116);
// speed.toggleCheckOutStatus();
// console.log(speed.isCheckedOut)
// speed.addRating(1)
// speed.addRating(1)
// speed.addRating(5)
// console.log(speed.getAvarageRating())
