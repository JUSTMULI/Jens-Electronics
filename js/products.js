// EDIT THIS NUMBER to your confirmed business WhatsApp number (country code, no + or spaces).
const WHATSAPP_NUMBER = "254735691176";
// No prices are shown until you supply confirmed prices.
const products = [
 {name:'Button Phones',category:'Phones',icon:'📱',description:'Simple and reliable phones for everyday communication.'},
 {name:'Smartphones',category:'Phones',icon:'📲',description:'Explore smartphone options and ask about availability.'},
 {name:'Smart Televisions',category:'Televisions',icon:'📺',description:'Entertainment and streaming for your home.'},
 {name:'Digital Televisions',category:'Televisions',icon:'📺',description:'Digital TV options in different sizes.'},
 {name:'Bluetooth Speakers',category:'Audio',icon:'🔊',description:'Portable wireless speakers for your music.'},
 {name:'Woofers',category:'Audio',icon:'🎶',description:'Home audio systems with rich sound.'},
 {name:'Wireless Earbuds & Pods',category:'Audio',icon:'🎧',description:'Convenient wireless listening accessories.'},
 {name:'Phone Chargers',category:'Accessories',icon:'🔌',description:'Charging adapters for various devices.'},
 {name:'USB & Charging Cables',category:'Accessories',icon:'🔋',description:'Cables for charging and data transfer.'},
 {name:'Phone Covers',category:'Accessories',icon:'📱',description:'Protective covers for various phone models.'},
 {name:'Screen Protectors',category:'Accessories',icon:'🛡️',description:'Protect your screen against scratches.'},
 {name:'Memory Cards',category:'Accessories',icon:'💾',description:'Extra storage for compatible devices.'},
 {name:'Phone Batteries',category:'Accessories',icon:'🔋',description:'Ask about batteries for your phone model.'},
 {name:'LED Bulbs',category:'Electrical',icon:'💡',description:'Lighting solutions for home and business.'},
 {name:'Sockets & Switches',category:'Electrical',icon:'🔘',description:'Electrical installation accessories.'},
 {name:'Extension Cables',category:'Electrical',icon:'🔌',description:'Power extensions and related accessories.'},
 {name:'Electrical Cables',category:'Electrical',icon:'🧵',description:'Ask about electrical cable types and sizes.'},
 {name:'Phone Repair Services',category:'Repairs',icon:'🛠️',description:'Contact us to discuss your phone repair needs.'}
];
const grid=document.querySelector('#grid'),filters=document.querySelector('#filters'),search=document.querySelector('#search'),count=document.querySelector('#count'),empty=document.querySelector('#empty');
const categories=['All','Phones','Televisions','Audio','Accessories','Electrical','Repairs'];
let active='All';
function whatsapp(message){if(!WHATSAPP_NUMBER){alert('WhatsApp ordering needs your business number. Edit WHATSAPP_NUMBER in js/products.js, then upload the updated file to GitHub.');return;}window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');}
function render(){const term=search.value.trim().toLowerCase();const list=products.filter(p=>(active==='All'||p.category===active)&&`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(term));grid.replaceChildren();for(const p of list){const card=document.createElement('article');card.className='product';const visual=document.createElement('div');visual.className='visual';const icon=document.createElement('span');icon.className='icon';icon.textContent=p.icon;const tag=document.createElement('span');tag.className='tag';tag.textContent='Ask for price';visual.append(icon,tag);const details=document.createElement('div');details.className='details';const cat=document.createElement('span');cat.className='cat';cat.textContent=p.category;const title=document.createElement('h3');title.textContent=p.name;const desc=document.createElement('p');desc.textContent=p.description;const btn=document.createElement('button');btn.className='ask';btn.textContent='Inquire on WhatsApp →';btn.addEventListener('click',()=>whatsapp(`Hello JENS ELECTRONICS, I would like to inquire about ${p.name}. Please share the price and availability.`));details.append(cat,title,desc,btn);card.append(visual,details);grid.append(card);}count.textContent=`${list.length} product${list.length===1?'':'s'} found`;empty.hidden=list.length>0;document.querySelector('#clear').hidden=!search.value;}
for(const category of categories){const button=document.createElement('button');button.className='filter';button.textContent=category;button.addEventListener('click',()=>{active=category;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===button));render();});filters.append(button);}function selectCategory(c){active=categories.find(x=>x.toLowerCase()===c.toLowerCase())||'All';document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.textContent===active));render();}search.addEventListener('input',render);document.querySelector('#clear').addEventListener('click',()=>{search.value='';render();search.focus()});document.querySelector('#reset').addEventListener('click',()=>{search.value='';selectCategory('All')});document.querySelector('#generalInquiry').addEventListener('click',()=>whatsapp('Hello JENS ELECTRONICS, I would like to ask about a product.'));document.querySelector('#theme').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('jens-theme',document.body.classList.contains('dark')?'dark':'light')});if(localStorage.getItem('jens-theme')==='dark')document.body.classList.add('dark');selectCategory(new URLSearchParams(location.search).get('category')||'All');
