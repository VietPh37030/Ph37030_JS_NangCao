// tham số mặc định'
function registerUser(user ='Bot') {

// Cách cũ - trước khi sử dụng =
// if (!user) {
// user = 'Bot';
return user+'is registered';
}
console.log(registerUser);


//Rest params
function sum(...numbers){
    let total =0;
    for(const num of numbers){
        total+- num;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,100));
// Objects as params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in `
}
const user ={
    id:2,
    name:'Viet'
};
console.log(loginUser(user));
console.log(loginUser({
    id:3,
    name:'Anh'
}));
// Mang as parram
function getRamdom(arr){
    const ramdomIndex = Math.floor(Math.random()*arr.length);

    const item = arr[ramdomIndex];
    console.log(item);
}
getRamdom([1,2,3,4,5,6,7,8]);