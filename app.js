const STORAGE_KEY = 'marvel-tracker-v1';

const seedItems = [
  {phase:'Phase 1',type:'Film',title:'Iron Man',year:2008,runtime:126,imdb:'https://www.imdb.com/title/tt0371746/'},
  {phase:'Phase 1',type:'Film',title:'Der unglaubliche Hulk',year:2008,runtime:112,imdb:'https://www.imdb.com/title/tt0800080/'},
  {phase:'Phase 1',type:'Film',title:'Iron Man 2',year:2010,runtime:124,imdb:'https://www.imdb.com/title/tt1228705/'},
  {phase:'Phase 1',type:'Film',title:'Thor',year:2011,runtime:115,imdb:'https://www.imdb.com/title/tt0800369/'},
  {phase:'Phase 1',type:'Film',title:'Captain America: The First Avenger',year:2011,runtime:124,imdb:'https://www.imdb.com/title/tt0458339/'},
  {phase:'Phase 1',type:'Film',title:'Marvel’s The Avengers',year:2012,runtime:143,imdb:'https://www.imdb.com/title/tt0848228/'},
  {phase:'Phase 2',type:'Film',title:'Iron Man 3',year:2013,runtime:130,imdb:'https://www.imdb.com/title/tt1300854/'},
  {phase:'Phase 2',type:'Film',title:'Thor – The Dark Kingdom',year:2013,runtime:112,imdb:'https://www.imdb.com/title/tt1981115/'},
  {phase:'Phase 2',type:'Film',title:'The Return of the First Avenger',year:2014,runtime:136,imdb:'https://www.imdb.com/title/tt1843866/'},
  {phase:'Phase 2',type:'Film',title:'Guardians of the Galaxy',year:2014,runtime:121,imdb:'https://www.imdb.com/title/tt2015381/'},
  {phase:'Phase 2',type:'Serie',title:'Daredevil Staffel 1',year:2015,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:54,imdb:'https://www.imdb.com/title/tt3322312/'},
  {phase:'Phase 2',type:'Film',title:'Avengers: Age of Ultron',year:2015,runtime:141,imdb:'https://www.imdb.com/title/tt2395427/'},
  {phase:'Phase 2',type:'Film',title:'Ant-Man',year:2015,runtime:117,imdb:'https://www.imdb.com/title/tt0478970/'},
  {phase:'Phase 2',type:'Serie',title:'Jessica Jones Staffel 1',year:2015,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:52,imdb:'https://www.imdb.com/title/tt2357547/'},
  {phase:'Phase 3',type:'Serie',title:'Daredevil Staffel 2',year:2016,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:54,imdb:'https://www.imdb.com/title/tt3322312/'},
  {phase:'Phase 3',type:'Film',title:'The First Avenger: Civil War',year:2016,runtime:147,imdb:'https://www.imdb.com/title/tt3498820/'},
  {phase:'Phase 3',type:'Serie',title:'Luke Cage Staffel 1',year:2016,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:55,imdb:'https://www.imdb.com/title/tt3322314/'},
  {phase:'Phase 3',type:'Film',title:'Doctor Strange',year:2016,runtime:115,imdb:'https://www.imdb.com/title/tt1211837/'},
  {phase:'Phase 3',type:'Serie',title:'Iron Fist Staffel 1',year:2017,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:55,imdb:'https://www.imdb.com/title/tt3322310/'},
  {phase:'Phase 3',type:'Film',title:'Guardians of the Galaxy Vol. 2',year:2017,runtime:136,imdb:'https://www.imdb.com/title/tt3896198/'},
  {phase:'Phase 3',type:'Film',title:'Spider-Man: Homecoming',year:2017,runtime:133,imdb:'https://www.imdb.com/title/tt2250912/'},
  {phase:'Phase 3',type:'Serie',title:'The Defenders',year:2017,totalEpisodes:8,watchedEpisodes:0,episodeMinutes:50,imdb:'https://www.imdb.com/title/tt4230076/'},
  {phase:'Phase 3',type:'Film',title:'Thor: Tag der Entscheidung',year:2017,runtime:130,imdb:'https://www.imdb.com/title/tt3501632/'},
  {phase:'Phase 3',type:'Serie',title:'The Punisher Staffel 1',year:2017,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:53,imdb:'https://www.imdb.com/title/tt5675620/'},
  {phase:'Phase 3',type:'Film',title:'Black Panther',year:2018,runtime:134,imdb:'https://www.imdb.com/title/tt1825683/'},
  {phase:'Phase 3',type:'Serie',title:'Jessica Jones Staffel 2',year:2018,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:52,imdb:'https://www.imdb.com/title/tt2357547/'},
  {phase:'Phase 3',type:'Film',title:'Avengers: Infinity War',year:2018,runtime:149,imdb:'https://www.imdb.com/title/tt4154756/'},
  {phase:'Phase 3',type:'Film',title:'Ant-Man and the Wasp',year:2018,runtime:118,imdb:'https://www.imdb.com/title/tt5095030/'},
  {phase:'Phase 3',type:'Serie',title:'Luke Cage Staffel 2',year:2018,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:55,imdb:'https://www.imdb.com/title/tt3322314/'},
  {phase:'Phase 3',type:'Serie',title:'Iron Fist Staffel 2',year:2018,totalEpisodes:10,watchedEpisodes:0,episodeMinutes:55,imdb:'https://www.imdb.com/title/tt3322310/'},
  {phase:'Phase 3',type:'Serie',title:'Daredevil Staffel 3',year:2018,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:54,imdb:'https://www.imdb.com/title/tt3322312/'},
  {phase:'Phase 3',type:'Serie',title:'The Punisher Staffel 2',year:2019,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:53,imdb:'https://www.imdb.com/title/tt5675620/'},
  {phase:'Phase 3',type:'Film',title:'Captain Marvel',year:2019,runtime:123,imdb:'https://www.imdb.com/title/tt4154664/'},
  {phase:'Phase 3',type:'Film',title:'Avengers: Endgame',year:2019,runtime:181,imdb:'https://www.imdb.com/title/tt4154796/'},
  {phase:'Phase 3',type:'Serie',title:'Jessica Jones Staffel 3',year:2019,totalEpisodes:13,watchedEpisodes:0,episodeMinutes:52,imdb:'https://www.imdb.com/title/tt2357547/'},
  {phase:'Phase 3',type:'Film',title:'Spider-Man: Far From Home',year:2019,runtime:129,imdb:'https://www.imdb.com/title/tt6320628/'},
  {phase:'Phase 4',type:'Serie',title:'WandaVision',year:2021,totalEpisodes:9,watchedEpisodes:0,episodeMinutes:35,imdb:'https://www.imdb.com/title/tt9140560/'},
  {phase:'Phase 4',type:'Serie',title:'The Falcon and the Winter Soldier',year:2021,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:50,imdb:'https://www.imdb.com/title/tt9208876/'},
  {phase:'Phase 4',type:'Serie',title:'Loki Staffel 1',year:2021,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:50,imdb:'https://www.imdb.com/title/tt9140554/'},
  {phase:'Phase 4',type:'Film',title:'Black Widow',year:2021,runtime:134,imdb:'https://www.imdb.com/title/tt3480822/'},
  {phase:'Phase 4',type:'Serie',title:'Marvel’s What If…? Staffel 1',year:2021,totalEpisodes:9,watchedEpisodes:0,episodeMinutes:32,imdb:'https://www.imdb.com/title/tt10168312/'},
  {phase:'Phase 4',type:'Film',title:'Shang-Chi: And the Legend of the Ten Rings',year:2021,runtime:132,imdb:'https://www.imdb.com/title/tt9376612/'},
  {phase:'Phase 4',type:'Film',title:'Eternals',year:2021,runtime:156,imdb:'https://www.imdb.com/title/tt9032400/'},
  {phase:'Phase 4',type:'Serie',title:'Hawkeye',year:2021,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:45,imdb:'https://www.imdb.com/title/tt10160804/'},
  {phase:'Phase 4',type:'Film',title:'Spider-Man: No Way Home',year:2021,runtime:148,imdb:'https://www.imdb.com/title/tt10872600/'},
  {phase:'Phase 4',type:'Serie',title:'Moon Knight',year:2022,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:48,imdb:'https://www.imdb.com/title/tt10234724/'},
  {phase:'Phase 4',type:'Film',title:'Doctor Strange in the Multiverse of Madness',year:2022,runtime:126,imdb:'https://www.imdb.com/title/tt9419884/'},
  {phase:'Phase 4',type:'Serie',title:'Ms. Marvel',year:2022,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:45,imdb:'https://www.imdb.com/title/tt10857164/'},
  {phase:'Phase 4',type:'Film',title:'Thor: Love and Thunder',year:2022,runtime:118,imdb:'https://www.imdb.com/title/tt10648342/'},
  {phase:'Phase 4',type:'Serie',title:'Ich bin Groot Staffel 1',year:2022,totalEpisodes:5,watchedEpisodes:0,episodeMinutes:5,imdb:'https://www.imdb.com/title/tt13623148/'},
  {phase:'Phase 4',type:'Serie',title:'She-Hulk: Die Anwältin',year:2022,totalEpisodes:9,watchedEpisodes:0,episodeMinutes:32,imdb:'https://www.imdb.com/title/tt10857160/'},
  {phase:'Phase 4',type:'Special',title:'Werewolf by Night',year:2022,runtime:52,imdb:'https://www.imdb.com/title/tt15318872/'},
  {phase:'Phase 4',type:'Film',title:'Black Panther: Wakanda Forever',year:2022,runtime:161,imdb:'https://www.imdb.com/title/tt9114286/'},
  {phase:'Phase 4',type:'Special',title:'Guardians of the Galaxy Holiday Special',year:2022,runtime:42,imdb:'https://www.imdb.com/title/tt13623136/'},
  {phase:'Phase 5',type:'Film',title:'Ant-Man and the Wasp: Quantumania',year:2023,runtime:124,imdb:'https://www.imdb.com/title/tt10954600/'},
  {phase:'Phase 5',type:'Film',title:'Guardians of the Galaxy Vol. 3',year:2023,runtime:150,imdb:'https://www.imdb.com/title/tt6791350/'},
  {phase:'Phase 5',type:'Serie',title:'Secret Invasion',year:2023,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:43,imdb:'https://www.imdb.com/title/tt13157618/'},
  {phase:'Phase 5',type:'Serie',title:'Ich bin Groot Staffel 2',year:2023,totalEpisodes:5,watchedEpisodes:0,episodeMinutes:5,imdb:'https://www.imdb.com/title/tt13623148/'},
  {phase:'Phase 5',type:'Serie',title:'Loki Staffel 2',year:2023,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:50,imdb:'https://www.imdb.com/title/tt9140554/'},
  {phase:'Phase 5',type:'Film',title:'The Marvels',year:2023,runtime:105,imdb:'https://www.imdb.com/title/tt10676048/'},
  {phase:'Phase 5',type:'Serie',title:'Marvel’s What If…? Staffel 2',year:2023,totalEpisodes:9,watchedEpisodes:0,episodeMinutes:32,imdb:'https://www.imdb.com/title/tt10168312/'},
  {phase:'Phase 5',type:'Serie',title:'Echo',year:2024,totalEpisodes:5,watchedEpisodes:0,episodeMinutes:40,imdb:'https://www.imdb.com/title/tt13966962/'},
  {phase:'Phase 5',type:'Film',title:'Deadpool & Wolverine',year:2024,runtime:128,imdb:'https://www.imdb.com/title/tt6263850/'},
  {phase:'Phase 5',type:'Serie',title:'Agatha All Along',year:2024,totalEpisodes:9,watchedEpisodes:0,episodeMinutes:40,imdb:'https://www.imdb.com/title/tt15571732/'},
  {phase:'Phase 5',type:'Serie',title:'Marvel’s What If…? Staffel 3',year:2024,totalEpisodes:8,watchedEpisodes:0,episodeMinutes:32,imdb:'https://www.imdb.com/title/tt10168312/'},
  {phase:'Phase 5',type:'Serie',title:'Der freundliche Spider-Man aus der Nachbarschaft',year:2025,totalEpisodes:10,watchedEpisodes:0,episodeMinutes:29,imdb:'https://www.imdb.com/title/tt16027074/'},
  {phase:'Phase 5',type:'Film',title:'Captain America: Brave New World',year:2025,runtime:118,imdb:'https://www.imdb.com/title/tt14513804/'},
  {phase:'Phase 5',type:'Serie',title:'Daredevil: Born Again Staffel 1',year:2025,totalEpisodes:9,watchedEpisodes:0,episodeMinutes:50,imdb:'https://www.imdb.com/title/tt18923754/'},
  {phase:'Phase 5',type:'Film',title:'Thunderbolts*',year:2025,runtime:127,imdb:'https://www.imdb.com/title/tt20969586/'},
  {phase:'Phase 5',type:'Serie',title:'Ironheart',year:2025,totalEpisodes:6,watchedEpisodes:0,episodeMinutes:45,imdb:'https://www.imdb.com/title/tt13623126/'},
  {phase:'Phase 6',type:'Film',title:'The Fantastic Four: First Steps',year:2025,runtime:0,imdb:'https://www.imdb.com/title/tt10676052/'},
  {phase:'Phase 6',type:'Serie',title:'Eyes of Wakanda',year:2025,totalEpisodes:4,watchedEpisodes:0,episodeMinutes:30,imdb:''},
  {phase:'Phase 6',type:'Serie',title:'Marvel Zombies',year:2025,totalEpisodes:4,watchedEpisodes:0,episodeMinutes:30,imdb:'https://www.imdb.com/title/tt16027014/'},
  {phase:'Phase 6',type:'Serie',title:'Wonder Man',year:2026,totalEpisodes:0,watchedEpisodes:0,episodeMinutes:0,imdb:'https://www.imdb.com/title/tt21066114/'},
  {phase:'Phase 6',type:'Serie',title:'Daredevil: Born Again Staffel 2',year:2026,totalEpisodes:0,watchedEpisodes:0,episodeMinutes:0,imdb:'https://www.imdb.com/title/tt18923754/'},
  {phase:'Phase 6',type:'Special',title:'The Punisher: One Last Kill',year:2026,runtime:0,imdb:''},
  {phase:'Phase 6',type:'Film',title:'Spider-Man: Brand New Day',year:2026,runtime:0,imdb:'https://www.imdb.com/title/tt22084616/'},
  {phase:'Phase 6',type:'Serie',title:'VisionQuest',year:2026,totalEpisodes:0,watchedEpisodes:0,episodeMinutes:0,imdb:''},
  {phase:'Phase 6',type:'Film',title:'Avengers: Doomsday',year:2026,runtime:0,imdb:'https://www.imdb.com/title/tt21357150/'},
  {phase:'Phase 6',type:'Film',title:'Avengers: Secret Wars',year:2027,runtime:0,imdb:'https://www.imdb.com/title/tt21361444/'},
  {phase:'Phase 7',type:'Film',title:'Unbekannter Film – 17. Februar 2028',year:2028,runtime:0,imdb:''},
  {phase:'Phase 7',type:'Film',title:'Unbekannter Film – 4. Mai 2028',year:2028,runtime:0,imdb:''},
  {phase:'Phase 7',type:'Film',title:'Unbekannter Film – 9. November 2028',year:2028,runtime:0,imdb:''},
  {phase:'Phase 7',type:'Film',title:'Unbekannter Film – 14. Dezember 2028',year:2028,runtime:0,imdb:''},
  {phase:'Geplant',type:'Film',title:'Armor Wars',year:'unbekannt',runtime:0,imdb:'https://www.imdb.com/title/tt13623128/'},
  {phase:'Geplant',type:'Film',title:'Shang-Chi 2',year:'unbekannt',runtime:0,imdb:''},
  {phase:'Geplant',type:'Film',title:'Blade',year:'unbekannt',runtime:0,imdb:'https://www.imdb.com/title/tt10671440/'},
  {phase:'Geplant',type:'Serie',title:'Nova',year:'unbekannt',totalEpisodes:0,watchedEpisodes:0,episodeMinutes:0,imdb:''},
  {phase:'Geplant',type:'Film',title:'Black Panther 3',year:'unbekannt',runtime:0,imdb:''},
  {phase:'Geplant',type:'Film',title:'X-Men-Reboot',year:'unbekannt',runtime:0,imdb:''}
].map((item, index) => ({...item, id: `mcu-${index + 1}`, done: false}));

