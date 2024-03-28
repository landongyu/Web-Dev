function callMeLater() {
  console.log("I'm back!")
}

setTimeout(callMeLater, 6000)
console.log("Bye for now!")

// this is the end of the file
// at this point, shouldn't the program be "over"??
async function fetchData(callback) {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    callback(result3);
  } catch (error) {
    console.error(error);
  }
}