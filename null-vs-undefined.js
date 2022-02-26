// 08 ways to get undefined in javascript


// 01 - ভেরিএবল সেটা করা হয়েছে কিন্তু  কোন মান ই না দেয়া 
let a;
console.log(a);

//02 - ফাংসন রিটার্ন ই না করা 

function sum(num1, num2) {
    let result = num1 + num2
}
let update = sum(10, 20)
console.log(update);

//03 - রিটার্ন লিখা কিন্তু কি রিটার্ন করবে সেটা না লিখা 

function sum(num1, num2) {
    let result = num1 + num2
    return
}
let updated = sum(10, 20)
console.log(updated);

//04 - প্যারামিটার পাস না করা ( একটি করা এবং অন্যটি না করা )

function an(sum1, sum2) {
    let b = sum1 * sum2
}

let c = an(10)
console.log(c);

//05 - যে প্রপার্টি অবজেক্ট এ ই নেই তাকে এক্সেস করার চেষ্টা করা 

let objects = { name: 'admin', age: 23, address: 'United Kingdom' }
console.log(objects.cell);

// 06 - এরে এর রেঞ্জ এর বাইরে এক্সেস করার ট্রাই করা 

let rangeOut = [10, 20, 50, 55, 80]
console.log(rangeOut[5]);

//07 - ডিলেট করা উপাদান এক্সেস করার চেষ্টা করা

let rangeIn = [40, 30, 50, 55, 80]
delete rangeIn[2]
console.log(rangeIn[2]);

//08 - কোন ভেরিএবল এর মান সরাসরি আন্ডিফাইন্ড সেট করা 

let und = undefined
console.log(und);