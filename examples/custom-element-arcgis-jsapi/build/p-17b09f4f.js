import{aF as e,b3 as r}from"./p-ab028778.js";import{o as n}from"./p-3cd8f347.js";async function t(t,o,a){const c=t&&t.getAtOrigin&&t.getAtOrigin("renderer",o.origin);if(c&&"unique-value"===c.type&&c.styleOrigin){const s=await n(c.populateFromStyle());if(e(a),!1===s.ok){const e=s.error;o&&o.messages&&o.messages.push(new r("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:o})),t.clear("renderer",o.origin)}}}export{t}