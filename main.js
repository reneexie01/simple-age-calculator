(()=>{"use strict";const e=function(){let e=[];return{people:e,clearPeople:()=>{e.length=0},generateUniqueId:()=>"_"+Math.random().toString(36).substr(2,9)}}(),t=function(){let t={};return{newPerson:(r,n)=>(t={id:e.generateUniqueId(),name:r,year:n},t),clearPerson:()=>{t={}},addPerson:e=>{e.push(t)}}}(),r=function(){let e=[];const t=()=>{e=[]},r=()=>{document.querySelector(".age-library").innerHTML=""};return{getYear:function(n,l){return t(),n.forEach((t=>{let r,n,a;r=parseInt(l)-parseInt(t.year),n=t.name,a=((e,t)=>({name:e,age:t}))(n,r),e.push(a)})),(e=>{r(),e.forEach((e=>{const t=document.querySelector(".age-library"),r=document.createElement("p");r.innerHTML=`Name: ${e.name}, Age: ${e.age}`,t.appendChild(r)}))})(e),e},calculatedAges:e,clearCalculatedAges:t,clearPeopleAgeOutput:r}}(),n=function(){const n=()=>{const t=JSON.parse(localStorage.getItem("people"))||[];e.people=t},l=()=>{i(),e.people.forEach((e=>{const t=document.querySelector(".people-library"),r=document.createElement("p"),n=document.createElement("button");n.innerHTML="Delete",n.classList.add("delete"),n.setAttribute("unique-id",`${e.id}`),r.innerHTML=`Name: ${e.name}, Birth Year: ${e.year}`,r.appendChild(n),t.appendChild(r)})),u()},a=e=>{const t=document.querySelector(`.${e}`),r=document.createElement("p");r.classList.add("error"),r.innerHTML="Missing values detected.",t.appendChild(r)},o=()=>{const e=document.querySelector(".error");e&&e.remove()},c=()=>{const e=document.querySelector(".name"),t=document.querySelector(".birth-year");e.value="",t.value=""},u=()=>{document.querySelector(".people-library").addEventListener("click",(e=>{if(e.target.classList.contains("delete")){const t=e.target.getAttribute("unique-id");let r=JSON.parse(localStorage.getItem("people"))||[];r=r.filter((e=>e.id!==t)),localStorage.setItem("people",JSON.stringify(r)),n(),l()}}))},i=()=>{document.querySelector(".people-library").innerHTML=""};let s;const d=()=>{document.querySelector(".year-to-calculate").innerHTML="Year to calculate:"},p=()=>{document.querySelector(".year-calculate").value=""};return{personInput:function(){document.querySelector(".person-submit").addEventListener("click",(()=>{const r=document.querySelector(".name").value,u=document.querySelector(".birth-year").value;if(""==r||""==u)a("person-submit-error");else{(e=>{let t=JSON.parse(localStorage.getItem("people"))||[];t.push(e),localStorage.setItem("people",JSON.stringify(t))})(t.newPerson(r,u)),e.clearPeople(),n(),l(),c(),o()}}))},yearInput:()=>{document.querySelector(".year-submit").addEventListener("click",(()=>{const t=document.querySelector(".year-calculate").value;""==t?a("year-submit-error"):(s=t,(e=>{d(),document.querySelector(".year-to-calculate").innerHTML=`Year to calculate: ${e}`})(s),r.getYear(e.people,s),p(),o())}))},clearAll:()=>{document.querySelector(".clear-all").addEventListener("click",(()=>{c(),i(),o(),o(),p(),d(),e.clearPeople(),t.clearPerson(),r.clearPeopleAgeOutput()}))},renderExistingPeople:()=>{l()}}}();n.personInput(),n.yearInput(),n.clearAll(),n.renderExistingPeople()})();