"use strict";(self.webpackChunkreact_bookshelf=self.webpackChunkreact_bookshelf||[]).push([[642],{2642:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}});var n,a=r(5861),s=r(9439),o=r(4687),l=r.n(o),i=r(1243),c=function(){var e=(0,a.Z)(l().mark((function e(t){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://books-backend.p.goit.global/books/category-list",{signal:t.signal});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(l().mark((function e(t,r){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("All categories"!==t){e.next=5;break}return e.next=3,i.Z.get("https://books-backend.p.goit.global/books/top-books",{signal:r.signal});case 3:case 7:return n=e.sent,e.abrupt("return",n.data);case 5:return e.next=7,i.Z.get("https://books-backend.p.goit.global/books/category?category=".concat(t),{signal:r.signal});case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=r(3433),f=r(2791),d=r(3733),u=r(184),g=function(e){var t=e.category,r=e.setCategory,n=e.id,a=e.active,s=e.setIsActiveIndex;return(0,u.jsx)("li",{onClick:function(e){s(n),r(e.currentTarget.textContent)},className:(0,d.Z)("hover:text-[#4F2EE8] dark:hover:text-[#EAC645] cursor-pointer transition-all text-[16px] leading-[1.33] tracking-[-0.36px] ",{"text-[#4F2EE8] dark:text-[#EAC645] uppercase":a,"dark:text-[#ffffff99]":!a}),children:t.list_name})},m=r(3402),h=function(e){var t=e.setCategory,r=e.activeIndex,n=e.setActiveIndex,o=(0,f.useState)([]),i=(0,s.Z)(o,2),x=i[0],d=i[1];return(0,f.useEffect)((function(){var e=new AbortController;function t(){return(t=(0,a.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c(e);case 3:(r=t.sent).sort((function(e,t){var r=e.list_name.toUpperCase(),n=t.list_name.toUpperCase();return r<n?-1:r>n?1:0})),d([{list_name:"All categories"}].concat((0,p.Z)(r))),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code){t.next=12;break}return t.abrupt("return");case 12:m.Am.error("Opps! Something wrong happened. Please try reloading the page.");case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[]),(0,u.jsx)("ul",{className:"flex flex-col w-[307px] md:w-[309px] gap-[24px] h-[228px] md:h-[472px] overflow-y-scroll",children:(0,p.Z)(x).map((function(e,a){return(0,u.jsx)(g,{setCategory:t,setIsActiveIndex:n,category:e,id:a+1,active:a+1===r},a+1)}))})},k=r(8820),b=r(71),w=r(8014),v=r(288),j=r(3842),N=function(e){var t=e.onClose,r=e.bookInfo,n=e.open,a=e.setModalIsOpen,o=(0,f.useState)(!1),l=(0,s.Z)(o,2),i=l[0],c=l[1],x=(0,f.useContext)(j.N).theme,d=r._id,g=r.author,m=r.book_image,h=r.description,N=r.buy_links,y=r.title;(0,f.useEffect)((function(){c(!1);var e=localStorage.getItem("books");e?JSON.parse(e).forEach((function(e){e._id===d&&c(!0)})):localStorage.setItem("books",JSON.stringify([]))}),[d,x]);return(0,u.jsx)(u.Fragment,{children:Object.keys(r).length?(0,u.jsx)(v.Z,{sx:{"& .css-1t1j96h-MuiPaper-root-MuiDialog-paper":{borderColor:"#111",borderRadius:"18px",borderWidth:"2px"}},onClose:t,open:n,children:(0,u.jsxs)("div",{className:"dark:bg-[#202024] py-10 px-6 flex flex-col justify-center items-center relative",children:[(0,u.jsx)(k.oHP,{onClick:function(){a(!1)},size:24,className:"fill-black dark:fill-white absolute top-3 md:top-6 right-3 md:right-6 cursor-pointer"}),(0,u.jsxs)("div",{className:"flex flex-col md:flex-row gap-6 mb-10",children:[(0,u.jsx)("div",{className:"w-[287px] h-[408px] self-center md:w-[192px] md:h-[281px]",children:(0,u.jsx)("img",{className:"rounded-lg h-full w-full block",src:m,alt:y})}),(0,u.jsxs)("div",{className:"flex flex-col w-[287px]",children:[(0,u.jsx)("h3",{className:"text-[#111] dark:text-[#fff] text-[16px] md:text-[24px] font-bold tracking-[-0.64px] md:tracking-[-0.96px] leading-[1.12] md:leading-[1.16] w-[262px] mb-2",children:y}),(0,u.jsx)("p",{className:"text-[#B4AFAF] text-[12px] italic leading-[1.16] md:leading-[1.28] tracking-[-0.48px] md:tracking-[-0.56px] mb-5 w-fit",children:g}),(0,u.jsx)("p",{className:"w-[287px] md:w-[279px] max-h-[70px] overflow-y-auto text-[#111] dark:text-[#fff] text-[14px] leading-[1.28] tracking-[-0.56px] mb-5",children:h||"Sorry, currently there is no description for that book."}),(0,u.jsxs)("ul",{className:"flex justify-center w-fit gap-[8px] md:gap-[16px] lg:gap-[20px]",children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:N[0].url,target:"_blank",rel:"noreferrer noopener",children:(0,u.jsx)(k.iwp,{className:"w-[16px] md:w-[28px] lg:w-[32px] h-[16px] md:h-[28px] lg:h-[32px]",fill:"".concat("dark"===x?"#fff":"#111")})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:N[1].url,target:"_blank",rel:"noreferrer noopener",children:(0,u.jsx)(b.dbK,{className:"w-[16px] md:w-[28px] lg:w-[32px] h-[16px] md:h-[28px] lg:h-[32px] self-end",fill:"".concat("dark"===x?"#fff":"#111")})})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:N[2].url,target:"_blank",rel:"noreferrer noopener",children:(0,u.jsx)(w.xCL,{className:"w-[16px] md:w-[28px] lg:w-[32px] h-[16px] md:h-[28px] lg:h-[32px]",fill:"".concat("dark"===x?"#fff":"#111")})})})]})]})]}),i?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{className:"border-2 py-[14px] px-7 w-fit md:w-[500px] border-[#4F2EE8] rounded-[40px] uppercase  hover:text-[#fff] hover:bg-[#4F2EE8] ease-in duration-200 mb-2 flex justify-center items-center",value:JSON.stringify(r),onClick:function(e){var t=JSON.parse(e.currentTarget.value),r=(0,p.Z)(JSON.parse(localStorage.getItem("books")));localStorage.setItem("books",JSON.stringify(r.filter((function(e){return e._id!==t._id})))),c(!1)},children:(0,u.jsx)("span",{className:"block text-[#111] dark:text-[#fff] text-[14px] md:text-[18px] font-bold leading-[1.28] md:leading-[1.33] tracking-[-0.14px] md:tracking-[-0.18px] w-fit whitespace-nowrap uppercase",children:"Remove from shopping lists"})}),(0,u.jsx)("p",{className:"text-[#11111180] dark:text-[#ffffff80]  text-center text-[12px] tracking-[-0.48px] leading-[1.16] w-[242px] md:w-[324px]",children:"\u0421ongratulations! You have added the book to the shopping list. To delete, press the button \u201cRemove from the shopping list\u201d."})]}):(0,u.jsx)("button",{className:"border-2 py-[14px] px-7 w-fit md:w-[500px] border-[#4F2EE8] rounded-[40px] uppercase  hover:text-[#fff] hover:bg-[#4F2EE8] ease-in duration-200 flex justify-center items-center",value:JSON.stringify(r),onClick:function(e){var t=JSON.parse(e.currentTarget.value),r=localStorage.getItem("books");if(c(!0),null===r)localStorage.setItem("books",JSON.stringify(t));else{var n=[].concat((0,p.Z)(JSON.parse(r)),[t]);localStorage.setItem("books",JSON.stringify(n))}},children:(0,u.jsx)("span",{className:"block text-[#111] dark:text-[#fff] text-[14px] font-bold leading-[1.28] tracking-[-0.14px] w-fit whitespace-nowrap uppercase",children:"Add to shopping lists"})})]})}):(0,u.jsx)(u.Fragment,{})})},y=function(e){var t=e.setModalBookInfo,r=e.openModal,n=e.books,a=void 0===n?[]:n,s=e.booksCount,o=(0,f.useMemo)((function(){return a.filter((function(e,t){return t<=s}))}),[a,s]);return(0,u.jsx)("ul",{className:"flex gap-[24px] md:gap-[25px] mb-[32px]",children:o.map((function(e){return(0,u.jsx)("li",{className:"flex flex-col w-[335px] md:w-[218px] lg:w-[180px]",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{className:"mb-[14px] h-[485px] md:h-[316px] lg:h-[256px] rounded-[8px] cursor-pointer min-w-full",src:e.book_image,alt:"",onClick:function(){r(!0),t(e)}}),(0,u.jsx)("p",{className:"text-[#111] dark:text-[#fff] text-[16px] font-bold leading-[1.12] tracking-[-0.64px] mb-[4px]  overflow-hidden text-ellipsis whitespace-nowrap",children:e.title}),(0,u.jsx)("p",{className:"text-[#B4AFAF] text-[12px] italic leading-[1.16]  overflow-hidden text-ellipsis whitespace-nowrap",children:e.author})]})},e._id)}))})},C=function(e){var t=e.setModalBookInfo,r=e.openModal,n=e.book;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"flex flex-col w-[335px] md:w-[218px] lg:w-[180px]",children:[(0,u.jsx)("img",{className:"mb-[14px] h-[485px] md:h-[316px] lg:h-[256px] rounded-[8px] cursor-pointer min-w-full",src:n.book_image,alt:n.description,onClick:function(){r(!0),t(n)}}),(0,u.jsx)("p",{className:"text-[#111] dark:text-[#fff] text-[16px] font-bold leading-[1.12] tracking-[-0.64px] mb-[4px]  overflow-hidden text-ellipsis whitespace-nowrap",children:n.title}),(0,u.jsx)("p",{className:"text-[#B4AFAF] text-[12px] italic leading-[1.16]  overflow-hidden text-ellipsis whitespace-nowrap",children:n.author})]})})},E=function(e){var t,r=e.books,a=e.currentCategory,o=e.setCategory,l=e.setActiveIndex,i=(0,f.useState)({}),c=(0,s.Z)(i,2),x=c[0],p=c[1],d=(0,f.useState)(!1),g=(0,s.Z)(d,2),m=g[0],h=g[1],k=(0,f.useState)(4),b=(0,s.Z)(k,2),w=b[0],v=b[1],j=function(){var e=window.outerWidth;v(e<767?0:e>=768&&e<1279?2:4)},E=function(){var e,t;e=j,t=250,n||(n=!0,setTimeout((function(){e(),n=!1}),t))};(0,f.useEffect)((function(){return j(),window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}}),[w]);var S=function(e){if(e){var t=e.split(" "),r=t[t.length-1];return t.splice(t.length-1,1),(0,u.jsxs)("h2",{className:"text-[#111] dark:text-[#fff] text-[48px] font-bold leading-[52px] tracking-[-1.92px] mb-[40px] self-start",children:[t.join(" ")," ",(0,u.jsx)("span",{className:"text-[#4F2EE8]",children:r})]})}};return(0,u.jsxs)(u.Fragment,{children:["All categories"===a?(0,u.jsx)(u.Fragment,{children:S("Best Sellers Book")}):(0,u.jsx)(u.Fragment,{children:S(null===(t=r[0])||void 0===t?void 0:t.list_name)}),(0,u.jsx)("ul",{className:"flex flex-col flex-wrap w-[100%] ",children:"All categories"===a?(0,u.jsx)("div",{className:"flex flex-wrap flex-col gap-y-[40px] gap-x-[24px] items-center justify-center lg:justify-start",children:r.map((function(e,t){return(0,u.jsx)("li",{className:"flex flex-wrap",children:"All categories"===a&&(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsx)("p",{className:"mb-[18px] text-[#B4AFAF] uppercase leading-[1.28] tracking-[0.42px] font-normal text-[14px]",children:e.list_name}),(0,u.jsx)(y,{setModalBookInfo:p,openModal:h,books:e.books,booksCount:w}),(0,u.jsx)("button",{onClick:function(e){o(e.currentTarget.value),l(t+2)},value:e.list_name,className:"w-fit px-[28px] py-[14px] border-[2px] border-[#4F2EE8] rounded-[40px] place-self-end  hover:bg-[#4F2EE8] text-[#111] dark:text-[#fff] leading-[1.28] tracking-[-0.14] hover:text-[#fff] transition-all",children:"See more"})]})},t)}))}):(0,u.jsx)("div",{className:"flex flex-wrap gap-y-[40px] gap-x-[24px] items-center justify-center lg:justify-start ",children:r.map((function(e,t){return(0,u.jsx)("li",{children:!e.books&&(0,u.jsx)(C,{setModalBookInfo:p,openModal:h,book:e})},t)}))})}),(0,u.jsx)(N,{onClose:function(){h(!1)},open:m,bookInfo:x,setModalIsOpen:h})]})},S=r(7325),A=function(){var e=(0,f.useState)([]),t=(0,s.Z)(e,2),r=t[0],n=t[1],o=(0,f.useState)("All categories"),i=(0,s.Z)(o,2),c=i[0],p=i[1],d=(0,f.useState)(1),g=(0,s.Z)(d,2),k=g[0],b=g[1];return(0,f.useEffect)((function(){var e=new AbortController;function t(){return(t=(0,a.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=n,t.next=4,x(c,e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 8:if(t.prev=8,t.t2=t.catch(0),"ERR_CANCELED"!==t.t2.code){t.next=12;break}return t.abrupt("return");case 12:m.Am.error("Opps! Something wrong happened. Please try reloading the page.");case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return n([]),function(){t.apply(this,arguments)}(),function(){e.abort()}}),[c]),(0,u.jsxs)("main",{className:"flex flex-col lg:flex-row lg:items-start items-center gap-[20px] md:gap-[98px] lg:gap-5 px-5 pt-10 dark:bg-[#202024]",children:[(0,u.jsxs)("div",{className:"flex flex-col md:flex-row lg:flex-col items-center gap-[40px] lg:gap-[86px]",children:[(0,u.jsx)(h,{setCategory:p,activeIndex:k,setActiveIndex:b}),(0,u.jsx)(S._,{})]}),(0,u.jsx)("div",{className:"flex flex-col items-center",children:(0,u.jsx)(E,{setCategory:p,currentCategory:c,books:r,activeIndex:k,setActiveIndex:b})})]})}}}]);
//# sourceMappingURL=642.ff7159ab.chunk.js.map