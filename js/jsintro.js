console.log("hello");
// let const var=>

    // declared,reasign, localscope =>outside gobal
    var name="anand";
    var name="max";// declared
    name=123;
    console.log(name);

    function logic(){
 

      {
            var age=23;

        }
        console.log(age);
    }
    logic();// call


    // do not redeclare , reassign
    let salary=50000;
  
    salary=10000;//
    console.log(typeof salary);

    function letlogic(){
        console.log("let concept")
        {
          let amount=300;  
            console.log(amount);
        }
      
    }
letlogic();

// do not  redeclare ,do not reassign
    const pin=1235;
    // pin=23;
    
    console.log(pin);
    

    let info=70;
console.log(typeof info);
let phoneno=538454548;//declared
phoneno="amount";//reassigned
console.log(phoneno);
var things="scale";
var things="penicle";//redeclared
console.log(things);
// pimitive=>string,number,boolean,undefined,null
//  and non pimitive data type=>(array,set,map),object,function
let m;
console.log(m);



function add(a,b){
    // value,statement,logic=>collect of data
    console.log(a+b);
}

add(10,10);







