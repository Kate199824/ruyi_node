(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(174),r=a.n(n),c=a(178),l=a(175),i={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"};function s(e){if(e.status>=200&&e.status<300)return e;var t=i[e.status]||e.message,a=new Error(t);throw a.name=e.status,a.response=e,a}function o(e,t,a,n){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(r.a.mark(function e(t,a,n,l){var i,o,m;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(c.a)({},n,{method:a||"GET"}),o=t,l?i.body=JSON.stringify(n):(o=t+"?",n&&Object.keys(n).forEach(function(e){o=o+e+"="+n[e]+"&"}),o=o.substr(0,o.length-1)),i.headers={Accept:"application/json","Content-Type":"application/json; charset=utf-8"},e.next=6,fetch(o,i);case 6:m=e.sent;try{s(m)}catch(r){console.log(r)}if("DELETE"!==i.method&&204!==m.status){e.next=12;break}return e.abrupt("return",m.text());case 12:return e.abrupt("return",m.json());case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}},171:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(6),r=a(7),c=a(9),l=a(8),i=a(10),s=a(0),o=a.n(s),m=(a(172),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).onHover=function(){var e=a.props,t=e.id,n=e.handleHover;(void 0===n?function(){}:n)(t)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.yellow,n=e.id,r=a?"cover yellow-cover ":"cover";return o.a.createElement("div",{className:"magic-image",onMouseEnter:this.onHover},o.a.createElement("img",{src:t,className:"image",id:"magic_image_".concat(n)}),o.a.createElement("div",{className:r}))}}]),t}(s.Component))},172:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},221:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);a(163);var n=a(164),r=(a(57),a(28)),c=(a(170),a(173)),l=a(6),i=a(7),s=a(9),o=a(8),m=a(10),u=a(0),E=a.n(u),d=(a(190),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=window.BMap,t=new e.Map("allmap"),a=new e.Point(118.793457,32.060257),n=new e.Point(118.79557,32.059031),r=new e.Marker(a);t.addOverlay(r),t.centerAndZoom(n,100),t.setCurrentCity("\u5357\u4eac"),t.enableScrollWheelZoom(!1)}},{key:"render",value:function(){return E.a.createElement("div",null,E.a.createElement("div",{id:"allmap",style:{width:"100vw",height:"100vh"}}))}}]),t}(u.Component)),v=a(171),p=a(54);a(191);function f(e){var t=e.url,a=e.title,n=e.link;return E.a.createElement("a",{href:n,target:"_blank"},E.a.createElement("div",{className:"school_icon"},E.a.createElement("img",{src:t}),E.a.createElement("p",null,a)))}var N=Object.keys(p.f),h=N.slice(0,4),y=N.slice(4,8),b=N.slice(8,12),O=N.slice(12,16),g=Object.keys(p.M),k=g.slice(0,2),j=g.slice(2,4),w=g.slice(4,6),S=g.slice(6,8),L=Object.keys(p.t),M=L.slice(0,1),C=L.slice(1,2),x=L.slice(2,3),P=L.slice(3,4),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={group:0},setInterval(function(){var e=a.state.group;a.setState({group:0===e?1:0})},6e3),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.group,t=0===e?h:b,a=0===e?y:O,n=0===e?k:w,r=0===e?j:S,c=0===e?M:x,l=0===e?C:P;return E.a.createElement("div",{className:"schools_body"},E.a.createElement("div",{className:"title"},"\u5408\u4f5c\u7f51\u7ad9",E.a.createElement("div",{className:"en"},"COOPERATION WEBSITE")),E.a.createElement("div",{className:"main_container"},E.a.createElement("div",{className:"art"},E.a.createElement("div",{className:"oneline"},t.map(function(e){return E.a.createElement(f,{title:e,url:p.f[e].imageUrl,link:p.f[e].link})})),E.a.createElement("div",{className:"oneline"},a.map(function(e){return E.a.createElement(f,{title:e,url:p.f[e].imageUrl,link:p.f[e].link})}))),E.a.createElement("div",{className:"split"}),E.a.createElement("div",{className:"university"},E.a.createElement("div",{className:"oneline"},n.map(function(e){return E.a.createElement(f,{title:e,url:p.M[e].imageUrl,link:p.M[e].link})})),E.a.createElement("div",{className:"oneline"},r.map(function(e){return E.a.createElement(f,{title:e,url:p.M[e].imageUrl,link:p.M[e].link})}))),E.a.createElement("div",{className:"split"}),E.a.createElement("div",{className:"museum"},E.a.createElement("div",{className:"oneline"},c.map(function(e){return E.a.createElement(f,{title:e,url:p.t[e].imageUrl,link:p.t[e].link})})),E.a.createElement("div",{className:"oneline"},l.map(function(e){return E.a.createElement(f,{title:e,url:p.t[e].imageUrl,link:p.t[e].link})})))))}}]),t}(u.Component),T=(a(192),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.studentWorkList;return E.a.createElement("div",{className:"students-work"},E.a.createElement("div",{className:"sw-left-part"},E.a.createElement("img",{src:p.i})),E.a.createElement("div",{className:"sw-right-part"},E.a.createElement("div",{className:"carousel-container"},E.a.createElement(c.a,{autoplaySpeed:5e3,autoplay:!0},e.map(function(e){return E.a.createElement("div",{key:e,className:"carousel-item"},E.a.createElement("img",{src:e}))})))))}}]),t}(u.Component));a(165),a(221);a.d(t,"default",function(){return W});var W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={posterList:[],photoList:[],studentWorkList:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([Promise.resolve(p.x),Promise.resolve(p.w),Promise.resolve(p.E)]).then(function(t){var a=t[0],n=t[1],r=t[2];e.setState({posterList:a,photoList:n,studentWorkList:r})})}},{key:"render",value:function(){var e=this.state,t=e.posterList,a=e.photoList,l=e.studentWorkList,i=p.L,s=E.a.createElement("div",null,E.a.createElement("img",{src:p.z,style:{width:160}})),o=E.a.createElement("div",null,E.a.createElement("img",{src:p.N,style:{width:160}}));return E.a.createElement("div",{className:"ry-body",id:"ry-body"},E.a.createElement("div",{className:"carouselSection"},E.a.createElement(c.a,{autoplay:!0,autoplaySpeed:4e3},t.map(function(e){return E.a.createElement("img",{src:e})}))),E.a.createElement("div",{className:"introSection"},E.a.createElement("div",{className:"logo"},E.a.createElement("img",{src:p.P})),E.a.createElement("div",{className:"text"},"\u5982\u4e00\u5de5\u4f5c\u5ba4\u81f4\u529b\u4e8e\u7d20\u63cf\u9020\u578b\u57fa\u7840\u3001\u53e4\u5178\u6cb9\u753b\u4e34\u6479\u4e0e\u521b\u4f5c\u3001\u5766\u57f9\u62c9\u4e34\u6479\u4e0e\u521b\u4f5c\u7684\u7814\u7a76\u4e0e\u6559\u5b66\u3002\u9762\u5411\u5e7f\u5927\u9ad8\u4e2d\u751f\u3001\u672c\u79d1\u751f\u3001\u7814\u7a76\u751f\u3001\u9ad8\u4e2d\u7f8e\u672f\u8001\u5e08\u4ee5\u53ca\u60f3\u8981\u7814\u4e60\u9020\u578b\u57fa\u7840\u53ca\u53e4\u5178\u6cb9\u753b\u6280\u6cd5\u7684\u7231\u597d\u8005\u4eec\u3002")),E.a.createElement("div",{className:"teacherSection"},E.a.createElement(c.a,{autoplay:!0,autoplaySpeed:4e3},i.map(function(e){return E.a.createElement("img",{src:e})}))),E.a.createElement("div",{className:"studentsWorkSection"},E.a.createElement(T,{studentWorkList:l})),E.a.createElement("div",{className:"photoSection"},E.a.createElement("div",{className:"left-part"},E.a.createElement("div",{className:"photo-title"},E.a.createElement("span",{className:"yellow"},"LESSON DEMEANOR"),E.a.createElement("span",{className:"chinese"},"\u8bfe\u5802\u5185\u5916")),E.a.createElement("div",{className:"photoContainer"},E.a.createElement("div",{className:"oneline"},E.a.createElement(v.a,{url:a[0],id:1}),E.a.createElement(v.a,{url:a[1],yellow:!0,id:2}),E.a.createElement(v.a,{url:a[2],id:3}),E.a.createElement(v.a,{url:a[3],yellow:!0,id:4})),E.a.createElement("div",{className:"oneline"},E.a.createElement(v.a,{url:a[4],yellow:!0,id:5}),E.a.createElement(v.a,{url:a[5],id:6}),E.a.createElement(v.a,{url:a[6],yellow:!0,id:7}),E.a.createElement(v.a,{url:a[7],id:8})))),E.a.createElement("div",{className:"right-part"},E.a.createElement("div",{className:"title"},"CLASSROOM ATMOSPHERE",E.a.createElement("p",{className:"chinese"},"\u753b\u5ba4\u6c1b\u56f4")),E.a.createElement("div",{className:"content"},"\u91cf\u8eab\u6253\u9020\u7cbe\u54c1\u8bfe\u7a0b\uff0c\u4e13\u4e1a\u8001\u5e081\u5bf91\u8f85\u5bfc\uff0c\u7cfb\u7edf\u6388\u8bfe\u5faa\u73af\u6307\u5bfc\uff0c\u4e13\u95e8\u9762\u5411\u5de5\u4f5c\u8003\u5b66"))),E.a.createElement("div",{className:"schoolSection"},E.a.createElement(A,null)),E.a.createElement("div",{className:"mapSection"},E.a.createElement("img",{className:"logo",src:p.O}),E.a.createElement("div",{className:"text"},E.a.createElement("div",{className:"title"},"\u8054\u7cfb\u65b9\u5f0f"),E.a.createElement("div",{className:"line"}),E.a.createElement("div",{className:"section"},E.a.createElement("div",{className:"subTitle"},"\u5730\u5740:"),E.a.createElement("div",{className:"content"},"\u5357\u4eac\u5e02 \u7384\u6b66\u533a \u65b0\u8857\u53e3\u8857\u9053 \u4e39\u51e4\u8857",E.a.createElement("br",null),"\u6052\u57fa\u516c\u5bd3A\u5ea72\u5355\u51431101\u5ba4")),E.a.createElement("div",{className:"section"},E.a.createElement("div",{className:"subTitle"},"\u7535\u8bdd:"),E.a.createElement("div",{className:"content"},"025-85385300",E.a.createElement("br",null)," 136-75148-010"))),E.a.createElement("div",{className:"mapContainer"},E.a.createElement(d,null))),E.a.createElement("div",{className:"barSection"},E.a.createElement(n.a,{content:s,trigger:"hover",placement:"top"},E.a.createElement("a",{href:"https://user.qzone.qq.com/1576087369/infocenter",target:"_blank"},E.a.createElement(r.a,{className:"icon",type:"qq",style:{fontSize:"40px",color:"#eeeeee"}}))),E.a.createElement(r.a,{className:"icon",type:"weibo",style:{fontSize:"40px",color:"#eeeeee"}}),E.a.createElement(n.a,{content:o,trigger:"hover",placement:"top"},E.a.createElement(r.a,{className:"icon",type:"wechat",style:{fontSize:"40px",color:"#eeeeee"}}))))}}]),t}(u.Component)}}]);
//# sourceMappingURL=10.94f5260c.chunk.js.map