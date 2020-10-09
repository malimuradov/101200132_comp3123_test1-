
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(array){
    return new Promise(function (resolve, reject){
        for(let i = 0; i < array.length; i++){
            if(typeof array[i] === 'string'){
                array[i] = array[i].toLowerCase()
            }
            else{
                array.splice(i,1)
            }
            resolve(array);
        }
    })
}
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))


