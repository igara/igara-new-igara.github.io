// import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
    '../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
});
export default config;
