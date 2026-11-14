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
    

