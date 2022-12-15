const input = document.querySelector('#currency1');
const input2 = document.querySelector('#currency2');
const input3 = document.querySelector('#amount');
let currency1;
let currency2;
let amount;
let results;

input.addEventListener('change', (e)=>{
currency1=e.target.value

});
input2.addEventListener('change', (e)=>{
    currency2=e.target.value

});
input3.addEventListener('change',(e)=>{
    amount=e.target.value
})


const apicall=()=>{
    if(currency1.length>0&&currency2.length>0&&amount>0){   
         var myHeaders = new Headers();
  myHeaders.append("apikey", "XgW7JIw5FWgBYuJjcHjLdJPI9z99uKoc");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders
  };
            fetch(
              `https://api.apilayer.com/fixer/convert?to=${currency1}&from=${currency2}&amount=${amount}`,
              requestOptions
            )
              .then((response) => response.json())
              .then((res) =>{
                let d=res;
                console.log(d);
                document.getElementById("result").innerText=d?.result;
              })
              .catch((error) => console.log("error"));
  }
  
}

