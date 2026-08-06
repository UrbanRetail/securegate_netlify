const icons = {
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3 5 6v5c0 5 3.4 8.2 7 10 3.6-1.8 7-5 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.7 3.6-3.8"/></svg>', grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>', clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>', 'arrow-down-left':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M17 7 7 17M7 8v9h9"/></svg>', 'arrow-up-right':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M7 17 17 7M8 7h9v9"/></svg>', folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"/></svg>', settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-2.3 2.3-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V20.5h-3.2v-.2a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06-2.3-2.3.06-.06A1.65 1.65 0 0 0 6.66 15a1.65 1.65 0 0 0-1.51-1H5v-3.2h.15A1.65 1.65 0 0 0 6.66 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06 2.3-2.3.06.06A1.65 1.65 0 0 0 10.45 5a1.65 1.65 0 0 0 1-1.51V3.3h3.2v.19a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06 2.3 2.3-.06.06A1.65 1.65 0 0 0 19.44 9a1.65 1.65 0 0 0 1.51 1H21v3.2h-.05a1.65 1.65 0 0 0-1.51 1.8Z"/></svg>', 'chevron-down':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>', menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>', search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6"/><path d="m20 20-4-4"/></svg>', moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M20.4 14.2A8.3 8.3 0 0 1 9.8 3.6 8.3 8.3 0 1 0 20.4 14.2Z"/></svg>', bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>', calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>', fingerprint:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 11a2 2 0 0 1 2 2c0 3.5-.8 5.2-1.4 6.2M8.3 18.5c.8-1.6 1.2-3.3 1.2-5.5a2.5 2.5 0 0 1 5 0c0 3.1-.5 5.7-1.6 7.5M5.3 17.2c.8-1.6 1.2-3 1.2-4.7a5.5 5.5 0 0 1 11 0c0 3.3-.6 6.4-1.8 8.5M4 9.5A8 8 0 0 1 20 10c0 3.6-.4 7.4-2 10M8 5.7a8.8 8.8 0 0 1 10.5 1"/></svg>', 'log-in':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 17l5-5-5-5M15 12H3"/><path d="M13 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/></svg>', users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>', 'log-out':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m14 8 4 4-4 4M18 12H3"/><path d="M11 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6"/></svg>', package:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m21 8-9 5-9-5 9-5 9 5Z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>', truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h11v12H3zM14 9h4l3 3v5h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>', 'trending-up':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 17 6-6 4 4 7-8M14 7h6v6"/></svg>', check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 4 4L19 6"/></svg>', 'arrow-right':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>', 'user-plus':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6"/></svg>', 'more-horizontal':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/></svg>', 'user-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 11l2 2 4-4"/></svg>', 'scan-line':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/></svg>', 'clock-3':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 7v5h3"/></svg>', 'map-pin':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></svg>', camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="3"/></svg>', sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>', plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>', 'sliders-horizontal':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 7h7M15 7h5M4 17h3M11 17h9"/><circle cx="13" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>', download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg>', 'calendar-days':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/></svg>', 'file-text':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>', x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>', 'check-circle-2':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.6 2.6L16 9"/></svg>', headset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1v-4ZM20 14h-3v5h2a1 1 0 0 0 1-1v-4ZM17 19c0 1-2 2-5 2"/></svg>'
};
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icons[el.dataset.icon]||'');

