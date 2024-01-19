
// Đây là danh sách các giá trị Falsy và Truthy trong JavaScript:

// Falsy Values:

// false - Giá trị boolean false.
// 0 - Số 0.
// "" hoặc '' - Chuỗi rỗng.
// null - Giá trị không có hoặc không tồn tại.
// undefined - Biến không được định nghĩa hoặc không được gán giá trị.
// NaN - Không phải là một số (Not a Number).
// Truthy Values:

// Tất cả mọi thứ còn lại không nằm trong danh sách Falsy.
// true - Giá trị boolean true.
// '0' - Chuỗi chứa số 0.
// ' ' - Chuỗi chỉ chứa khoảng trắng.
// 'false' - Chuỗi chứa từ "false".
// [] - Mảng rỗng.
// {} - Đối tượng rỗng.
const x = function(){
    if(x){
        console.log('This is truthy');
    }else{
        console.log('This is fasly');
    }
}
console.log(Boolean(x));

// Truthy and aslsy caveats
const children = 3;
// Check for literal 0
if(children){
    console.log(`You have ${children} children`);
    ;
}else{
    console.log('You Please enter number of children');
}

// Check for empty arrays
const post = ['Post one'];
// Always true even when empty
if (post) {
    console.log('List Posts');
}else{
    console.log('No Post to list');
}

// Solution
if(post.length>0){
    console.log('List Posts');
}else{
    console.log('No posts to list');
}


// Checking for empty objeects
 const user ={
    name:'Viet'
 };

 // Always true , even when no properties
 if(user){
    console.log('List User      ');
 }else{
    console.log('No user');
 }

// Solution 
if(Object.keys(user).length>0){
    console.log('List user');
}else{
    console.log('No user');
}

// Loose Equality
console.log(false ==0);//true
console.log(''== 0);//true
console.log(null == undefined);//true

// Strict Equality
console.log(false===0);// fasle
console.log('' ===0);// fasle
console.log(null===undefined);// fasle