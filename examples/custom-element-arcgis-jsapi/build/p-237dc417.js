import{N as t}from"./p-ab028778.js";class s{constructor(t=(t=>t.values().next().value)){this._peeker=t,this._items=new Set}get length(){return this._items.size}clear(){this._items.clear()}peek(){if(0!==this._items.size)return this._peeker(this._items)}push(t){this.contains(t)||this._items.add(t)}contains(t){return this._items.has(t)}pop(){if(0===this.length)return;const s=this.peek();return this._items.delete(t(s)),s}remove(t){this._items.delete(t)}filter(t){return this._items.forEach((s=>{t(s)||this._items.delete(s)})),this}}export{s}