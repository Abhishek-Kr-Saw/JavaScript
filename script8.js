//Objects

let obj = {
    name: "Abhishek", //name->key , "Abhishek"->value
    address : {
        city: "Kolkata",
        pin: 712121,
        locations : {
            lat : 23.71,
            lan : 76.28
        },
    },
};

//Dot and bracket notaion
console.log(obj.name);  //Abhishek
let aa = "name";        
console.log(obj[aa]);   //Abhishek

//Nesting and deep access
console.log(obj.address.locations.lat); //23.71

let {lan,lat} = obj.address.locations;  //destructuring
console.log(lan,'',lat);   //76.28 '' 23.71