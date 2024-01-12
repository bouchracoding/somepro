const hr= document.querySelector("#hr");
const mn= document.querySelector("#mn");
const sc= document.querySelector("#sc");



setInterval(()=> {
    let now =new Date()
    console.log(now)
    let minDegree= now.getMinutes()* 6
    
    let secDegree= now.getSeconds()* 6
    let hourDegree = now.getHours() * 30
    hr.style.transform=`rotate(${hourDegree +minDegree/12}deg)`
    console.log(hourDegree)
    mn.style.transform=`rotate(${minDegree}deg)`
    sc.style.transform=`rotate(${secDegree}deg)`
} ,1000);
