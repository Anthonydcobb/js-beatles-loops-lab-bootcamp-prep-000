var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];



var theBeatlesPlay = (musicianArr, instrumentArr) => {
    var beatlesArray = [];
    for (var i = 0; i <= musicianArr.length - 1; i++) {
      beatlesArray.push(`${musicianArr[i]} plays ${instrumentArr[i]}`)
      console.log(beatlesArray)
    }
    return beatlesArray
}



theBeatlesPlay(musician, instrument);
