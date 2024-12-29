let Sayname = ()=> {
    console.log("hello babe");


if(require.main === module) {
    Sayname();
}}

const sum = (a,b) => {
    return a+b;
}


module.exports = {Sayname, sum};