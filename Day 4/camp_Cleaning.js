const {readFileSync}= require('fs'); 
const input= readFileSync('./input.txt'); 

const data=  input.toString().split('\r\n').map(item=>item.split(','))
// console.table(data); 

let partOne= 0;
let partTwo= 0;

for(let i= 0; i<data.length; i++){
    let first = data[i][0].split('-').map(Number); 
    let second = data[i][1].split('-').map(Number); 

    if((first[0]>=second[0] && first[1]<=second[1]) || (second[0]>=first[0] && second[1]<=first[1])){
        partOne++
    }

    if( (first[0] >= second[0] && first[0] <= second[1]) || (first[1] >= second[0] && first[1] <= second[1]) ||
        (second[0] >= first[0] && second[0] <= first[1]) || (second[1] >= first[0] && second[1] <= first[1]) )
        {
        partTwo++
    }
}    


console.log(partOne)
console.log(partTwo)