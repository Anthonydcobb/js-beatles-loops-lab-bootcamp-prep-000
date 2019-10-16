var musician = ["lennon", "mccartney", "ringo", "the other one"];
var instrument = ["guitar", "also guitar", "drums", "something"];



var theBeatlesPlay = (musicianArr, instrumentArr) => {
    for (var i = 0; i <= musicianArr.length - 1; i++) {
      console.log(`${musicianArr[i]} plays ${instrumentArr[i]}`)
    }

}



theBeatlesPlay(musician, instrument);
