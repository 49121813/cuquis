import { createContext, useContext, useState } from 'react';
import React from 'react';

export const ES = {
  nav_flavors: 'Sabores', nav_boxes: 'Cajas', nav_about: 'Nosotras', nav_order: 'Pedir',
  cta_wa: 'Pedir por WhatsApp', cta_order: 'Hacé tu pedido', cta_menu: 'Ver los sabores',
  hero_kicker: 'Cookies artesanales · CABA & Nordelta',
  hero_sub: 'Hacemos cuquis artesanales, una por una, con recetas caseras y mucho amor. Horneamos como en casa, con paciencia y dedicación.',
  mq: 'UNA POR UNA ✷ RECETAS CASERAS ✷ SIN PROCESOS INDUSTRIALES ✷ RECIÉN HORNEADAS ✷',
  som_badge: 'SABOR<br />DEL MES', som_kicker: 'Edición limitada',
  som_body: 'Masa de manteca con pistacho molido, trozos de chocolate blanco y un toque de sal. La horneamos en tandas chicas y se agota rápido.',
  som_cta: 'Quiero una',
  flavors_title: 'Los sabores', flavors_sub: 'Por unidad, caja de 6 o caja de 12. Y si querés inventar uno, lo hacemos.',
  f1: 'Común', f1d: 'Chocolate semiamargo y sal marina',
  f2: 'Limón', f2d: 'Glaseado, ralladura y chocolate blanco',
  f3: 'Frambuesa', f3d: 'Cacao, frambuesa y chocolate blanco',
  f4: 'Pistacho', f4d: 'Pistacho molido y chocolate blanco',
  f5: 'Triple chocolate', f5d: 'Negro, con leche y blanco',
  f6: 'Red velvet', f6d: 'Cacao rojo y chocolate blanco',
  f7: 'Kinder', f7d: 'Relleno cremoso de avellana',
  f8: 'Caramelo', f8d: 'Caramelo salado por dentro',
  f9: 'Inventá<br />el tuyo', f9d: 'Contanos qué se te ocurre y lo probamos',
  boxes_title: 'Cajas y combos',
  b1: 'Por unidad', b1d: 'Elegís el sabor que quieras, sin mínimo.',
  b2: 'Caja de 6', b2d: 'Todas distintas o todas iguales. La más pedida.',
  b3: 'Caja de 12', b3d: 'Para compartir con quien quieras.',
  b4: 'Catering', b4d: 'Eventos y pedidos grandes, armados a medida.', b4cta: 'Pedir presupuesto',
  about_title: 'Somos Cuquis',
  about_1: 'No usamos procesos industriales en ninguna etapa: horneamos como en casa, con paciencia y dedicación, porque creemos que eso se nota en el sabor.',
  about_2: 'Somos una marca joven y cercana, hecha para compartir con quien quieras. Y en cada Cuqui buscamos lo mismo: que sea un momento real para disfrutar :)',
  about_by: 'Por',
  rev_title: 'Lo que dicen',
  r1: '"Pedí la caja de 12 para un cumpleaños y no quedó ni una. La de pistacho es otra cosa."',
  r2: '"Se siente casera de verdad, no como las de cadena. Ya es costumbre los viernes."',
  r3: '"Les pedí un sabor inventado para el casamiento y lo clavaron."',
  r4: '"La de limón no la vi en ningún otro lado. Mi favorita lejos."',
  cta_title: '¿Armamos tu caja?', cta_shop: 'Comprar online',
  foot_tag: 'Cookies artesanales, una por una.', foot_where: 'Dónde', foot_contact: 'Contacto',
};

export const EN = {
  nav_flavors: 'Flavors', nav_boxes: 'Boxes', nav_about: 'About', nav_order: 'Order',
  cta_wa: 'Order on WhatsApp', cta_order: 'Place your order', cta_menu: 'See the flavors',
  hero_kicker: 'Handmade cookies · CABA & Nordelta',
  hero_sub: "We bake our cuquis by hand, one at a time, with homemade recipes and a lot of love. Just like at home: patience and care.",
  mq: 'ONE BY ONE ✷ HOMEMADE RECIPES ✷ NOTHING INDUSTRIAL ✷ FRESHLY BAKED ✷',
  som_badge: 'FLAVOR<br />OF THE MONTH', som_kicker: 'Limited edition',
  som_body: 'Butter dough with ground pistachio, white chocolate chunks and a pinch of salt. Baked in small batches and it goes fast.',
  som_cta: 'I want one',
  flavors_title: 'The flavors', flavors_sub: "By the unit, box of 6 or box of 12. And if you want to invent one, we'll make it.",
  f1: 'Classic', f1d: 'Dark chocolate and sea salt',
  f2: 'Lemon', f2d: 'Glaze, zest and white chocolate',
  f3: 'Raspberry', f3d: 'Cocoa, raspberry and white chocolate',
  f4: 'Pistachio', f4d: 'Ground pistachio and white chocolate',
  f5: 'Triple chocolate', f5d: 'Dark, milk and white',
  f6: 'Red velvet', f6d: 'Red cocoa and white chocolate',
  f7: 'Kinder', f7d: 'Creamy hazelnut filling',
  f8: 'Caramel', f8d: 'Salted caramel inside',
  f9: "Invent<br />your own", f9d: "Tell us your idea and we'll bake it",
  boxes_title: 'Boxes & combos',
  b1: 'Single', b1d: 'Pick any flavor, no minimum.',
  b2: 'Box of 6', b2d: 'Six cuquis, all different or all the same. The most ordered one.',
  b3: 'Box of 12', b3d: 'To share with whoever you want.',
  b4: 'Catering', b4d: 'Events and large orders, built to measure.', b4cta: 'Ask for a quote',
  about_title: 'We are Cuquis',
  about_1: "Nothing industrial at any stage: we bake like at home, with patience and dedication, because we believe you can taste it.",
  about_2: "We're a young, close-knit brand made for sharing with whoever you want. And in every Cuqui we look for the same thing: a real moment to enjoy :)",
  about_by: 'By',
  rev_title: 'What people say',
  r1: '"I ordered the box of 12 for a birthday and not one was left. The pistachio one is something else."',
  r2: '"It really tastes homemade, not like the chains. Fridays are a habit now."',
  r3: '"I asked them for an invented flavor for my wedding and they nailed it."',
  r4: "\"I haven't seen the lemon one anywhere else. My favorite by far.\"",
  cta_title: 'Shall we build your box?', cta_shop: 'Shop online',
  foot_tag: 'Handmade cookies, one at a time.', foot_where: 'Where', foot_contact: 'Contact',
};

const LangContext = createContext({ lang: 'es', t: (k) => ES[k], toggle: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = (key) => (lang === 'en' ? EN[key] ?? ES[key] : ES[key]);
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));
  return React.createElement(LangContext.Provider, { value: { lang, t, toggle } }, children);
}

export function useLang() {
  return useContext(LangContext);
}
