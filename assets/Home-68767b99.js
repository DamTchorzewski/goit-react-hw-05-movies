import{u as c,r as l,Q as v,j as e,L as u,a as x}from"./index-7832c542.js";import{u as f}from"./useMovies-93cb1cb5.js";import{u as d,A as _}from"./api-effcdab0.js";const L="_moviesList_1f3xu_1",p="_moviesItem_1f3xu_6",h="_moviesTitle_1f3xu_10",j="_title_1f3xu_19",t={moviesList:L,moviesItem:p,moviesTitle:h,title:j},y=()=>{const[a,i]=f(),[m,o]=d(),r=c();return l.useEffect(()=>{(async()=>{try{o(!0);const s=await _.getTrendingMovies();i(s)}catch(s){console.error(s.stack),v.error("Ups, something went wrong 🙁")}finally{o(!1)}})()},[i,o]),e.jsxs("section",{children:[e.jsx("h1",{className:t.title,children:"Trending today"}),e.jsx("ul",{className:t.moviesList,children:a.map(({id:s,title:n})=>e.jsx("li",{className:t.moviesItem,children:e.jsx(u,{to:`movies/${s}`,state:{from:r},className:t.moviesTitle,children:n})},s))}),e.jsx(x,{isLoading:m})]})};export{y as default};