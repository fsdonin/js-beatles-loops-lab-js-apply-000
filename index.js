// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = []
  for (var i=0; i< musicians.length; i++) {
    let tempString = musicians[i] . "plays " . instruments[i] . "."
    newArr.push(tempString)
  }
  return newArr
}