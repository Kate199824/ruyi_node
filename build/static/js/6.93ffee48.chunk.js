(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},210:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(7),i=a(9),r=a(8),l=a(10),o=a(0),s=a.n(o),u=(a(204),a(156),a(168)),m=(a(59),a(28)),d=a(56),p=(a(205),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=s.a.createElement("div",null,s.a.createElement("img",{src:d.i,style:{width:160}})),t=s.a.createElement("div",null,s.a.createElement("img",{src:d.m,style:{width:160}}));return s.a.createElement("div",{className:"barSection"},s.a.createElement(u.a,{content:e,trigger:"hover",placement:"top"},s.a.createElement("a",{href:"https://user.qzone.qq.com/1576087369/infocenter",target:"_blank"},s.a.createElement(m.a,{className:"icon",type:"qq",style:{fontSize:"40px",color:"#eeeeee"}}))),s.a.createElement(m.a,{className:"icon",type:"weibo",style:{fontSize:"40px",color:"#eeeeee"}}),s.a.createElement(u.a,{content:t,trigger:"hover",placement:"top"},s.a.createElement(m.a,{className:"icon",type:"wechat",style:{fontSize:"40px",color:"#eeeeee"}})))}}]),t}(o.Component)),b=(a(206),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("abg_container"),t=document.getElementById("abg_text_container");window.addEventListener("scroll",function(){var a=100-window.scrollY/10;e.style.width=a+"%",console.log(a),e.style.opacity=a/150,t.style.opacity=a>90?1:a/120})}},{key:"render",value:function(){var e=this.props,t=e.bg_url,a=e.text_url;return s.a.createElement("div",{className:"abg_body"},s.a.createElement("div",{className:"abg_container",id:"abg_container"},s.a.createElement("img",{src:t})),s.a.createElement("div",{className:"abg_title_container",id:"abg_text_container"},s.a.createElement("img",{src:a})))}}]),t}(o.Component)),y=(a(228),a(227));a(210);function f(e){var t=e.title,a=e.date,n=e.link;return s.a.createElement("div",{className:"newsItem"},s.a.createElement("a",{href:n,target:"_blank"},s.a.createElement(m.a,{type:"caret-down",style:{color:"#444a",fontSize:"16px"}}),s.a.createElement("div",{className:"news-title"},t)),s.a.createElement("div",{className:"news-date"},a))}var v=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).onChange=function(e){a.setState({currentPage:e})};var c=e.newsList;return a.state={newsList:c,currentPage:1,pageSize:6},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentPage,a=e.newsList,n=e.pageSize,c=a.slice(n*(t-1),n*t);return s.a.createElement("div",{className:"newsSection"},c.map(function(e){return s.a.createElement(f,{title:e.title,date:e.date,link:e.link})}),s.a.createElement(y.a,{size:"small",className:"page",current:t,pageSize:n,defaultCurrent:1,onChange:this.onChange,total:a.length}))}}]),t}(o.Component),E=(a(222),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"picture-section"},s.a.createElement("div",null,"allalalalalal"))}}]),t}(o.Component)),h=(a(223),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.type;return s.a.createElement("div",{className:"ry-body",id:"ry-body"},s.a.createElement(b,{bg_url:d.e[e],text_url:d.f[e]}),s.a.createElement("div",{className:"split"},"\u2014 ","studio"===e?"\u5f53\u524d\u6d3b\u52a8":"\u65b0\u95fb\u8d44\u8baf"," \u2014"),"studio"===e&&s.a.createElement("div",{className:"split"},"\u2014 \u4ee5\u5f80\u6d3b\u52a8 \u2014"),"studio"===e&&s.a.createElement(E,null),s.a.createElement(v,{newsList:[{title:"1\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"2\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"3\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"4\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"5\u8fb9\u8001\u5e08\u53bb\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"6\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8fb9\u8001\u5e08\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"5\u8fb9\u8001\u5e08\u53bb\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"6\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8fb9\u8001\u5e08\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"7\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"8\u8fb9\u8001\u5e08\u53bb\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""},{title:"9\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8fb9\u8001\u5e08\u8001\u5e08\u53bb\u8377\u5170\u5566\u8fb9\u8001\u5e08\u53bb\u8377\u5170\u5566",date:"2019.4.12",link:""}]}),s.a.createElement(p,null))}}]),t}(o.Component));a.d(t,"default",function(){return g});var g=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.match.params.type;return console.log(e),"studio"===e?s.a.createElement(h,{type:"studio",className:"ry-body"}):"nation"===e?s.a.createElement(h,{type:"nation",className:"ry-body"}):"abroad"===e?s.a.createElement(h,{type:"abroad",className:"ry-body"}):void 0}}]),t}(o.Component)}}]);
//# sourceMappingURL=6.93ffee48.chunk.js.map