let items = load();

function load(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(Array.isArray(saved) && saved.length) return mergeSeed(saved);
  }catch(e){}
  return seedItems;
}

function mergeSeed(saved){
  return seedItems.map(seed => ({...seed, ...(saved.find(x => x.id === seed.id) || {})}));
}

function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }
function minutesOf(item){
  if(item.type === 'Serie') return Math.max(0,(Number(item.totalEpisodes)||0) - (Number(item.watchedEpisodes)||0)) * (Number(item.episodeMinutes)||0);
  return item.done ? 0 : (Number(item.runtime)||0);
}
function totalMinutes(item){
  if(item.type === 'Serie') return (Number(item.totalEpisodes)||0) * (Number(item.episodeMinutes)||0);
  return Number(item.runtime)||0;
}
function isDone(item){
  if(item.type === 'Serie') return (Number(item.totalEpisodes)||0) > 0 && (Number(item.watchedEpisodes)||0) >= (Number(item.totalEpisodes)||0);
  return !!item.done;
}
function fmtMin(min){
  const h = Math.floor(min/60), m = min%60;
  return h ? `${h} h ${m} Min` : `${m} Min`;
}

function renderFilters(){
  const phaseFilter = document.getElementById('phaseFilter');
  const phases = [...new Set(items.map(i => i.phase))];
  phaseFilter.innerHTML = '<option value="all">Alle Phasen</option>' + phases.map(p => `<option value="${p}">${p}</option>`).join('');
}

