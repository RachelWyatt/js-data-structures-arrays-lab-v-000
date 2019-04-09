// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver (name) {
  let newdrivers = drivers.push(name);
}

function removeLastDriver () {
  drivers.slice(-1);
}

function removeFirstDriver () {
  let newdrivers = drivers.slice(1);
}