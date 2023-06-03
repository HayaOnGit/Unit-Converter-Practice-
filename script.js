/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const bTn = document.getElementById("button")
const convLength1 = document.getElementById("span1")
const convLength2 = document.getElementById("span2")
const convVolume1 = document.getElementById("span3")
const convVolume2 = document.getElementById("span4")
const convMass1 = document.getElementById("span5")
const convMass2 = document.getElementById("span6")

bTn.addEventListener("click", function(){ 
    convLength1.innerHTML = `${input.value} meters = ${(3.28084 * input.value).toFixed(3)} feet `
    convLength2.innerHTML = ` ${input.value} feet = ${(input.value / 3.28084).toFixed(3)} meters`
    convVolume1.innerHTML = `${input.value} litres = ${(0.264172 * input.value).toFixed(3)} gallons `
    convVolume2.innerHTML = ` ${input.value} gallons = ${(input.value / 0.264172).toFixed(3)} meters`
    convMass1.innerHTML = `${input.value} kilograms = ${(2.20462 * input.value).toFixed(3)} pounds `
    convMass2.innerHTML = ` ${input.value} pounds = ${(input.value / 2.20462).toFixed(3)} kilograms`
})