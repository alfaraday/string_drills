//Wise person
function wisePerson(wiseType, whatToSay) {
  return 'A wise ' +
    wiseType +
    ' once said: "' +
    whatToSay +
    '".'
}

//Shouter
function shouter(whatToShout) {
  return whatToShout.toUpperCase() + '!!!';
}

//Text normalizer
function textNormalizer(text) {
  text = text.toLowerCase()
  return text.trim();
}

//Typo correcter
function typoCorrector(sourceText, target, value) {
  return sourceText.split(target).join(value);
}