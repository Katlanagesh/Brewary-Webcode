
let heading= document.createElement("h2")
heading.innerText= "WELCOME TO BREWERY WORLD"

let h1= document.createElement("h1")
h1.innerText= "Open Brewery DataBase"
document.body.appendChild(heading)
document.body.appendChild(h1)

let content= document.createElement("h5")
content.innerText= "Select the city to get the detalis"
document.body.appendChild(content)


let countryName;

   fetch("https://api.openbrewerydb.org/breweries?by_state=alaska&per_page=200")
   .then(res => res.json())
   .then(data => initialize(data))
   .catch(err => console.log("Error:", err));

   function initialize(countriesData){
      countryName= countriesData;
      let options = "";
     
      countryName.forEach(country =>  options += `<option value="${country.city}">${country.city}</option> ` )
     
      countryNameList.innerHTML = options;
     
      displayCountryInfo("Juneau");
   }

   const div= document.createElement("div")
   document.body.appendChild(div);

   const input = document.createElement("select");
   input.setAttribute("class", "form-select");
   input.setAttribute("style", "max-width: 100%");
   input.id= "countryName"

   const a=document.createElement("p")
   a.innerHTML=`Brewery Name : `
   let bname = document.createElement("span")
   bname.id= "bname"
   a.appendChild(bname)

   const b=document.createElement("p")
   b.innerHTML= `Brewery_type : `
   let brewery_type = document.createElement("span")
   brewery_type.id= "brewery_type"
   b.appendChild(brewery_type)

   const d=document.createElement("p")
   d.innerHTML=`address_1 : `
   let address_1 = document.createElement("span")
   address_1.id= "address_1"
   d.appendChild(address_1)

   const f=document.createElement("p")
   f.innerHTML= `website_url : `
   let website_url = document.createElement("span")
   website_url.id= "website_url"
   f.appendChild(website_url)

   const h=document.createElement("p")
   h.innerHTML= `phone :`
   let phone = document.createElement("span")
   phone.id= "phone"
   h.appendChild(phone)

   div.appendChild(input)
   div.appendChild(a)
   div.appendChild(b)
   div.appendChild(d)
   div.appendChild(f)
   div.appendChild(h)
 

   const countryNameList = document.querySelector(".form-select")
   countryNameList.addEventListener("change", function(event){
      // console.log(event.target.value)
      displayCountryInfo(event.target.value)
   } )
  
 function displayCountryInfo(countryBycity){

   const countryData = countryName.find(country => country.city === countryBycity);
   // console.log(countryData)
   document.getElementById("bname").innerHTML = countryData.name;
   document.getElementById("brewery_type").innerHTML = countryData.brewery_type;
   document.getElementById("address_1").innerText = countryData.address_1;
   document.getElementById("website_url").innerHTML = countryData.website_url;
   document.getElementById("phone").innerHTML = countryData.phone;


 }
   