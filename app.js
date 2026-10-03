// ---------- Product cards ----------
let uid=0;
function art(k,d=0){const i='g'+(uid++),G=(a,b)=>`<defs><radialGradient id="${i}" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient></defs>`;
const L=(x,y,r=0)=>`<path class="lf" d="M0 0C8-12 22-12 28 0C20 8 8 8 0 0Z" fill="#3a9d5d" transform="translate(${x} ${y}) rotate(${r})"/>`;
const hl=(x,y)=>`<ellipse class="sp" cx="${x}" cy="${y}" rx="6" ry="3" fill="#fff" opacity=".6" transform="rotate(-35 ${x} ${y})"/>`;
let b='';
if(k=='orange')b=G('#ffb347','#ee6200')+`<circle cx="50" cy="56" r="34" fill="url(#${i})"/><circle cx="50" cy="56" r="34" fill="none" stroke="#fff" opacity=".12" stroke-dasharray="1 3"/>`+L(48,24,-20)+hl(36,40);
if(k=='strawberry'){b=G('#ff6a7c','#bd1030')+`<path d="M50 92C20 72 16 40 34 33C44 29 56 29 66 33C84 40 80 72 50 92Z" fill="url(#${i})"/>`;for(let j=0;j<14;j++)b+=`<ellipse cx="${34+(j*13)%32}" cy="${42+(j*7)%38}" rx="1.6" ry="2.4" fill="#ffe08a"/>`;b+=`<path class="lf" d="M30 34L42 22L50 31L58 22L70 34L50 40Z" fill="#3a9d5d" style="transform-origin:50% 100%"/>`+hl(38,46)}
if(k=='mango')b=G('#ffd84a','#ff7a2a')+`<path d="M24 56C18 30 50 14 73 27C92 40 82 82 53 88C35 92 28 76 24 56Z" fill="url(#${i})"/><path d="M60 30C80 38 80 70 56 86C78 78 90 50 60 30Z" fill="#e8344a" opacity=".35"/>`+L(48,22,-30)+hl(40,40);
if(k=='grapes'){b=G('#a15bd0','#4a1a72');[[30,40],[50,40],[70,40],[40,56],[60,56],[50,72],[36,28],[64,28],[50,26]].forEach(c=>b+=`<circle cx="${c[0]}" cy="${c[1]+4}" r="11" fill="url(#${i})"/>`);b+=`<path d="M50 20V8" stroke="#5a3a22" stroke-width="4" stroke-linecap="round"/>`+L(52,14,-10)+hl(32,38)}
if(k=='lemon')b=G('#fff58a','#f0b800')+`<g transform="rotate(-20 50 55)"><ellipse cx="50" cy="55" rx="38" ry="28" fill="url(#${i})"/><circle cx="12" cy="55" r="5" fill="#f0b800"/><circle cx="88" cy="55" r="5" fill="#f0b800"/></g>`+L(52,28,10)+hl(36,44);
if(k=='apple')b=G('#ff7676','#a80f28')+`<path d="M50 30C30 18 12 35 16 58C20 80 38 92 50 86C62 92 80 80 84 58C88 35 70 18 50 30Z" fill="url(#${i})"/><path d="M50 30C50 20 52 14 56 8" stroke="#5a3a22" stroke-width="4" stroke-linecap="round" fill="none"/>`+L(54,20,-10)+hl(30,46);
if(k=='banana')b=G('#fff08a','#f2b800')+`<path d="M20 26C24 72 58 92 90 70C92 64 86 62 80 65C58 76 40 62 36 26Z" fill="url(#${i})"/><path d="M20 26L36 26L36 20L22 18Z" fill="#6b4a22"/><circle cx="89" cy="68" r="3.5" fill="#5a3a22"/>`+hl(40,52);
if(k=='watermelon')b=G('#ff7a85','#d3142e')+`<path d="M8 38A42 42 0 0 0 92 38Z" fill="#2f7d4f"/><path d="M13 38A37 37 0 0 0 87 38Z" fill="#e9f7d0"/><path d="M17 38A33 33 0 0 0 83 38Z" fill="url(#${i})"/>`+[[32,48],[46,58],[60,48],[50,44],[70,42],[38,42]].map(c=>`<ellipse cx="${c[0]}" cy="${c[1]}" rx="2" ry="3.2" fill="#222"/>`).join('')+hl(28,44);
return `<svg class="art" viewBox="0 0 100 100" style="animation-delay:${d*.5}s">${b}</svg>`}
const KS=['orange','banana','apple','watermelon','mango','strawberry','grapes','lemon'];
document.getElementById('track').innerHTML=[...KS,...KS].map((k,j)=>art(k,j)).join('');
const items=[["orange","Oranges","Sweet & juicy","KSh 10","each"],["banana","Bananas","Ripe & creamy","KSh 10","each"],["apple","Red Apples","Crisp","KSh 40","each"],["watermelon","Watermelon","Chilled slice","KSh 20","quarter"],["mango","Mangoes","Buttery soft","KSh 30","each"],["lemon","Lemons","Bright & zesty","KSh 10","each"],["strawberry","Strawberries","Sun-ripened","KSh 150","punnet"],["grapes","Black Grapes","Seedless","KSh 100","bunch"]];
const grid=document.getElementById('grid');let n=0;
items.forEach(f=>{const d=document.createElement('div');d.className='card rv';
d.innerHTML=`<span class="emo">${art(f[0],uid)}</span><h3>${f[1]}</h3><small>${f[2]} · per ${f[4]}</small><div class="foot"><span class="price">${f[3]}</span><button class="add">Add +</button></div>`;
d.querySelector('.add').onclick=()=>{document.getElementById('cc').textContent=++n};
d.addEventListener('mousemove',e=>{const r=d.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;d.style.transform=`rotateY(${x*18}deg) rotateX(${-y*18}deg)`});
d.addEventListener('mouseleave',()=>d.style.transform='');grid.appendChild(d)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

// ---------- 3D scene ----------
try{
const cv=document.getElementById('gl');
const R=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(40,1,.1,100);C.position.z=10;
S.add(new THREE.AmbientLight(0xffffff,.75));
const dl=new THREE.DirectionalLight(0xffffff,1.1);dl.position.set(3,5,6);S.add(dl);
const pl=new THREE.PointLight(0xffaa55,.8);pl.position.set(-5,-2,4);S.add(pl);
const P=(g,c,r=.5)=>new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:c,roughness:r}));
const Sp=(r=1)=>new THREE.SphereGeometry(r,40,40);
const leaf=(x,y,z,ry)=>{const l=P(Sp(.3),0x3a9d5d,.6);l.scale.set(1.8,.1,.8);l.position.set(x,y,z);l.rotation.y=ry;l.rotation.z=.4;return l};
function orange(){const g=new THREE.Group();g.add(P(Sp(),0xff8a1f,.8));g.add(leaf(.3,.98,0,0));const s=P(Sp(.07),0x3b5d2a);s.position.y=1;g.add(s);return g}
function apple(){const g=new THREE.Group(),b=P(Sp(),0xd7263d,.3);b.scale.y=.92;g.add(b);const s=P(new THREE.CylinderGeometry(.04,.05,.4),0x5a3a22);s.position.y=1;s.rotation.z=.2;g.add(s);g.add(leaf(.35,1.1,0,.3));return g}
function lemon(){const g=new THREE.Group(),b=P(Sp(),0xffd93b,.55);b.scale.set(1.25,.9,.9);g.add(b);[-1,1].forEach(d=>{const t=P(Sp(.13),0xf2c200);t.position.x=d*1.22;g.add(t)});g.add(leaf(0,.88,0,0));return g}
function berry(){const g=new THREE.Group(),geo=Sp();const p=geo.attributes.position;
for(let i=0;i<p.count;i++){const f=.4+.6*((p.getY(i)+1)/2);p.setX(i,p.getX(i)*f);p.setZ(i,p.getZ(i)*f)}geo.computeVertexNormals();
const b=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:0xe5233d,roughness:.35}));b.scale.y=1.15;g.add(b);
const sg=Sp(.05);for(let i=0;i<34;i++){const a=i*2.4,y=-.85+1.6*(i/34),r=Math.sqrt(1-y*y)*(.4+.6*((y+1)/2))*1.01;const s=P(sg,0xffe08a);s.position.set(Math.cos(a)*r,y*1.15,Math.sin(a)*r);g.add(s)}
for(let i=0;i<5;i++){g.add(leaf(Math.cos(i*1.256)*.3,1.2,Math.sin(i*1.256)*.3,-i*1.256))}return g}
function grapes(){const g=new THREE.Group(),sg=Sp(.38);let k=0;for(let r=0;r<4;r++)for(let i=0;i<4-r;i++){const m=P(sg,0x6a2c91,.25);m.position.set((i-(3-r)/2)*.7+(k%2)*.05,r*.62-.6,(r%2)*.2-.1);g.add(m);k++}
const s=P(new THREE.CylinderGeometry(.04,.04,.5),0x5a3a22);s.position.y=1.5;g.add(s);g.add(leaf(.3,1.5,0,.2));return g}

