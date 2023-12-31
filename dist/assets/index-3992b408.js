(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let a=[];const l=document.querySelector("form"),c=l.querySelector('input[name="pokemonName"]');l.addEventListener("submit",o=>{o.preventDefault(),console.log(c.value),u(c.value.toLowerCase()),c.value=""});async function u(o){try{let r="https://pokeapi.co/api/v2/pokemon/"+o;const e=await(await fetch(r)).json();a.push(e),d()}catch(i){console.log(i.error)}}function d(){const o=document.createElement("div");o.className="visible h-full p-4 m-5 border-2 border-white border-solid infoPokemon",a.forEach((r,n)=>{let e="";r.types.forEach(t=>{e=t.type.name}),o.innerHTML=`
        <img src="${r.sprites.front_default}" alt="" id="sprite" class="m-auto">
        <h1 id="name" class="text-center text-white text-xl">${r.name.charAt(0).toUpperCase()+r.name.slice(1)} - Nº ${r.order}</h1>
        <div class="items-center">
          <ul class="text-white gap-2">
            <li id="height">Altura: ${r.height} cm</li>
            <li id="weight">Peso: ${r.weight} </li>
            <li id="type">Tipo: ${e}</li>
          </ul>
        </div>
  `}),document.querySelector(".pokemon_card").appendChild(o)}
