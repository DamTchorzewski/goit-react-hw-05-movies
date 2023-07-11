import{r as m,c as l,Q as _,j as e,a as x}from"./index-51b8e8f6.js";import{u as p,A as u}from"./api-4db73f6a.js";const d="_reviewsList_16uiz_1",h="_reviewsItem_16uiz_8",N="_reviewsName_16uiz_15",R="_reviewsNameText_16uiz_19",g="_reviewsRating_16uiz_23",j="_reviewsRatingText_16uiz_27",T="_reviewsDescription_16uiz_31",f="_noReviews_16uiz_35",s={reviewsList:d,reviewsItem:h,reviewsName:N,reviewsNameText:R,reviewsRating:g,reviewsRatingText:j,reviewsDescription:T,noReviews:f},D=()=>{const[r,t]=m.useState([]),[a,n]=p(!0),{id:o}=l();return m.useEffect(()=>{(async()=>{try{const i=await u.getMovieReviews(o);t(i)}catch(i){console.error(i.stack),_.error("Ups, something went wrong 🙁")}finally{n(!1)}})()},[t,n,o]),e.jsxs(e.Fragment,{children:[r.length>0&&e.jsx("ul",{className:s.reviewsList,children:r.map(({id:i,author_details:{name:c,rating:w},content:v})=>e.jsxs("li",{className:s.reviewsItem,children:[e.jsxs("p",{className:s.reviewsName,children:[e.jsx("span",{className:s.reviewsNameText,children:"Author:"})," ",c||"Unknown"]}),e.jsxs("p",{className:s.reviewsRating,children:[e.jsx("span",{className:s.reviewsRatingText,children:"Rating:"})," ",w?`${w}/10`:"Unknown"]}),e.jsxs("p",{children:[e.jsx("span",{className:s.reviewsDescription,children:"Description:"})," ",v||"No description"]})]},i))}),!r.length&&!a&&e.jsx("p",{className:s.noReviews,children:"There is no reviews for this movie"}),e.jsx(x,{isLoading:a})]})};export{D as default};