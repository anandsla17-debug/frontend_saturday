//=>not primitive data=>set,map,array,object,function
// collect ,number,String,function=>all=>object
//key and value
const course={
    c1:"java",
    c2:"python",
    c3:"c++",
    4:"c##",
    sub:function(a,b){
       let c=30;
        let d=40;
        console.log(a-b);
        console.log(c-d);

    }
}

let thing={
    t1:"pen"
};
console.log(thing);
//
thing={
   t1:"scale",
   t2:"penicle"

}
console.log(thing)
console.log(course);
console.log(course.c1,course.c2,course.c3,course[4]); // , =>space +=>
course.sub(90,70);

console.log("array");
const a="hello";
console.log(a);

function term(){
    {
       var data="things"; //do not use 
        
        console.log(a)
    }
    data="amount"
    console.log(data)
}
term();
// array it will follow insert order 
//it allow duplicate 
//index order =>0

let arr=[10,20,5,10,"insert","update","delete",12.235,true];
console.log(arr);
console.log(arr[3]);
console.log(arr[5]);

// stack =>lifo
console.log("stack")
let stack=[];
stack.push("a");
stack.push("b");
stack.push("c");
stack.push("d");
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
//   queue=>fifo
console.log("queue")
let queue=[];
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
queue.unshift(4);
queue.shift();// remove first element
queue.shift();

console.log(queue)

//splice =>array
let studentname=[10,20,40,50];
studentname.splice(1,0,70);// =>start index,length , add value
studentname.splice(3,0,47,80);
console.log(studentname);

// [1,2,3,4,5,6] =>[1,2,3,4,7,8,5,6]
//[a,b,c,d]=>[a,c,d]
//["manago,"apple"]=>["manago","orange","apple"]


let markinfo=[["arun",50],["kumar",80],["max",60]];
console.log(markinfo[1][0]);
let collect=[[10,20,30,40,50],["a","b","c","d",["pen","scale"]],[600,8000,7000]];
console.log(collect[1][4][1]);


