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
    this._isCheckedOut = !this._isCheckedOut
  }
}

class Book extends Media {
  constructor(title, author, pages, ratings, isCheckedOut) {
    super(title, ratings, isCheckedOut);
    this._author = author;
    this._pages = pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime, ratings, isCheckedOut) {
    super(title, ratings, isCheckedOut);
    this._director = director;
    this._runTime = runTime;
  }
}

class CD extends Media {
  constructor(title, artist, ratings, isCheckedOut) {
    super(title,ratings,isCheckedOut);
    this._artist = artist;
  }
}

// const sting = new CD('Englishman is NY', 'Sting');
// console.log(sting.title)

// const batman = new Movie("Batman", "Marvel", 120);
// console.log(batman);
// console.log(batman.getAvarageRating());
// batman.toggleCheckOutStatus()
// console.log(batman.isCheckedOut)
// batman.toggleCheckOutStatus()
// console.log(batman.isCheckedOut)

// const book1 = new Book('Castle', 'Kafka Frans', 152);
// console.log(book1.addRating(10))
// console.log(book1.addRating(18))
// console.log(book1.getAvarageRating())
// console.log(book1.isCheckedOut)

// const detail = new Media('Detail', true)
// const log = new Media('Log')
// console.log(detail.title)
// console.log(detail.addRating(10))
// console.log(detail.getAvarageRating())

// console.log(log.addRating(20))
// console.log(log.addRating(15))
// console.log(log.isCheckedOut)
// console.log(log.getAvarageRating())
