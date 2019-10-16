var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];



var theBeatlesPlay = (musicianArr, instrumentArr) => {
    for (var i = 0; i <= musicianArr.length - 1; i++) {
      var beatlesArray = [];
      beatlesArray.push(`${musicianArr[i]} plays ${instrumentArr[i]}`)
    }
    return beatlesArray
}



theBeatlesPlay(musician, instrument);
