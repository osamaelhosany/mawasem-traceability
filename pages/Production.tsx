// @ts-nocheck
// Generated from v2/Production.dc.html (Factory Traceability UI · Simplified v2). Design unchanged.
import React from 'react';
import { DCLogic, dcCss, dcHref, dcStr, dcTxt, dcNoop } from '../lib/dc';

export const title = "Production board";

const STYLE = "\nbody{margin:0;font-family:'IBM Plex Sans',system-ui,sans-serif;color:#1B2420;background:#F6F7F5}\na{color:#1F6B4F}a:hover{color:#14503A}\n.nv{display:flex;align-items:center;gap:12px;min-height:48px;padding:0 14px;border-radius:10px;color:#3C4742;text-decoration:none;font-size:15px;font-weight:500}\n.nv:hover{background:#F1F3F0;color:#1B2420}\n.nv.on{background:#1F6B4F;color:#FFFFFF}\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 20px;border-radius:10px;border:1px solid #CBD2CC;background:#FFFFFF;color:#1B2420;font:inherit;font-size:15px;font-weight:500;text-decoration:none;cursor:pointer;box-sizing:border-box;white-space:nowrap}\n.btn:hover{background:#F1F3F0;color:#1B2420}\n.btn.pri{background:#1F6B4F;border-color:#1F6B4F;color:#FFFFFF}\n.btn.pri:hover{background:#14503A;color:#FFFFFF}\n.btn.neg{color:#A41E14;border-color:#E9B8B2}\n.btn.full{width:100%;min-height:54px;font-size:16px;font-weight:600}\n.btn.sm{min-height:40px;padding:0 14px;font-size:14px}\n.btn:disabled{opacity:.5;cursor:not-allowed}\n.mono{font-family:'IBM Plex Mono',monospace}\n.badge{display:inline-flex;align-items:center;gap:5px;padding:2px 9px;border-radius:999px;font-size:12px;font-weight:600;white-space:nowrap}\n.ok{background:#E6F0EA;color:#14503A}.warn{background:#FFF4E0;color:#7A4700}.bad{background:#FDECEA;color:#A41E14}.info{background:#E8F0FA;color:#1A5598}.mute{background:#EEF0ED;color:#3C4742}\n.seg{display:inline-flex;align-items:center;min-height:40px;padding:0 12px;border:0;background:transparent;font:inherit;font-size:13px;font-weight:500;cursor:pointer;color:#3C4742;border-radius:7px}\n.seg.on{background:#FFFFFF;color:#14503A;box-shadow:0 1px 2px rgba(20,30,25,0.12)}\n.col{flex:0 0 190px;display:flex;flex-direction:column;gap:10px;background:#EEF0ED;border-radius:12px;padding:12px}\n.colh{display:flex;justify-content:space-between;align-items:baseline;gap:6px;padding:2px 2px 4px}\n.kcard{display:flex;flex-direction:column;gap:4px;text-align:left;width:100%;padding:12px;border-radius:10px;border:1px solid #E3E6E1;background:#FFFFFF;font:inherit;color:#1B2420;cursor:pointer;box-sizing:border-box}\n.kcard:hover{border-color:#1F6B4F}\n.kcard.sel{border:2px solid #1F6B4F;padding:11px;box-shadow:0 2px 8px rgba(20,30,25,0.12)}\n.kcard.held{border-color:#E9B8B2;background:#FFFBFA}\n.nxt{font-size:12px;font-weight:600;color:#14503A;margin-top:4px}\n.fl{display:flex;flex-direction:column;gap:6px}\n.fl label{font-size:13px;font-weight:500;color:#3C4742}\n.fl input,.fl textarea{font:inherit;font-size:18px;font-weight:600;min-height:50px;padding:8px 12px;border:1px solid #CBD2CC;border-radius:10px;background:#FFFFFF;color:#1B2420;box-sizing:border-box;width:100%;font-variant-numeric:tabular-nums}\n.fl input.sm,.fl textarea{font-size:14px;font-weight:400;min-height:44px}\n.fl input[readonly]{background:#F4F6F3;color:#3C4742}\n.kv{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF0ED;font-size:14px}\n.kv span:first-child{color:#5C6862}\n.pick{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid #E3E6E1;border-radius:10px;font-size:14px;cursor:pointer}\n.pick input{width:22px;height:22px;accent-color:#1F6B4F;margin:0;flex:none}\n.sub{font-size:13px;font-weight:600;margin-top:4px}\n";

