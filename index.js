import { JSDOM } from "jsdom";

setInterval(()=>{
    const data = await fetch("https://deployment.setchartron.in/Home.aspx");
const html = await data.text();
// console.log(html);

const dom = new JSDOM(html);
const document = dom.window.document;

const postNotification = document.querySelector("[id*=ContentPlaceHolder1_Panel]");

const links = postNotification.querySelectorAll("a");
links.forEach(link => {
    console.log(link.href);
    console.log(link.textContent);
});
},1000*60*60*6)