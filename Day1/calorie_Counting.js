const {readFileSync} = require('fs');
// Fonction permettant la lecture du fichier et le replacement des sauts de ligne en espace vide  
function ReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.replace(/\r\n/g, " ").split(" ")
  
    console.log(arr); 
  
    return arr;
  }

  let inputClean= ReadFile('./input.txt');

  
// fontion permettant de faire le groupage 

const makeGroups = array => {
	const groups = [];
	let group = [];
	array.forEach(value => {
		if (value === "") {
			groups.push(group);
			group = [];
		} else {
			group.push(value);
		}
	});
	groups.push(group);
	return groups;
};

let getGroups= makeGroups(inputClean); 
console.log(getGroups)


// Fonction permettant de faire la sommation de groupe et de trouver le groupe ayant le total le  plus elevé des  calorie. 
let largestTotalGroupCalories = 0;
	const handleGroup = groups => {
		const totalCaloriesPerGroup = groups.reduce((prev, curr) => {
			return (prev += parseInt(curr));
		}, 0);
		if (totalCaloriesPerGroup > largestTotalGroupCalories)
        largestTotalGroupCalories = totalCaloriesPerGroup;
	};

    // Recherche du plus grand  groupe de calories. 
	for (let i = 0; i < getGroups.length; i++) handleGroup(getGroups[i], i);
	console.log(largestTotalGroupCalories);