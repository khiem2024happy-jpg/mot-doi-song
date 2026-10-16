import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { paper: '#F5F1E9', ink: '#302F2B', forest: '#455F55', muted: '#706B61' }, fontFamily: { serif: ['Georgia','serif'] } } }, plugins: [] } satisfies Config;
