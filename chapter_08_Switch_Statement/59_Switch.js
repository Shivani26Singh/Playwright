// switch uses **strict comparison (===)**
// break  is used to exit the switch statement after a case is executed. If break is not used, the code will continue to execute the next case(s) until a break is encountered or the switch statement ends. This is known as "fall-through" behavior.

let day = 2;
// 1 - mon, 2. - tue

switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');    //multiple statements in case --> works fine
        let a = 10;
        let b = 30;
        console.log(a + b);
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thur');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;
    default:
        console.log("No idea which day it is");
}