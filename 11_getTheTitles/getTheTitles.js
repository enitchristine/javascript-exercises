const getTheTitles = function(array) {
    let titles=[];
    for (let i=0; i<array.length;i++){
        titles.push(array[i].title);
    }
    console.log(titles);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
