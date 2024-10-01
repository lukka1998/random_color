// // task 1 :Create a countdown from 10 to 0 using setInterval that also 
// changes the background color every second. Once the countdown reaches 0, use 
// setTimeout to console log the message "Finished!"
//  after a 2-second delay, and then revert the background color back to the original.

let countdown = 10;
 let setId = setInterval(() => {
    countdown--;
    let randomColor = Math.floor(Math.random() * 523456);//generate random color because everey color has own code  
    console.log("hi")
    document.body.style.backgroundColor =  `#${randomColor}`;// changes the background color every second.
    if(countdown === 0){
        setTimeout(() => {
            clearInterval(setId);
            console.log("finished")
          document.body.style.backgroundColor =  "white";//background color back to the original.


        }, 2000);
    }
}, 1000);