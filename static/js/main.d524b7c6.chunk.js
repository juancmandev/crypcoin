(this.webpackJsonpcrypcoin=this.webpackJsonpcrypcoin||[]).push([[0],{37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),s=t(13),r=t.n(s),i=t(4),o=t(14),l=t.n(o),j=(t(37),t(38),t(0)),p=function(e){var c=e.name,t=e.image,n=e.symbol,a=e.price,s=e.marketCap,r=e.priceChange,i=e.volume;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("picture",{children:Object(j.jsx)("img",{src:t,alt:"crypto icon"})}),Object(j.jsx)("h3",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:n})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["$",a]}),Object(j.jsxs)("p",{className:"coin-volume",children:["$",i.toLocaleString()]}),r<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",s.toLocaleString()]})]})]})})};function m(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],m=r[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){console.error(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"CrypCoin"}),Object(j.jsx)("h2",{className:"coin-text",children:"Search a currency"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){m(e.target.value)}})})]}),d.map((function(e){return Object(j.jsx)(p,{name:e.name,image:e.image,symbol:e.symbol,marketCap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})}r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d524b7c6.chunk.js.map