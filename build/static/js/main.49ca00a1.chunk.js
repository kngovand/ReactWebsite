(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),o=a(7),c=a(6),i=a(8),l=a(0),s=a.n(l),u=a(11),d=a.n(u),m=(a(86),a(53)),h=a.n(m),p=(a(147),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=["About","Projects","Resume","Contact"].map(function(e){return s.a.createElement("li",null,s.a.createElement("a",{href:"#"+e},e))});return s.a.createElement("nav",null,s.a.createElement("h2",{className:"logo"},this.props.logoTitle),s.a.createElement("ul",null,s.a.createElement(h.a,{items:["About","Projects","Resume","Contact"],currentClassName:"is-current"},e)))}}]),t}(l.Component)),b=a(76),g=a.n(b),f=(a(149),{backgroundImage:"url( ".concat(g.a," )"),height:"78vh",backgroundSize:"cover"}),v=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("header",{style:f},s.a.createElement("h1",null,this.props.title),s.a.createElement("p",null,"Aspiring Software Developer"),s.a.createElement("a",{href:"#About"},this.props.button)))}}]),t}(l.Component),E=(a(151),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=[{icon:"color-wand",name:"Dynamic",description:"Using components, props, and states"},{icon:"contacts",name:"Fluid",description:"Focused on user design"},{icon:"albums",name:"Responsive",description:"Works on most resolutions and devices"}].map(function(e){return s.a.createElement("div",null,s.a.createElement("span",null,s.a.createElement("ion-icon",{name:e.icon})),s.a.createElement("h4",null,e.name),s.a.createElement("p",null,e.description))});return s.a.createElement("div",{className:"project"},s.a.createElement("h3",null,"About this website"),s.a.createElement("h2",null,"Written in React JS"),s.a.createElement("div",{className:"row"},e))}}]),t}(l.Component)),w=a(77),y=a.n(w),k=(a(153),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={backgroundImage:"url( ".concat(y.a," )"),height:"75vh",backgroundSize:"cover"};return s.a.createElement("div",{id:"About",className:"about",style:e},s.a.createElement("h3",null,"About"),s.a.createElement("h2",null,"A professional perspective"),s.a.createElement("p",null,"Driven by results, fast learner, and always open to ideas. Dedicated to seeing through any task given and perfectionist. Experienced in many fields of programming, such as user interfaces, web & mobile applications, and databases. Understands that the programming world is constantly evolving and trying to keep up with it!"),s.a.createElement("h2",null,"Background & personal life"),s.a.createElement("p",null,"Originally from Reston VI, I moved to Colorado over 20 years ago. Currently attending MSU-Denver for a Computer Science degree. I see myself as an outdoors person; if I'm not working I'm probably outside! I love to snowboard, I wouldn't be a true Coloradan if I said otherwise. I also like to cook, I am the designated chef de cuisine during the holidays."))}}]),t}(l.Component)),j=a(78),C=a.n(j),O=(a(155),{backgroundImage:"url( ".concat(C.a," )"),height:"175vh",backgroundSize:"cover"}),T=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"Resume",className:"resume",style:O},s.a.createElement("p",{align:"center"},s.a.createElement("h3",null,"Resume"),s.a.createElement("h2",null,"Download the .pdf file ",s.a.createElement("a",{href:"https://docs.google.com/document/d/1cUN_Iw5sNYl3RTd86qAYAbFFWUTg9a6eI1HixzAx55g/export?format=pdf",download:!0}," here")),s.a.createElement("iframe",{src:"https://docs.google.com/document/d/e/2PACX-1vTtNnrrZpcdLC-HwJFdVRgeUWFD0urUgtczfBl3BoKrtPR1P5GcxRBNCPT2-xgeiMDhwSTdjZFE5izY/pub?embedded=true",width:"830",height:"1000"})))}}]),t}(l.Component),x=a(3),A=a(79),I=a.n(A),N=(a(204),{backgroundImage:"url( ".concat(I.a," )"),height:"90vh",backgroundSize:"cover"}),R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={activeTab:0},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?s.a.createElement(x.Card,{shadow:0,style:{width:"900px",margin:"auto"}},s.a.createElement(x.CardTitle,{style:{color:"#fff",height:"200px",background:"url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.idevie.com%2Fwp-content%2Fuploads%2F2015%2F12%2FReact.js_logo.svg_.png&f=1) center/ cover"}}),s.a.createElement(x.CardText,null,"I rewrote my portfolio website in React JS as a learning experience. I wanted to see how props, states, and components worked together in order to code dynamically. My Ruby website loads static HTML pages from the navigation bar, the focus of this project was to code dynamically. React MDL was one of the libraries I used in order to help me implement the user interface."),s.a.createElement(x.CardActions,{border:!0},s.a.createElement(x.Button,{colored:!0},s.a.createElement("a",{href:"https://github.com/kngovand/ReactWebsite",target:"_blank"},"Github")))):1===this.state.activeTab?s.a.createElement(x.Card,{shadow:0,style:{width:"900px",margin:"auto"}},s.a.createElement(x.CardTitle,{style:{color:"#fff",height:"200px",background:"url(http://yagudaev.com/wp-content/uploads/2010/03/php-cover.jpg) center/ cover no-repeat #46B6AC",backgroundColor:"black"}}),s.a.createElement(x.CardText,null,"This web application was written in Ruby on Rails from Dr. Beaty's Web Architecture class. The project involved utilizing relationships between entities in order to implement a fully functional academic banner system. Some features involve using Bootstrap, user authentication, transforming the existing app into a single-page application, and much more."),s.a.createElement(x.CardActions,{border:!0},s.a.createElement(x.Button,{colored:!0},s.a.createElement("a",{href:"https://github.com/kngovand/webApp",target:"_blank"},"Github")))):2===this.state.activeTab?s.a.createElement(x.Card,{shadow:0,style:{width:"900px",margin:"auto"}},s.a.createElement(x.CardTitle,{style:{color:"#fff",height:"200px",background:"url(https://reliablesite.net/hosting-news/wp-content/uploads/increasewebsitespeed.png) center / cover"}}),s.a.createElement(x.CardText,null,"This project was intended to provide a Business Finance Database using MySQL and MySQL Workbench. This database is fully funcional, with many features such as inserting data, functioned on triggers and procedures, and worked with foreign keys so all of the tables were updated accordingly."),s.a.createElement(x.CardActions,{border:!0},s.a.createElement(x.Button,{colored:!0},s.a.createElement("a",{href:"https://github.com/kngovand/SQL",target:"_blank"},"Github")))):3===this.state.activeTab?s.a.createElement(x.Card,{shadow:0,style:{width:"900px",margin:"auto"}},s.a.createElement(x.CardTitle,{style:{color:"#fff",height:"200px",background:"url(https://cdn-images-1.medium.com/max/1200/1*qpJr-2XB1jf21_MxmHwg-g.png) center / cover"}}),s.a.createElement(x.CardText,null,"The objective of this application was to inform MSU-Denver students about activities and events throughout Auraria Campus. As an authentication feature, we utilized Amazon's Firebase API as a login function, and Google Maps API to display the maps. After the user is logged in, they are able to either view, edit, or delete 'cards' that display the current events taking place."),s.a.createElement(x.CardActions,{border:!0},s.a.createElement(x.Button,{colored:!0},s.a.createElement("a",{href:"https://github.com/kngovand/androidMaps",target:"_blank"},"Github")))):4===this.state.activeTab?s.a.createElement(x.Card,{shadow:0,style:{width:"900px",margin:"auto"}},s.a.createElement(x.CardTitle,{style:{color:"#fff",height:"200px",background:"url(https://www.webfx.com/blog/wp-content/uploads/2016/07/coding-ftp.png) center / cover"}}),s.a.createElement(x.CardText,null,"In Dr. Beaty's Software Development class, our group was responsible for unit testing and creating automated browser tests that ran on Dr. Dollard's Academic banner system. Using C# with asp.net, we utilized mocking techniques with NUnit that tested the functionality of each class, and used tools such as Selenium WebKit to test the javascript on the website."),s.a.createElement(x.CardActions,{border:!0},s.a.createElement(x.Button,{colored:!0},s.a.createElement("a",{href:"https://github.com/kngovand/softwareDev",target:"_blank"},"Github")))):void 0}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"Projects",className:"projects",style:N},s.a.createElement("h3",null,"Portfolio"),s.a.createElement("h2",null,"A strong focus on web applications"),s.a.createElement("div",{className:"category-tabs"},s.a.createElement(x.Tabs,{backgroundColor:"white",styleactiveTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},s.a.createElement(x.Tab,null,"React Website"),s.a.createElement(x.Tab,null,"Ruby App"),s.a.createElement(x.Tab,null,"Finance DB"),s.a.createElement(x.Tab,null,"Android Maps"),s.a.createElement(x.Tab,null,"Banner System")),s.a.createElement("section",{className:"projects-grid"},s.a.createElement(x.Grid,{className:"projects-grid"},s.a.createElement(x.Cell,{col:12},s.a.createElement("div",{className:"content"},this.toggleCategories()))))))}}]),t}(l.Component),S=a(80),B=a.n(S),D=(a(206),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){"url( ".concat(B.a," )");var e=[{icon:"send",name:"Email",href:"mailto:kevinvanduc@gmail.com"},{icon:"logo-linkedin",name:"LinkedIn",href:"https://www.linkedin.com/in/kngovand/"},{icon:"logo-github",name:"GitHub",href:"https://github.com/kngovand"}].map(function(e){return s.a.createElement("div",{id:"Contact",className:"space"},s.a.createElement("span",null,s.a.createElement("a",{href:e.href,target:"_blank"},s.a.createElement("ion-icon",{name:e.icon}))))});return s.a.createElement("div",{className:"contact"},s.a.createElement("h3",null,"Thanks for stopping by!"),s.a.createElement("h2",null,"Contact"),s.a.createElement("div",{className:"row"},e),s.a.createElement("p",null,"Copyright Kevin Ngovanduc"))}}]),t}(l.Component));a(208),a(210),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(p,null),s.a.createElement(v,{title:"Kevin N.",button:"Get Started"}),s.a.createElement(k,null),s.a.createElement(R,null),s.a.createElement(T,null),s.a.createElement(E,null),s.a.createElement(D,null))}}]),t}(l.Component);d.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a.p+"static/media/snow2.e32ddfc7.jpeg"},77:function(e,t,a){e.exports=a.p+"static/media/keyboard.581cc667.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/pexels.88abab5e.jpeg"},79:function(e,t,a){e.exports=a.p+"static/media/blue.3ce4ab63.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/codes.e39a6e8c.jpeg"},81:function(e,t,a){e.exports=a(211)},86:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.49ca00a1.chunk.js.map