//Creating an object
const object = {
  firstName: "Kiran",
  lastName: "Bedi"
};

//Creating a map
const map1 = new Map();
map1.set("firstName", "Kiran");
map1.set("lastName", "Rao");
console.log(map1);

//Using Non-string keys
map1.set(new Date().getTime(), "Number key");
map1.set([], "Number key");
map1.set(() => "Hi", "Function key");
console.log(map1);

//Checking the Size
console.log(`Map Size: ${map1.size}`);

//Accessing values
console.log(map1.get("lastName"));
console.log(map1.get([]));

//Deleting values
map1.delete("firstName");
console.log(`Map Size: ${map1.size}`);

//#####################################################################################################################
console.log("#####################################################################################################################");

//Creating a SET
const set1 = new Set();
set1.add("Kiran");

//Checking the Set Size
console.log(`Set Size: ${set1.size}`);

//Trying to add the "same" value
set1.add("Kiran");
console.log(`Set Size: ${set1.size}`);

//Adding in complex values
const team1 = new Set();
const employee1 = {
  firstName: "David",
  lastName: "Boon"
};
team1.add(employee1);
console.log(`Set size: ${team1.size}`);

//Detecting if a Set has an object
console.log(`Does have employee: ${team1.has(employee1)}`);

//Removing values from a Set
team1.delete(employee1);
console.log(`Set size: ${team1.size}`);

//Remove all values
team1.clear();





