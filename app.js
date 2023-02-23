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
  constructor(title,author,pages) {
    super(title,ratings,isCheckedOut);
    this._author = author;
    this._pages = pages;
  }
}


const detail = new Media('Detail', true)
const log = new Media('Log')
console.log(detail.title)
console.log(detail.addRating(10))
console.log(detail.getAvarageRating())


// console.log(log.addRating(20))
// console.log(log.addRating(15))
// console.log(log.isCheckedOut)
// console.log(log.getAvarageRating())