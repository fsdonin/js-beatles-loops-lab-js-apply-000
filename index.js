// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = []
  let tempString = ""
  for (var i=0; i< musicians.length; i++) {
    tempString = musicians[i] . "plays " . instruments[i] . ".";
    newArr.push(tempString)
    tempString = ""
  }
  return newArr
}