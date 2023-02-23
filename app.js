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
    const sum = this._ratings.reduce((a,b)=> a+b);
    return sum / this._ratings.length;
  }
  addRating(newRating) {
    return this._ratings.push(newRating)
  }
  // this method should be corrected later on
  toggleCheckOutStatus() {
    return this._isCheckedOut ? false : true;
  }
}

class Book extends Media {
  constructor(title,author,pages, ratings,isCheckedOut) {
    super(title,ratings,isCheckedOut);
    this._author = author;
    this._pages = pages;
  }
}

class Movie extends Media {
  constructor(title,director,runTime, ratings, isCheckedOut) {
    super(title, ratings, isCheckedOut);
    this._director = director;
    this._runTime = runTime;
  }
}

const batman = new Movie('Batman', 'Marvel', 120)
console.log(batman)
console.log(batman.getAvarageRating())

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