class Component extends DCLogic {
scanVals() {
const raw = (this.state && this.state.scanQ) || '';
const q = String(raw).trim().toUpperCase();
const pages = { RM: ['Lot.dc.html', 'raw lot'], PB: ['LotBatch.dc.html', 'batch'], FG: ['LotFinished.dc.html', 'finished lot'], BL: ['LotBlend.dc.html', 'blend'], SH: ['Shipments.dc.html', 'shipment'] };
const m = /^(RM|PB|FG|BL|SH)-[A-Z0-9-]{4,}$/.exec(q);
const hit = m ? pages[m[1]] : null;
return {
scanQ: raw,
setScan: (e) => this.setState({ scanQ: e.target.value }),
scanHit: q.length >= 4 && !!hit,
scanMiss: q.length >= 4 && !hit,
scanLink: hit ? hit[0] : '',
scanText: hit ? 'Open ' + hit[1] + ' ' + q + ' →' : ''
};
}
constructor(props) {
super(props);
this.state = {
role: 'qm', sel: 'PB-HIB-261022-01', n: 2, toast: '', picks: {}, split: false, bagFixed: false,
form: { out: 1128, waste: 24, bp: 48, when: '22 Oct, 15:20', notes: '' },
cards: [
{ id: 'RM-HIB-261022-01', product: 'Hibiscus', pc: 'HIB', kg: 1000, stage: 'wait', sub: 'Wadi Green Co-op', moist: '11.2%', rate: '80%', farming: 'Organic' },
{ id: 'RM-HIB-261021-02', product: 'Hibiscus', pc: 'HIB', kg: 850, stage: 'wait', sub: 'Sunrise Growers', moist: '12.6% · above limit', rate: '82%', farming: 'Conventional' },
{ id: 'RM-MNT-261021-03', product: 'Mint', pc: 'MNT', kg: 500, stage: 'wait', sub: 'Delta Herbs', moist: '10.4%', rate: '78%', farming: 'Conventional' },
{ id: 'RM-HIB-261019-04', product: 'Hibiscus', pc: 'HIB', kg: 600, stage: 'ready', sub: 'Wadi Green Co-op', org: true },
{ id: 'RM-HIB-261018-05', product: 'Hibiscus', pc: 'HIB', kg: 900, stage: 'ready', sub: 'Al-Nour Farm', org: false },
{ id: 'RM-CHM-261019-01', product: 'Chamomile', pc: 'CHM', kg: 1300, stage: 'ready', sub: 'Delta Herbs', org: false },
{ id: 'PB-HIB-261022-01', product: 'Hibiscus', pc: 'HIB', kg: 1200, stage: 'sieving', sub: 'From RM-HIB-261019-04', org: true },
{ id: 'PB-HIB-261021-01', product: 'Hibiscus', pc: 'HIB', kg: 905, stage: 'metal', sub: 'From 2 raw lots', flag: 'On hold', org: true },
{ id: 'PB-CHM-261022-01', product: 'Chamomile', pc: 'CHM', kg: 1045, stage: 'packing', sub: 'From RM-CHM-261019-01', org: false },
{ id: 'FG-MNT-261022-01', product: 'Dried mint', pc: 'MNT', kg: 450, stage: 'stored', sub: 'Loading bay' },
{ id: 'FG-HIB-261019-03', product: 'Hibiscus', pc: 'HIB', kg: 425, stage: 'stored', sub: 'Rack 05 · organic' }
]
};
}
renderVals() {
const s = this.state;
const fmt = (n) => Number(n).toLocaleString('en-US');
const qm = s.role === 'qm';
const opName = qm ? 'Quality manager' : 'Inventory manager';
const stages = [['wait', 'Waiting approval'], ['ready', 'Ready'], ['sieving', 'Sieving'], ['sizing', 'Sizing'], ['metal', 'Metal detector'], ['packing', 'Packing'], ['stored', 'In storage']];
const live = s.cards.filter((c) => c.stage !== 'gone');
const nextOf = (c) => {
if (c.stage === 'wait') return qm ? 'Next: approve or reject' : 'Waiting for quality manager';
if (c.stage === 'ready') return 'Next: start batch';
if (c.stage === 'sieving') return 'Next: record sieving';
if (c.stage === 'sizing') return 'Next: record sizing';
if (c.stage === 'metal') return c.flag ? (qm ? 'Next: clear check' : 'On hold') : 'Next: metal detector';
if (c.stage === 'packing') return 'Next: weigh & print labels';
return 'Ready to ship';
};
const defaults = (kg) => { const out = Math.round(kg * 0.94); const waste = Math.round(kg * 0.02); return { out: out, waste: waste, bp: kg - out - waste, when: '22 Oct, 15:20', notes: '' }; };
const sel = live.find((c) => c.id === s.sel);
const patch = (id, p, toast, newSel) => this.setState({ cards: s.cards.map((c) => c.id === id ? { ...c, ...p } : c), toast: toast, sel: newSel === undefined ? s.sel : newSel });
const choose = (c) => this.setState({ sel: c.id, form: defaults(c.kg), toast: '', picks: c.stage === 'ready' ? { [c.id]: true } : {}, split: false, bagFixed: false });
const cols = stages.map(([k, label]) => {
const cs = live.filter((c) => c.stage === k);
return {
...this.scanVals(),
label: label, count: cs.length, kg: fmt(cs.reduce((a, c) => a + c.kg, 0)), empty: cs.length === 0,
cards: cs.map((c) => ({ ...c, kgText: fmt(c.kg), flag: c.flag || '', next: nextOf(c), cls: 'kcard' + (c.flag ? ' held' : '') + (s.sel === c.id ? ' sel' : ''), pressed: s.sel === c.id ? 'true' : 'false', pick: () => choose(c) }))
};
});
const ready = live.filter((c) => c.stage === 'ready');
const chosen = ready.filter((c) => s.picks[c.id]);
const prods = chosen.map((c) => c.product).filter((p, i, a) => a.indexOf(p) === i);
const farms = chosen.map((c) => !!c.org).filter((p, i, a) => a.indexOf(p) === i);
const mixErr = chosen.length === 0 ? 'Tick at least one lot.' : prods.length > 1 ? 'One product per batch. Untick the ' + prods[1].toLowerCase() + ' lot.' : farms.length > 1 ? "Organic and conventional can't be mixed. Untick one lot." : '';
const pickKg = chosen.reduce((a, c) => a + c.kg, 0);
const f = s.form;
const isStep = sel && (sel.stage === 'sieving' || sel.stage === 'sizing');
const acc = (Number(f.out) || 0) + (Number(f.waste) || 0) + (Number(f.bp) || 0);
const gap = sel ? sel.kg - acc : 0;
const over = gap < 0;
const warn = !over && sel && gap > sel.kg * 0.005;
const titles = { wait: 'Approve this lot?', ready: 'Start a batch', sieving: 'Record sieving', sizing: 'Record sizing', metal: sel && sel.flag ? 'Batch on hold' : 'Metal detector check', packing: 'Weigh, label and store', stored: 'In storage' };
const kg = sel ? sel.kg : 0;
const base = sel ? sel.id.replace('PB-', 'FG-') : '';
const parts = base.split('-');
const seq = parts.pop();
const second = parts.concat(['0' + (Number(seq) + 1)]).join('-');
const plan = !sel ? [] : s.split
? [{ id: base, kg: Math.round(kg * 0.6 / 25) * 25, pack: '25 kg PP bag', size: 25, unit: 'bags' }, { id: second, kg: kg - Math.round(kg * 0.6 / 25) * 25, pack: '10 kg carton', size: 10, unit: 'cartons' }]
: [{ id: base, kg: kg, pack: '25 kg PP bag', size: 25, unit: 'bags' }];
const fgPlan = plan.map((p) => ({ ...p, kgText: fmt(p.kg), bags: Math.ceil(p.kg / p.size) }));
const bagCount = fgPlan.reduce((a, p) => a + p.bags, 0);
const bagsBad = !s.bagFixed && bagCount >= 18;
return {
homeLink: qm ? 'HomeQM.dc.html' : 'HomeIM.dc.html',
roleName: opName, roleInitials: qm ? 'QM' : 'IM',
qmCls: qm ? 'seg on' : 'seg', imCls: qm ? 'seg' : 'seg on',
qmPressed: qm ? 'true' : 'false', imPressed: qm ? 'false' : 'true',
asQM: () => this.setState({ role: 'qm' }), asIM: () => this.setState({ role: 'im' }),
isQM: qm, isIM: !qm,
cols: cols,
hasToast: !!s.toast, toast: s.toast,
sel: sel || { id: '', product: '', sub: '' },
selKg: sel ? fmt(sel.kg) : '',
pNone: !sel, pSel: !!sel,
panelTitle: sel ? titles[sel.stage] : '',
pWait: !!sel && sel.stage === 'wait',
pReady: !!sel && sel.stage === 'ready',
pStep: !!isStep,
pMetal: !!sel && sel.stage === 'metal' && !sel.flag,
pHold: !!sel && sel.stage === 'metal' && !!sel.flag,
pPack: !!sel && sel.stage === 'packing',
pStored: !!sel && sel.stage === 'stored',
approve: () => patch(sel.id, { stage: 'ready', org: sel.farming === 'Organic' }, 'Approved ' + sel.id + '. It is ready to process.'),
reject: () => patch(sel.id, { stage: 'gone' }, 'Rejected ' + sel.id + '. It cannot be processed.', ''),
readyPicks: ready.map((c) => ({ id: c.id, product: c.product, kgText: fmt(c.kg), on: !!s.picks[c.id], farm: c.org ? 'Organic' : 'Conventional', badge: c.org ? 'badge ok' : 'badge mute', toggle: () => this.setState({ picks: { ...s.picks, [c.id]: !s.picks[c.id] } }) })),
mixMsg: mixErr || chosen.length + (chosen.length === 1 ? ' lot' : ' lots') + ' · ' + prods[0] + ' · ' + (farms[0] ? 'organic' : 'conventional') + '. Ready to start.',
mixBg: mixErr ? '#FDECEA' : '#EEF6F1', mixFg: mixErr ? '#7E1810' : '#14503A',
mixBlocked: !!mixErr, pickKg: fmt(pickKg),
startBatch: () => {
const first = chosen[0];
const id = 'PB-' + first.pc + '-261022-0' + s.n;
const nc = { id: id, product: first.product, pc: first.pc, kg: pickKg, stage: 'sieving', sub: chosen.length > 1 ? 'From ' + chosen.length + ' raw lots' : 'From ' + first.id, org: !!first.org };
const ids = chosen.map((c) => c.id);
this.setState({ cards: s.cards.map((c) => ids.indexOf(c.id) !== -1 ? { ...c, stage: 'gone' } : c).concat([nc]), sel: id, n: s.n + 1, form: defaults(pickKg), picks: {}, toast: 'Started ' + id + ' with ' + fmt(pickKg) + ' kg from ' + ids.join(', ') + '.' });
},
form: f,
bpName: sel && sel.stage === 'sizing' ? 'Fines' : 'Residue',
stepLower: sel && sel.stage === 'sizing' ? 'sizing' : 'sieving',
setOut: (e) => this.setState({ form: { ...f, out: e.target.value } }),
setWaste: (e) => this.setState({ form: { ...f, waste: e.target.value } }),
setBp: (e) => this.setState({ form: { ...f, bp: e.target.value } }),
setWhen: (e) => this.setState({ form: { ...f, when: e.target.value } }),
setNotes: (e) => this.setState({ form: { ...f, notes: e.target.value } }),
balBg: over ? '#FDECEA' : warn ? '#FFF4E0' : '#EEF6F1',
balFg: over ? '#7E1810' : warn ? '#7A4700' : '#14503A',
balTitle: over ? 'More out than in.' : warn ? fmt(gap) + ' kg missing.' : 'Balanced.',
balText: over ? 'Check the weights.' : warn ? 'Add a note or re-weigh.' : 'Every kilo is accounted for.',
stepBlocked: over,
saveStep: () => {
const nextStage = sel.stage === 'sieving' ? 'sizing' : 'metal';
const out = Number(f.out) || 0;
this.setState({ cards: s.cards.map((c) => c.id === sel.id ? { ...c, stage: nextStage, kg: out } : c), form: defaults(out), toast: 'Saved by ' + opName.toLowerCase() + ' at ' + f.when + (f.notes ? ' with a note' : '') + '. ' + fmt(out) + ' kg moved on.' });
},
pass: () => patch(sel.id, { stage: 'packing' }, 'Metal detector passed. Moved to packing.'),
fail: () => patch(sel.id, { flag: 'On hold' }, 'Batch put on hold. The quality manager has been notified.'),
clear: () => patch(sel.id, { stage: 'packing', flag: '' }, 'Check cleared. Batch moved to packing.'),
fgPlan: fgPlan, fgFirst: base,
splitLabel: s.split ? 'Keep as 1 lot' : 'Split into 2 lots',
toggleSplit: () => this.setState({ split: !s.split }),
bagCount: bagCount, bagGood: bagCount - 1, bagsBad: bagsBad, bagsOk: !bagsBad,
fixBag: () => this.setState({ bagFixed: true, toast: 'Bag 18 topped up and re-weighed: 25.00 kg.' }),
labelFarm: sel && sel.org ? 'Organic' : 'Conventional',
labelNet: s.split ? '25 kg / 10 kg' : '25 kg',
store: sel && sel.org ? 'Rack 05 · organic' : 'Rack 04 · conventional',
pack: () => {
const extra = plan.slice(1).map((p) => ({ id: p.id, product: sel.product, pc: sel.pc, kg: p.kg, stage: 'stored', sub: p.pack + ' · in storage', org: sel.org }));
this.setState({ cards: s.cards.map((c) => c.id === sel.id ? { ...c, id: base, kg: plan[0].kg, stage: 'stored', sub: plan[0].pack + ' · in storage' } : c).concat(extra), sel: base, toast: bagCount + ' labels printed. ' + plan.map((p) => p.id).join(' and ') + ' in storage.' });
}
};
}
}