const root=new THREE.Group();S.add(root);
const cfg=[[orange(),1.9,-.2,0,1.5],[apple(),-3.6,1.6,-1,.85],[lemon(),4.2,-1.9,-.5,.7],[berry(),-3,-1.9,.5,.8],[grapes(),3.8,2.1,-1.5,.65]];
const objs=cfg.map(([m,x,y,z,s],i)=>{m.scale.setScalar(s);m.position.set(x,y,z);root.add(m);return{m,y,i}});
let mx=0,my=0,sy=0;
addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
addEventListener('scroll',()=>sy=scrollY,{passive:true});
function size(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix();const k=w<760;root.scale.setScalar(k?.62:1);root.position.x=k?-.2:0;root.userData.by=k?-1.5:0}
addEventListener('resize',size);size();
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
(function loop(t){t*=.001;
objs.forEach(({m,y,i})=>{m.position.y=y+Math.sin(t*1.1+i*1.7)*.22;if(!still){m.rotation.y+=.008+i*.002;m.rotation.x=Math.sin(t*.6+i)*.18}});
const p=Math.min(sy/innerHeight,1);
root.rotation.y+=((mx*.5+sy*.002)-root.rotation.y)*.05;root.rotation.x+=((my*.25)-root.rotation.x)*.05;
root.position.y=root.userData.by+p*1.5;C.position.z=10+p*3;
cv.style.opacity=Math.max(.18,1-p*.85);
R.render(S,C);requestAnimationFrame(loop)})(0);
}catch(e){console.warn('3D unavailable',e)}
