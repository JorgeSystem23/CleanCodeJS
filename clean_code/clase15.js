/* const getResult = ( () => 'Results')();
console.log(getResult); */

/* [1,2,3].map(function(n) {return n*2});
[1,2,3].map((n)=>n*2); */

/* const counter = {
    number: 0,
    increse() {
        setInterval(() => console.log(++this.number), 1000)
    }
}

counter.increse(); */

const counter = {
    number: 0,
    increse() {
        setInterval(function() {
            console.log(++this.number)
        }.bind(this), 
        1000
        )
    }
}

counter.increse();