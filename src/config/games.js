// Remote logos to fix broken local files
const classicLogo = 'https://logos-world.net/wp-content/uploads/2021/02/World-of-Warcraft-Classic-Logo.png';
const tbcLogo = 'https://upload.wikimedia.org/wikipedia/en/8/82/WoW_Burning_Crusade_Logo.png';
const wotlkLogo = 'https://logos-world.net/wp-content/uploads/2021/02/World-of-Warcraft-Wrath-of-the-Lich-King-Logo.png';

// Import local assets
// Note: In a real app, these imports might need to be handled differently or passed in
// For now, we'll assume these assets are available or use placeholders if imports fail
// The calling component will likely need to pass some of these or we keep them here if the bundler supports it.
// Since this is a config file, imports might not work if it's just a JS file not processed by Vite/Webpack in the same way for assets.
// However, in Vite/Webpack, importing assets in JS files is standard.

import classicArt from '../assets/1.12.png';
import tbcArt from '../assets/2.4.3.png';
import wotlkArt from '../assets/3.3.5.png';
import classicIco from '../assets/wow-classic.ico';
import tbcIco from '../assets/wow-tbc.ico';
import wotlkIco from '../assets/wow-wotlk.ico';

export const games = [
  { 
    id: 'classic', 
    name: 'Classic (1.12.1)', 
    shortName: 'Classic',
    menuLabel: '1.12',
    version: '1.12.1', 
    icon: classicLogo,
    clientIcon: classicIco,
    cardArt: classicArt,
    bg: 'https://images.alphacoders.com/109/1097880.jpg', // Classic BG
  },
  { 
    id: 'tbc', 
    name: 'Burning Crusade (2.4.3)', 
    shortName: 'TBC',
    menuLabel: '2.4.3',
    version: '2.4.3', 
    icon: tbcLogo,
    clientIcon: tbcIco,
    cardArt: tbcArt,
    bg: 'https://images.alphacoders.com/603/603505.jpg', // TBC BG (Illidan Clean)
  },
  { 
    id: 'wotlk', 
    name: 'Lich King (3.3.5a)', 
    shortName: 'WotLK',
    menuLabel: '3.3.5',
    version: '3.3.5a', 
    icon: wotlkLogo,
    clientIcon: wotlkIco,
    cardArt: wotlkArt,
    bg: 'https://images.alphacoders.com/694/69466.jpg', // WotLK BG
  }
];
