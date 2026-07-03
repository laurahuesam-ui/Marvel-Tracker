const STORAGE_KEY = 'marvelTrackerData.v1';

const seedItems = [
  ['Phase 1','movie','Iron Man','2008',126,'https://www.imdb.com/title/tt0371746/'],
  ['Phase 1','movie','Der unglaubliche Hulk','2008',112,'https://www.imdb.com/title/tt0800080/'],
  ['Phase 1','movie','Iron Man 2','2010',124,'https://www.imdb.com/title/tt1228705/'],
  ['Phase 1','movie','Thor','2011',115,'https://www.imdb.com/title/tt0800369/'],
  ['Phase 1','movie','Captain America: The First Avenger','2011',124,'https://www.imdb.com/title/tt0458339/'],
  ['Phase 1','movie','Marvel’s The Avengers','2012',143,'https://www.imdb.com/title/tt0848228/'],
  ['Phase 2','movie','Iron Man 3','2013',130,'https://www.imdb.com/title/tt1300854/'],
  ['Phase 2','movie','Thor – The Dark Kingdom','2013',112,'https://www.imdb.com/title/tt1981115/'],
  ['Phase 2','movie','The Return of the First Avenger','2014',136,'https://www.imdb.com/title/tt1843866/'],
  ['Phase 2','movie','Guardians of the Galaxy','2014',121,'https://www.imdb.com/title/tt2015381/'],
  ['Phase 2','series','Daredevil Staffel 1','2015',54,'https://www.imdb.com/title/tt3322312/episodes/?season=1',13],
  ['Phase 2','movie','Avengers: Age of Ultron','2015',141,'https://www.imdb.com/title/tt2395427/'],
  ['Phase 2','movie','Ant-Man','2015',117,'https://www.imdb.com/title/tt0478970/'],
  ['Phase 2','series','Jessica Jones Staffel 1','2015',52,'https://www.imdb.com/title/tt2357547/episodes/?season=1',13],
  ['Phase 3','series','Daredevil Staffel 2','2016',54,'https://www.imdb.com/title/tt3322312/episodes/?season=2',13],
  ['Phase 3','movie','The First Avenger: Civil War','2016',147,'https://www.imdb.com/title/tt3498820/'],
  ['Phase 3','series','Luke Cage Staffel 1','2016',55,'https://www.imdb.com/title/tt3322314/episodes/?season=1',13],
  ['Phase 3','movie','Doctor Strange','2016',115,'https://www.imdb.com/title/tt1211837/'],
  ['Phase 3','series','Iron Fist Staffel 1','2017',55,'https://www.imdb.com/title/tt3322310/episodes/?season=1',13],
  ['Phase 3','movie','Guardians of the Galaxy Vol. 2','2017',136,'https://www.imdb.com/title/tt3896198/'],
  ['Phase 3','movie','Spider-Man: Homecoming','2017',133,'https://www.imdb.com/title/tt2250912/'],
  ['Phase 3','series','The Defenders','2017',50,'https://www.imdb.com/title/tt4230076/episodes/',8],
  ['Phase 3','movie','Thor: Tag der Entscheidung','2017',130,'https://www.imdb.com/title/tt3501632/'],
  ['Phase 3','series','The Punisher Staffel 1','2017',53,'https://www.imdb.com/title/tt5675620/episodes/?season=1',13],
  ['Phase 3','movie','Black Panther','2018',134,'https://www.imdb.com/title/tt1825683/'],
  ['Phase 3','series','Jessica Jones Staffel 2','2018',52,'https://www.imdb.com/title/tt2357547/episodes/?season=2',13],
  ['Phase 3','movie','Avengers: Infinity War','2018',149,'https://www.imdb.com/title/tt4154756/'],
  ['Phase 3','movie','Ant-Man and the Wasp','2018',118,'https://www.imdb.com/title/tt5095030/'],
  ['Phase 3','series','Luke Cage Staffel 2','2018',55,'https://www.imdb.com/title/tt3322314/episodes/?season=2',13],
  ['Phase 3','series','Iron Fist Staffel 2','2018',55,'https://www.imdb.com/title/tt3322310/episodes/?season=2',10],
  ['Phase 3','series','Daredevil Staffel 3','2018',54,'https://www.imdb.com/title/tt3322312/episodes/?season=3',13],
  ['Phase 3','series','The Punisher Staffel 2','2019',53,'https://www.imdb.com/title/tt5675620/episodes/?season=2',13],
  ['Phase 3','movie','Captain Marvel','2019',123,'https://www.imdb.com/title/tt4154664/'],
  ['Phase 3','movie','Avengers: Endgame','2019',181,'https://www.imdb.com/title/tt4154796/'],
  ['Phase 3','series','Jessica Jones Staffel 3','2019',52,'https://www.imdb.com/title/tt2357547/episodes/?season=3',13],
  ['Phase 3','movie','Spider-Man: Far From Home','2019',129,'https://www.imdb.com/title/tt6320628/'],
  ['Phase 4','series','WandaVision','2021',35,'https://www.imdb.com/title/tt9140560/episodes/',9],
  ['Phase 4','series','The Falcon and the Winter Soldier','2021',50,'https://www.imdb.com/title/tt9208876/episodes/',6],
  ['Phase 4','series','Loki Staffel 1','2021',50,'https://www.imdb.com/title/tt9140554/episodes/?season=1',6],
  ['Phase 4','movie','Black Widow','2021',134,'https://www.imdb.com/title/tt3480822/'],
  ['Phase 4','series','Marvel’s What If…? Staffel 1','2021',32,'https://www.imdb.com/title/tt10168312/episodes/?season=1',9],
  ['Phase 4','movie','Shang-Chi: And the Legend of the Ten Rings','2021',132,'https://www.imdb.com/title/tt9376612/'],
  ['Phase 4','movie','Eternals','2021',156,'https://www.imdb.com/title/tt9032400/'],
  ['Phase 4','series','Hawkeye','2021',48,'https://www.imdb.com/title/tt10160804/episodes/',6],
  ['Phase 4','movie','Spider-Man: No Way Home','2021',148,'https://www.imdb.com/title/tt10872600/'],
  ['Phase 4','series','Moon Knight','2022',47,'https://www.imdb.com/title/tt10234724/episodes/',6],
  ['Phase 4','movie','Doctor Strange in the Multiverse of Madness','2022',126,'https://www.imdb.com/title/tt9419884/'],
  ['Phase 4','series','Ms. Marvel','2022',47,'https://www.imdb.com/title/tt10857164/episodes/',6],
  ['Phase 4','movie','Thor: Love and Thunder','2022',118,'https://www.imdb.com/title/tt10648342/'],
  ['Phase 4','series','Ich bin Groot Staffel 1','2022',5,'https://www.imdb.com/title/tt13623148/episodes/?season=1',5],
  ['Phase 4','series','She-Hulk: Die Anwältin','2022',34,'https://www.imdb.com/title/tt10857160/episodes/',9],
  ['Phase 4','special','Werewolf by Night','2022',53,'https://www.imdb.com/title/tt15318872/'],
  ['Phase 4','movie','Black Panther: Wakanda Forever','2022',161,'https://www.imdb.com/title/tt9114286/'],
  ['Phase 4','special','Guardians of the Galaxy Holiday Special','2022',42,'https://www.imdb.com/title/tt13623136/'],
  ['Phase 5','movie','Ant-Man and the Wasp: Quantumania','2023',124,'https://www.imdb.com/title/tt10954600/'],
  ['Phase 5','movie','Guardians of the Galaxy Vol. 3','2023',150,'https://www.imdb.com/title/tt6791350/'],
  ['Phase 5','series','Secret Invasion','2023',47,'https://www.imdb.com/title/tt13157618/episodes/',6],
  ['Phase 5','series','Ich bin Groot Staffel 2','2023',5,'https://www.imdb.com/title/tt13623148/episodes/?season=2',5],
  ['Phase 5','series','Loki Staffel 2','2023',50,'https://www.imdb.com/title/tt9140554/episodes/?season=2',6],
  ['Phase 5','movie','The Marvels','2023',105,'https://www.imdb.com/title/tt10676048/'],
  ['Phase 5','series','Marvel’s What If…? Staffel 2','2023',32,'https://www.imdb.com/title/tt10168312/episodes/?season=2',9],
  ['Phase 5','series','Echo','2024',42,'https://www.imdb.com/title/tt13966962/episodes/',5],
  ['Phase 5','movie','Deadpool & Wolverine','2024',128,'https://www.imdb.com/title/tt6263850/'],
  ['Phase 5','series','Agatha All Along','2024',41,'https://www.imdb.com/title/tt15571732/episodes/',9],
  ['Phase 5','series','Marvel’s What If…? Staffel 3','2024',32,'https://www.imdb.com/title/tt10168312/episodes/?season=3',8],
  ['Phase 5','series','Der freundliche Spider-Man aus der Nachbarschaft','2025',29,'https://www.imdb.com/title/tt16027074/episodes/',10],
  ['Phase 5','movie','Captain America: Brave New World','2025',118,'https://www.imdb.com/title/tt14513804/'],
  ['Phase 5','series','Daredevil: Born Again Staffel 1','2025',47,'https://www.imdb.com/title/tt18923754/episodes/?season=1',9],
  ['Phase 5','movie','Thunderbolts*','2025',127,'https://www.imdb.com/title/tt20969586/'],
  ['Phase 5','series','Ironheart','2025',45,'https://www.imdb.com/title/tt13623126/episodes/',6],
  ['Phase 6','movie','The Fantastic Four: First Steps','2025',115,'https://www.imdb.com/title/tt10676052/'],
  ['Phase 6','series','Eyes of Wakanda','2025',30,'https://www.imdb.com/title/tt32695408/',4],
  ['Phase 6','series','Marvel Zombies','2025',30,'https://www.imdb.com/title/tt16027014/',4],
  ['Phase 6','series','Wonder Man','28.01.2026',0,'https://www.imdb.com/title/tt11206616/',0],
  ['Phase 6','series','Daredevil: Born Again Staffel 2','28.01.2026',0,'https://www.imdb.com/title/tt18923754/episodes/',0],
  ['Phase 6','special','The Punisher: One Last Kill','13.05.2026',0,'',0],
  ['Phase 6','movie','Spider-Man: Brand New Day','30.07.2026',0,'https://www.imdb.com/title/tt22084616/'],
  ['Phase 6','series','VisionQuest','14.10.2026',0,'https://www.imdb.com/title/tt18117932/',0],
  ['Phase 6','movie','Avengers: Doomsday','16.12.2026',0,'https://www.imdb.com/title/tt21357150/'],
  ['Phase 6','movie','Avengers: Secret Wars','15.12.2027',0,'https://www.imdb.com/title/tt21361444/'],
  ['Phase 7','movie','Unbekannter Film','17.02.2028',0,''],
  ['Phase 7','movie','Unbekannter Film','04.05.2028',0,''],
  ['Phase 7','movie','Unbekannter Film','09.11.2028',0,''],
  ['Phase 7','movie','Unbekannter Film','14.12.2028',0,''],
  ['Ohne Start','movie','Armor Wars','unbekannt',0,'https://www.imdb.com/title/tt13623128/'],
  ['Ohne Start','movie','Shang-Chi 2','unbekannt',0,''],
  ['Ohne Start','movie','Blade','unbekannt',0,'https://www.imdb.com/title/tt10671440/'],
  ['Ohne Start','series','Nova','unbekannt',0,'',0],
  ['Ohne Start','movie','Black Panther 3','unbekannt',0,''],
  ['Ohne Start','movie','X-Men-Reboot','unbekannt',0,'']
].map((r,i)=>({id:'mcu-'+String(i+1).padStart(3,'0'),order:i+1,phase:r[0],type:r[1],title:r[2],year:r[3],runtimeMin:r[4],imdbUrl:r[5]||'',episodesTotal:r[6]||0,episodesWatched:0,done:false,note:''}));

