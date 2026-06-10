// Tailwind CSS v4 is handled by @tailwindcss/vite plugin — do NOT load it here.
// Only keeping autoprefixer for vendor prefixes.
const config = {
    plugins: {
        autoprefixer: {},
    },
};
export default config;