export default class ProductionPage extends Component {
  template(v) {
    return (<><style>{STYLE}</style>{" "}{" "}<div style={{"display":"flex","flexWrap":"wrap","minHeight":"900px","background":"#F6F7F5"}}>{" "}<nav aria-label={"Main"} style={{"flex":"1 1 240px","maxWidth":"280px","background":"#FFFFFF","borderRight":"1px solid #E3E6E1","padding":"20px 14px","boxSizing":"border-box","display":"flex","flexDirection":"column","gap":"4px"}}>{" "}<div style={{"display":"flex","alignItems":"center","gap":"10px","padding":"4px 8px 16px"}}>{" "}<div style={{"width":"36px","height":"36px","borderRadius":"9px","background":"#1F6B4F","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"600","fontSize":"16px"}}>{"M"}</div>{" "}<div style={{"fontWeight":"600","fontSize":"16px"}}>{"Mawasem"}</div>{" "}</div>{" "}<div style={{"padding":"0 0 14px"}}><label htmlFor={"scan"} style={{"position":"absolute","width":"1px","height":"1px","overflow":"hidden","clip":"rect(0 0 0 0)"}}>{"Scan or type a code"}</label><div style={{"display":"flex","alignItems":"center","gap":"10px","minHeight":"50px","padding":"0 12px","border":"1px solid #CBD2CC","borderRadius":"10px","background":"#F6F7F5"}}><svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3C4742"} strokeWidth={"2"} strokeLinecap={"round"} aria-hidden={"true"} style={{"flex":"none"}}><path d={"M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"}></path></svg><input id={"scan"} type={"search"} value={v.scanQ} onChange={v.setScan} placeholder={"Scan or type a code"} style={{"flex":"1","minWidth":"0","border":"0","outline":"none","background":"transparent","font":"inherit","fontSize":"14px","minHeight":"48px","color":"#1B2420"}} /></div>{(v.scanHit) ? (<><a href={dcHref(v.scanLink)} style={{"display":"block","marginTop":"8px","padding":"10px 12px","borderRadius":"10px","background":"#E6F0EA","color":"#14503A","fontSize":"13px","fontWeight":"600","textDecoration":"none"}}>{dcTxt(v.scanText)}</a></>) : null}{(v.scanMiss) ? (<><div role={"status"} style={{"marginTop":"8px","padding":"10px 12px","borderRadius":"10px","background":"#FFF4E0","color":"#7A4700","fontSize":"13px"}}>{"No lot, batch or shipment with that code"}</div></>) : null}</div>{" "}<a className={"nv"} href={dcHref(v.homeLink)}><svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"}></path></svg>{"Home"}</a>{" "}<a className={"nv"} href={dcHref("Receive.dc.html")}><svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 3v12M7 10l5 5 5-5M4 20h16"}></path></svg>{"Receive"}</a>{" "}<a className={"nv on"} href={dcHref("Production.dc.html")} aria-current={"page"}><svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinejoin={"round"} aria-hidden={"true"}><rect x={"3"} y={"4"} width={"5"} height={"16"} rx={"1"}></rect><rect x={"10"} y={"4"} width={"5"} height={"10"} rx={"1"}></rect><rect x={"17"} y={"4"} width={"4"} height={"13"} rx={"1"}></rect></svg>{"Production"}</a>{" "}<a className={"nv"} href={dcHref("Stock.dc.html")}><svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 7l9-4 9 4v10l-9 4-9-4z"}></path><path d={"M3 7l9 4 9-4M12 11v10"}></path></svg>{"Stock"}</a>{" "}<a className={"nv"} href={dcHref("Shipments.dc.html")}><svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 6h11v10H3zM14 10h4l3 3v3h-7"}></path><circle cx={"7"} cy={"18"} r={"2"}></circle><circle cx={"17"} cy={"18"} r={"2"}></circle></svg>{"Shipments"}</a>{" "}<a className={"nv"} href={dcHref("Trace.dc.html")}><svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} aria-hidden={"true"}><circle cx={"6"} cy={"6"} r={"2.5"}></circle><circle cx={"18"} cy={"12"} r={"2.5"}></circle><circle cx={"6"} cy={"18"} r={"2.5"}></circle><path d={"M8.5 7l7 4M8.5 17l7-4"}></path></svg>{"Trace"}</a>{" "}<div style={{"flexGrow":"1","minHeight":"24px"}}></div>{" "}<div style={{"display":"flex","alignItems":"center","gap":"10px","padding":"14px 8px 4px","borderTop":"1px solid #E3E6E1"}}>{" "}<div style={{"width":"34px","height":"34px","borderRadius":"999px","background":"#E6F0EA","color":"#14503A","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"12px","fontWeight":"600"}}>{dcTxt(v.roleInitials)}</div>{" "}<div style={{"fontSize":"14px","fontWeight":"500"}}>{dcTxt(v.roleName)}</div>{" "}</div>{" "}</nav>{" "}<main style={{"flex":"999 1 640px","minWidth":"0","padding":"28px 28px 40px","boxSizing":"border-box","display":"flex","flexDirection":"column","gap":"18px"}}>{" "}<header style={{"display":"flex","flexWrap":"wrap","gap":"14px","alignItems":"flex-end","justifyContent":"space-between"}}>{" "}<div>{" "}<h1 style={{"margin":"0","fontSize":"28px","fontWeight":"600"}}>{"Production"}</h1>{" "}<div style={{"fontSize":"14px","color":"#5C6862","marginTop":"4px"}}>{"Click a card to see its next step"}</div>{" "}</div>{" "}<div style={{"display":"flex","gap":"10px","flexWrap":"wrap","alignItems":"center"}}>{" "}<span style={{"fontSize":"13px","color":"#5C6862"}}>{"View as"}</span>{" "}<div role={"group"} aria-label={"View as"} style={{"display":"inline-flex","padding":"3px","background":"#EEF0ED","borderRadius":"10px","gap":"2px"}}>{" "}<button type={"button"} className={v.qmCls} aria-pressed={v.qmPressed} onClick={v.asQM}>{"Quality manager"}</button>{" "}<button type={"button"} className={v.imCls} aria-pressed={v.imPressed} onClick={v.asIM}>{"Inventory manager"}</button>{" "}</div>{" "}<a className={"btn pri"} href={dcHref("Receive.dc.html")}>{"Receive delivery"}</a>{" "}</div>{" "}</header>{" "}{(v.hasToast) ? (<>{" "}<div role={"status"} style={{"padding":"12px 16px","borderRadius":"10px","background":"#1B2420","color":"#FFFFFF","fontSize":"14px"}}>{dcTxt(v.toast)}</div>{" "}</>) : null}{" "}<div style={{"display":"flex","flexWrap":"wrap","gap":"18px","alignItems":"flex-start"}}>{" "}<section aria-label={"Production stages"} style={{"flex":"1 1 640px","minWidth":"0","overflowX":"auto","paddingBottom":"6px"}}>{" "}<div style={{"display":"flex","gap":"10px","minWidth":"min-content"}}>{" "}{(v.cols || []).map((c, $index) => (<React.Fragment key={$index}>{" "}<div className={"col"}>{" "}<div className={"colh"}><span style={{"fontSize":"13px","fontWeight":"600"}}>{dcTxt(c?.label)}</span><span style={{"fontSize":"12px","color":"#5C6862"}}>{dcTxt(c?.count)}</span></div>{" "}<span style={{"fontSize":"12px","color":"#5C6862","margin":"-6px 2px 2px"}}>{dcTxt(c?.kg)}{" kg"}</span>{" "}{(c?.cards || []).map((k, $index) => (<React.Fragment key={$index}>{" "}<button type={"button"} className={k?.cls} onClick={k?.pick} aria-pressed={k?.pressed}>{" "}<span className={"mono"} style={{"fontSize":"12px","fontWeight":"500"}}>{dcTxt(k?.id)}</span>{" "}<span style={{"fontSize":"14px","fontWeight":"600"}}>{dcTxt(k?.product)}{" · "}{dcTxt(k?.kgText)}{" kg"}</span>{" "}<span style={{"fontSize":"12px","color":"#5C6862"}}>{dcTxt(k?.sub)}</span>{" "}{(k?.flag) ? (<><span className={"badge bad"} style={{"alignSelf":"flex-start"}}>{dcTxt(k?.flag)}</span></>) : null}{" "}<span className={"nxt"}>{dcTxt(k?.next)}</span>{" "}</button>{" "}</React.Fragment>))}{" "}{(c?.empty) ? (<><div style={{"fontSize":"12px","color":"#5C6862","padding":"8px 2px"}}>{"Nothing here"}</div></>) : null}{" "}</div>{" "}</React.Fragment>))}{" "}</div>{" "}</section>{" "}<aside aria-label={"Next step"} style={{"flex":"0 1 380px","minWidth":"300px","background":"#FFFFFF","border":"1px solid #E3E6E1","borderRadius":"14px","padding":"22px","boxSizing":"border-box","display":"flex","flexDirection":"column","gap":"14px"}}>{" "}{(v.pNone) ? (<>{" "}<div style={{"padding":"30px 6px","textAlign":"center"}}><div style={{"fontSize":"17px","fontWeight":"600"}}>{"Pick a card"}</div><div style={{"fontSize":"14px","color":"#5C6862","marginTop":"6px","lineHeight":"1.5"}}>{"Every card shows its next step in green. Click one to do it here."}</div></div>{" "}</>) : null}{" "}{(v.pSel) ? (<>{" "}<div>{" "}<div className={"mono"} style={{"fontSize":"13px","color":"#5C6862"}}>{dcTxt(v.sel?.id)}</div>{" "}<h2 style={{"margin":"4px 0 2px","fontSize":"22px","fontWeight":"600"}}>{dcTxt(v.panelTitle)}</h2>{" "}<div style={{"fontSize":"14px","color":"#3C4742"}}>{dcTxt(v.sel?.product)}{" · "}{dcTxt(v.selKg)}{" kg · "}{dcTxt(v.sel?.sub)}</div>{" "}</div>{" "}</>) : null}{" "}{(v.pWait) ? (<>{" "}<div><div className={"kv"}><span>{"Moisture"}</span><span>{dcTxt(v.sel?.moist)}</span></div><div className={"kv"}><span>{"Agreed yield"}</span><span>{dcTxt(v.sel?.rate)}</span></div><div className={"kv"}><span>{"Farming"}</span><span>{dcTxt(v.sel?.farming)}</span></div></div>{" "}{(v.isQM) ? (<>{" "}<button className={"btn pri full"} type={"button"} onClick={v.approve}>{"Approve lot"}</button>{" "}<button className={"btn neg"} type={"button"} onClick={v.reject}>{"Reject"}</button>{" "}</>) : null}{" "}{(v.isIM) ? (<><div style={{"padding":"12px 14px","borderRadius":"10px","background":"#FFF4E0","color":"#7A4700","fontSize":"14px"}}>{"Waiting for the quality manager to approve. You can't start a batch with it yet."}</div></>) : null}{" "}</>) : null}{" "}{(v.pReady) ? (<>{" "}<div style={{"fontSize":"14px","fontWeight":"600"}}>{"Lots in this batch"}</div>{" "}<div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>{" "}{(v.readyPicks || []).map((r, $index) => (<React.Fragment key={$index}>{" "}<label className={"pick"}><input type={"checkbox"} checked={r?.on} onChange={r?.toggle} /><span style={{"flex":"1"}}><span className={"mono"} style={{"fontSize":"12px"}}>{dcTxt(r?.id)}</span><br />{dcTxt(r?.product)}{" · "}{dcTxt(r?.kgText)}{" kg"}</span><span className={r?.badge}>{dcTxt(r?.farm)}</span></label>{" "}</React.Fragment>))}{" "}</div>{" "}<div style={dcCss(`padding: 12px 14px; border-radius: 10px; font-size: 14px; background: ${dcStr(v.mixBg)}; color: ${dcStr(v.mixFg)}`)}>{dcTxt(v.mixMsg)}</div>{" "}<button className={"btn pri full"} type={"button"} onClick={v.startBatch} disabled={v.mixBlocked}>{"Start batch · "}{dcTxt(v.pickKg)}{" kg"}</button>{" "}</>) : null}{" "}{(v.pStep) ? (<>{" "}<div style={{"display":"grid","gridTemplateColumns":"repeat(2, minmax(0, 1fr))","gap":"12px"}}>{" "}<div className={"fl"} style={{"gridColumn":"1 / -1"}}><label htmlFor={"o"}>{"Output kg"}</label><input id={"o"} type={"number"} value={v.form?.out} onChange={v.setOut} /></div>{" "}<div className={"fl"}><label htmlFor={"w"}>{"Waste kg"}</label><input id={"w"} type={"number"} value={v.form?.waste} onChange={v.setWaste} /></div>{" "}<div className={"fl"}><label htmlFor={"b"}>{dcTxt(v.bpName)}{" kg"}</label><input id={"b"} type={"number"} value={v.form?.bp} onChange={v.setBp} /></div>{" "}<div className={"fl"}><label htmlFor={"d"}>{"Date and time"}</label><input id={"d"} className={"sm"} type={"text"} value={v.form?.when} onChange={v.setWhen} /></div>{" "}<div className={"fl"}><label htmlFor={"op"}>{"Operator"}</label><input id={"op"} className={"sm"} type={"text"} value={v.roleName} readOnly={true} /></div>{" "}<div className={"fl"} style={{"gridColumn":"1 / -1"}}><label htmlFor={"nt"}>{"Notes"}</label><textarea id={"nt"} rows={"2"} placeholder={"Anything unusual?"} value={v.form?.notes} onChange={v.setNotes} /></div>{" "}</div>{" "}<div style={dcCss(`padding: 12px 14px; border-radius: 10px; font-size: 14px; background: ${dcStr(v.balBg)}; color: ${dcStr(v.balFg)}`)}><strong>{dcTxt(v.balTitle)}</strong>{" "}{dcTxt(v.balText)}</div>{" "}<button className={"btn pri full"} type={"button"} onClick={v.saveStep} disabled={v.stepBlocked}>{"Save "}{dcTxt(v.stepLower)}</button>{" "}</>) : null}{" "}{(v.pMetal) ? (<>{" "}<div style={{"fontSize":"14px","color":"#3C4742","lineHeight":"1.5"}}>{"Run the batch through the metal detector, then record the result."}</div>{" "}<button className={"btn pri full"} type={"button"} onClick={v.pass}>{"Passed"}</button>{" "}<button className={"btn neg"} type={"button"} onClick={v.fail}>{"Failed · put on hold"}</button>{" "}</>) : null}{" "}{(v.pHold) ? (<>{" "}<div style={{"padding":"12px 14px","borderRadius":"10px","background":"#FDECEA","color":"#7E1810","fontSize":"14px","lineHeight":"1.5"}}><strong>{"On hold."}</strong>{" Metal detector failed. 3.2 kg rejects removed."}</div>{" "}{(v.isQM) ? (<>{" "}<div className={"fl"}><label htmlFor={"rs"}>{"Reason for clearing"}</label><textarea id={"rs"} rows={"2"} defaultValue={"Rejects removed and re-tested. 3 clean passes."} /></div>{" "}<button className={"btn pri full"} type={"button"} onClick={v.clear}>{"Clear check"}</button>{" "}</>) : null}{" "}{(v.isIM) ? (<><div style={{"fontSize":"14px","color":"#3C4742"}}>{"The quality manager has been notified. Only they can clear it."}</div></>) : null}{" "}</>) : null}{" "}{(v.pPack) ? (<>{" "}<div>{" "}<div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"8px"}}><span style={{"fontSize":"14px","fontWeight":"600"}}>{"Finished lots"}</span><button className={"btn sm"} type={"button"} onClick={v.toggleSplit}>{dcTxt(v.splitLabel)}</button></div>{" "}{(v.fgPlan || []).map((f, $index) => (<React.Fragment key={$index}><div className={"kv"}><span><span className={"mono"} style={{"fontSize":"12px","color":"#1B2420"}}>{dcTxt(f?.id)}</span><br />{dcTxt(f?.pack)}</span><span style={{"textAlign":"right","color":"#1B2420"}}>{dcTxt(f?.kgText)}{" kg"}<br /><span style={{"color":"#5C6862"}}>{dcTxt(f?.bags)}{" "}{dcTxt(f?.unit)}</span></span></div></React.Fragment>))}{" "}</div>{" "}<div>{" "}<div className={"sub"}>{"Bag weights · allowed 24.95–25.10 kg"}</div>{" "}{(v.bagsOk) ? (<><div style={{"fontSize":"14px","color":"#14503A","marginTop":"4px"}}>{"All "}{dcTxt(v.bagCount)}{" bags in range ✓"}</div></>) : null}{" "}{(v.bagsBad) ? (<><div role={"alert"} style={{"display":"flex","gap":"10px","alignItems":"center","justifyContent":"space-between","marginTop":"6px","padding":"10px 12px","borderRadius":"10px","background":"#FFF4E0","color":"#7A4700","fontSize":"14px"}}><span>{dcTxt(v.bagGood)}{" of "}{dcTxt(v.bagCount)}{" in range. Bag 18 is 24.94 kg."}</span><button className={"btn sm"} type={"button"} onClick={v.fixBag}>{"Re-weigh"}</button></div></>) : null}{" "}</div>{" "}<div style={{"display":"flex","gap":"14px","alignItems":"center","padding":"12px","border":"1px solid #CBD2CC","borderRadius":"10px"}}>{" "}<svg width={"58"} height={"58"} viewBox={"0 0 21 21"} role={"img"} aria-label={"QR code on the label"} shapeRendering={"crispEdges"} style={{"flex":"none"}}><rect width={"21"} height={"21"} fill={"#FFFFFF"}></rect><g fill={"#1B2420"}><path d={"M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2z"} fillRule={"evenodd"}></path><path d={"M14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3z"} fillRule={"evenodd"}></path><path d={"M0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2z"} fillRule={"evenodd"}></path><rect x={"9"} y={"2"} width={"2"} height={"2"}></rect><rect x={"8"} y={"8"} width={"3"} height={"1"}></rect><rect x={"12"} y={"10"} width={"2"} height={"3"}></rect><rect x={"15"} y={"9"} width={"3"} height={"2"}></rect><rect x={"9"} y={"14"} width={"2"} height={"3"}></rect><rect x={"14"} y={"15"} width={"3"} height={"2"}></rect><rect x={"18"} y={"18"} width={"2"} height={"2"}></rect></g></svg>{" "}<div style={{"fontSize":"13px","lineHeight":"1.5"}}><div style={{"fontSize":"11px","color":"#5C6862","textTransform":"uppercase","letterSpacing":".05em"}}>{"Label preview"}</div><div style={{"fontWeight":"600"}}>{dcTxt(v.sel?.product)}{" · "}{dcTxt(v.labelFarm)}</div><div className={"mono"}>{dcTxt(v.fgFirst)}</div><div>{"Net "}{dcTxt(v.labelNet)}{" · v3"}</div></div>{" "}</div>{" "}<div className={"kv"}><span>{"Store in"}</span><span>{dcTxt(v.store)}</span></div>{" "}<button className={"btn pri full"} type={"button"} onClick={v.pack} disabled={v.bagsBad}>{"Print "}{dcTxt(v.bagCount)}{" labels and store"}</button>{" "}</>) : null}{" "}{(v.pStored) ? (<>{" "}<div style={{"fontSize":"14px","color":"#3C4742","lineHeight":"1.5"}}>{"Finished and in storage. Ready to add to a shipment."}</div>{" "}<a className={"btn pri full"} href={dcHref("LotFinished.dc.html")}>{"Open lot page"}</a>{" "}<a className={"btn"} href={dcHref("Shipments.dc.html")}>{"Add to shipment"}</a>{" "}</>) : null}{" "}{(v.pSel) ? (<>{" "}<a href={dcHref("Lot.dc.html")} style={{"fontSize":"14px","textAlign":"center"}}>{"See full history and trace"}</a>{" "}</>) : null}{" "}</aside>{" "}</div>{" "}</main>{" "}</div>{" "}</>);
  }
}
