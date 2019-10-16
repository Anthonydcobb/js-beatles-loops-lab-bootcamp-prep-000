// add solution here
var musician = ["lennon", "mccartney", "ringo", "the other one"];
var instrument = ["guitar", "also guitar", "drums", "this guy did whatever"]



var theBeatlesPlay = (musicianArr, instrumentArr) => {
    for (let i = 0; i >= musicianArr - 1; i++) {
      console.log(`${musicianArr[i]} plays ${instrumentArr[i]}`)
}



theBeatlesPlay(musician, instrument);
