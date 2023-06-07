console.log(document.querySelector("div"))

const test = document.getElementById("ratsFiles").innerText;
let parsedTest;

try {
    parsedTest = JSON.parse(test)
    console.table(parsedTest)
}
catch (err) {
    console.log("Invalid JSON")
}
