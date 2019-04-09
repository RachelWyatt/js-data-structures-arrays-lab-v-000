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
  let newdrivers = drivers.splice(-1, 0, name);
  return newdrivers
}

function removeLastDriver () {
  drivers.splice(-1);
}

function removeFirstDriver () {
  let newdrivers = drivers.slice(1);
}