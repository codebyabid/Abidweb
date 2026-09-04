const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav"),themeBtn=document.getElementById("themeBtn");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const savedTheme=localStorage.getItem("theme");
if(savedTheme==="light") document.body.classList.add("light");
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
});
const lightCSS=document.createElement("style");
lightCSS.textContent=`body.light{background:#f7f8f5;color:#121510}.light .header nav a{color:#697068}.light .header nav a:hover,.light .header nav a.active{color:#111}.light .theme-btn,.light .menu-btn,.light .nav-cta{background:#fff;border-color:#dfe3db;color:#333}.light .code-card,.light .skill-card,.light .project-card,.light .contact-box{background:#fff;border-color:#e0e4dc}.light .window-bar,.light input,.light textarea{border-color:#e0e4dc}.light input,.light textarea{background:#f5f6f3;color:#111}.light .hero-text,.light .about-copy>p:not(.lead),.light .skill-card p,.light .project-info p,.light .process-item p,.light .contact-copy>p:not(.kicker){color:#687069}.light .skills{background:#eef0eb}.light .portrait-placeholder{background:radial-gradient(circle at 70% 20%,#e7f5d4,#f3f5f0 48%,#e9ece6);border-color:#dfe4da}.light .project-card:hover,.light .skill-card:hover{border-color:#b7c0b0}.light .floating-card{background:#fff;border-color:#dfe3db}.light footer{border-color:#e0e4dc}.light .noise{opacity:.02}`;
document.head.appendChild(lightCSS);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll("nav a")];
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-180) current=s.id});
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
},{passive:true});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formStatus").textContent="Thanks! Your message is ready to send — connect your form backend to receive it.";
  e.target.reset();
});
document.getElementById("year").textContent=new Date().getFullYear();