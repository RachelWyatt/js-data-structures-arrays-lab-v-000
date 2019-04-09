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
  let newdrivers = drivers.splice(3, 0, "name");
  return newdrivers
}

function prependDriver (name) {
  let newdrivers = drivers.splice(0, "name");
  return newdrivers
}

function removeLastDriver () {
 let newdrivers = drivers.slice(0, drivers.length - 1);
 return newdrivers
}

function removeFirstDriver () {
  let newdrivers = drivers.slice(1);
  return newdrivers
}