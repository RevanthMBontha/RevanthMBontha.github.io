import{G as p,u as b,r as t,j as e,I as g,a as v,B as h}from"./index-eOks4tZo.js";import{B as j,e as N}from"./index-CEN4jP6F.js";import{M as w,a as k,b as y}from"./index-Do5zWXMl.js";import{T as C}from"./index-BpDFGiHe.js";import{F as M,a as I}from"./index-B_zw8xxV.js";import{P as F}from"./ProjectCard-BkHdFch9.js";import{p as S,s as D}from"./data-DRdmd1VY.js";import{S as R}from"./SkillCard-C1sJUfk4.js";function z(r){return p({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Box_List"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"},child:[]},{tag:"path",attr:{d:"M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z"},child:[]},{tag:"path",attr:{d:"M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z"},child:[]},{tag:"path",attr:{d:"M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},child:[]},{tag:"path",attr:{d:"M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z"},child:[]},{tag:"path",attr:{d:"M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z"},child:[]}]}]}]})(r)}const P=()=>{const r=b(l=>l.connectedInputIds),[s,c]=t.useState(!0),u=t.useRef(),d=t.useRef(),o=t.useRef(),x=t.useRef(),[i,m]=t.useState({name:"",email:"",message:""}),n=l=>{m({...i,[l.target.name]:l.target.value})},f=l=>{l.preventDefault(),N.send("service_ji3ie5n","template_gg49zv7",i,"zE-pfdl1qiyU3sWqk").then(a=>{console.log("Email sent successfully:",a.text),m({name:"",email:"",message:""}),h.success("Message sent successfully!")}).catch(a=>{console.error("Error sending email:",a),h.error("Failed to send message.")})};return e.jsxs("div",{ref:u,className:`bg-black relative text-white ${window.innerHeight>window.innerWidth?"h-fit p-4 lg:p-8 lg:px-18":r.includes("fullResume")?"h-[194rem] p-4 lg:p-8 lg:px-18":"h-0 p-0"} rounded-none z-10 w-full flex flex-col overflow-hidden gap-y-12 justify-start items-start transition-all font-rubik flex-shrink-0 duration-1000 ease-in-out`,children:[e.jsx("div",{ref:d,className:`${r.includes("fullResume")?"visible":"hidden"} w-full flex justify-center`,children:e.jsxs("div",{className:"w-fit fixed z-20 top-4 p-2 px-6 cursor-pointer h-fit rounded-full justify-center items-center bg-neutral-700 text-white flex gap-x-8 font-rubik",children:[e.jsx("div",{className:"p-2 rounded-full hover:bg-neutral-500",children:e.jsx(z,{onClick:()=>d.current.scrollIntoView({behavior:"smooth",block:"start"}),size:32})}),e.jsx("div",{className:"p-2 rounded-full hover:bg-neutral-500",children:e.jsx(g,{onClick:()=>o.current.scrollIntoView({behavior:"smooth",block:"start"}),size:28})}),e.jsx("div",{className:"p-2 rounded-full hover:bg-neutral-500",children:e.jsx(v,{onClick:()=>x.current.scrollIntoView({behavior:"smooth",block:"start"}),size:30})})]})}),e.jsxs("div",{className:"flex flex-col mt-12 gap-y-8 w-full",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"font-rubik w-full text-4xl",children:["Hi, I am Revanth"," ",e.jsx(w,{className:"animate-waving-hand inline-block text-primary-500"})]}),e.jsx("h1",{className:"font-rubik w-full text-4xl text-primary-500",children:"Fullstack Developer"})]}),e.jsxs("div",{className:"flex w-full justify-between items-center",children:[e.jsxs("div",{onClick:()=>window.open("http://www.github.com/revanthmbontha","_blank"),className:"bg-neutral-700 hover:bg-neutral-500 p-2 md:px-4 rounded-full flex items-center gap-x-2 cursor-pointer",children:[e.jsx(C,{className:"text-black p-1 bg-primary-500 rounded-md",size:24})," ",e.jsx("span",{className:"font-rubik text-sm lg:text-lg",children:"Github"})]}),e.jsxs("div",{onClick:()=>window.open("http://www.linkedin.com/in/revanth-bontha","_blank"),className:"bg-neutral-700 hover:bg-neutral-500 p-2 md:px-4 rounded-full flex items-center gap-x-2 cursor-pointer",children:[e.jsx(M,{className:"text-black p-1 bg-primary-500 rounded-md",size:24})," ",e.jsx("span",{className:"font-rubik text-sm  lg:text-lg",children:"LinkedIn"})]}),e.jsxs("div",{onClick:()=>window.open("/pdfs/resume.pdf","_blank"),className:"bg-neutral-700 hover:bg-neutral-500 p-2 md:px-4 rounded-full flex items-center gap-x-2 cursor-pointer",children:[e.jsx(k,{className:"text-black p-1 bg-primary-500 rounded-md",size:24})," ",e.jsx("span",{className:"font-rubik text-sm lg:text-lg",children:"Download CV"})]})]}),e.jsx("p",{className:"text-base text-justify lg:text-base",children:"I’m a passionate Software Developer with a knack for creating seamless, user-centric applications. With expertise in React, Node.js, and MongoDB, I enjoy transforming ideas into impactful digital solutions. My experience spans building high-performance platforms, and I thrive on exploring distributed systems, data visualization, and cutting-edge technologies. As a lifelong learner and a team player, I’m always eager to innovate, collaborate, and deliver exceptional results."})]}),e.jsx("hr",{className:"text-neutral-700 w-full"}),e.jsxs("div",{className:"flex flex-col gap-y-8 w-full",children:[e.jsx("h2",{className:"text-3xl",children:"My Timeline"}),e.jsx("div",{className:"flex w-full justify-center items-center",children:e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("button",{className:`p-2 px-4 border ${s?"bg-primary-500":"bg-black"} border-solid hover:bg-neutral-500 border-white rounded-md rounded-r-none`,onClick:()=>c(!0),children:"Experience"}),e.jsx("button",{className:`p-2 px-4 border ${s?"bg-black":"bg-primary-500"} border-solid hover:bg-neutral-500 border-white rounded-md rounded-l-none border-l-0`,onClick:()=>c(!1),children:"Education"})]})}),e.jsxs("div",{className:"w-full relative flex flex-col gap-y-8 h-fit",children:[e.jsxs("div",{className:"w-full flex items-start h-fit gap-x-2",children:[e.jsxs("div",{className:`w-full ${s?"invisible":"visible"} bg-black h-full flex flex-col gap-y-4`,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl text-end",children:"Fullstack Developer Course"}),e.jsx("span",{className:"text-sm text-end",children:"Internshala"})]}),e.jsx("div",{className:"text-base text-end",children:"Dec,2023 - May,2024"})]}),e.jsx("div",{className:"w-7 flex-shrink-0 bg-white h-7 rounded-full"}),e.jsxs("div",{className:`w-full ${s?"visible":"invisible"} bg-black h-full flex flex-col gap-y-4`,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl",children:"Fullstack Developer"}),e.jsx("span",{className:"text-sm",children:"Root Enroute"})]}),e.jsx("div",{className:"text-base",children:"Oct,2023 - Present"})]})]}),e.jsxs("div",{className:"w-full flex items-start h-fit gap-x-2",children:[e.jsxs("div",{className:`w-full ${s?"visible":"invisible"} bg-black h-full flex flex-col gap-y-4 text-end`,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl",children:"Fullstack Freelancer"}),e.jsx("span",{className:"text-sm",children:"Histare Group"})]}),e.jsx("div",{className:"text-base",children:"Aug,2023 - Present"})]}),e.jsx("div",{className:"w-7 flex-shrink-0 bg-white h-7 rounded-full"}),e.jsxs("div",{className:`w-full ${s?"invisible":"visible"} bg-black h-full flex flex-col gap-y-4`,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl",children:"WebDev Bootcamp - Angela Yu"}),e.jsx("span",{className:"text-sm",children:"Udemy"})]}),e.jsx("div",{className:"text-base",children:"Jul,2022 - Aug,2022"})]})]}),e.jsxs("div",{className:"w-full flex items-start h-fit gap-x-2",children:[e.jsxs("div",{className:`w-full ${s?"invisible":"visible"} bg-black h-full  flex flex-col gap-y-4`,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl text-end",children:"Bachelor of Commerce"}),e.jsx("span",{className:"text-sm text-end",children:"IGNOU"})]}),e.jsx("div",{className:"text-base text-end",children:"Jun,2019 - May,2022"})]}),e.jsx("div",{className:"w-7 flex-shrink-0 bg-white h-7 rounded-full"}),e.jsxs("div",{className:`w-full ${s?"visible":"invisible"} bg-black h-full flex flex-col gap-y-4`,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl",children:"Frontend Developer"}),e.jsx("span",{className:"text-sm",children:"56 Secure"})]}),e.jsx("div",{className:"text-base",children:"Sept,2022 - Oct,2023"})]})]}),e.jsx("div",{className:"w-[1px] bg-white h-full absolute left-1/2 -translate-x-1/2"})]})]}),e.jsx("hr",{ref:o,className:"text-neutral-700 w-full"}),e.jsxs("div",{className:"w-full flex flex-col gap-y-4",children:[e.jsx("h2",{className:"text-3xl",children:"My Best Projects"}),e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:S.slice(0,4).map((l,a)=>e.jsx(F,{name:l.name,description:l.description,link:l.link,images:l.images,techStack:l.techstack,icons:l.icons},`project-${a}`))})})]}),e.jsx("hr",{ref:x,className:"text-neutral-700 w-full"}),e.jsxs("div",{className:"w-full flex flex-col gap-y-4",children:[e.jsx("h2",{className:"text-3xl",children:"My Skills"}),e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"grid grid-cols-3 lg:grid-cols-5 gap-4",children:D.map((l,a)=>e.jsx(R,{children:l},`skill-${a}`))})})]}),e.jsx("hr",{className:"text-neutral-700 w-full"}),e.jsxs("div",{className:"w-full mb-12",children:[e.jsx("h2",{className:"text-3xl",children:"Contact Me"}),e.jsxs("div",{className:"flex w-full h-fit",children:[e.jsxs("div",{className:"flex w-2/5 h-96  p-2 flex-col items-center justify-evenly",children:[e.jsxs("div",{className:"h-fit w-full rounded-md bg-black flex flex-col items-center justify-center gap-y-2 p-4 border border-white border-solid",children:[e.jsx(y,{className:"text-white bg-primary-500 p-2 rounded-md",size:48}),e.jsx("p",{className:"text-white",children:"Send me a Mail:"}),e.jsx("a",{className:"cursor-pointer text-primary-500 hover:underline hover:underline-offset-4",href:"mailto:revanthmbontha@gmail.com",target:"_blank",children:"Click Here"})]}),e.jsxs("div",{className:"h-fit w-full rounded-md bg-black flex flex-col items-center justify-center gap-y-2 p-4 border border-white border-solid",children:[e.jsx(I,{className:"text-white bg-primary-500 p-2 rounded-md",size:48}),e.jsx("p",{className:"text-white",children:"Connect on Whatsapp:"}),e.jsx("a",{className:"cursor-pointer text-primary-500 hover:underline hover:underline-offset-4",href:"https://api.whatsapp.com/send?phone=918309805502&text=Hello!",target:"_blank",children:"Click Here"})]})]}),e.jsxs("form",{onSubmit:f,className:"flex relative w-3/5 p-2 flex-col justify-evenly gap-y-4",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{className:"absolute bg-black px-3 -top-3 left-5 text-white",htmlFor:"name",children:"Name"}),e.jsx("input",{name:"name",type:"text",placeholder:"Enter your name",value:i.name,onChange:n,className:"h-16 w-full focus:border-primary-500 rounded-md outline-none bg-black p-4 text-white border-white border border-solid"})]}),e.jsxs("div",{className:" relative w-full",children:[e.jsx("label",{className:"absolute bg-black px-3 -top-3 left-5 text-white",htmlFor:"email",children:"Email"}),e.jsx("input",{name:"email",type:"email",placeholder:"Enter your email",value:i.email,onChange:n,className:"h-16 w-full rounded-md focus:border-primary-500 outline-none bg-black p-4 text-white border-white border border-solid"})]}),e.jsxs("div",{className:" relative w-full",children:[e.jsx("label",{className:"absolute bg-black px-3 -top-3 left-5 text-white",htmlFor:"message",children:"Message"}),e.jsx("textarea",{name:"message",rows:6,placeholder:"Detail your project idea here!",value:i.message,onChange:n,className:"bg-black border w-full border-white border-solid outline-none focus:border-primary-500 text-white rounded-md p-4"})]}),e.jsxs("button",{type:"submit",className:"bg-primary-500 hover:bg-primary-300 p-4 px-8 text-lg mx-auto w-fit h-fit rounded-md flex items-center gap-x-4",children:["Send Message ",e.jsx(j,{className:"inline-block",size:32})]})]})]})]})]})};export{P as default};
