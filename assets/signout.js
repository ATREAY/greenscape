import{initializeApp as a}from"https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";import{getAuth as u,onAuthStateChanged as l,signOut as d}from"https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const p={apiKey:"AIzaSyCScmGtQoqxNRtlophEZC8rz4LgXockpJQ",authDomain:"green-scape.firebaseapp.com",databaseURL:"https://green-scape-default-rtdb.firebaseio.com",projectId:"green-scape",storageBucket:"green-scape.appspot.com",messagingSenderId:"694859846248",appId:"1:694859846248:web:6693e554c4abc99a6061dd",measurementId:"G-LNEKQ2SE19"};a(p);const s=u(),f=document.getElementById("userSignOut"),m=async()=>{d(s).then(()=>{alert("You have signed out successfully!"),window.location.assign("index.html");var r=history.length;history.go(-r)}).catch(r=>{})};f.addEventListener("click",m);l(s,r=>{r?(userName.innerHTML=r.displayName,userEmail.innerHTML=r.email):window.location.assign("index.html")});