function renderDashboard(){
  const done = items.filter(isDone).length;
  const open = items.length - done;
  const openItems = items.filter(i => !isDone(i));
  const leftMin = openItems.reduce((sum,i)=>sum+minutesOf(i),0);
  document.getElementById('doneItems').textContent = done;
  document.getElementById('leftItems').textContent = open;
  document.getElementById('leftMovies').textContent = openItems.filter(i=>i.type==='Film').length;
  document.getElementById('leftSeries').textContent = openItems.filter(i=>i.type==='Serie').length;
  document.getElementById('leftSpecials').textContent = openItems.filter(i=>i.type==='Special').length;
  document.getElementById('leftMinutes').textContent = fmtMin(leftMin);
}

function renderList(){
  const list = document.getElementById('list');
  const tpl = document.getElementById('itemTemplate');
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const phase = document.getElementById('phaseFilter').value;
  const type = document.getElementById('typeFilter').value;
  const status = document.getElementById('statusFilter').value;
  list.innerHTML = '';
  items.filter(item => {
    if(q && !`${item.title} ${item.phase} ${item.year}`.toLowerCase().includes(q)) return false;
    if(phase !== 'all' && item.phase !== phase) return false;
    if(type !== 'all' && item.type !== type) return false;
    if(status === 'open' && isDone(item)) return false;
    if(status === 'done' && !isDone(item)) return false;
    return true;
  }).forEach(item => {
    const node = tpl.content.cloneNode(true);
    const article = node.querySelector('.item');
    if(isDone(item)) article.classList.add('done');
    node.querySelector('h2').textContent = item.title;
    node.querySelector('.badges').innerHTML = `<span class="badge ${item.type}">${item.type}</span><span class="badge">${item.phase}</span>`;
    const imdbLink = item.imdb ? ` · <a href="${item.imdb}" target="_blank" rel="noopener">IMDb</a>` : '';
    const metaRuntime = item.type === 'Serie'
      ? `${item.totalEpisodes||0} Folgen · ca. ${item.episodeMinutes||0} Min/Folge · Rest: ${fmtMin(minutesOf(item))}`
      : `${item.runtime||0} Min · Rest: ${fmtMin(minutesOf(item))}`;
    node.querySelector('.meta').innerHTML = `${item.year} · ${metaRuntime}${imdbLink}`;
    const check = node.querySelector('.check input');
    check.checked = isDone(item);
    check.addEventListener('change', () => {
      if(item.type === 'Serie') item.watchedEpisodes = check.checked ? (Number(item.totalEpisodes)||0) : 0;
      else item.done = check.checked;
      save(); renderAll(false);
    });
    const progress = node.querySelector('.progress-wrap');
    if(item.type === 'Serie'){
      progress.classList.remove('hidden');
      const pct = (Number(item.totalEpisodes)||0) ? Math.min(100, Math.round((Number(item.watchedEpisodes)||0)/(Number(item.totalEpisodes)||0)*100)) : 0;
      node.querySelector('.progress-line span').style.width = `${pct}%`;
      node.querySelector('.episodes').textContent = `${item.watchedEpisodes||0}/${item.totalEpisodes||0} Folgen`;
      node.querySelector('.plus').addEventListener('click', () => { item.watchedEpisodes = Math.min(Number(item.totalEpisodes)||0, (Number(item.watchedEpisodes)||0)+1); save(); renderAll(false); });
      node.querySelector('.minus').addEventListener('click', () => { item.watchedEpisodes = Math.max(0, (Number(item.watchedEpisodes)||0)-1); save(); renderAll(false); });
    }
    const runtime = node.querySelector('.edit-runtime');
    const total = node.querySelector('.edit-total');
    const epmin = node.querySelector('.edit-epmin');
    const imdb = node.querySelector('.edit-imdb');
    runtime.value = item.runtime || 0;
    total.value = item.totalEpisodes || 0;
    epmin.value = item.episodeMinutes || 0;
    imdb.value = item.imdb || '';
    runtime.addEventListener('change', () => { item.runtime = Number(runtime.value)||0; save(); renderAll(false); });
    total.addEventListener('change', () => { item.totalEpisodes = Number(total.value)||0; item.watchedEpisodes = Math.min(item.watchedEpisodes||0,item.totalEpisodes); save(); renderAll(false); });
    epmin.addEventListener('change', () => { item.episodeMinutes = Number(epmin.value)||0; save(); renderAll(false); });
    imdb.addEventListener('change', () => { item.imdb = imdb.value.trim(); save(); renderAll(false); });
    list.appendChild(node);
  });
}