let data = load();
let editingId = null;
const $ = sel => document.querySelector(sel);
const list = $('#list');

function normalizeItem(item){
  if(!item) return item;
  if(item.title === 'Werewolf by Night' || item.title === 'Guardians of the Galaxy Holiday Special' || item.title === 'The Punisher: One Last Kill') item.type = 'special';
  item.episodesWatched = Math.max(0, Number(item.episodesWatched)||0);
  item.episodesTotal = Math.max(0, Number(item.episodesTotal)||0);
  item.runtimeMin = Math.max(0, Number(item.runtimeMin)||0);
  return item;
}
function load(){
  try { return (JSON.parse(localStorage.getItem(STORAGE_KEY)) || structuredClone(seedItems)).map(normalizeItem); }
  catch { return structuredClone(seedItems).map(normalizeItem); }
}
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function totalMinutes(item){ return item.type === 'series' ? (Number(item.runtimeMin)||0) * (Number(item.episodesTotal)||0) : (Number(item.runtimeMin)||0); }
function watchedMinutes(item){
  if(item.done) return totalMinutes(item);
  if(item.type === 'series') return (Number(item.runtimeMin)||0) * Math.min(Number(item.episodesWatched)||0, Number(item.episodesTotal)||0);
  return 0;
}
function fmtMin(min){
  min = Math.max(0, Math.round(min || 0));
  const h = Math.floor(min / 60), m = min % 60;
  return h ? `${h} h ${m} min` : `${m} min`;
}
function status(item){
  if(item.done) return 'done';
  if(item.type === 'series' && item.episodesWatched > 0) return 'started';
  return 'open';
}
function renderPhaseOptions(){
  const phases = [...new Set(data.map(i=>i.phase))];
  $('#phaseFilter').innerHTML = '<option value="all">Alle Phasen</option>' + phases.map(p=>`<option>${p}</option>`).join('');
}
function renderDashboard(items=data){
  const known = data.filter(i=>totalMinutes(i)>0);
  const total = known.reduce((s,i)=>s+totalMinutes(i),0);
  const watched = data.reduce((s,i)=>s+watchedMinutes(i),0);
  const rest = Math.max(0,total-watched);
  const openMovies = data.filter(i=>i.type==='movie' && !i.done).length;
  const openSpecials = data.filter(i=>i.type==='special' && !i.done).length;
  const openSeries = data.filter(i=>i.type==='series' && !i.done).length;
  const percent = total ? Math.round(watched/total*100) : 0;
  $('#dashboard').innerHTML = `
    <div class="stat"><b>${percent}%</b><span>Fortschritt nach Minuten</span><div class="progress"><div class="bar" style="width:${percent}%"></div></div></div>
    <div class="stat"><b>${openMovies}</b><span>Filme noch</span></div>
    <div class="stat"><b>${openSeries}</b><span>Serien/Staffeln noch</span></div>
    <div class="stat"><b>${openSpecials}</b><span>Specials noch</span></div>
    <div class="stat"><b>${fmtMin(rest)}</b><span>bekannte Restlaufzeit</span></div>`;
}
function filtered(){
  const q = $('#searchInput').value.trim().toLowerCase();
  const t = $('#typeFilter').value;
  const s = $('#statusFilter').value;
  const p = $('#phaseFilter').value;
  return data.filter(i => (!q || `${i.title} ${i.phase} ${i.year}`.toLowerCase().includes(q)) && (t==='all'||i.type===t) && (s==='all'||status(i)===s) && (p==='all'||i.phase===p));
}
function render(){
  renderDashboard();
  const items = filtered();
  let lastPhase = '';
  list.innerHTML = items.map(item => {
    const phase = item.phase !== lastPhase ? `<h2 class="phase-title">${item.phase}</h2>` : '';
    lastPhase = item.phase;
    const total = totalMinutes(item), watched = watchedMinutes(item);
    const pct = total ? Math.round(watched/total*100) : (item.done ? 100 : 0);
    const seriesControls = item.type === 'series' ? `<div class="episode-row"><span class="badge">Folgen</span><button class="episode-btn ghost" data-ep-dec="${item.id}">−1</button><strong>${item.episodesWatched}</strong><span>/ ${item.episodesTotal || '?'} · ca. ${item.runtimeMin || '?'} min/Folge</span><button class="episode-btn" data-ep-inc="${item.id}">+1 Folge</button></div>` : '';
    return `${phase}<article class="entry ${item.done ? 'done':''}">
      <div class="entry-head">
        <div class="num">${item.order}</div>
        <div>
          <div class="title-row"><h3>${escapeHtml(item.title)}</h3><span class="badge">${typeLabel(item.type)}</span><span class="badge">${item.year}</span></div>
          <p class="meta">${total ? `${fmtMin(total)} gesamt · ${fmtMin(Math.max(0,total-watched))} offen · ${pct}%` : 'Laufzeit/Folgen noch unbekannt'} ${item.imdbUrl ? `· <a href="${item.imdbUrl}" target="_blank" rel="noopener">IMDb</a>`:''}</p>
          <div class="progress"><div class="bar" style="width:${pct}%"></div></div>
          ${seriesControls}
          ${item.note ? `<p class="note">${escapeHtml(item.note)}</p>`:''}
        </div>
        <div class="controls">
          <button class="small" data-toggle="${item.id}">${item.done?'Öffnen':'Fertig'}</button>
          <button class="small ghost" data-edit="${item.id}">Bearbeiten</button>
        </div>
      </div>
    </article>`;
  }).join('') || '<p class="card" style="padding:1rem">Keine Einträge gefunden.</p>';
}
function typeLabel(type){ return type === 'series' ? 'Serie' : (type === 'special' ? 'Special' : 'Film'); }
function escapeHtml(str){ return String(str ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

['searchInput','typeFilter','statusFilter','phaseFilter'].forEach(id => $('#'+id).addEventListener('input', render));
$('#resetFilters').onclick = () => { $('#searchInput').value=''; $('#typeFilter').value='all'; $('#statusFilter').value='all'; $('#phaseFilter').value='all'; render(); };
list.addEventListener('click', e => {
  const toggle = e.target.closest('[data-toggle]');
  const edit = e.target.closest('[data-edit]');
  const inc = e.target.closest('[data-ep-inc]');
  const dec = e.target.closest('[data-ep-dec]');
  if(toggle){ const item = data.find(i=>i.id===toggle.dataset.toggle); item.done = !item.done; if(item.done && item.type==='series') item.episodesWatched = item.episodesTotal; save(); render(); }
  if(inc){ changeEpisode(inc.dataset.epInc, 1); }
  if(dec){ changeEpisode(dec.dataset.epDec, -1); }
  if(edit) openEdit(edit.dataset.edit);
});
function changeEpisode(id, delta){
  const item = data.find(i=>i.id===id);
  if(!item) return;
  const max = Number(item.episodesTotal)||999;
  item.episodesWatched = Math.max(0, Math.min(max, (Number(item.episodesWatched)||0) + delta));
  item.done = item.episodesTotal > 0 && item.episodesWatched >= item.episodesTotal;
  save();
  render();
}
function openEdit(id){
  editingId = id;
  const item = data.find(i=>i.id===id);
  const f = $('#editForm');
  f.title.value = item.title; f.year.value = item.year; f.phase.value = item.phase; f.type.value = item.type; f.runtimeMin.value = item.runtimeMin; f.episodesTotal.value = item.episodesTotal; f.episodesWatched.value = item.episodesWatched; f.imdbUrl.value = item.imdbUrl; f.note.value = item.note || '';
  $('#editDialog').showModal();
}
$('#saveEdit').addEventListener('click', e => {
  e.preventDefault();
  const item = data.find(i=>i.id===editingId); const f = $('#editForm');
  Object.assign(item,{title:f.title.value,year:f.year.value,phase:f.phase.value,type:f.type.value,runtimeMin:Number(f.runtimeMin.value)||0,episodesTotal:Number(f.episodesTotal.value)||0,episodesWatched:Number(f.episodesWatched.value)||0,imdbUrl:f.imdbUrl.value,note:f.note.value});
  item.episodesWatched = Math.min(item.episodesWatched, item.episodesTotal || item.episodesWatched);
  item.done = item.type==='series' ? (item.episodesTotal>0 && item.episodesWatched>=item.episodesTotal) : item.done;
  save(); renderPhaseOptions(); render(); $('#editDialog').close();
});
$('#exportBtn').onclick = () => {
  const blob = new Blob([JSON.stringify({exportedAt:new Date().toISOString(), data}, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `marvel-tracker-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
};
$('#importInput').onchange = async e => {
  const file = e.target.files[0]; if(!file) return;
  const parsed = JSON.parse(await file.text()); data = (Array.isArray(parsed) ? parsed : parsed.data).map(normalizeItem); save(); renderPhaseOptions(); render(); e.target.value='';
};
$('#resetSeedBtn').onclick = () => { if(confirm('Seed-Daten neu laden? Dein Fortschritt wird überschrieben.')){ data = structuredClone(seedItems).map(normalizeItem); save(); renderPhaseOptions(); render(); } };
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt=e; $('#installBtn').classList.remove('hidden'); });
$('#installBtn').onclick = async () => { if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt=null; $('#installBtn').classList.add('hidden'); } };
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
renderPhaseOptions(); render();