let locations=[];
let users={};
let masters={vendors:[],customers:[]};
const INDIA_TIME_ZONE='Asia/Kolkata';
const state={checkedIn:false,checkIn:null,activeEntryType:'visitor',inwardType:'visitors',outwardType:'visitors',nextInwardToken:1,currentUserId:null,currentUser:null,csrfToken:null,editingEntry:null,editingUserId:null,notifications:[],inwardFilters:{dateFrom:'',dateTo:'',location:'',statuses:[]},outwardFilters:{dateFrom:'',dateTo:'',location:'',statuses:[]}};
const records={
 inward:[
  {type:'visitor',name:'Ananya Sharma',sub:'Vertex Systems',host:'Rohan Mehta · IT',reference:'VP-240711-024',time:'09:31 AM',location:'Mumbai Warehouse',status:'Inside',initials:'AS'},
  {type:'visitor',name:'Vikram Singh',sub:'Bluebird Logistics',host:'Neha Patel · Warehouse',reference:'MH 12 RD 9284',time:'09:08 AM',location:'Pune Distribution Center',status:'Inside',initials:'VS'},
  {type:'material',token:1,name:'Office supplies',sub:'Apex Trading Co.',host:'Purchase invoice: PI-MUM-7841',reference:'MH 04 KP 3321',grnNumber:'',purchaseInvoiceNumber:'PI-MUM-7841',quantity:'120',driverName:'Ramesh Kumar',driverMobile:'9876543210',time:'08:48 AM',location:'Mumbai Warehouse',status:'Pending',unloadingStartedAt:null,unloadedAt:null,grnDoneAt:null,initials:'OS'},
  {type:'visitor',name:'Priya Nair',sub:'Consultant',host:'Amit Rao · Finance',reference:'VP-240711-023',time:'08:35 AM',location:'Bengaluru Hub',status:'Inside',initials:'PN'}
 ],
 outward:[
  {type:'visitor',name:'Meera Joshi',sub:'Client visit',reference:'VP-240711-019',vehicle:'—',time:'09:20 AM',location:'Mumbai Warehouse',status:'Completed',initials:'MJ'},
  {type:'material',name:'Empty pallets',sub:'Warehouse return',reference:'GP-11832',purchaseInvoiceNumber:'OUT-PUN-11832',vehicle:'MH 12 YK 6380',time:'08:54 AM',location:'Pune Distribution Center',status:'Authorized',initials:'EP'},
  {type:'visitor',name:'Sanjay Kapoor',sub:'Vendor meeting',reference:'VP-240711-018',vehicle:'KA 03 MV 2931',time:'08:12 AM',location:'Mumbai Warehouse',status:'Completed',initials:'SK'}
 ]
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function currentUser(){ return state.currentUser||{name:'',role:'user',location:null,locationId:null}; }
function isAdmin(){ return currentUser().role==='admin'; }
function visibleRecords(data){ return isAdmin()?data:data.filter(record=>record.locationId===currentUser().locationId); }
function assignedLocation(value){ return isAdmin()?(locations.some(location=>location.id===value)?value:locations[0]?.id):currentUser().locationId; }
function renderIconMarkup(type){ return type==='material'?'<i data-icon="package"></i>':'<span>'+type.slice(0,1).toUpperCase()+'</span>'; }
function escapeHtml(value){ return String(value ?? '').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }
function formatTimestamp(value){ return value?new Date(value).toLocaleString('en-IN',{timeZone:INDIA_TIME_ZONE,day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}):'—'; }
function formatEntryDateTime(entry){return entry?.createdAt?formatTimestamp(entry.createdAt):entry?.time||'—';}
function indiaDateKey(value){ return value?new Date(value).toLocaleDateString('en-CA',{timeZone:INDIA_TIME_ZONE}):''; }
function inwardBaseRecords(){ return visibleRecords(records.inward).filter(entry=>state.inwardType==='materials'?entry.type==='material':entry.type==='visitor'); }
function outwardBaseRecords(){ return visibleRecords(records.outward).filter(entry=>state.outwardType==='materials'?entry.type==='material':entry.type==='visitor'); }
function filterTableRecords(entries,filters){return entries.filter(entry=>{const date=indiaDateKey(entry.createdAt);return(!filters.dateFrom||date>=filters.dateFrom)&&(!filters.dateTo||date<=filters.dateTo)&&(!filters.location||entry.locationId===filters.location)&&(!filters.statuses.length||filters.statuses.includes(entry.status));});}
function inwardTableRecords(){ return filterTableRecords(inwardBaseRecords(),state.inwardFilters); }
function outwardTableRecords(){ return filterTableRecords(outwardBaseRecords(),state.outwardFilters); }
function renderModuleFilters(module){
 const isInward=module==='inward',base=isInward?inwardBaseRecords():outwardBaseRecords(),filters=isInward?state.inwardFilters:state.outwardFilters,locationsForFilter=isAdmin()?locations:locations.filter(location=>location.id===currentUser().locationId),statuses=[...new Set(base.map(entry=>entry.status).filter(Boolean))].sort();
 filters.statuses=filters.statuses.filter(status=>statuses.includes(status));
 const locationFilter=$(`#${module}LocationFilter`),statusFilter=$(`#${module}StatusFilter`),dateFrom=$(`#${module}DateFrom`),dateTo=$(`#${module}DateTo`);
 if(locationFilter)locationFilter.innerHTML=`<option value="">All locations</option>${locationsForFilter.map(location=>`<option value="${escapeHtml(location.id)}"${filters.location===location.id?' selected':''}>${escapeHtml(location.name)}</option>`).join('')}`;
 if(statusFilter)statusFilter.innerHTML=statuses.map(status=>`<option value="${escapeHtml(status)}"${filters.statuses.includes(status)?' selected':''}>${escapeHtml(status)}</option>`).join('');
 if(dateFrom)dateFrom.value=filters.dateFrom;if(dateTo)dateTo.value=filters.dateTo;
}
function renderInwardFilters(){renderModuleFilters('inward');}
function renderOutwardFilters(){renderModuleFilters('outward');}
function readModuleFilters(module){const filters=module==='inward'?state.inwardFilters:state.outwardFilters,dateFrom=$(`#${module}DateFrom`),dateTo=$(`#${module}DateTo`),location=$(`#${module}LocationFilter`),status=$(`#${module}StatusFilter`);filters.dateFrom=dateFrom?.value||'';filters.dateTo=dateTo?.value||'';filters.location=location?.value||'';filters.statuses=status?[...status.selectedOptions].map(option=>option.value):[];}
const inwardStatusFlow=['Pending','Unloading in Progress','Unloaded','GRN Done'];
function statusOptions(selected){ const selectedIndex=inwardStatusFlow.indexOf(selected); return inwardStatusFlow.map((status,index)=>`<option value="${status}"${status===selected?' selected':''}${index!==selectedIndex&&index!==selectedIndex+1?' disabled':''}>${status}</option>`).join(''); }
function canAdvanceStatus(current, next){ const currentIndex=inwardStatusFlow.indexOf(current), nextIndex=inwardStatusFlow.indexOf(next); return current===next||nextIndex===currentIndex+1; }
function renderUserAccess(){
 const user=currentUser(), scope=isAdmin()?'All locations':user.location, initials=user.name.split(' ').map(part=>part[0]).join('').slice(0,2).toUpperCase();
 renderNotificationBadge();
 $('#sidebarProfileAvatar').textContent=initials;
 $('#topProfileAvatar').textContent=initials;
 $('#sidebarProfileName').textContent=user.name;
 $('#sidebarProfileRole').textContent=isAdmin()?'Administrator · All locations':`Security Guard · ${user.location}`;
 $('#topProfileName').textContent=user.name;
 $('#topProfileDetail').textContent=isAdmin()?'Administrator · All locations':`Security Guard · ${user.location}`;
 $('#dashboardGreeting').textContent=`GOOD MORNING, ${user.name.toUpperCase()}`;
 $('#dashboardScope').textContent=isAdmin()?'Admin access · Viewing all locations':`${user.location} access`;
 renderAccessOptions();
 $('#accessPreview').value=state.currentUserId||'admin';
 $('#accessScope').textContent=isAdmin()?'Admin access: data from every location is available.':`User access: ${scope} only.`;
 $$('.master-data-panel,.location-master-panel,.user-master-panel,.password-reset-panel').forEach(panel=>panel.classList.toggle('admin-only',!isAdmin()));
 renderLocationOptions();
 renderPartyLists();
 renderLocationList();
 renderUserList();
 renderPasswordResetUsers();
}
function renderAccessOptions(){ const select=$('#accessPreview'), user=currentUser(), id=state.currentUserId||'admin'; select.innerHTML=`<option value="${id}">${escapeHtml(user.name)} — ${user.role==='admin'?'All locations':escapeHtml(user.location)}</option>`; }
function renderLocationOptions(){
 const entryLocations=isAdmin()?locations:locations.filter(location=>location.id===currentUser().locationId);
 $('#entryLocation').innerHTML=entryLocations.map(location=>`<option value="${escapeHtml(location.id)}">${escapeHtml(location.name)}</option>`).join('');
 $('#userLocationSelect').innerHTML=locations.map(location=>`<option value="${escapeHtml(location.id)}">${escapeHtml(location.name)}</option>`).join('');
}
function renderPartyLists(){
 const list=(kind,target)=>$(target).innerHTML=masters[kind].map(party=>`<span class="party-chip">${escapeHtml(party.name)}${isAdmin()?`<button type="button" data-remove-party="${kind}" data-party-id="${escapeHtml(party.id)}" data-party-name="${escapeHtml(party.name)}" aria-label="Remove ${escapeHtml(party.name)}">×</button>`:''}</span>`).join('');
 list('vendors','#vendorList');list('customers','#customerList');
 setAdminControls();
}
function renderLocationList(){ $('#locationList').innerHTML=locations.map(location=>`<span class="party-chip">${escapeHtml(location.name)}${isAdmin()?`<button type="button" data-remove-location="${escapeHtml(location.id)}" data-location-name="${escapeHtml(location.name)}" aria-label="Remove ${escapeHtml(location.name)}">×</button>`:''}</span>`).join('');setAdminControls(); }
function renderUserList(){ $('#userList').innerHTML=Object.entries(users).filter(([,user])=>user.role==='user').map(([id,user])=>`<span class="party-chip">${escapeHtml(user.name)} <small>${escapeHtml(user.username)} · ${escapeHtml(user.location)}</small>${isAdmin()?`<button class="edit-user" type="button" data-edit-user="${escapeHtml(id)}">Edit</button>`:''}</span>`).join('');setAdminControls(); }
function renderPasswordResetUsers(){ $('#passwordResetUser').innerHTML=Object.entries(users).map(([id,user])=>`<option value="${id}">${escapeHtml(user.name)} (${escapeHtml(user.username)})</option>`).join('');setAdminControls(); }
function setAdminControls(){ $$('#masterDataPanel input, #masterDataPanel button, #locationMasterPanel input, #locationMasterPanel button, #userMasterPanel input, #userMasterPanel select, #userMasterPanel button, #passwordResetPanel input, #passwordResetPanel select, #passwordResetPanel button').forEach(control=>control.disabled=!isAdmin()); }
function entryEditAction(entry){ return isAdmin()&&entry.id?`<button class="edit-entry" type="button" data-edit-entry="${escapeHtml(entry.id)}">Edit</button>`:''; }
function entryDeleteAction(entry){ return isAdmin()&&entry.id?`<button class="delete-entry" type="button" data-delete-entry="${escapeHtml(entry.id)}" data-entry-name="${escapeHtml(entry.name)}">Delete</button>`:''; }
function addAdminEntryDeleteActions(){
 if(!isAdmin())return;
 const attach=(body,entries)=>body?.querySelectorAll('tr').forEach((row,index)=>{const entry=entries[index],cell=row.lastElementChild;if(entry?.id&&cell&&!cell.querySelector('[data-edit-entry]'))cell.insertAdjacentHTML('beforeend',entryEditAction(entry)+entryDeleteAction(entry));});
 const inward=inwardTableRecords();
 const outward=outwardTableRecords();
 const all=[...visibleRecords(records.inward).map(entry=>({...entry,direction:'Inward'})),...visibleRecords(records.outward).map(entry=>({...entry,direction:'Outward'}))].sort((left,right)=>right.time.localeCompare(left.time));
 attach($('#inwardBody'),inward);attach($('#outwardBody'),outward);attach($('#recordsBody'),all);
}
function renderInward(){
 const isMaterial=state.inwardType==='materials';
 renderInwardFilters();
 $('#inwardHead').innerHTML=isMaterial?'<tr><th>TOKEN NO.</th><th>VENDOR NAME</th><th>GRN NUMBER</th><th>PURCHASE INVOICE NO.</th><th>BOXES</th><th>VEHICLE / DRIVER</th><th>ENTRY DATE &amp; TIME (IST)</th><th>LOCATION</th><th>STATUS</th><th>UNLOADING STARTED AT (IST)</th><th>UNLOADED AT (IST)</th><th>GRN DONE AT (IST)</th><th></th></tr>':'<tr><th>VISITOR / VENDOR</th><th>PERSON TO MEET</th><th>PASS / VEHICLE</th><th>CHECK-IN DATE &amp; TIME (IST)</th><th>LOCATION</th><th>STATUS</th><th></th></tr>';
 const data=inwardTableRecords();
 $('#inwardBody').innerHTML=isMaterial?data.map(r=>`<tr><td><b class="token-number">${r.token}</b></td><td>${escapeHtml(r.sub)}</td><td><input class="grn-input${r.status==='GRN Done'&&!r.grnNumber?' invalid':''}" data-inward-grn="${r.token}" value="${escapeHtml(r.grnNumber||'')}" placeholder="Enter GRN number" aria-label="GRN number for token ${r.token}"${r.status==='GRN Done'?' disabled':''} /></td><td>${escapeHtml(r.purchaseInvoiceNumber||'—')}</td><td>${escapeHtml(r.quantity||'—')}</td><td><b>${escapeHtml(r.reference)}</b><small class="table-detail">${escapeHtml(r.driverName||'—')} · ${escapeHtml(r.driverMobile||'—')}</small></td><td>${escapeHtml(r.time)}</td><td>${escapeHtml(r.location)}</td><td><select class="status-select" data-inward-status="${r.token}" aria-label="Status for token ${r.token}"${r.status==='GRN Done'?' disabled':''}>${statusOptions(r.status)}</select></td><td>${formatTimestamp(r.unloadingStartedAt)}</td><td>${formatTimestamp(r.unloadedAt)}</td><td>${formatTimestamp(r.grnDoneAt)}</td><td><button class="button button-outline token-print" type="button" data-print-token="${r.token}">Print token</button></td></tr>`).join(''):data.map(r=>`<tr><td><div class="table-name"><span class="record-avatar">${r.initials}</span><span><b>${escapeHtml(r.name)}</b><small>${escapeHtml(r.sub)}</small></span></div></td><td>${escapeHtml(r.host)}</td><td>${escapeHtml(r.reference)}</td><td>${escapeHtml(r.time)}</td><td>${escapeHtml(r.location)}</td><td><span class="status-badge in">${escapeHtml(r.status)}</span></td><td><button class="row-action"><i data-icon="more-horizontal"></i></button></td></tr>`).join('');
 $('#inwardBody').querySelectorAll('tr').forEach((row,index)=>{const cell=row.cells[isMaterial?6:3];if(cell)cell.textContent=formatEntryDateTime(data[index]);});
 bindIcons();
}
function renderOutward(){
 renderOutwardFilters();
 const data=outwardTableRecords();
 $('#outwardHead').innerHTML='<tr><th>VENDOR NAME</th><th>SALE INVOICE NO.</th><th>UNIQUE TOKEN NO.</th><th>POD</th><th>VEHICLE</th><th>EXIT DATE &amp; TIME (IST)</th><th>LOCATION</th><th>STATUS</th><th></th></tr>';
 $('#outwardBody').innerHTML=data.map(r=>{const material=r.type==='material',displayName=material?r.sub:r.name,detail=material?r.name:r.sub,pod=material?`<select class="pod-select" data-outward-pod="${escapeHtml(r.id)}" aria-label="POD for token ${escapeHtml(r.outwardToken||'')}"><option value="no"${r.podReceived?'':' selected'}>No</option><option value="yes"${r.podReceived?' selected':''}>Yes</option></select>`:'—';return `<tr><td><div class="table-name"><span class="record-avatar ${material?'material':'exit'}">${material?icons.package:r.initials}</span><span><b>${escapeHtml(displayName)}</b><small>${escapeHtml(detail||'—')}</small></span></div></td><td>${escapeHtml(material?r.saleInvoiceNumber||'—':'—')}</td><td><b class="token-number">${escapeHtml(r.outwardToken||'—')}</b></td><td>${pod}</td><td>${escapeHtml(r.vehicle)}</td><td>${formatTimestamp(r.createdAt)}</td><td>${escapeHtml(r.location)}</td><td><span class="status-badge out">${escapeHtml(r.status)}</span></td><td><button class="row-action"><i data-icon="more-horizontal"></i></button></td></tr>`;}).join('');
 bindIcons();
}
function renderRecords(){ const data=[...visibleRecords(records.inward).map(x=>({...x,direction:'Inward'})),...visibleRecords(records.outward).map(x=>({...x,direction:'Outward'}))]; $('#recordsBody').innerHTML=data.sort((a,b)=>b.time.localeCompare(a.time)).map(r=>`<tr><td><span class="status-badge ${r.direction==='Inward'?'in':'out'}">${r.direction}</span></td><td><div class="table-name"><span class="record-avatar ${r.type==='material'?'material':r.direction==='Outward'?'exit':''}">${r.type==='material'?icons.package:r.initials}</span><span><b>${escapeHtml(r.name)}</b><small>${escapeHtml(r.sub)}</small></span></div></td><td>${escapeHtml(r.reference)}</td><td>${escapeHtml(r.time)}</td><td>${escapeHtml(r.location)}</td><td><span class="status-badge ${r.direction==='Inward'?'in':'out'}">${escapeHtml(r.status)}</span></td><td><button class="row-action"><i data-icon="more-horizontal"></i></button></td></tr>`).join(''); bindIcons(); }
function bindIcons(){ document.querySelectorAll('[data-icon]:empty').forEach(el=>el.innerHTML=icons[el.dataset.icon]||'');addAdminEntryDeleteActions(); }
function renderActivity(){ const activity=[...visibleRecords(records.inward).slice(0,2).map(r=>({...r,label:'Checked in'})),...visibleRecords(records.outward).slice(0,2).map(r=>({...r,label:'Checked out'}))].sort((a,b)=>b.time.localeCompare(a.time)).slice(0,4); $('#activityList').innerHTML=activity.map(r=>`<div class="activity-row"><span class="activity-icon ${r.type==='material'?'material':r.label==='Checked out'?'exit':'visitor'}"><i data-icon="${r.type==='material'?'package':r.label==='Checked out'?'log-out':'user-plus'}"></i></span><span class="activity-copy"><b>${escapeHtml(r.name)}</b><span>${r.label} · ${escapeHtml(r.reference)}</span></span><time>${escapeHtml(r.time)}</time></div>`).join('');bindIcons(); }
function updateStats(){ const inward=visibleRecords(records.inward), outward=visibleRecords(records.outward); $('#visitorsIn').textContent=String(inward.filter(r=>r.type==='visitor').length).padStart(2,'0'); $('#materialsIn').textContent=String(inward.filter(r=>r.type==='material').length).padStart(2,'0'); $('#visitorsOut').textContent=String(outward.filter(r=>r.type==='visitor').length).padStart(2,'0'); $('#materialsOut').textContent=String(outward.filter(r=>r.type==='material').length).padStart(2,'0'); }
function durationMinutes(from,to){const start=Date.parse(from||''),end=Date.parse(to||'');return Number.isFinite(start)&&Number.isFinite(end)&&end>=start?(end-start)/60000:null;}
function averageDuration(values){const valid=values.filter(value=>Number.isFinite(value));return valid.length?valid.reduce((sum,value)=>sum+value,0)/valid.length:null;}
function displayDuration(minutes){if(!Number.isFinite(minutes))return '—';const total=Math.round(minutes),hours=Math.floor(total/60),remaining=total%60;return hours?`${hours}h ${remaining}m`:`${total} min`;}
function renderLocationTurnaround(){
 const target=$('#locationTurnaround');if(!target)return;
 const materialEntries=visibleRecords(records.inward).filter(entry=>entry.type==='material');
 const scopeLocations=[...(isAdmin()?locations:locations.filter(location=>location.id===currentUser().locationId))];
 const known=new Set(scopeLocations.map(location=>location.id));
 materialEntries.forEach(entry=>{if(entry.locationId&&!known.has(entry.locationId)){scopeLocations.push({id:entry.locationId,name:entry.location||'Unknown location'});known.add(entry.locationId);}});
 if(!scopeLocations.length){target.innerHTML='<p class="turnaround-empty">No locations are available.</p>';return;}
 target.innerHTML=scopeLocations.map(location=>{
  const entries=materialEntries.filter(entry=>entry.locationId===location.id);
  const started=entries.map(entry=>durationMinutes(entry.createdAt,entry.unloadingStartedAt));
  const unloading=entries.map(entry=>durationMinutes(entry.unloadingStartedAt,entry.unloadedAt));
  const grn=entries.map(entry=>durationMinutes(entry.unloadedAt,entry.grnDoneAt));
  return `<article class="turnaround-location"><div class="turnaround-location-head"><b>${escapeHtml(location.name)}</b><small>${entries.length} material inward ${entries.length===1?'entry':'entries'}</small></div><div class="turnaround-metrics"><div><span>UNLOADING STARTED</span><strong>${displayDuration(averageDuration(started))}</strong><small>Entry to start</small></div><div><span>UNLOADING TIME</span><strong>${displayDuration(averageDuration(unloading))}</strong><small>Start to unloaded</small></div><div><span>GRN TIME</span><strong>${displayDuration(averageDuration(grn))}</strong><small>Unloaded to GRN done</small></div></div></article>`;
 }).join('');
}
function setPage(page){ $$('.page').forEach(p=>p.classList.toggle('active',p.id===page)); $$('.nav-item[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page)); $('#sidebar').classList.remove('open'); window.scrollTo({top:0,behavior:'smooth'}); }
function updateMaterialFields(direction){
 const isOutward=direction==='outward', party=$('#partyName'), parties=isOutward?masters.customers:masters.vendors;
 $('#partyLabel').textContent=isOutward?'Customer name':'Vendor name';
 $('#documentNumberLabel').textContent=isOutward?'E-way bill number':'GRN number';
 $('#documentNumber').placeholder=isOutward?'Enter E-way bill number':'Enter GRN number';
 $('#invoiceNumberLabel').textContent=isOutward?'Sale invoice number':'Purchase invoice number';
 $('#purchaseInvoiceNumber').placeholder=isOutward?'Enter sale invoice number':'Enter purchase invoice number';
 $('#podField').hidden=!isOutward;$('#podReceived').disabled=!isOutward;$('#podReceived').required=isOutward;
 party.innerHTML=`<option value="" selected disabled>Select ${isOutward?'customer':'vendor'}</option>${parties.map(party=>`<option value="${escapeHtml(party.id)}">${escapeHtml(party.name)}</option>`).join('')}`;
}
function updateEntryForm(type, direction){ const editing=state.editingEntry,isMaterial=type==='material';state.activeEntryType=type;$('#modalEyebrow').textContent=editing?'ADMIN EDIT':direction==='outward'?'GATE EXIT':'GATE ENTRY';$('#modalTitle').textContent=editing?`Edit ${isMaterial?'material':'visitor'} ${direction} entry`:isMaterial?`Material ${direction==='outward'?'outward':'inward'} entry`:direction==='outward'?'Record visitor exit':'New visitor entry';$('#entrySubmit').innerHTML=editing?icons.check+' Save changes':direction==='outward'?icons['log-out']+' Save exit record':icons['scan-line']+' Generate pass &amp; save';renderLocationOptions();updateMaterialFields(direction);$$('#modalTabs button').forEach(button=>{button.classList.toggle('active',button.dataset.form===type);button.disabled=Boolean(editing);});$$('[data-form-view]').forEach(view=>{const active=view.dataset.formView===type;view.classList.toggle('active',active);view.querySelectorAll('input, select, textarea').forEach(control=>control.disabled=!active);});}
function populateEntryEditor(entry){const form=$('#entryForm');form.elements.location.value=entry.locationId||'';if(entry.type==='visitor'){form.elements.visitorName.value=entry.name||'';form.elements.company.value=entry.sub||'';form.elements.host.value=entry.host||'';form.elements.vehicle.value=entry.vehicle==='—'?'':entry.vehicle||'';return;}form.elements.vendorName.value=entry.partyId||'';form.elements.documentNumber.value=entry.direction==='inward'?(entry.grnNumber||entry.documentNumber||''):(entry.documentNumber||'');form.elements.purchaseInvoiceNumber.value=entry.direction==='inward'?entry.purchaseInvoiceNumber||'':entry.saleInvoiceNumber||'';form.elements.quantity.value=entry.quantity||'';form.elements.materialVehicle.value=entry.vehicle==='—'?'':entry.vehicle||'';form.elements.driverName.value=entry.driverName||'';form.elements.driverMobile.value=entry.driverMobile||'';form.elements.remarks.value=entry.remarks||'';if(entry.direction==='outward')form.elements.podReceived.value=entry.podReceived?'yes':'no';}
function openModal(type='visitor', direction='inward', entry=null){state.editingEntry=entry;$('#entryForm').dataset.direction=direction;updateEntryForm(type,direction);if(entry)populateEntryEditor(entry);$('#modalBackdrop').classList.add('open');$('#modalBackdrop').setAttribute('aria-hidden','false');bindIcons();setTimeout(()=>$('#entryForm .form-view.active input, #entryForm .form-view.active select').focus(),100);}
function closeModal(){$('#modalBackdrop').classList.remove('open');$('#modalBackdrop').setAttribute('aria-hidden','true');$('#entryForm').reset();state.editingEntry=null;}
function toast(message){ $('#toastText').textContent=message; $('#toast').classList.add('show'); setTimeout(()=>$('#toast').classList.remove('show'),3200); }
function renderNotificationBadge(){const badge=$('.notification-button span');badge.hidden=state.notifications.length===0;}
function inwardNotification(message){state.notifications.unshift(message);state.notifications.splice(8);renderNotificationBadge();toast(message);}
function showNotifications(){if(!state.notifications.length){toast('No new inward notifications.');return;}toast(state.notifications[0]);state.notifications=[];renderNotificationBadge();}
function syncClock(){ const now=new Date(); $('#currentDate').textContent=now.toLocaleDateString('en-IN',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}); $('#currentTime').textContent=now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'}); if(state.checkedIn){ const dif=Math.floor((Date.now()-state.checkIn)/1000); $('#workTimer').textContent=`${String(Math.floor(dif/3600)).padStart(2,'0')}:${String(Math.floor((dif%3600)/60)).padStart(2,'0')}:${String(dif%60).padStart(2,'0')}`; } }
function markAttendance(){ if(!state.checkedIn){ state.checkedIn=true;state.checkIn=Date.now(); const time=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}); $('#attendanceStatus').textContent='Checked in'; $('#attendanceStrip .status-dot').className='status-dot present'; $('#quickCheckIn').innerHTML=icons['log-out']+' Check out'; $('#attendanceCheckAction').innerHTML=icons['log-out']+' Mark check-out'; $('#attendanceHeroHeading').textContent='Your shift is in progress'; $('#attendanceHeroNote').textContent=`Checked in at ${time} · Gate location verified`; $('#todayTimeline').innerHTML=`<div class="timeline-item"><span class="timeline-mark in">${icons['log-in']}</span><span><b>Check-in recorded</b><span>Gate 01 · GPS location verified</span></span><time>${time}</time></div>`; toast('Check-in recorded successfully'); } else { const time=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}); state.checkedIn=false; $('#attendanceStatus').textContent='Shift completed'; $('#workTimer').textContent='Complete'; $('#quickCheckIn').innerHTML=icons['log-in']+' Check in'; $('#attendanceCheckAction').innerHTML=icons['log-in']+' Mark check-in'; $('#attendanceHeroHeading').textContent='Your shift has been completed'; $('#attendanceHeroNote').textContent=`Checked out at ${time} · Great work today`; $('#todayTimeline').insertAdjacentHTML('beforeend',`<div class="timeline-item"><span class="timeline-mark out">${icons['log-out']}</span><span><b>Check-out recorded</b><span>Attendance synced securely</span></span><time>${time}</time></div>`); toast('Check-out recorded. Have a great day!'); } bindIcons(); }
function renderAttendanceHistory(){ const days=[['Today, 11 Jul','—','—','Absent'],['Thu, 10 Jul','08:56 AM','05:08 PM','Present'],['Wed, 09 Jul','09:11 AM','05:16 PM','Late'],['Tue, 08 Jul','08:51 AM','05:04 PM','Present'],['Mon, 07 Jul','08:58 AM','05:13 PM','Present'],['Sun, 06 Jul','Weekly off','—','—']]; $('#attendanceHistory').innerHTML=days.map((x,i)=>`<div class="history-row"><span><b>${x[0]}</b><span>${i===0?'Current day':'Morning shift'}</span></span><span>${x[1]}</span><span>${x[2]}</span><span class="history-status ${x[3].toLowerCase()}">${x[3]}</span></div>`).join(''); }
function exportCellValue(cell){const control=cell.querySelector('input,select,textarea');return control?(control.tagName==='SELECT'?control.options[control.selectedIndex]?.textContent||'':control.value):cell.innerText;}
function exportTable(id){const table=$('#'+id),headerCells=[...table.rows[0].cells],hasActionColumn=headerCells.at(-1)?.innerText.trim()==='',textColumns=new Set(headerCells.map((cell,index)=>/PURCHASE INVOICE|SALE INVOICE/i.test(cell.innerText)?index:-1).filter(index=>index>=0)),rows=[...table.rows].map((row,rowIndex)=>(hasActionColumn?[...row.cells].slice(0,-1):[...row.cells]).map((cell,index)=>{let value=exportCellValue(cell).replaceAll('\n',' - ');if(rowIndex>0&&textColumns.has(index))value=`\t${value}`;return '"'+value.replaceAll('"','""')+'"';}).join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+rows],{type:'text/csv;charset=utf-8'}));a.download=`securegate-${id}-${new Date().toISOString().slice(0,10)}.csv`;a.click();URL.revokeObjectURL(a.href);toast('Excel-compatible record export prepared');}
function capturePhoto(){ toast('Camera access would open here on a connected device'); }
function setupMaterialFieldValidation(){
 $('#quantity').addEventListener('input',e=>{ e.currentTarget.value=e.currentTarget.value.replace(/\D/g,''); });
 $('#purchaseInvoiceNumber').addEventListener('input',e=>{ e.currentTarget.value=e.currentTarget.value.replace(/\s/g,''); });
 $('#driverMobile').addEventListener('input',e=>{ const input=e.currentTarget; input.value=input.value.replace(/\D/g,'').slice(0,10); input.setCustomValidity(input.value&&input.value.length!==10?'Enter a 10-digit driver mobile number.':''); });
}
function legacyUpdateInwardMaterialStatus(token, status, control){
 const record=records.inward.find(item=>item.type==='material'&&item.token===token);
 if(!record||(!isAdmin()&&record.location!==currentUser().location)||record.status==='GRN Done')return;
 if(!canAdvanceStatus(record.status,status)){if(control)control.value=record.status;toast('Follow the status sequence: Pending → Unloading in Progress → Unloaded → GRN Done');return;}
 if(status==='GRN Done'&&!String(record.grnNumber||'').trim()){
  if(control)control.value=record.status;
  const grnInput=$(`[data-inward-grn="${token}"]`);
  if(grnInput){grnInput.setCustomValidity('GRN number is required before selecting GRN Done.');grnInput.reportValidity();grnInput.focus();}
  toast('Enter the GRN number before selecting GRN Done');
  return;
 }
 record.status=status;
 if(status==='Unloading in Progress'&&!record.unloadingStartedAt)record.unloadingStartedAt=new Date().toISOString();
 if(status==='Unloaded')record.unloadedAt=new Date().toISOString();
 if(status==='GRN Done')record.grnDoneAt=new Date().toISOString();
 renderInward();renderRecords();renderActivity();
 toast(status==='GRN Done'?`Token ${token} marked GRN Done and timestamp captured`:status==='Unloaded'?`Token ${token} marked unloaded and timestamp captured`:status==='Unloading in Progress'?`Token ${token} unloading timestamp captured`:`Token ${token} status updated`);
}
function legacyUpdateInwardGrn(token, value, input){
 const record=records.inward.find(item=>item.type==='material'&&item.token===token), grnNumber=String(value||'').trim();
 if(!record||(!isAdmin()&&record.location!==currentUser().location))return;
 if(record.status==='GRN Done'){input.value=record.grnNumber||'';input.setCustomValidity('GRN number cannot be changed after GRN Done.');input.reportValidity();return;}
 record.grnNumber=grnNumber;input.setCustomValidity('');renderRecords();toast(`GRN number updated for token ${token}`);
}
function printToken(token){
 const record=records.inward.find(item=>item.type==='material'&&item.token===token);
 if(!record||(!isAdmin()&&record.location!==currentUser().location))return;
 const details=[['Token number',record.token],['Vendor name',record.sub],['Location',record.location],['GRN number',record.grnNumber||'—'],['Boxes',record.quantity||'—'],['Purchase invoice number',record.purchaseInvoiceNumber],['Vehicle number',record.vehicle||record.reference],['Driver name',record.driverName||'—'],['Driver mobile',record.driverMobile||'—'],['Entry time',record.time],['Status',record.status],['Unloading started at',formatTimestamp(record.unloadingStartedAt)],['Unloaded at',formatTimestamp(record.unloadedAt)],['GRN done at',formatTimestamp(record.grnDoneAt)],['Remarks',record.remarks||'—']];
 const printWindow=window.open('','_blank','width=760,height=900');
 if(!printWindow){toast('Please allow pop-ups to print the token');return;}
 const rows=details.map(([label,value])=>`<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join('');
 printWindow.document.write(`<!doctype html><html><head><title>Token ${record.token}</title><style>body{font-family:Arial,sans-serif;color:#1d2b3d;margin:34px}header{display:flex;justify-content:space-between;border-bottom:2px solid #1767d9;padding-bottom:16px;margin-bottom:20px}h1{font-size:24px;margin:0}p{margin:5px 0;color:#607086}strong{color:#1767d9}table{width:100%;border-collapse:collapse}th,td{padding:11px 12px;border:1px solid #dce4ef;text-align:left;font-size:13px}th{width:38%;background:#f4f8fd;color:#526174}.token{display:inline-block;padding:8px 12px;background:#eaf2ff;color:#1267d9;border-radius:7px;font-weight:700}</style></head><body><header><div><h1>Material Inward Token</h1><p>SecureGate entry details</p></div><span class="token">Token #${record.token}</span></header><table>${rows}</table></body></html>`);
 printWindow.document.close();printWindow.focus();printWindow.print();
}
function refreshWorkspace(){ renderUserAccess();renderInward();renderOutward();renderRecords();renderActivity();updateStats();renderLocationTurnaround(); }
function legacySignIn(){ throw new Error('Browser-only sign-in is disabled.'); }
function legacySignOut(){ state.currentUserId=null;$('#appShell').hidden=true;$('#loginScreen').hidden=false;$('#loginPassword').value='';$('#loginId').focus(); }
function normalizeInvoice(value){ return String(value||'').trim().replace(/\s+/g,' ').toLowerCase(); }
function isDuplicateInvoice(direction, invoice){ const normalized=normalizeInvoice(invoice); return records[direction].some(record=>record.type==='material'&&normalizeInvoice(record.purchaseInvoiceNumber)===normalized); }
function legacyAddMasterParty(kind, value){
 const name=String(value||'').trim();
 if(!name)return;
 if(masters[kind].some(item=>item.toLowerCase()===name.toLowerCase())){toast(`${name} is already in the ${kind==='vendors'?'vendor':'customer'} list`);return;}
 masters[kind].push(name);renderPartyLists();updateMaterialFields($('#entryForm').dataset.direction||'inward');toast(`${name} added to the ${kind==='vendors'?'vendor':'customer'} list`);
}
function legacyRemoveMasterParty(kind, value){
 const index=masters[kind].findIndex(item=>item===value);
 if(index<0)return;
 masters[kind].splice(index,1);renderPartyLists();updateMaterialFields($('#entryForm').dataset.direction||'inward');toast(`${value} removed from the ${kind==='vendors'?'vendor':'customer'} list`);
}
function legacyAddLocation(value){
 const location=String(value||'').trim();
 if(!location)return;
 if(locations.some(item=>item.toLowerCase()===location.toLowerCase())){toast(`${location} already exists`);return;}
 locations.push(location);renderLocationOptions();renderLocationList();toast(`${location} added`);
}
function legacyRemoveLocation(location){
 if(locations.length===1){toast('At least one location is required');return;}
 const inUse=Object.values(users).some(user=>user.location===location)||[...records.inward,...records.outward].some(record=>record.location===location);
 if(inUse){toast('This location is assigned to a user or has entries and cannot be removed');return;}
 const index=locations.indexOf(location);
 if(index<0)return;
 locations.splice(index,1);renderLocationOptions();renderLocationList();toast(`${location} removed`);
}
function legacyAddUser(){ throw new Error('Browser-only user creation is disabled.'); }
function legacyResetPassword(){ throw new Error('Browser-only password changes are disabled.'); }
function setupSearch(){ $$('.record-search').forEach(input=>input.addEventListener('input',()=>{ const q=input.value.trim().toLowerCase(); $$('#'+input.dataset.target+' tbody tr').forEach(row=>row.hidden=!row.innerText.toLowerCase().includes(q)); })); $('#globalSearch').addEventListener('input',e=>{ const q=e.target.value.trim().toLowerCase(); if(q.length<2)return; setPage('records'); $$('.record-search[data-target="recordsTable"]')[0].value=q; $$('.record-search[data-target="recordsTable"]')[0].dispatchEvent(new Event('input')); }); }
function legacyInit(){ renderUserAccess();renderInward();renderOutward();renderRecords();renderActivity();renderAttendanceHistory();updateStats();syncClock();setInterval(syncClock,1000); setupSearch();setupMaterialFieldValidation();
 $$('.nav-item[data-page], [data-page]').forEach(b=>b.addEventListener('click',()=>setPage(b.dataset.page)));
 $('.menu-toggle').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
 $$('.theme-toggle').forEach(b=>b.addEventListener('click',()=>{document.documentElement.classList.toggle('dark'); $$('.theme-toggle-input').forEach(i=>i.checked=document.documentElement.classList.contains('dark'));})); $$('.theme-toggle-input').forEach(i=>i.addEventListener('change',()=>document.documentElement.classList.toggle('dark',i.checked)));
 $('#quickCheckIn').addEventListener('click',markAttendance);$('#attendanceCheckAction').addEventListener('click',markAttendance); $('#takeSelfie').addEventListener('click',capturePhoto);$('.photo-capture').addEventListener('click',capturePhoto);
 $('#newVisitor').addEventListener('click',()=>{setPage('inward');openModal('visitor')});$('#addInward').addEventListener('click',()=>openModal(state.inwardType));$('#visitorExit').addEventListener('click',()=>{setPage('outward');openModal('visitor','outward')});$('#addOutward').addEventListener('click',()=>openModal(state.outwardType,'outward'));
 $$('.modal-close').forEach(b=>b.addEventListener('click',closeModal));$('#modalBackdrop').addEventListener('click',e=>{if(e.target===$('#modalBackdrop'))closeModal()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#globalSearch').focus();}});
 $$('#modalTabs button').forEach(b=>b.addEventListener('click',()=>updateEntryForm(b.dataset.form,$('#entryForm').dataset.direction||'inward')));
 $$('[data-inward-tab]').forEach(b=>b.addEventListener('click',()=>{state.inwardType=b.dataset.inwardTab;$$('[data-inward-tab]').forEach(x=>x.classList.toggle('active',x===b));renderInward()})); $$('[data-outward-tab]').forEach(b=>b.addEventListener('click',()=>{state.outwardType=b.dataset.outwardTab;$$('[data-outward-tab]').forEach(x=>x.classList.toggle('active',x===b));renderOutward()}));
 $('#inwardBody').addEventListener('change',e=>{if(e.target.matches('[data-inward-status]'))updateInwardMaterialStatus(Number(e.target.dataset.inwardStatus),e.target.value,e.target);if(e.target.matches('[data-inward-grn]'))updateInwardGrn(Number(e.target.dataset.inwardGrn),e.target.value,e.target);});
 $('#inwardBody').addEventListener('click',e=>{const button=e.target.closest('[data-print-token]');if(button)printToken(Number(button.dataset.printToken));});
 $('#loginForm').addEventListener('submit',e=>{e.preventDefault();signIn($('#loginId').value,$('#loginPassword').value);});
 $('#logoutButton').addEventListener('click',signOut);
 $('#vendorForm').addEventListener('submit',e=>{e.preventDefault();addMasterParty('vendors',$('#vendorNameInput').value);e.currentTarget.reset();});
 $('#customerForm').addEventListener('submit',e=>{e.preventDefault();addMasterParty('customers',$('#customerNameInput').value);e.currentTarget.reset();});
 $('#partyLists').addEventListener('click',e=>{const button=e.target.closest('[data-remove-party]');if(button)removeMasterParty(button.dataset.removeParty,button.dataset.partyName);});
 $('#locationForm').addEventListener('submit',e=>{e.preventDefault();addLocation($('#locationNameInput').value);e.currentTarget.reset();});
 $('#locationList').addEventListener('click',e=>{const button=e.target.closest('[data-remove-location]');if(button)removeLocation(button.dataset.removeLocation);});
 $('#userForm').addEventListener('submit',e=>{e.preventDefault();addUser($('#userNameInput').value,$('#userLoginIdInput').value,$('#userLocationSelect').value,$('#userPasswordInput').value);e.currentTarget.reset();});
 $('#passwordResetForm').addEventListener('submit',e=>{e.preventDefault();resetPassword($('#passwordResetUser').value,$('#newPasswordInput').value);e.currentTarget.reset();});
 $('#entryForm').addEventListener('submit',e=>{
  e.preventDefault();
  const form=new FormData(e.currentTarget), direction=e.currentTarget.dataset.direction, isMaterial=state.activeEntryType==='material', documentNumber=form.get('documentNumber'), purchaseInvoiceNumber=String(form.get('purchaseInvoiceNumber')||'').replace(/\s/g,''), location=assignedLocation(form.get('location')), name=isMaterial?(documentNumber||`Material ${direction} entry`):(form.get('visitorName')||'New visitor'), now=new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
  if(isMaterial&&isDuplicateInvoice(direction,purchaseInvoiceNumber)){ $('#purchaseInvoiceNumber').focus();toast(`This ${direction==='inward'?'purchase invoice':'invoice / challan'} number already exists in ${direction} entries`);return; }
  const item={
   type:state.activeEntryType,
   name,
   sub:isMaterial?(form.get('vendorName')||`${direction==='outward'?'Customer':'Vendor'} entry`):(form.get('company')||'Visitor entry'),
   host:isMaterial?`${direction==='inward'?'Purchase invoice':'Invoice / challan'}: ${purchaseInvoiceNumber}`:(form.get('host')||'Front desk'),
   reference:isMaterial?(documentNumber||form.get('materialVehicle')||'No reference'):`VP-${String(Date.now()).slice(-6)}`,
   vehicle:form.get('vehicle')||form.get('materialVehicle')||'—',
   time:now,
   location,
   remarks:isMaterial?(form.get('remarks')||''):'',
   status:direction==='outward'?'Completed':(isMaterial?'Pending':'Inside'),
   initials:name.split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase()
  };
  if(isMaterial)Object.assign(item,{purchaseInvoiceNumber});
  if(isMaterial&&direction==='inward')Object.assign(item,{token:state.nextInwardToken++,grnNumber:documentNumber,quantity:form.get('quantity'),driverName:form.get('driverName'),driverMobile:form.get('driverMobile'),unloadingStartedAt:null,unloadedAt:null,grnDoneAt:null});
  if(direction==='outward'){records.outward.unshift(item);renderOutward()}else{records.inward.unshift(item);renderInward()}
  renderRecords();renderActivity();updateStats();closeModal();
  toast(direction==='outward'?'Exit recorded successfully':isMaterial?`Inward entry saved with token ${item.token}`:'Entry saved and visitor pass generated');
 });
 $$('[data-export]').forEach(b=>b.addEventListener('click',()=>exportTable(b.dataset.export)));$('#printRecords').addEventListener('click',()=>window.print());$('#openQr').addEventListener('click',()=>toast('QR / barcode scanner is ready for visitor pass verification'));$('.notification-button').addEventListener('click',()=>toast('No new critical notifications')); }

/* Server-backed production behavior. Persistent state and authorization are enforced by /api. */
async function api(path, options={}){
 const method=options.method||'GET',headers=new Headers(options.headers||{});
 if(options.body!==undefined)headers.set('Content-Type','application/json');
 if(!['GET','HEAD'].includes(method)&&path!=='/api/auth/login'&&state.csrfToken)headers.set('X-CSRF-Token',state.csrfToken);
 const response=await fetch(path,{method,headers,body:options.body===undefined?undefined:JSON.stringify(options.body),credentials:'same-origin'});
 const raw=await response.text();let payload=null;try{payload=raw?JSON.parse(raw):null;}catch{}
 if(!response.ok){const text=raw.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();const error=new Error(payload?.error||text||`Request failed (HTTP ${response.status}).`);error.status=response.status;if(error.status===401&&state.currentUser)showLogin(false);throw error;}
 return payload;
}
function showLogin(focus=true){state.currentUser=null;state.currentUserId=null;state.csrfToken=null;$('#appShell').hidden=true;$('#loginScreen').hidden=false;$('#loginPassword').value='';if(focus)$('#loginId').focus();}
function replaceEntry(entry){const list=records[entry.direction],index=list.findIndex(record=>record.id===entry.id);if(index>=0)list.splice(index,1,entry);else list.unshift(entry);}
function applyWorkspace(data){
 state.currentUser=data.user;state.currentUserId=data.user.id;state.csrfToken=data.csrfToken;locations=data.locations||[];masters={vendors:data.vendors||[],customers:data.customers||[]};users=Object.fromEntries((data.users?.length?data.users:[data.user]).map(user=>[user.id,user]));
 records.inward.splice(0,records.inward.length,...(data.entries||[]).filter(entry=>entry.direction==='inward'));records.outward.splice(0,records.outward.length,...(data.entries||[]).filter(entry=>entry.direction==='outward'));state.nextInwardToken=Math.max(0,...records.inward.filter(entry=>entry.type==='material').map(entry=>Number(entry.token)||0))+1;
}
async function loadWorkspace(){const data=await api('/api/bootstrap');applyWorkspace(data);refreshWorkspace();return data;}
async function signIn(loginId,password){
 const button=$('#loginForm button[type="submit"]');button.disabled=true;$('#loginError').textContent='';
 try{const data=await api('/api/auth/login',{method:'POST',body:{username:String(loginId||'').trim(),password}});state.currentUser=data.user;state.currentUserId=data.user.id;state.csrfToken=data.csrfToken;await loadWorkspace();$('#loginForm').reset();$('#loginScreen').hidden=true;$('#appShell').hidden=false;}catch(error){$('#loginError').textContent=error.message;}finally{button.disabled=false;}
}
async function signOut(){try{if(state.currentUser)await api('/api/auth/logout',{method:'POST',body:{}});}catch(error){if(error.status!==401)toast(error.message);}finally{showLogin();}}
async function addMasterParty(kind,value){const name=String(value||'').trim();if(!name)return;const partyKind=kind==='vendors'?'vendor':'customer';await api('/api/parties',{method:'POST',body:{kind:partyKind,name}});await loadWorkspace();toast(`${name} added to the ${partyKind} list`);}
async function removeMasterParty(kind,id,name){await api(`/api/parties/${encodeURIComponent(id)}`,{method:'DELETE',body:{}});await loadWorkspace();toast(`${name} removed from the ${kind==='vendors'?'vendor':'customer'} list`);}
async function addLocation(value){const name=String(value||'').trim();if(!name)return;await api('/api/locations',{method:'POST',body:{name}});await loadWorkspace();toast(`${name} added`);}
async function removeLocation(id,name){await api(`/api/locations/${encodeURIComponent(id)}`,{method:'DELETE',body:{}});await loadWorkspace();toast(`${name} removed`);}
async function addUser(name,loginId,locationId,password){const userName=String(name||'').trim(),username=String(loginId||'').trim().toLowerCase();if(!userName||!username||!locationId||!password)return;await api('/api/users',{method:'POST',body:{name:userName,username,locationId,password}});await loadWorkspace();toast(`${userName} created with location access`);}
function resetUserEditor(){state.editingUserId=null;$('#userForm').reset();renderLocationOptions();$('#userFormTitle').textContent='User access';$('#userFormDescription').textContent='Create a standard user and assign exactly one location.';$('#userFormSubmit').textContent='Create user';$('#cancelUserEdit').hidden=true;$('#userPasswordField').hidden=false;$('#userPasswordInput').disabled=false;$('#userPasswordInput').required=true;}
function openUserEditor(id){if(!isAdmin())return;const user=users[id];if(!user||user.role!=='user')return;state.editingUserId=id;renderLocationOptions();$('#userNameInput').value=user.name||'';$('#userLoginIdInput').value=user.username||'';$('#userLocationSelect').value=user.locationId||'';$('#userPasswordInput').value='';$('#userFormTitle').textContent='Edit user';$('#userFormDescription').textContent='Update the user name, login ID, or assigned location.';$('#userFormSubmit').textContent='Save user';$('#cancelUserEdit').hidden=false;$('#userPasswordField').hidden=true;$('#userPasswordInput').disabled=true;$('#userPasswordInput').required=false;}
async function saveUserForm(){const name=$('#userNameInput').value,username=$('#userLoginIdInput').value,locationId=$('#userLocationSelect').value;if(state.editingUserId){await api(`/api/users/${encodeURIComponent(state.editingUserId)}`,{method:'PATCH',body:{name,username,locationId}});const editedName=String(name).trim();await loadWorkspace();resetUserEditor();toast(`${editedName} updated`);return;}await addUser(name,username,locationId,$('#userPasswordInput').value);resetUserEditor();}
async function resetPassword(userId,password){await api(`/api/users/${encodeURIComponent(userId)}/password`,{method:'PATCH',body:{password}});toast('Password reset successfully');}
async function deleteEntry(id,name){
 if(!isAdmin()||!id)return;
 if(!window.confirm(`Delete the entry for "${name}"? This cannot be undone.`))return;
 await api(`/api/entries/${encodeURIComponent(id)}`,{method:'DELETE',body:{}});
 await loadWorkspace();toast('Entry deleted');
}
function openEntryEditor(id){if(!isAdmin())return;const entry=[...records.inward,...records.outward].find(item=>item.id===id);if(!entry)return;openModal(entry.type,entry.direction,entry);}
async function updateInwardMaterialStatus(token,status,control){
 const record=records.inward.find(item=>item.type==='material'&&item.token===token);if(!record)return;
 if(status==='GRN Done'&&!String(record.grnNumber||'').trim()){control.value=record.status;$(`[data-inward-grn="${token}"]`)?.focus();toast('Enter the GRN number before selecting GRN Done');return;}
 try{const data=await api(`/api/entries/${encodeURIComponent(record.id)}`,{method:'PATCH',body:{status}});replaceEntry(data.entry);renderInward();renderRecords();renderActivity();const updated=data.entry;inwardNotification(status==='GRN Done'?`Token ${token}: GRN completed at ${formatTimestamp(updated.grnDoneAt)} IST`:status==='Unloaded'?`Token ${token}: unloaded at ${formatTimestamp(updated.unloadedAt)} IST`:status==='Unloading in Progress'?`Token ${token}: unloading started at ${formatTimestamp(updated.unloadingStartedAt)} IST`:`Token ${token}: status updated to ${status}`);}catch(error){control.value=record.status;toast(error.message);}
}
async function updateInwardGrn(token,value,input){const record=records.inward.find(item=>item.type==='material'&&item.token===token),grnNumber=String(value||'').trim();if(!record)return;try{const data=await api(`/api/entries/${encodeURIComponent(record.id)}`,{method:'PATCH',body:{grnNumber}});replaceEntry(data.entry);input.setCustomValidity('');renderInward();renderRecords();inwardNotification(grnNumber?`Token ${token}: GRN number captured`:`Token ${token}: GRN number cleared`);}catch(error){input.value=record.grnNumber||'';toast(error.message);}}
async function updateOutwardPod(id,value,control){const record=records.outward.find(item=>item.id===id&&item.type==='material');if(!record)return;try{const data=await api(`/api/entries/${encodeURIComponent(record.id)}`,{method:'PATCH',body:{podReceived:value}});replaceEntry(data.entry);renderOutward();renderRecords();renderActivity();toast(`Token ${data.entry.outwardToken}: POD ${data.entry.podReceived?'received':'pending'}`);}catch(error){control.value=record.podReceived?'yes':'no';toast(error.message);}}
async function saveEntry(formElement){
 const form=new FormData(formElement),direction=formElement.dataset.direction,isMaterial=state.activeEntryType==='material',base={direction,entryType:state.activeEntryType,locationId:assignedLocation(form.get('location'))};
 const body=isMaterial?{...base,partyId:form.get('vendorName'),documentNumber:form.get('documentNumber'),invoiceNumber:String(form.get('purchaseInvoiceNumber')||'').replace(/\s/g,''),boxes:form.get('quantity'),vehicleNumber:form.get('materialVehicle'),driverName:form.get('driverName'),driverMobile:form.get('driverMobile'),remarks:form.get('remarks'),...(direction==='outward'?{podReceived:form.get('podReceived')}:{})}:{...base,visitorName:form.get('visitorName'),company:form.get('company'),host:form.get('host'),vehicleNumber:form.get('vehicle')};
 if(state.editingEntry){const data=await api(`/api/entries/${encodeURIComponent(state.editingEntry.id)}`,{method:'PATCH',body:{...body,adminEdit:true}});replaceEntry(data.entry);refreshWorkspace();closeModal();toast('Entry updated by administrator');return;}
 if(isMaterial&&direction==='outward'&&!masters.customers.length)throw new Error('Add a customer name in Settings before creating a material outward entry.');
 const data=await api('/api/entries',{method:'POST',body});replaceEntry(data.entry);refreshWorkspace();closeModal();if(direction==='inward'&&isMaterial)inwardNotification(`Token ${data.entry.token}: inward entry created with status Pending`);else toast(direction==='outward'?`Exit recorded with token ${data.entry.outwardToken}`:'Entry saved and visitor pass generated');
}
async function restoreSession(){try{await loadWorkspace();$('#loginScreen').hidden=true;$('#appShell').hidden=false;}catch(error){if(error.status!==401)$('#loginError').textContent=error.message||'The service is unavailable. Please try again.';showLogin(false);}}
function ensureUserEditorControls(){const panel=$('#userMasterPanel'),form=$('#userForm');if(!panel||!form)return;const heading=panel.querySelector('h2'),description=panel.querySelector('p');if(heading)heading.id='userFormTitle';if(description)description.id='userFormDescription';const password=$('#userPasswordInput');if(password?.parentElement)password.parentElement.id='userPasswordField';const submit=form.querySelector('button[type="submit"]');if(submit)submit.id='userFormSubmit';if(!$('#cancelUserEdit')&&submit)submit.insertAdjacentHTML('afterend','<button class="button button-outline" id="cancelUserEdit" type="button" hidden>Cancel edit</button>');}
function init(){
 ensureUserEditorControls();
 renderAttendanceHistory();syncClock();setInterval(syncClock,1000);setupSearch();setupMaterialFieldValidation();
 $$('.nav-item[data-page], [data-page]').forEach(button=>button.addEventListener('click',()=>setPage(button.dataset.page)));$('.menu-toggle').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
 $$('.theme-toggle').forEach(button=>button.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');$$('.theme-toggle-input').forEach(input=>input.checked=document.documentElement.classList.contains('dark'));}));$$('.theme-toggle-input').forEach(input=>input.addEventListener('change',()=>document.documentElement.classList.toggle('dark',input.checked)));
 $('#quickCheckIn').addEventListener('click',markAttendance);$('#attendanceCheckAction').addEventListener('click',markAttendance);$('#takeSelfie').addEventListener('click',capturePhoto);$('.photo-capture').addEventListener('click',capturePhoto);
 $('#newVisitor').addEventListener('click',()=>{setPage('inward');openModal('visitor')});$('#addInward').addEventListener('click',()=>openModal(state.inwardType));$('#visitorExit').addEventListener('click',()=>{setPage('outward');openModal('visitor','outward')});$('#addOutward').addEventListener('click',()=>openModal(state.outwardType,'outward'));
 $$('.modal-close').forEach(button=>button.addEventListener('click',closeModal));$('#modalBackdrop').addEventListener('click',event=>{if(event.target===$('#modalBackdrop'))closeModal()});document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();$('#globalSearch').focus();}});
 $$('#modalTabs button').forEach(button=>button.addEventListener('click',()=>updateEntryForm(button.dataset.form,$('#entryForm').dataset.direction||'inward')));
 $$('[data-inward-tab]').forEach(button=>button.addEventListener('click',()=>{state.inwardType=button.dataset.inwardTab;$$('[data-inward-tab]').forEach(item=>item.classList.toggle('active',item===button));renderInward()}));$$('[data-outward-tab]').forEach(button=>button.addEventListener('click',()=>{state.outwardType=button.dataset.outwardTab;$$('[data-outward-tab]').forEach(item=>item.classList.toggle('active',item===button));renderOutward()}));
 $('#inwardFiltersToggle').addEventListener('click',()=>{const panel=$('#inwardFilterPanel'),isOpen=!panel.hidden;panel.hidden=isOpen;$('#inwardFiltersToggle').setAttribute('aria-expanded',String(!isOpen));});
 $('#outwardFiltersToggle').addEventListener('click',()=>{const panel=$('#outwardFilterPanel'),isOpen=!panel.hidden;panel.hidden=isOpen;$('#outwardFiltersToggle').setAttribute('aria-expanded',String(!isOpen));});
 $('#inwardFilterPanel').addEventListener('change',()=>{readModuleFilters('inward');renderInward();});
 $('#outwardFilterPanel').addEventListener('change',()=>{readModuleFilters('outward');renderOutward();});
 $('#clearInwardFilters').addEventListener('click',()=>{state.inwardFilters={dateFrom:'',dateTo:'',location:'',statuses:[]};renderInward();});
 $('#clearOutwardFilters').addEventListener('click',()=>{state.outwardFilters={dateFrom:'',dateTo:'',location:'',statuses:[]};renderOutward();});
 $('#inwardBody').addEventListener('change',event=>{if(event.target.matches('[data-inward-status]'))void updateInwardMaterialStatus(Number(event.target.dataset.inwardStatus),event.target.value,event.target);if(event.target.matches('[data-inward-grn]'))void updateInwardGrn(Number(event.target.dataset.inwardGrn),event.target.value,event.target);});$('#inwardBody').addEventListener('click',event=>{const button=event.target.closest('[data-print-token]');if(button)printToken(Number(button.dataset.printToken));});
 $('#outwardBody').addEventListener('change',event=>{if(event.target.matches('[data-outward-pod]'))void updateOutwardPod(event.target.dataset.outwardPod,event.target.value,event.target);});
 document.addEventListener('click',event=>{const editButton=event.target.closest('[data-edit-entry]');if(editButton)openEntryEditor(editButton.dataset.editEntry);const deleteButton=event.target.closest('[data-delete-entry]');if(deleteButton)void deleteEntry(deleteButton.dataset.deleteEntry,deleteButton.dataset.entryName);});
 $('#loginForm').addEventListener('submit',event=>{event.preventDefault();void signIn($('#loginId').value,$('#loginPassword').value);});$('#logoutButton').addEventListener('click',()=>void signOut());
 $('#vendorForm').addEventListener('submit',event=>{event.preventDefault();void addMasterParty('vendors',$('#vendorNameInput').value).then(()=>event.currentTarget.reset()).catch(error=>toast(error.message));});$('#customerForm').addEventListener('submit',event=>{event.preventDefault();void addMasterParty('customers',$('#customerNameInput').value).then(()=>event.currentTarget.reset()).catch(error=>toast(error.message));});
 $('#partyLists').addEventListener('click',event=>{const button=event.target.closest('[data-remove-party]');if(button)void removeMasterParty(button.dataset.removeParty,button.dataset.partyId,button.dataset.partyName).catch(error=>toast(error.message));});$('#locationForm').addEventListener('submit',event=>{event.preventDefault();void addLocation($('#locationNameInput').value).then(()=>event.currentTarget.reset()).catch(error=>toast(error.message));});$('#locationList').addEventListener('click',event=>{const button=event.target.closest('[data-remove-location]');if(button)void removeLocation(button.dataset.removeLocation,button.dataset.locationName).catch(error=>toast(error.message));});
 $('#userList').addEventListener('click',event=>{const button=event.target.closest('[data-edit-user]');if(button)openUserEditor(button.dataset.editUser);});$('#userForm').addEventListener('submit',event=>{event.preventDefault();void saveUserForm().catch(error=>toast(error.message));});$('#cancelUserEdit').addEventListener('click',resetUserEditor);$('#passwordResetForm').addEventListener('submit',event=>{event.preventDefault();void resetPassword($('#passwordResetUser').value,$('#newPasswordInput').value).then(()=>event.currentTarget.reset()).catch(error=>toast(error.message));});
 $('#entryForm').addEventListener('submit',event=>{event.preventDefault();void saveEntry(event.currentTarget).catch(error=>toast(error.message));});$$('[data-export]').forEach(button=>button.addEventListener('click',()=>exportTable(button.dataset.export)));$('#printRecords').addEventListener('click',()=>window.print());$('#openQr').addEventListener('click',()=>toast('QR / barcode scanner is ready for visitor pass verification'));$('.notification-button').addEventListener('click',showNotifications);void restoreSession();
}
init();
