//alert("Can you see this?");
    /*
    
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates 
    unique colors and content for each weekday (Sunday to Saturday)into the page.  
    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include 
    the name of the highlighted weekday) A unique color that supports the image and 
    paragraph of content 

    Image (of specific coffee)
    alt tag (identifies type of coffee)
    description (of this type of coffee)
    weekday
    color (supporting image)

    The unique color could affect the background HTML, or an 
    element on the page for each day of the week.  All of the above must occur within one page.


*/

function coffeeTemplate(coffee){

    return `<p> 
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" /> 
        <strong>${coffee.day}'s Coffee Special</strong>: ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
    </p> `;
}
    /*
    let myReturn = "";

    myReturn += coffee

    return myReturn;
    */


let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar) 
const queryString = window.location.search; 
     
//output to console     
console.log(queryString); 

//separate querystring parameters 
const urlParams = new URLSearchParams(queryString); 

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}else{//today's day of week
    myDay = today;
}

//changed day to inter
myDay = parseInt(myDay);

switch(myDay){
    case 1: 
        today = "Monday"
        coffee = {
            color:"pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Monday",
            desc: `I like me some Bubble Tea!`,
        };    
    break;
    
    case 2: 
    today = "Tuesday"
    coffee = {
        color:"brown",
        name: "Caramel Latte",
        pic: "caramel-latte.jpg",
        alt: "A picture of a Caramel Latte",
        day: "Tuesday",
        desc: `It's cold, so a Caramel Latte sounds good!`,
    };    
    break;
    
    case 3: 
    today = "Wednesday"
    coffee = {
        color:"orange",
        name: "Pumpkin Spice Latte",
        pic: "pumpkin-spice-latte.jpg",
        alt: "A picture of a Pumpkin Spice Latte",
        day: "Wednesday",
        desc: `The mid-week pick-me-up you need, Pumpkin Spice Latte!`,
    };    
    break;

    case 4: 
    today = "Thursday"
    coffee = {
        color:"black",
        name: "Cold Brew",
        pic: "cold-brew.jpg",
        alt: "A picture of a Cold Brew",
        day: "Thursday",
        desc: `Cold Brew for when you are serious!`,
    };    
    break;

    case 5: 
    today = "Friday"
    coffee = {
        color:"blue",
        name: "Drip",
        pic: "drip.jpg",
        alt: "A picture of a drip coffee",
        day: "Friday",
        desc: `Drip Coffee to ease into the weekend!`,
    };    
    break;

    case 6: 
    today = "Saturday"
    coffee = {
        color:"green",
        name: "Frappaccino",
        pic: "frappaccino.jpg",
        alt: "A picture of a Frappaccino",
        day: "Saturday",
        desc: `Frappaccino, a fun word to say and a tasty drink`,
    };    
    break;

    case 0: 
    today = "Sunday"
    coffee = {
        color:"purple",
        name: "Mocha",
        pic: "mocha.jpg",
        alt: "A picture of a Mocha",
        day: "Sunday",
        desc: `Relaxing Sunday Mocha`,
    };    
    break;

    default:
        alert("Something went Wrong!")
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

//change the color of background 
document.querySelector("html").style.backgroundColor = coffee.color; 