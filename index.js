var musician = ["lennon", "mccartney", "ringo", "the other one"];
var instrument = ["guitar", "also guitar", "drums", "something"];



var theBeatlesPlay = (musicianArr, instrumentArr) => {
    for (var i = 0; i <= musicianArr.length - 1; i++) {
      var beatlesArray = []
      beatlesArray.push(`${musicianArr[i]} plays ${instrumentArr[i]}`)
    }
    return beatlesArray
}



theBeatlesPlay(musician, instrument);