function renderAll(refreshFilters=true){
  if(refreshFilters) renderFilters();
  renderDashboard();
  renderList();
}

['searchInput','phaseFilter','typeFilter','statusFilter'].forEach(id => document.getElementById(id).addEventListener('input', () => renderList()));
document.getElementById('resetBtn').addEventListener('click', () => {
  if(confirm('Wirklich gesamten Fortschritt zurücksetzen?')){ localStorage.removeItem(STORAGE_KEY); items = seedItems; renderAll(); }
});
document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(items,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'marvel-tracker-backup.json';
  a.click();
  URL.revokeObjectURL(a.href);
});
document.getElementById('importInput').addEventListener('change', async e => {
  const file = e.target.files[0];
  if(!file) return;
  try{
    const imported = JSON.parse(await file.text());
    if(!Array.isArray(imported)) throw new Error('Kein gültiges Backup');
    items = mergeSeed(imported);
    save(); renderAll();
  }catch(err){ alert('Backup konnte nicht importiert werden.'); }
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; document.getElementById('installBtn').classList.remove('hidden'); });
document.getElementById('installBtn').addEventListener('click', async () => { if(deferredPrompt){ deferredPrompt.prompt(); deferredPrompt = null; }});

if('serviceWorker' in navigator){ window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(()=>{})); }
renderAll();
