const B = import.meta.env.VITE_API_URL || '';
export const assess = a => fetch(`${B}/api/assess`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answers: a })
}).then(r => r.json());
export const stats = () => fetch(`${B}/api/stats`).then(r => r.json());
export const validation = () => fetch(`${B}/api/validation`).then(r => r.json());
