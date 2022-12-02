const {readFileSync} = require('fs');
// Fonction permettant la lecture du fichier et le replacement des sauts de ligne en espace vide  
function ReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.replace(/\r\n/g, " ").split(" ")  
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



// Fonction permettant de faire la sommation des groupe 
let totalPerGroups=[]
	const handleGroup = groups => {
		const totalCaloriesPerGroup = groups.reduce((prev, curr) => {
			return (prev += parseInt(curr));
		}, 0);
		totalPerGroups.push(totalCaloriesPerGroup)
	};

// Sommation des calories par groupe 

	for (let i = 0; i < getGroups.length; i++) handleGroup(getGroups[i], i);
	const largestTotal=Math.max(...totalPerGroups);  // le plus grand total 

// Part 2
	const sortLargestTotal= totalPerGroups.sort((a,b)=>b-a); 
	const sumThreeLargestTotal=sortLargestTotal[0]+sortLargestTotal[1]+sortLargestTotal[2])
