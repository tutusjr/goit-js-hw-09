import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form");t.addEventListener("submit",i);function i(e){e.preventDefault();const l=new FormData(e.currentTarget),a={};let o=!0;l.forEach((r,s)=>{r===""?o=!1:a[s]=r}),o?(localStorage.setItem("feedback-form-state",JSON.stringify(a)),console.log(a),t.reset()):alert("alani niye bos biraktin guzel kardesim")}localStorage.getItem("feedback-form-state")&&window.addEventListener("load",()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(t.email.value=e.email,t.message.value=e.message)});
//# sourceMappingURL=02-form.js.map
