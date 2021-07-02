const today = new Date();
    const day = today.getDay();
    console.log("day", day)
    
    const daylist = ["Chu Nhat","Thu Hai","Thu Ba","Thu Tu ","Thu Nam","Thu Sau","Thu Bay"];

    console.log(`Today is : ${daylist[day]}.`);
    let hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    let prepand = (hour >= 12)? " PM ":" AM ";

    hour = (hour >= 12)? hour - 12: hour;
    console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
    
    // if (hour===0 && prepand===' PM ') {  
    //     if (minute===0 && second===0){ 
    //         hour=12;
    //         prepand=' Noon';
    //     } 
    //     else{ 
    //         hour=12;
    //         prepand=' PM';
    //     } 
    // } 
    // if (hour===0 && prepand===' AM ') { 
    //     if (minute===0 && second===0){ 
    //         hour=12;
    //         prepand='Midnight';
    //     } 
    //     else
    //     { 
    //         hour=12;
    //         prepand=' AM';
    //     } 
    // } 
