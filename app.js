const EUR=20.24,PLN=4.80,CZK=0.84;

const cities=[
{id:"ams",name:"Ámsterdam",flag:"🇳🇱",country:"Países Bajos",days:"Días 2-3 y 17-18",dates:"Dom 7 Sep – Lun 8 Sep\nVie 22 Sep – Sáb 23 Sep",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,
 libre:[],
 tourPersonal:"⭐ Día 17 (Vie 22 Sep): Si no contratas el Paquete 2 (Volendam, La Haya, Giethoorn) tienes Ámsterdam libre. Ideal para el Rijksmuseum, barrio Jordaan y canales a tu ritmo antes del vuelo del día 18.",
 atractivos_itinerario:[
  ["📅 DÍA 2 — Lun 7 Sep","Llegada a Ámsterdam · recepción y traslado al hotel"],
  ["Casco histórico de Ámsterdam","Patrimonio Mundial UNESCO · recorrido panorámico incluido en el tour"],
  ["📅 DÍA 3 — Mar 8 Sep","Desayuno · después nos dirigimos hacia Hannover y Berlín"],
  ["📅 DÍA 17 — Vie 22 Sep ⭐ TOUR PERSONAL","Tiempo libre para actividades personales o excursión opcional"],
  ["Volendam y Marken (Paquete 2)","Pintorescos pueblos pesqueros · casas de madera · trajes tradicionales (Paquete 2)"],
  ["La Haya — Den Haag (Paquete 2)","Sede del gobierno neerlandés · Parlamento · Corte Internacional de Justicia de la ONU"],
  ["Pueblo de Giethoorn (Paquete 2)","La 'Venecia de los Países Bajos' · sin calles, solo canales · solo opera si el vuelo sale después de las 20:00 hrs"],
  ["📅 DÍA 18 — Sáb 23 Sep","Desayuno · traslado al aeropuerto · vuelo de regreso a México"],
 ],
 atractivos_recomendados:[
  ["Rijksmuseum","museo nacional con La Ronda de Noche de Rembrandt · 2.5M visitas/año"],
  ["Casa de Ana Frank","refugio donde la familia Frank se ocultó de los nazis (1942-44)"],
  ["Museo Van Gogh","200+ obras del pintor organizadas por etapas de su vida"],
  ["Barrio Rojo (De Wallen)","zona histórica con la Oude Kerk del siglo XIII"],
  ["Barrio Jordaan","canales pintorescos, mercados y la Iglesia Westerkerk"],
  ["Mercado flotante de flores (Bloemenmarkt)","único en el mundo sobre casas flotantes"],
  ["Heineken Experience","antigua fábrica interactiva con cata de cerveza incluida"],
  ["Vondelpark","el parque más visitado de Países Bajos · 10 millones de visitas/año"],
 ],
 gastronomia:[
  ["Haring","arenque crudo con cebolla y pepinillos · snack callejero icónico"],
  ["Stamppot","puré de papas con verduras y albóndigas, plato nacional"],
  ["Bitterballen","croquetas fritas de ragú de carne · aperitivo clásico de bar"],
  ["Stroopwafel","galleta doble rellena de caramelo · el dulce más icónico"],
  ["Kroket (FEBO)","croquetas en máquinas expendedoras desde €2"],
  ["Pannenkoeken","panqueques holandeses grandes, dulces o salados"],
  ["Erwtensoep","sopa espesa de guisantes con salchichas ahumadas"],
  ["Kibbeling","trozos de pescado frito con salsa de ajo"],
 ],
 restaurantes:[
  ["De Blauwe Hollander","stamppot y bitterballen auténticos · barrio Jordaan","€10-15"],
  ["FEBO (máquinas)","croquetas, salchichas y snacks en la calle","€2-3"],
  ["HEMA Cafetería","self-service holandés · stamppot €3.50, rookworst €3.59","€3-6"],
  ["Albert Cuyp Market","mercado: stroopwafels, kibbeling, haring · L-S","€3-8"],
  ["Pancakes Amsterdam","panqueques holandeses en todas las variedades","€10-13"],
 ],
 video:{t:"15 lugares imperdibles de Ámsterdam — itinerario 3 días con mapa",d:"Recorrido completo con mapa por los imprescindibles de Ámsterdam · Europa Acompañada",canal:"Europa Acompañada",u:"https://www.youtube.com/watch?v=7iUQUlLUips"},
 mapa:{centro:"Dam Square Amsterdam",url:"https://www.google.com/maps/search/?api=1&query=Dam+Square+Amsterdam+Netherlands",pois:[
  ["Plaza Dam (Dam Square)","Plaza+Dam+Amsterdam"],
  ["Palacio Real de Ámsterdam","Royal+Palace+Amsterdam"],
  ["Casa de Anne Frank","Anne+Frank+House+Amsterdam"],
  ["Rijksmuseum","Rijksmuseum+Amsterdam"],
  ["Museo Van Gogh","Van+Gogh+Museum+Amsterdam"],
  ["Barrio Jordaan","Jordaan+Amsterdam"],
  ["Vondelpark","Vondelpark+Amsterdam"],
  ["Mercado Albert Cuyp","Albert+Cuypmarkt+Amsterdam"],
  ["Estación Central","Amsterdam+Centraal+Station"]
 ]},
 saludos:{idioma:"Neerlandés (Nederlands)",nota:"El neerlandés es la lengua oficial. El inglés lo habla casi todo el mundo, pero un saludo local siempre causa buena impresión.",frases:[
  {cat:"🌅 Buenos días",local:"Goedemorgen",pron:"Jú-de-mor-jen",tip:"Usa hasta aprox. las 12:00"},
  {cat:"☀️ Buenas tardes",local:"Goedemiddag",pron:"Jú-de-mi-daj",tip:"Desde mediodía hasta las 18:00"},
  {cat:"🌙 Buenas noches",local:"Goedenavond",pron:"Jú-den-á-font",tip:"A partir de las 18:00"},
  {cat:"👋 Hola (informal)",local:"Hoi / Hallo",pron:"Jói / Já-lo",tip:"Hoi es muy cotidiano entre jóvenes"},
  {cat:"🙏 Por favor",local:"Alstublieft",pron:"Als-tú-blift",tip:"Abreviado a s.v.p. en carteles"},
  {cat:"😊 Gracias",local:"Dank u wel",pron:"Dank ú vel",tip:"Informal: Dank je (dank ye)"},
  {cat:"🤝 De nada",local:"Graag gedaan",pron:"Jráj je-dán",tip:"Literalmente 'con mucho gusto'"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Hoeveel kost het?",pron:"Jú-feel kost et?",tip:"Muy útil en mercados y tiendas"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Waar is het toilet?",pron:"Vár is et twá-let?",tip:"Toiletten en letreros"},
  {cat:"🍺 ¡Salud!",local:"Proost!",pron:"Próost",tip:"Al brindar · muy usual en bares"}
 ]}
},
{id:"han",name:"Hannover",flag:"🇩🇪",country:"Alemania",days:"Día 3 (tránsito)",dates:"Lun 8 Sep (parada en ruta Ámsterdam–Berlín)",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,libre:[],tourPersonal:"",
 atractivos_itinerario:[
  ["Palacio de la Ópera (Opernhaus)","uno de los teatros más importantes de Alemania"],
  ["Ruinas de la Iglesia Aegidienkirche","conservadas como memorial a las víctimas de la WWII"],
  ["Iglesia del Mercado (Marktkirche)","gótica del siglo XIV · símbolo de la ciudad"],
  ["Nuevo Ayuntamiento (Neues Rathaus)","con ascensor curvo único en Europa"],
  ["Viejo Ayuntamiento (Altes Rathaus)","edificio medieval en la plaza histórica"],
 ],
 atractivos_recomendados:[
  ["Jardines de Herrenhausen","jardines barrocos de fama internacional · los mejores de Hannover"],
  ["Línea Roja turística","ruta pintada en el suelo que conecta 36 atracciones de la ciudad"],
  ["Ernst August Galerie","galería comercial frente a la estación, arquitectura destacada"],
 ],
 gastronomia:[
  ["Currywurst","salchicha con salsa curry · street food alemán clásico"],
  ["Kartoffelpuffer","tortitas de papa fritas con salsa de manzana"],
  ["Bretzel","pretzel salado · snack típico con cerveza"],
  ["Leine Bier","cerveza artesanal local emblemática de la región"],
 ],
 restaurantes:[
  ["Markthalle Hannover","mercado cubierto con múltiples opciones","€5-10"],
  ["Snack bars zona central","currywurst y pretzels en la calle","€3-5"],
  ["Restaurants en Kröpcke","plaza central · menús de mediodía","€8-13"],
 ],
 video:{t:"Qué ver en Hannover 🇩🇪 — 10 Lugares Imprescindibles",d:"Los 10 lugares imprescindibles de Hannover en español · El Viajero Feliz",canal:"El Viajero Feliz",u:"https://www.youtube.com/watch?v=bXfbGhVGECc"},
 mapa:{centro:"Marktplatz Hannover",url:"https://www.google.com/maps/search/?api=1&query=Marktplatz+Hannover+Germany",pois:[
  ["Palacio de la Ópera (Opernhaus)","Opernhaus+Hannover"],
  ["Ruinas Aegidienkirche","Aegidienkirche+Hannover"],
  ["Marktkirche (Iglesia del Mercado)","Marktkirche+Hannover"],
  ["Nuevo Ayuntamiento (Neues Rathaus)","Neues+Rathaus+Hannover"],
  ["Río Leine","Leine+River+Hannover"]
 ]},
 saludos:{idioma:"Alemán (Deutsch)",nota:"El alemán hannoveriano es considerado el alemán más 'puro' y neutro de Alemania. Un saludo en alemán siempre se agradece.",frases:[
  {cat:"🌅 Buenos días",local:"Guten Morgen",pron:"Gú-ten Mór-jen",tip:"Hasta aprox. las 11:00"},
  {cat:"☀️ Buenas tardes",local:"Guten Tag",pron:"Gú-ten Tak",tip:"Saludo general de día · muy común"},
  {cat:"🌙 Buenas noches",local:"Guten Abend",pron:"Gú-ten Á-bent",tip:"A partir de las 18:00"},
  {cat:"👋 Hola (informal)",local:"Hallo / Moin",pron:"Já-lo / Móin",tip:"Moin es típico del norte de Alemania"},
  {cat:"🙏 Por favor",local:"Bitte",pron:"Bí-te",tip:"También significa 'de nada' al entregar algo"},
  {cat:"😊 Gracias",local:"Danke schön",pron:"Dán-ke shön",tip:"Solo Danke también está bien"},
  {cat:"🤝 De nada",local:"Bitte sehr",pron:"Bí-te séer",tip:"O simplemente Bitte"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Was kostet das?",pron:"Vas kós-tet das?",tip:"Esencial en tiendas y mercados"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Wo ist die Toilette?",pron:"Vo ist di Twá-le-te?",tip:"Busca WC en los letreros"},
  {cat:"🍺 ¡Salud!",local:"Prost!",pron:"Prost",tip:"Clásico alemán al brindar · inevitable"}
 ]}
},
{id:"ber",name:"Berlín",flag:"🇩🇪",country:"Alemania",days:"Días 3-5",dates:"Lun 8 Sep – Mié 10 Sep",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,libre:[],tourPersonal:"",
 atractivos_itinerario:[
  ["📅 DÍA 3 — Lun 8 Sep","Llegada a Berlín desde Hannover · alojamiento"],
  ["📅 DÍA 4 — Mar 9 Sep","Desayuno · visita panorámica de Berlín"],
  ["Plaza Gendarmenmarkt","considerada la plaza más bella de Berlín"],
  ["Puerta de Brandenburgo","símbolo mundial de la reunificación alemana (1989)"],
  ["Potsdamer Platz","moderna plaza con arquitectura vanguardista"],
  ["Frauenkirche","iglesia mencionada en el itinerario del tour"],
  ["Palacio Zwinger","barroco del siglo XVIII · arquitectura deslumbrante"],
  ["Terraza Brühl","promenade real con vistas al río"],
  ["Camino del Rey","paseo histórico mencionado en el itinerario"],
  ["Estatua de Martín Lutero","en la Iglesia Marienkirche"],
  ["Ciudad de Potsdam (Paquete 1)","Capital de Brandeburgo · Palacio Sanssouci UNESCO · residencia de verano de Federico el Grande"],
  ["📅 DÍA 5 — Mié 10 Sep","Desayuno · partida hacia Varsovia"],
 ],
 atractivos_recomendados:[
  ["Muro de Berlín (East Side Gallery)","el mayor mural al aire libre del mundo · 1.3 km"],
  ["Isla de los Museos","Patrimonio UNESCO con 5 museos de primer nivel"],
  ["Memorial del Holocausto","2,711 estelas de hormigón · obra de Peter Eisenman"],
  ["Reichstag","cúpula de vidrio accesible al público · vistas 360° · gratis"],
  ["Checkpoint Charlie","antiguo paso fronterizo · símbolo de la Guerra Fría"],
 ],
 gastronomia:[
  ["Döner Kebab","inventado en Berlín en los años 70 · la ciudad tiene los mejores del mundo"],
  ["Currywurst berlinesa","salchicha con ketchup y curry · plato símbolo de la ciudad"],
  ["Buletten","albóndigas berlinesas con pan y mostaza"],
  ["Berliner Pfannkuchen","rosquilla rellena de mermelada"],
  ["Schnitzel","filete empanizado · herencia austrohúngara"],
 ],
 restaurantes:[
  ["Mustafa's Gemüse Kebap","el döner más famoso del mundo · Mehringdamm 36","€5-6"],
  ["Markthalle Neun","mercado cubierto con street food · jueves y viernes","€5-10"],
  ["Spreewaldgrill","currywurst clásica desde 1930","€3-5"],
  ["Hackescher Markt (zona)","menús variados de mediodía","€9-15"],
 ],
 video:{t:"BERLÍN qué ver y hacer en 3 DÍAS — Alemania",d:"Guía de los lugares más emblemáticos de Berlín · Europa Acompañada",canal:"Europa Acompañada",u:"https://www.youtube.com/watch?v=z2J7xua9q4Y"},
 mapa:{centro:"Brandenburger Tor Berlin",url:"https://www.google.com/maps/search/?api=1&query=Brandenburg+Gate+Berlin",pois:[
  ["Puerta de Brandenburgo","Brandenburg+Gate+Berlin"],
  ["Gendarmenmarkt","Gendarmenmarkt+Berlin"],
  ["Potsdamer Platz","Potsdamer+Platz+Berlin"],
  ["East Side Gallery (Muro)","East+Side+Gallery+Berlin"],
  ["Reichstag","Reichstag+Berlin"],
  ["Memorial del Holocausto","Holocaust+Memorial+Berlin"],
  ["Isla de los Museos","Museum+Island+Berlin"],
  ["Checkpoint Charlie","Checkpoint+Charlie+Berlin"],
  ["Estatua Martín Lutero","Martin+Luther+Statue+Berlin"]
 ]},
 saludos:{idioma:"Alemán (Deutsch) · dialecto berlinés",nota:"Berlín tiene su propio acento y jerga. El berlinés usa Ick (yo) en vez de Ich y tiene fama de ser directo y un poco brusco, pero un saludo siempre abre puertas.",frases:[
  {cat:"🌅 Buenos días",local:"Guten Morgen",pron:"Gú-ten Mór-jen",tip:"Berlín es ciudad de noctámbulos · no esperes caras sonrientes muy temprano"},
  {cat:"☀️ Buenas tardes",local:"Guten Tag",pron:"Gú-ten Tak",tip:"El más neutro y seguro durante el día"},
  {cat:"🌙 Buenas noches",local:"Guten Abend",pron:"Gú-ten Á-bent",tip:"Útil al llegar al hotel o restaurante"},
  {cat:"👋 Hola (berlinés)",local:"Na? / Hallo",pron:"Na / Já-lo",tip:"Na? (¿Qué tal?) es el saludo más berlinés"},
  {cat:"🙏 Por favor",local:"Bitte",pron:"Bí-te",tip:"También sirve para decir 'aquí tiene'"},
  {cat:"😊 Gracias",local:"Danke",pron:"Dán-ke",tip:"Rápido y efectivo · los berlineses lo usan mucho"},
  {cat:"🤝 De nada",local:"Kein Problem",pron:"Káin Pro-blém",tip:"Literalmente 'ningún problema'"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Was kostet das?",pron:"Vas kós-tet das?",tip:"En Berlín hay muchos mercados de pulgas donde lo necesitarás"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Wo ist die Toilette?",pron:"Vo ist di Twá-le-te?",tip:"En el metro se paga 50 céntimos · ten monedas"},
  {cat:"🍺 ¡Salud!",local:"Prost! / Zum Wohl!",pron:"Prost / Tsum Vol",tip:"Berlín tiene la mejor escena de bares de Europa · úsalo bien"}
 ]}
},
{id:"var",name:"Varsovia",flag:"🇵🇱",country:"Polonia",days:"Días 5-6",dates:"Mié 10 Sep – Jue 11 Sep",moneda:"Złoty (zł / PLN)",cambio:`1 zł = $${PLN.toFixed(2)} MXN · 100 zł ≈ $${(PLN*100).toFixed(0)} MXN`,libre:[],tourPersonal:"",
 atractivos_itinerario:[
  ["Ciudad Vieja (Stare Miasto)","Patrimonio UNESCO · reconstruida piedra a piedra tras la WWII"],
  ["Castillo Real (Zamek Królewski)","residencia oficial de los reyes de Polonia"],
  ["Columna de Segismundo","monumento barroco icónico frente al castillo"],
  ["Iglesia de las Visitacionistas (Kościół Wizytek)","barroca · lugar donde Chopin tocó el órgano de niño"],
 ],
 atractivos_recomendados:[
  ["Museo de la Sublevación de Varsovia (1944)","homenaje a la resistencia polaca · uno de los mejores museos de Europa"],
  ["Plaza del Mercado (Rynek Starego Miasta)","rodeada de edificios coloridos del siglo XVI-XVIII"],
  ["Parque Łazienki","palacio sobre el agua y estatua de Chopin · entrada gratuita"],
  ["Barrio Praga","lado alternativo bohemio de Varsovia · galerías y murales"],
 ],
 gastronomia:[
  ["Żurek","sopa agria de centeno con huevo cocido y salchicha · plato nacional"],
  ["Bigos","guiso de chucrut con carne y embutidos · el más polaco de los platos"],
  ["Pierogi ruskie","ravioles de papa y queso cottage · los más populares"],
  ["Kotlet schabowy","chuleta de cerdo empanizada · clásico polaco"],
  ["Zapiekanka","baguette con champiñones y queso gratinado · street food"],
 ],
 restaurantes:[
  ["Bar Mleczny (Bares de leche)","comedores populares · platos desde 15-25 zł","~€3-5"],
  ["Zapiekanki en Nowy Świat","street food clásico desde 10 zł (~€2)","~€2-3"],
  ["Ciudad Vieja (varios)","menús con bigos y pierogi","40+ zł (~€8+)"],
 ],
 video:{t:"Qué ver y hacer en VARSOVIA 2026 — Guía de Varsovia (Polonia)",d:"Guía completa de Varsovia 2026 en español · con narración · muy reciente",canal:"Guías Viajeras",u:"https://www.youtube.com/watch?v=yRWGDgNp8Yo"},
 mapa:{centro:"Plac Zamkowy Warsaw",url:"https://www.google.com/maps/search/?api=1&query=Castle+Square+Warsaw",pois:[
  ["Castillo Real (Zamek Królewski)","Royal+Castle+Warsaw"],
  ["Columna de Segismundo","Sigismund+Column+Warsaw"],
  ["Plaza del Mercado Casco Antiguo","Old+Town+Market+Place+Warsaw"],
  ["Iglesia de las Visitacionistas","Church+of+the+Visitationists+Warsaw"],
  ["Parque Lazienki","Lazienki+Park+Warsaw"],
  ["Palacio de Wilanów","Wilanow+Palace+Warsaw"],
  ["Museo POLIN","POLIN+Museum+Warsaw"],
  ["Palacio de Cultura","Palace+of+Culture+Warsaw"]
 ]},
 saludos:{idioma:"Polaco (Polski)",nota:"El polaco tiene sonidos difíciles para hispanohablantes. No te preocupes por la perfección — cualquier intento en polaco genera enorme simpatía en los locales.",frases:[
  {cat:"🌅 Buenos días",local:"Dzień dobry",pron:"Yén do-bri",tip:"Funciona todo el día · es el saludo más seguro y formal"},
  {cat:"🌙 Buenas noches",local:"Dobry wieczór",pron:"Dó-bri vyé-choor",tip:"Al llegar a un lugar por la noche"},
  {cat:"👋 Hola (informal)",local:"Cześć",pron:"Cheshch",tip:"Solo para personas de tu edad o jóvenes · muy amistoso"},
  {cat:"🙏 Por favor",local:"Proszę",pron:"Pró-she",tip:"También significa 'aquí tiene' y 'de nada'"},
  {cat:"😊 Gracias",local:"Dziękuję",pron:"Yen-kú-ye",tip:"Versión rápida: Dzięki (Yen-ki)"},
  {cat:"🤝 De nada",local:"Proszę / Nie ma za co",pron:"Pró-she / Nie-ma-za-tso",tip:"Proszę es la respuesta más común"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Ile to kosztuje?",pron:"Í-le to kosh-tú-ye?",tip:"Muy útil en el Mercado del Casco Antiguo"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Gdzie jest toaleta?",pron:"Gdye yest to-a-lé-ta?",tip:"Toaleta en letreros · a veces se paga 1-2 zł"},
  {cat:"🍺 ¡Salud!",local:"Na zdrowie!",pron:"Na zdró-vye",tip:"El brindis polaco · la cerveza (piwo) es excelente y barata"},
  {cat:"😋 ¡Buen provecho!",local:"Smacznego!",pron:"Smach-né-go",tip:"Dilo al sentarte a comer · los polacos lo aprecian mucho"}
 ]}
},
{id:"cra",name:"Cracovia",flag:"🇵🇱",country:"Polonia",days:"Días 6-8",dates:"Jue 11 Sep – Sáb 13 Sep",moneda:"Złoty (zł / PLN)",cambio:`1 zł = $${PLN.toFixed(2)} MXN · 100 zł ≈ $${(PLN*100).toFixed(0)} MXN`,
 libre:["🟢 Día 7 — Vie 12 Sep (DÍA LIBRE): Auschwitz-Birkenau (Paquete 1) · Minas Wieliczka (Paquete 2) · o tour personal en Cracovia."],
 tourPersonal:"⭐ Día 7 (Vie 12 Sep): Si no contratas ningún opcional, tienes Cracovia libre para el Barrio Kazimierz (antiguo barrio judío bohemio, lleno de cafés únicos), la Plaza del Mercado a tu ritmo, y el Castillo de Wawel con calma.",
 atractivos_itinerario:[
  ["📅 DÍA 6 — Jue 11 Sep","Desayuno · llegada desde Varsovia · recorrido panorámico"],
  ["Castillo de Wawel","fortaleza real del siglo XI · símbolo máximo de Polonia"],
  ["Catedral de Wawel (Basílica de San Estanislao y San Wenceslao)","panteón real · capillas de distintas épocas y estilos arquitectónicos"],
  ["Corte Renacentista (Sukiennice)","lonja del siglo XIV · ahora museo y tiendas de souvenirs"],
  ["Plaza del Mercado (Rynek Główny)","una de las mayores plazas medievales de Europa"],
  ["Basílica de Santa María (Kościół Mariacki)","gótica con altar tallado de Veit Stoss del siglo XV"],
  ["Iglesia de San Adalberto","pequeña iglesia prerrománica del siglo X"],
  ["📅 DÍA 7 — Vie 12 Sep 🟢 DÍA LIBRE","Excursiones opcionales o tour personal en Cracovia"],
  ["Campo de concentración Auschwitz-Birkenau (Paquete 1)","El complejo nazi más grande · visita profundamente emotiva · monumento a las víctimas del Holocausto"],
  ["Minas de sal de Wieliczka (Paquete 2)","Mina de sal operativa más antigua del mundo · capillas en roca de sal · Capilla de Santa Kinga · UNESCO"],
  ["📅 DÍA 8 — Sáb 13 Sep","Desayuno · partida hacia Praga"],
 ],
 atractivos_recomendados:[
  ["Barrio Kazimierz","antiguo barrio judío · bohemio, lleno de galerías y cafés únicos"],
  ["Ciudad Vieja completa (Patrimonio UNESCO)","caminata por las murallas medievales y la Barbacana"],
  ["Kremówka papieska","el pastel que adoraba Juan Pablo II · probar en la plaza"],
 ],
 gastronomia:[
  ["Obwarzanek krakowski","rosquilla trenzada · ícono gastronómico de Cracovia desde 1400"],
  ["Pierogi de Cracovia","versión local con distintos rellenos · los mejores de Polonia"],
  ["Oscypek","queso ahumado de oveja típico de la región de Małopolska"],
  ["Żurek w chlebie","sopa servida dentro de un pan de centeno hueco"],
  ["Kremówka papieska","pastel de crema que adoraba Juan Pablo II de niño"],
 ],
 restaurantes:[
  ["Bares Mleczny (varios)","platos completos 15-30 zł · auténticos y económicos","€3-6"],
  ["Puestos obwarzanek (plaza)","rosquilla desde 2-3 zł por unidad","€0.40"],
  ["Restaurantes Kazimierz","ambiente bohemio · menús 35-50 zł","€7-10"],
  ["Starka Restauracja","cocina tradicional polaca · muy valorado","€10-18"],
 ],
 video:{t:"Cracovia 🏘️ qué ver — imprescindibles casco histórico — Polonia",d:"Los imprescindibles del casco histórico de Cracovia en español · Oct 2025",canal:"Turismo Europa",u:"https://www.youtube.com/watch?v=udb0oxK-N0o"},
 mapa:{centro:"Rynek Glowny Krakow",url:"https://www.google.com/maps/search/?api=1&query=Main+Market+Square+Krakow",pois:[
  ["Castillo de Wawel","Wawel+Castle+Krakow"],
  ["Catedral de Wawel","Wawel+Cathedral+Krakow"],
  ["Basílica de Santa María","St+Marys+Basilica+Krakow"],
  ["Plaza del Mercado (Rynek Główny)","Rynek+Glowny+Krakow"],
  ["Lonja de los Paños (Sukiennice)","Sukiennice+Krakow"],
  ["Iglesia de San Adalberto","St+Adalbert+Church+Krakow"],
  ["Barrio Judío Kazimierz","Kazimierz+Krakow"],
  ["Fábrica de Schindler","Schindler+Factory+Krakow"],
  ["Auschwitz-Birkenau","Auschwitz+Birkenau+Memorial"],
  ["Minas de sal Wieliczka","Wieliczka+Salt+Mine"]
 ]},
 saludos:{idioma:"Polaco (Polski) · acento de Małopolska",nota:"Cracovia tiene el acento polaco más antiguo y melódico. Los cracovenses son conocidos por ser más cálidos que los varsovianoss. Un intento en polaco siempre genera una gran sonrisa.",frases:[
  {cat:"🌅 Buenos días",local:"Dzień dobry",pron:"Yén do-bri",tip:"El saludo estrella · funciona a toda hora · formal y siempre correcto"},
  {cat:"🌙 Buenas noches",local:"Dobry wieczór",pron:"Dó-bri vyé-choor",tip:"Al entrar a un restaurante o bar por la noche"},
  {cat:"👋 Hola (informal)",local:"Cześć",pron:"Cheshch",tip:"Con jóvenes y en ambiente informal · suena a 'honor' en latín"},
  {cat:"🙏 Por favor",local:"Proszę",pron:"Pró-she",tip:"Irremplazable · úsalo al pedir cualquier cosa"},
  {cat:"😊 Gracias",local:"Dziękuję bardzo",pron:"Yen-kú-ye bár-dzo",tip:"Bardzo = mucho · para expresar gratitud mayor"},
  {cat:"🤝 De nada",local:"Nie ma za co",pron:"Nie-ma-za-tso",tip:"Literalmente 'no hay por qué'"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Ile to kosztuje?",pron:"Í-le to kosh-tú-ye?",tip:"Imprescindible en el Mercado Stary Kleparz"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Gdzie jest toaleta?",pron:"Gdye yest to-a-lé-ta?",tip:"En la Plaza del Mercado hay baños públicos cerca del Cloth Hall"},
  {cat:"🍺 ¡Salud!",local:"Na zdrowie!",pron:"Na zdró-vye",tip:"Cracovia tiene excelentes bares de cerveza artesanal (piwo kraftowe)"},
  {cat:"😋 ¡Buen provecho!",local:"Smacznego!",pron:"Smach-né-go",tip:"Especialmente útil antes de probar los pierogi · plato local icónico"}
 ]}
},
{id:"pra",name:"Praga",flag:"🇨🇿",country:"Rep. Checa",days:"Días 8-10",dates:"Sáb 13 Sep – Lun 15 Sep",moneda:"Corona checa (Kč / CZK)",cambio:`1 Kč = $${CZK.toFixed(2)} MXN · 100 Kč ≈ $${(CZK*100).toFixed(0)} MXN`,
 libre:["🟢 Día 9 — Dom 14 Sep (DÍA LIBRE): Barco Río Moldava (Paquete 1) · Karlovy Vary o Noche Checa con cena (Paquete 2) · o tour personal."],
 tourPersonal:"⭐ Día 9 (Dom 14 Sep): Sin tours opcionales, visita el Castillo de Praga por tu cuenta (no incluido en el tour panorámico del día 8), cruza el Puente de Carlos al amanecer cuando está vacío, y explora Malá Strana con calma.",
 atractivos_itinerario:[
  ["📅 DÍA 8 — Sáb 13 Sep","Desayuno · llegada desde Cracovia · recorrido panorámico por la mañana y tarde"],
  ["Plaza Václav Havel (Wenceslas Square)","una de las plazas más grandes de Praga · bulevar histórico central"],
  ["Plaza de la Ciudad Vieja","entre la Plaza Václav Havel y el Puente Carlos (Karlův Most)"],
  ["Torre del Reloj Astronómico","campanas cada hora · construido en 1410"],
  ["Iglesia de Tyn","gótica del siglo XIV · icónica en la Plaza de la Ciudad Vieja"],
  ["Ayuntamiento Viejo","sede del famoso reloj astronómico"],
  ["Iglesia de San Nicolás","mencionada en el itinerario · barroca del siglo XVIII"],
  ["Monumento a Jan Hus","en la Plaza de la Ciudad Vieja · reformador checo del siglo XV"],
  ["Puente de Carlos (Karlův Most)","construido en el siglo XIV · 30 estatuas barrocas"],
  ["📅 DÍA 9 — Dom 14 Sep 🟢 DÍA LIBRE","Excursiones opcionales o tour personal en Praga"],
  ["Paseo en barco por el Río Moldava (Paquete 1)","Recorrido en barco · pasa bajo el Puente de Carlos · vistas del Castillo de Praga"],
  ["Excursión a Karlovy Vary (Paquete 2)","Elegante balneario · 12 fuentes termales · frecuentado por realeza y celebridades"],
  ["Noche checa con cena tradicional (Paquete 2)","Cena tradicional checa · música folclórica · danzas típicas · vino o cerveza local"],
  ["📅 DÍA 10 — Lun 15 Sep","Desayuno · partida hacia Núremberg"],
 ],
 atractivos_recomendados:[
  ["Castillo de Praga","el mayor del mundo por superficie · domina la ciudad desde la colina"],
  ["Barrio Judío (Josefov)","6 sinagogas históricas y cementerio del siglo XII"],
  ["Barrio Malá Strana","casas barrocas al pie del castillo · muy fotogénico"],
  ["Museo Kafka","homenaje al escritor nacido en Praga en 1883"],
 ],
 gastronomia:[
  ["Svíčková na smetaně","filete de ternera en salsa de crema con knedlíky (dumplings)"],
  ["Vepřo-knedlo-zelo","cerdo asado con chucrut y knedlíky · plato nacional checo"],
  ["Trdelník","masa en palo asada con azúcar y canela · street food"],
  ["Guláš checo","similar al húngaro · con pan o dumplings"],
  ["Smažený sýr","queso frito empanizado · el favorito del pueblo checo"],
  ["Svařák","vino caliente con especias · perfecto en septiembre"],
 ],
 restaurantes:[
  ["Lokál (varios locales)","cocina checa auténtica · Pilsner Urquell fresca","~€8-15"],
  ["Malá Strana (zona)","menús con gulash y svíčková desde 200 Kč","~€8-12"],
  ["Puestos de trdelník (plaza)","80-100 Kč por unidad","~€3-4"],
  ["Havelské tržiště","mercado histórico · frutas y snacks","€2-6"],
 ],
 video:{t:"PRAGA qué ver y hacer en 4 DÍAS — Guía República Checa",d:"Guía completa de Praga: Reloj Astronómico, Puente de Carlos, Castillo · Europa Acompañada",canal:"Europa Acompañada",u:"https://www.youtube.com/watch?v=-U1pVFi46mo"},
 mapa:{centro:"Old Town Square Prague",url:"https://www.google.com/maps/search/?api=1&query=Old+Town+Square+Prague",pois:[
  ["Plaza Václav Havel","Wenceslas+Square+Prague"],
  ["Plaza de la Ciudad Vieja","Old+Town+Square+Prague"],
  ["Reloj Astronómico","Prague+Astronomical+Clock"],
  ["Iglesia de Týn","Tyn+Church+Prague"],
  ["Ayuntamiento Viejo","Old+Town+Hall+Prague"],
  ["Iglesia de San Nicolás","St+Nicholas+Church+Prague"],
  ["Monumento a Jan Hus","Jan+Hus+Memorial+Prague"],
  ["Puente de Carlos","Charles+Bridge+Prague"],
  ["Castillo de Praga","Prague+Castle"],
  ["Catedral de San Vito","St+Vitus+Cathedral+Prague"],
  ["Muro de John Lennon","Lennon+Wall+Prague"]
 ]},
 saludos:{idioma:"Checo (Čeština)",nota:"El checo es una lengua eslava con acentos en la primera sílaba. Los checos pueden parecer fríos al principio, pero al oírte intentar su idioma cambian completamente de actitud.",frases:[
  {cat:"🌅 Buenos días",local:"Dobré ráno",pron:"Dob-ré rá-no",tip:"Solo hasta aprox. las 10:00"},
  {cat:"☀️ Buenas tardes",local:"Dobré odpoledne",pron:"Dob-ré od-pó-led-ne",tip:"Desde mediodía · algo formal"},
  {cat:"🌙 Buenas noches",local:"Dobrou noc",pron:"Dob-roh nots",tip:"Al despedirse por la noche"},
  {cat:"👋 Hola (todo el día)",local:"Dobrý den",pron:"Dob-rí den",tip:"El más versátil · saludo formal de día completo"},
  {cat:"👋 Hola (informal)",local:"Ahoj",pron:"A-joy",tip:"Informal y amistoso · igual al español 'ahoy'"},
  {cat:"🙏 Por favor",local:"Prosím",pron:"Pro-sím",tip:"También 'aquí tiene' y respuesta a 'gracias'"},
  {cat:"😊 Gracias",local:"Děkuji",pron:"Dyé-ku-yi",tip:"Informal: Díky (Dí-ki) · muy común"},
  {cat:"🤝 De nada",local:"Prosím / Není zač",pron:"Pro-sím / Né-ní zach",tip:"Prosím es la respuesta más habitual"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Kolik to stojí?",pron:"Ko-lik to sto-yí?",tip:"Esencial · Praga tiene muchos mercados y souvenir"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Kde je toaleta?",pron:"Kde ye to-a-lé-ta?",tip:"WC en letreros · se paga 10-20 Kč en muchos sitios"},
  {cat:"🍺 ¡Salud!",local:"Na zdraví!",pron:"Na zdra-ví",tip:"¡Imprescindible! Praga tiene la mejor cerveza del mundo · mira a todos los ojos al brindar"}
 ]}
},
{id:"nur",name:"Núremberg",flag:"🇩🇪",country:"Alemania",days:"Días 10-12",dates:"Lun 15 Sep – Mié 17 Sep",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,
 libre:["🟢 Día 11 — Mar 16 Sep (DÍA LIBRE): Rothenburg ob der Tauber (Paquete 1) · Múnich (Paquete 2) · o tour personal."],
 tourPersonal:"⭐ Día 11 (Mar 16 Sep): Si no contratas opcionales, Núremberg ofrece el Tribunal de Núremberg (Sala 600 donde se juzgaron los crímenes nazis), las murallas medievales caminables de 5 km y el Castillo Imperial, todo a pie desde el hotel.",
 atractivos_itinerario:[
  ["📅 DÍA 10 — Lun 15 Sep","Desayuno · llegada desde Praga · recorrido por la ciudad"],
  ["Castillo Imperial de Núremberg (Kaiserburg)","construido en lo alto de una colina hace unos mil años · núcleo vivo de la ciudad"],
  ["Iglesia de Nuestra Señora (Frauenkirche)","gótica en la Hauptmarkt · reloj con figuras mecánicas"],
  ["Casa de la Ópera (Opernhaus)","edificio de la ópera de Núremberg · mencionado en el itinerario del tour"],
  ["Viejo Ayuntamiento (Altes Rathaus)","con calabozos medievales visitables"],
  ["Río Pegnitz","fascinantes vistas del río que cruza el centro medieval"],
  ["📅 DÍA 11 — Mar 16 Sep 🟢 DÍA LIBRE","Excursiones opcionales o tour personal en Núremberg"],
  ["Ciudad Rothenburg ob der Tauber (Paquete 1)","Ciudad medieval mejor conservada de Alemania · murallas · casas de entramado · Ruta Romántica"],
  ["Ciudad de Múnich (Paquete 2)","Capital de Baviera · Oktoberfest · Marienplatz · Nuevo Ayuntamiento · cultura cervecera"],
  ["📅 DÍA 12 — Mié 17 Sep","Desayuno · partida hacia Frankfurt"],
 ],
 atractivos_recomendados:[
  ["Ciudad Vieja amurallada","murallas medievales casi intactas de 5 km · caminables completas"],
  ["Tribunal de Núremberg (Sala 600)","donde se juzgaron los crímenes nazis en 1945-46 · visitable"],
  ["Hauptmarkt","plaza central · famosa por el Christkindlesmarkt navideño"],
  ["Museo Nacional Germánico","el mayor de arte y cultura germanoparlante del mundo"],
 ],
 gastronomia:[
  ["Nürnberger Bratwürste","las salchichas más famosas de Alemania · diminutas a la parrilla"],
  ["Schäufele","paleta de cerdo asada con chucrut y dumpling de papa"],
  ["Lebkuchen","pan de jengibre especiado · el más famoso de Europa"],
  ["Elisen-Lebkuchen","versión premium del lebkuchen · IGP de Núremberg"],
 ],
 restaurantes:[
  ["Bratwurst Röslein (Hauptmarkt)","bratwürste tradicionales en la plaza central","€8-14"],
  ["Heilig-Geist-Spital","restaurante histórico junto al río","€12-20"],
  ["Puestos Hauptmarkt","salchichas y lebkuchen en la calle","€3-6"],
 ],
 video:{t:"Qué Ver en Núremberg en 3 días — Guía de Viaje 4K",d:"Recorrido completo por Núremberg en 3 días en español · Dic 2024",canal:"Antes Que Viajes",u:"https://www.youtube.com/watch?v=RJEpeRx6jv4"},
 mapa:{centro:"Hauptmarkt Nuremberg",url:"https://www.google.com/maps/search/?api=1&query=Hauptmarkt+Nuremberg",pois:[
  ["Castillo Imperial","Nuremberg+Castle"],
  ["Iglesia de Nuestra Señora (Frauenkirche)","Frauenkirche+Nuremberg"],
  ["Casa de la Ópera","Nuremberg+Opera+House"],
  ["Ayuntamiento Viejo","Old+Town+Hall+Nuremberg"],
  ["Río Pegnitz","Pegnitz+River+Nuremberg"],
  ["Plaza Hauptmarkt","Hauptmarkt+Nuremberg"],
  ["Iglesia de San Lorenzo","St+Lorenz+Church+Nuremberg"],
  ["Casa de Albrecht Dürer","Albrecht+Durer+House+Nuremberg"],
  ["Rothenburg ob der Tauber","Rothenburg+ob+der+Tauber"]
 ]},
 saludos:{idioma:"Alemán (Deutsch) · dialecto bávaro-franco",nota:"Núremberg está en Franconia, una región con su propio dialecto. El alemán estándar funciona perfecto, pero algunas expresiones locales te ganarán muchas simpatías.",frases:[
  {cat:"🌅 Buenos días",local:"Guten Morgen",pron:"Gú-ten Mór-jen",tip:"Estándar y siempre correcto"},
  {cat:"☀️ Buenas tardes",local:"Guten Tag",pron:"Gú-ten Tak",tip:"El más neutro durante el día"},
  {cat:"🌙 Buenas noches",local:"Guten Abend",pron:"Gú-ten Á-bent",tip:"Desde las 18:00 · al entrar a restaurantes"},
  {cat:"👋 Hola (franco)",local:"Grüß Gott",pron:"Grüs Got",tip:"Saludo bávaro-franco tradicional · literalmente 'Dios te salude'"},
  {cat:"👋 Hola (informal)",local:"Servus",pron:"Sér-vus",tip:"Típico del sur de Alemania · muy cálido y cercano"},
  {cat:"🙏 Por favor",local:"Bitte",pron:"Bí-te",tip:"Universal en toda Alemania"},
  {cat:"😊 Gracias",local:"Danke schön",pron:"Dán-ke shön",tip:"En dialecto local: Vergelt's Gott (vergelt-s-got)"},
  {cat:"🤝 De nada",local:"Gern geschehen",pron:"Gern je-shé-en",tip:"Con mucho gusto · más cálido que solo Bitte"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Was kostet das?",pron:"Vas kós-tet das?",tip:"Para el mercado del Castillo y la Ciudad Vieja"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Wo ist die Toilette?",pron:"Vo ist di Twá-le-te?",tip:"Busca WC en los letreros medievales"},
  {cat:"🍺 ¡Salud!",local:"Prost!",pron:"Prost",tip:"Con una Nürnberger Bratwurst y cerveza franconiana · experiencia completa"}
 ]}
},
{id:"fra",name:"Frankfurt",flag:"🇩🇪",country:"Alemania",days:"Días 12-13",dates:"Mié 17 Sep – Jue 18 Sep",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,libre:[],tourPersonal:"",
 atractivos_itinerario:[
  ["📅 DÍA 12 — Mié 17 Sep","Desayuno · llegada desde Núremberg · visita a Frankfurt"],
  ["Edificios de la familia Römer (ss.XIII-XIV)","el ayuntamiento histórico más fotogénico de Frankfurt"],
  ["Iglesia de San Nicolás","junto al Römerberg · mencionada en el itinerario"],
  ["Catedral Imperial de San Bartolomé","lugar de coronación de los emperadores del Sacro Imperio"],
  ["Banco Central Europeo (BCE)","silueta majestuosa mencionada en el itinerario"],
  ["Banco de Alemania (Deutsche Bundesbank)","una de las instituciones financieras más importantes del mundo"],
  ["Bolsa de Frankfurt (Börse)","famosas estatuas del toro y el oso en su exterior"],
  ["Paseo nocturno en barco por el Río Meno (Paquete 2)","Recorrido nocturno en barco · contraste entre el Römer histórico y el skyline financiero"],
  ["📅 DÍA 13 — Jue 18 Sep","Desayuno · partida hacia Luxemburgo y Metz"],
 ],
 atractivos_recomendados:[
  ["Römerberg (plaza histórica)","corazón turístico medieval de Frankfurt · muy fotogénico"],
  ["Museumsufer","orilla del Main con 12 museos en fila · Städel Art Museum imperdible"],
  ["Kleinmarkthalle","mercado cubierto del siglo XIX con productos regionales únicos"],
  ["Skyline financiero","la silueta más única de Alemania · rascacielos junto al casco medieval"],
 ],
 gastronomia:[
  ["Grüne Soße","salsa fría de 7 hierbas locales · plato símbolo de Frankfurt"],
  ["Handkäse mit Musik","queso fuerte con cebolla en vinagre y comino"],
  ["Frankfurter Würstchen","la salchicha frankfurt original · en mostaza con pan"],
  ["Äppelwoi","sidra de manzana ácida local · la bebida de Frankfurt"],
  ["Rippchen mit Kraut","costillas de cerdo curadas con chucrut"],
 ],
 restaurantes:[
  ["Kleinmarkthalle (Hasengasse 5-7)","mercado gourmet · quesos, embutidos, tapas","€3-8"],
  ["Sachsenhausen (barrio sidrerías)","Äppelwoi y Handkäse · ambiente local auténtico","€3-10"],
  ["Zum Gemalten Haus","sidrería clásica con Grüne Soße casera","€10-18"],
 ],
 video:{t:"GUÍA COMPLETA — Qué ver en Frankfurt del Meno (Alemania)",d:"Guía completa de Frankfurt con todos los puntos de interés · Mar 2025",canal:"Turismo y Viajes",u:"https://www.youtube.com/watch?v=wXLk0_PakKI"},
 mapa:{centro:"Römerberg Frankfurt",url:"https://www.google.com/maps/search/?api=1&query=Romerberg+Frankfurt",pois:[
  ["Römerberg (Plaza Römer)","Romerberg+Frankfurt"],
  ["Iglesia de San Nicolás","St+Nicholas+Church+Frankfurt"],
  ["Catedral Imperial (Dom)","Frankfurt+Cathedral"],
  ["Banco Central Europeo","European+Central+Bank+Frankfurt"],
  ["Bolsa de Frankfurt","Frankfurt+Stock+Exchange"],
  ["Río Meno","Main+River+Frankfurt"],
  ["Main Tower","Main+Tower+Frankfurt"],
  ["Museo Städel","Stadel+Museum+Frankfurt"],
  ["Casa de Goethe","Goethe+House+Frankfurt"],
  ["Barrio Sachsenhausen","Sachsenhausen+Frankfurt"]
 ]},
 saludos:{idioma:"Alemán (Deutsch) · dialecto hessiano",nota:"Frankfurt es la ciudad más cosmopolita de Alemania. El inglés es muy hablado, especialmente en el área financiera. El dialecto local se llama Hessisch pero el alemán estándar es perfecto.",frases:[
  {cat:"🌅 Buenos días",local:"Guten Morgen",pron:"Gú-ten Mór-jen",tip:"Frankfurt madruga mucho — ciudad financiera"},
  {cat:"☀️ Buenas tardes",local:"Guten Tag",pron:"Gú-ten Tak",tip:"Seguro y formal durante el día"},
  {cat:"🌙 Buenas noches",local:"Guten Abend",pron:"Gú-ten Á-bent",tip:"Al llegar al Sachsenhausen para cenar"},
  {cat:"👋 Hola (hessiano)",local:"Guude!",pron:"Gú-de",tip:"El saludo típico de Frankfurt · muy local y apreciado"},
  {cat:"👋 Hola (informal)",local:"Hallo / Hey",pron:"Já-lo / Jey",tip:"En bares y zonas jóvenes del Sachsenhausen"},
  {cat:"🙏 Por favor",local:"Bitte",pron:"Bí-te",tip:"Múltiple uso: pedir, agradecer y dar"},
  {cat:"😊 Gracias",local:"Danke",pron:"Dán-ke",tip:"Rápido y efectivo · en el dialecto local: Merci (francés adoptado)"},
  {cat:"🤝 De nada",local:"Bitte sehr",pron:"Bí-te séer",tip:"Con mucho gusto · correcto y amable"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Was kostet das?",pron:"Vas kós-tet das?",tip:"Útil en el mercado del Römer y tiendas del Zeil"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Wo ist die Toilette?",pron:"Vo ist di Twá-le-te?",tip:"Los baños del aeropuerto son los mejores de Europa"},
  {cat:"🍺 ¡Salud!",local:"Prost! / Ebbelwei!",pron:"Prost / É-bel-vai",tip:"Ebbelwei es la sidra de manzana de Frankfurt · brinda con ella en el Sachsenhausen"}
 ]}
},
{id:"lux",name:"Luxemburgo",flag:"🇱🇺",country:"Gran Ducado de Luxemburgo",days:"Día 13 (excursión) y 14",dates:"Jue 18 Sep – Vie 19 Sep",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,
 libre:["Día 14 — Vie 19 Sep: Luxemburgo es excursión opcional del Paquete 1 desde Metz (55 km · 45 min en tren)."],
 tourPersonal:"⭐ Día 14 (Vie 19 Sep): Si no contratas el tour a Luxemburgo, puedes ir por tu cuenta desde Metz en tren (€10-15 ida y vuelta). La Ciudad de Luxemburgo es visitable en un día completo caminando.",
 atractivos_itinerario:[
  ["Ciudad de Luxemburgo (excursión opcional Paquete 1)","Patrimonio UNESCO · incluida en el tour opcional"],
  ["Ciudad de Schengen (Paquete 2)","Donde se firmó el Acuerdo de Schengen (1985) que abolió los controles fronterizos en Europa"],
 ],
 atractivos_recomendados:[
  ["Casco Antiguo y barrancos del Pétrusse","ciudad sobre profundos valles · vistas únicas"],
  ["Casamatas del Bock","túneles defensivos del siglo XVII abiertos al público"],
  ["Palacio Gran Ducal","residencia oficial del Gran Duque · en el centro histórico"],
  ["Puente Adolphe","art nouveau sobre el valle · vistas espectaculares"],
  ["Place d'Armes","plaza central animada con terrazas"],
 ],
 gastronomia:[
  ["Judd mat Gaardebounen","cerdo ahumado con habas verdes · plato nacional de Luxemburgo"],
  ["Gromperekichelcher","buñuelos de papa callejeros · los más populares"],
  ["Quetschentaart","tarta de ciruelas · postre tradicional luxemburgués"],
  ["Vino Mosela luxemburgués","blancos secos producidos junto al río Mosela"],
 ],
 restaurantes:[
  ["Place d'Armes (brasseries)","menús del día en la plaza central","€12-20"],
  ["Grund (barrio bajo)","restaurantes junto al río Alzette · más económicos","€10-15"],
  ["Mercado cubierto (Knuedler)","quesos, embutidos y productos locales","€5-10"],
 ],
 video:{t:"Qué ver en Luxemburgo en un día — mi ruta perfecta 🇱🇺",d:"Ruta perfecta por la Ciudad de Luxemburgo en español · Sep 2025",canal:"Viajeros en español",u:"https://www.youtube.com/watch?v=gX76bDVBpDc"},
 mapa:{centro:"Place Guillaume II Luxembourg",url:"https://www.google.com/maps/search/?api=1&query=Place+Guillaume+II+Luxembourg+City",pois:[
  ["Plaza Guillaume II","Place+Guillaume+II+Luxembourg"],
  ["Casamatas del Bock","Bock+Casemates+Luxembourg"],
  ["Palacio Gran Ducal","Grand+Ducal+Palace+Luxembourg"],
  ["Catedral Notre-Dame","Notre+Dame+Cathedral+Luxembourg"],
  ["Puente Adolphe","Adolphe+Bridge+Luxembourg"],
  ["Chemin de la Corniche","Chemin+de+la+Corniche+Luxembourg"],
  ["Casco Antiguo","Luxembourg+Old+Quarter"],
  ["Schengen","Schengen+Luxembourg"]
 ]},
 saludos:{idioma:"Luxemburgués (Lëtzebuergesch) · Francés · Alemán",nota:"Luxemburgo tiene 3 idiomas oficiales: luxemburgués, francés y alemán. Todos los hablan. El francés es el más práctico para turistas. Un saludo en luxemburgués es muy especial.",frases:[
  {cat:"🌅 Buenos días (lux.)",local:"Gudde Moien",pron:"Gú-de Móy-en",tip:"El saludo más especial que puedes dar · úsalo y verás las caras de sorpresa"},
  {cat:"☀️ Buenos días (fr.)",local:"Bonjour",pron:"Bon-yur",tip:"Seguro y universal en toda la ciudad"},
  {cat:"🌙 Buenas noches (fr.)",local:"Bonsoir",pron:"Bon-swár",tip:"A partir de las 18:00"},
  {cat:"👋 Hola (lux.)",local:"Moien",pron:"Móy-en",tip:"Muy coloquial · los luxemburgueses lo usan entre ellos todo el día"},
  {cat:"🙏 Por favor (fr.)",local:"S'il vous plaît",pron:"Sil-vu-plé",tip:"Imprescindible en tiendas y cafés"},
  {cat:"😊 Gracias (lux.)",local:"Merci",pron:"Mer-sí",tip:"Usan el Merci francés · igual en los 3 idiomas"},
  {cat:"🤝 De nada (fr.)",local:"De rien / Je vous en prie",pron:"De ryen / Ye vuz on prí",tip:"De rien en casual · Je vous en prie en formal"},
  {cat:"❓ ¿Cuánto cuesta? (fr.)",local:"Combien ça coûte?",pron:"Com-byén sa kut?",tip:"En el mercado Guillaume o tiendas del casco"},
  {cat:"🚽 ¿Baño? (fr.)",local:"Où sont les toilettes?",pron:"Ú son le twá-let?",tip:"Pregunta en cualquier café con confianza"},
  {cat:"🍺 ¡Salud! (lux.)",local:"Prost! / Santé!",pron:"Prost / San-té",tip:"Prost del alemán y Santé del francés · los dos son correctos"}
 ]}
},
{id:"met",name:"Metz",flag:"🇫🇷",country:"Francia (Lorena)",days:"Días 13-15 (ciudad base)",dates:"Jue 18 Sep – Sáb 20 Sep",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,
 libre:["🟢 Día 14 — Vie 19 Sep (DÍA LIBRE): Estrasburgo/Colmar (Paq.1) · Luxemburgo (Paq.1) · Schengen (Paq.2) · o Metz por libre."],
 tourPersonal:"⭐ Día 14 (Vie 19 Sep): Si no contratas excursiones, Metz misma ofrece la Catedral de San Esteban (vitrales medievales más grandes del mundo), el Centre Pompidou-Metz y el Barrio del Temple, todo caminable en un día muy agradable.",
 atractivos_itinerario:[
  ["📅 DÍA 13 — Jue 18 Sep","Desayuno · llegada desde Frankfurt · tiempo libre para excursiones opcionales"],
  ["Ciudad de Luxemburgo (Paquete 1)","Capital del Gran Ducado · Casamatas UNESCO · uno de los centros financieros y políticos de Europa"],
  ["Ciudad de Schengen (Paquete 2)","Donde se firmó el Acuerdo de Schengen (1985) que abolió los controles fronterizos en Europa"],
  ["Metz / Thionville como ciudad base","alojamiento durante los días 13-15"],
  ["📅 DÍA 14 — Vie 19 Sep 🟢 DÍA LIBRE","Excursiones opcionales o exploración libre de Metz"],
  ["Estrasburgo (Paquete 1)","Catedral gótica · sede del Parlamento Europeo · excursión junto con Colmar (Paquete 1)"],
  ["Colmar (Paquete 1)","Arquitectura de cuento de hadas · barrio 'Pequeña Venecia' · excursión junto con Estrasburgo (Paquete 1)"],
  ["📅 DÍA 15 — Sáb 20 Sep","Desayuno · partida hacia Bruselas"],
 ],
 atractivos_recomendados:[
  ["Catedral de San Esteban de Metz","gótica con los vitrales medievales más grandes del mundo · impresionante"],
  ["Centre Pompidou-Metz","museo de arte moderno satélite del de París · arquitectura espectacular"],
  ["Barrio del Temple","medieval con pequeños canales y plazas encantadoras"],
  ["Place de la République","plaza central animada con terrazas y mercado"],
  ["Isla del Saulcy","campus universitario en una isla del Mosela · paseo agradable"],
 ],
 gastronomia:[
  ["Quiche Lorraine","tarta de tocino y crema · originaria exactamente de esta región"],
  ["Mirabelles de Lorena","ciruelas amarillas locales · septiembre es su temporada perfecta"],
  ["Pâté Lorrain","hojaldre relleno de carne marinada · especialidad regional única"],
  ["Vino de Mosela","blancos y tintos de la región de Lorena"],
 ],
 restaurantes:[
  ["Marchés couverts de Metz","quiches, embutidos y productos locales","€5-10"],
  ["Winstubs del centro","bistrós alsacianos · quiche y vino","€10-16"],
  ["Place Saint-Jacques (zona)","plaza central · menús del día variados","€10-16"],
 ],
 video:{t:"🇫🇷 Qué hacer en Metz Francia — Lugares Imprescindibles",d:"Los lugares imprescindibles de Metz en español · el mejor video disponible · Feb 2024",canal:"Explora el Mundo",u:"https://www.youtube.com/watch?v=fB4Rnr_kCJM"},
 mapa:{centro:"Place dArmes Metz",url:"https://www.google.com/maps/search/?api=1&query=Place+darmes+Metz+France",pois:[
  ["Catedral de Saint-Étienne","Saint+Etienne+Cathedral+Metz"],
  ["Place d'Armes","Place+darmes+Metz"],
  ["Place Saint-Louis","Place+Saint+Louis+Metz"],
  ["Centre Pompidou-Metz","Centre+Pompidou+Metz"],
  ["Puerta Imperial Alemana","Porte+des+Allemands+Metz"],
  ["Jardín de la Esplanada","Esplanade+Metz"],
  ["Río Mosela","Moselle+River+Metz"],
  ["Estrasburgo","Strasbourg+France"],
  ["Colmar","Colmar+France"]
 ]},
 saludos:{idioma:"Francés (Français) · Lorena",nota:"Metz es una ciudad de la región de Lorena, frontera con Alemania y Luxemburgo. El francés es el idioma de uso diario. Los loreneneses aprecian mucho el esfuerzo por hablar su lengua.",frases:[
  {cat:"🌅 Buenos días",local:"Bonjour",pron:"Bon-yur",tip:"El saludo más importante en Francia · siempre primero que cualquier pregunta"},
  {cat:"🌙 Buenas noches",local:"Bonsoir",pron:"Bon-swár",tip:"A partir de las 18:00 · en restaurantes y tiendas"},
  {cat:"👋 Hola (informal)",local:"Salut",pron:"Sa-lú",tip:"Solo con personas de confianza o jóvenes · nunca a desconocidos"},
  {cat:"🙏 Por favor",local:"S'il vous plaît",pron:"Sil-vu-plé",tip:"Obligatorio antes de pedir cualquier cosa · sin esto pueden ignorarte"},
  {cat:"😊 Gracias",local:"Merci beaucoup",pron:"Mer-sí bo-kú",tip:"Beaucoup = mucho · solo Merci también está perfecto"},
  {cat:"🤝 De nada",local:"De rien / Avec plaisir",pron:"De ryen / A-vek ple-zír",tip:"Avec plaisir es más cálido · con mucho gusto"},
  {cat:"❓ ¿Cuánto cuesta?",local:"Combien ça coûte?",pron:"Com-byén sa kut?",tip:"En el mercado Place de la Cathédrale o tiendas locales"},
  {cat:"🚽 ¿Dónde está el baño?",local:"Où sont les toilettes?",pron:"Ú son le twá-let?",tip:"Los franceses no dicen 'salle de bain' para baños públicos"},
  {cat:"🍺 ¡Salud!",local:"Santé!",pron:"San-té",tip:"Obligatorio mirar a los ojos · no hacerlo trae mala suerte según la tradición francesa"},
  {cat:"😋 ¡Buen provecho!",local:"Bon appétit!",pron:"Bon a-pe-tí",tip:"Dilo al sentarte · los franceses lo dicen antes de cada comida"}
 ]}
},
{id:"bru",name:"Bruselas",flag:"🇧🇪",country:"Bélgica",days:"Días 15-17",dates:"Sáb 20 Sep – Lun 22 Sep",moneda:"Euro (€)",cambio:`1 € = $${EUR.toFixed(2)} MXN`,
 libre:["🟢 Día 16 — Dom 21 Sep (DÍA LIBRE): Brujas y Gante (Paquete 1) · o Bruselas por libre."],
 tourPersonal:"Día 16 (Dom 21 Sep): Si no tomas el tour a Brujas/Gante, Bruselas ofrece el Atomium, los Museos Reales de Bellas Artes (Magritte, Bruegel, Rubens) y el Barrio Europeo, todo a pie.",
 atractivos_itinerario:[
  ["📅 DÍA 15 — Sáb 20 Sep","Desayuno · llegada desde Metz · recorrido por Bruselas"],
  ["Grand Place (Plaza Mayor)","Patrimonio UNESCO · considerada la plaza más bella del mundo"],
  ["Galerías Reales de Saint-Hubert","pasaje comercial neoclásico del siglo XIX"],
  ["Manneken Pis","escultura icónica símbolo de Bruselas"],
  ["Palacio Real de Bruselas","residencia oficial del rey belga"],
  ["Museos Reales de Bellas Artes","Bruegel, Rubens y Magritte bajo el mismo techo"],
  ["📅 DÍA 16 — Dom 21 Sep 🟢 DÍA LIBRE","Excursiones opcionales o Bruselas por libre"],
  ["Ciudades de Brujas y Gante (Paquete 1)","Brujas: 'Venecia del Norte' · canales medievales · arquitectura flamenca. Gante: castillo medieval · ciudad vibrante"],
  ["📅 DÍA 17 — Lun 22 Sep","Desayuno · partida hacia Ámsterdam"],
 ],
 atractivos_recomendados:[
  ["Atomium","estructura de hierro en forma de átomo · Expo 1958 · ícono de Bruselas"],
  ["Barrio Europeo","sede de la Comisión Europea y el Parlamento Europeo"],
  ["Catedral de San Miguel y Santa Gúdula","gótica del siglo XIII · impresionante interior"],
  ["Barrio de las Marolles","popular con mercado de antigüedades Place du Jeu de Balle"],
 ],
 gastronomia:[
  ["Gaufres de Bruselas","waffle rectangular y crujiente · el auténtico es el de la calle"],
  ["Moules-frites","mejillones al vapor con papas fritas · plato nacional belga"],
  ["Carbonade flamande","estofado de ternera a la cerveza belga · profundo y sabroso"],
  ["Chocolate belga","Godiva, Neuhaus, Leonidas · los mejores del mundo"],
  ["Cerveza belga","1,500+ variedades: Trappist, Gueuze, Lambic, Dubbel"],
  ["Frites belges","papas fritas en cono con mayonesa · las más crujientes de Europa"],
 ],
 restaurantes:[
  ["Friterie Antoine (Place Jourdan)","las papas fritas más famosas de Bruselas","€4-6"],
  ["Rue du Marché aux Fromages","calle de menús mediterráneos variados","€8-13"],
  ["Mercado de Midi (domingos)","el mayor mercado de Bélgica · quesos, panes","€3-8"],
  ["Moeder Lambic (St-Gilles)","400+ cervezas artesanales con tapas","€5-12"],
 ],
 video:{t:"Descubre BRUSELAS, BRUJAS y GANTE — lo imprescindible de Bélgica",d:"Las tres ciudades más bellas de Bélgica en un solo video · Dic 2024",canal:"Guía Mundial de Viajes",u:"https://www.youtube.com/watch?v=hJmQYpXPt5g"},
 mapa:{centro:"Grand Place Brussels",url:"https://www.google.com/maps/search/?api=1&query=Grand+Place+Brussels",pois:[
  ["Grand Place (Plaza Mayor)","Grand+Place+Brussels"],
  ["Galerías Saint-Hubert","Galeries+Saint+Hubert+Brussels"],
  ["Manneken Pis","Manneken+Pis+Brussels"],
  ["Palacio Real","Royal+Palace+Brussels"],
  ["Museos Reales de Bellas Artes","Royal+Museums+of+Fine+Arts+Brussels"],
  ["Atomium","Atomium+Brussels"],
  ["Museo Magritte","Magritte+Museum+Brussels"],
  ["Mont des Arts","Mont+des+Arts+Brussels"],
  ["Mini-Europe","Mini+Europe+Brussels"],
  ["Brujas","Bruges+Belgium"],
  ["Gante","Ghent+Belgium"]
 ]},
 saludos:{idioma:"Francés (Français) · Neerlandés (Nederlands)",nota:"Bruselas es oficialmente bilingüe pero en la práctica se usa más el francés. Los belgas son famosos por ser muy amables y tolerantes con los extranjeros que intentan su idioma.",frases:[
  {cat:"🌅 Buenos días (fr.)",local:"Bonjour",pron:"Bon-yur",tip:"El saludo que abre todas las puertas en Bruselas"},
  {cat:"🌙 Buenas noches (fr.)",local:"Bonsoir",pron:"Bon-swár",tip:"Al llegar a restaurantes o bares por la noche"},
  {cat:"👋 Hola (belga)",local:"Dag / Bonjour",pron:"Daj / Bon-yur",tip:"Dag es el saludo neerlandés · muy usado en Bruselas también"},
  {cat:"🙏 Por favor (fr.)",local:"S'il vous plaît",pron:"Sil-vu-plé",tip:"Esencial antes de pedir cualquier cosa · los belgas son muy formales"},
  {cat:"😊 Gracias (fr.)",local:"Merci",pron:"Mer-sí",tip:"En Bruselas también aceptan Dank u (neerlandés)"},
  {cat:"😊 Gracias (neer.)",local:"Dank u wel",pron:"Dank ú vel",tip:"Usar esto en Bruselas sorprende y agrada mucho"},
  {cat:"🤝 De nada",local:"De rien / Graag gedaan",pron:"De ryen / Jráj je-dán",tip:"Francés o neerlandés según el idioma en que hables"},
  {cat:"❓ ¿Cuánto cuesta? (fr.)",local:"Combien ça coûte?",pron:"Com-byén sa kut?",tip:"Para el mercado de la Grand Place y chocolate belga"},
  {cat:"🚽 ¿Dónde está el baño? (fr.)",local:"Où sont les toilettes?",pron:"Ú son le twá-let?",tip:"Muchos bares belgas tienen WC solo para clientes"},
  {cat:"🍺 ¡Salud!",local:"Santé! / Proost!",pron:"San-té / Próost",tip:"Bélgica tiene más de 1,500 cervezas · merece un brindis especial"},
  {cat:"🍫 ¡Esto está delicioso!",local:"C'est délicieux!",pron:"Se de-li-syó",tip:"Dilo al probar el chocolate belga · es la verdad absoluta"}
 ]}
},
];

const tourPkgs=[
{id:"p1",label:"Paquete 1 — $679 USD",tours:[
 {id:"pot",name:"Potsdam",flag:"🇩🇪",base:"Desde Berlín · 35 km · 35 min",
  desc:"Capital del estado de Brandeburgo. Famosa por sus impresionantes palacios y jardines, especialmente el Palacio de Sanssouci, residencia de verano de Federico el Grande, que es Patrimonio de la Humanidad por la UNESCO.",
  atractivos:[
   ["Palacio Sanssouci","Patrimonio UNESCO · residencia de verano de Federico el Grande del s.XVIII"],
   ["Palacio Cecilienhof","donde se firmó el Tratado de Potsdam (agosto 1945)"],
   ["Palacio Nuevo (Neues Palais)","el mayor del conjunto · barroco prusiano"],
   ["Parque Sanssouci","300 hectáreas de jardines y palacios interconectados"],
   ["Barrio Hollandisches Viertel","casas de estilo holandés del s.XVIII · fotogénico"],
  ],
  gastronomia:["Misma gastronomía alemana que Berlín (30 km distancia)","Cafés junto al parque con ambiente más refinado que en Berlín"]
 },
 {id:"aus",name:"Auschwitz-Birkenau",flag:"🇵🇱",base:"Desde Cracovia · 75 km · 1h 15min",
  desc:"El complejo más grande de campos de concentración y exterminio nazi. Una visita profundamente emotiva e histórica, considerada un monumento a las víctimas del Holocausto.",
  atractivos:[
   ["Campo Auschwitz I","campo principal con la entrada 'Arbeit Macht Frei'"],
   ["Campo Auschwitz II-Birkenau","el mayor campo de exterminio · ruinas de cámaras de gas y hornos"],
   ["Museo Estatal","uno de los sitios históricos más visitados del mundo"],
   ["Memorial del Holocausto","Patrimonio UNESCO desde 1979 · visita profundamente emotiva"],
  ],
  gastronomia:["Visita memorial · llevar agua y snack · no hay servicios de restauración","Pueblo de Oświęcim a 2 km con restaurantes polacos básicos"]
 },
 {id:"mol",name:"Barco Río Moldava",flag:"🇨🇿",base:"Centro de Praga",
  desc:"Un tranquilo recorrido en barco que ofrece una perspectiva única de Praga, pasando bajo el Puente de Carlos y brindando vistas panorámicas del Castillo de Praga y otros monumentos importantes de la ciudad.",
  atractivos:[
   ["Crucero panorámico por el Moldava","vistas del Puente de Carlos desde el agua"],
   ["Castillo de Praga visto desde el río","perspectiva única que no se logra desde tierra"],
   ["15 puentes históricos del centro","vistos desde abajo durante el trayecto"],
   ["Opción nocturna disponible","crucero de noche con puentes y castillo iluminados"],
  ],
  gastronomia:["Algunos cruceros incluyen cena checa o bebidas a bordo","Opciones de crucero-cena con música tradicional bohemia"]
 },
 {id:"rot",name:"Rothenburg ob der Tauber",flag:"🇩🇪",base:"Desde Núremberg · 100 km · 1h",
  desc:"Una de las ciudades medievales mejor conservadas de Alemania, famosa por sus murallas, casas de entramado de madera y ambiente de cuento de hadas. Es parte de la Ruta Romántica.",
  atractivos:[
   ["Murallas medievales del s.XIV","3.5 km caminables en perfecto estado de conservación"],
   ["Plaza del Mercado y Rathaus","ayuntamiento renacentista con panorámica sobre la ciudad"],
   ["Kriminalmuseum","museo de justicia medieval con instrumentos de tortura"],
   ["Käthe Wohlfahrt","la tienda de navidad más famosa del mundo · abierta todo el año"],
   ["El Guardián Nocturno","tour vespertino guiado por las murallas · muy popular"],
  ],
  gastronomia:["Schneeballen: bolas de masa frita espolvoreadas · el dulce local icónico","Cordero y cerdo asado con recetas franconias en la plaza medieval"]
 },
 {id:"lxp",name:"Ciudad de Luxemburgo",flag:"🇱🇺",base:"Desde Metz · 55 km · 45 min",
  desc:"Capital del Gran Ducado de Luxemburgo. Destaca por sus fortificaciones históricas (las 'casamatas'), sus profundos barrancos y su función como uno de los centros financieros y políticos de Europa.",
  atractivos:[
   ["Casamatas del Bock","21 km de túneles subterráneos excavados en roca · Patrimonio UNESCO"],
   ["Casco Antiguo (Ville Haute)","Patrimonio UNESCO · callejuelas medievales perfectamente conservadas"],
   ["Palacio Gran Ducal","residencia oficial del Gran Duque · cambio de guardia"],
   ["Puente Adolphe","puente de piedra de 1903 · símbolo de la ciudad · vistas al barranco"],
   ["Chemin de la Corniche","'el balcón más bello de Europa' · vistas panorámicas sobre el Alzette"],
  ],
  gastronomia:["Judd mat Gaardebounen: cuello de cerdo ahumado con habas · plato nacional luxemburgués","Vinos Mosela luxemburgueses en bodegas del centro · blancos secos excelentes","Gromperekichelcher: tortitas de papa especiadas · street food típico"]
 },
 {id:"str",name:"Estrasburgo y Colmar",flag:"🇫🇷",base:"Desde Metz · 215 km · 2h",
  desc:"Estrasburgo es famosa por su catedral gótica y ser sede del Parlamento Europeo. Colmar es una joya pintoresca conocida por su arquitectura de cuento y el barrio de la 'Pequeña Venecia'.",
  atractivos:[
   ["Catedral de Notre-Dame (Estrasburgo)","gótica del s.XIV · 142 m · una de las más altas del mundo"],
   ["Barrio Petite France (Estrasburgo)","canales y casas de entramado medieval · Patrimonio UNESCO"],
   ["Parlamento Europeo (Estrasburgo)","sede del PE · visitable con cita previa"],
   ["Barrio Petite Venise (Colmar)","canales con casas alsacianas de cuento · muy fotogénico"],
   ["Museo Unterlinden (Colmar)","con el Retablo de Issenheim de Grünewald (s.XVI)"],
  ],
  gastronomia:["Choucroute garnie: chucrut con embutidos y papas · plato regional definitivo","Flammekueche (Tarte flambée): pizza alsaciana con crema, cebolla y lardons","Kougelhopf: bizcocho alsaciano con almendras y pasas · ideal para llevar"]
 },
 {id:"brug",name:"Brujas y Gante",flag:"🇧🇪",base:"Brujas: 96 km (1h) · Gante: 55 km (35min) desde Bruselas",
  desc:"Brujas es conocida como la 'Venecia del Norte', famosa por sus canales, plazas medievales y arquitectura flamenca. Gante es una ciudad vibrante con un impresionante castillo medieval y un rico pasado.",
  atractivos:[
   ["Brujas — Canales y casco histórico","la 'Venecia del Norte' · Patrimonio UNESCO completo"],
   ["Belfry de Brujas (Belfort)","torre del s.XIII · 366 escalones · vistas únicas sobre la ciudad"],
   ["Begijnhof de Brujas","complejo monástico medieval junto al lago del amor"],
   ["Gante — Castillo de los Condes (Gravensteen)","fortaleza medieval del s.IX perfectamente conservada"],
   ["Catedral de San Bavón (Gante)","con el Políptico del Cordero Místico de Van Eyck (s.XV)"],
  ],
  gastronomia:["Brujas: chocolate artesanal en tiendas independientes desde €3","Gante: Gentse Stoverij, estofado de ternera a la cerveza local","Gaufres de Lieja (esponjosas con perlas de azúcar) en puestos callejeros"]
 },
]},
{id:"p2",label:"Paquete 2 — $669 USD",tours:[
 {id:"wie",name:"Minas Wieliczka",flag:"🇵🇱",base:"Desde Cracovia · 15 km · 20 min",
  desc:"Una de las minas de sal operativas más antiguas del mundo, famosa por sus impresionantes cámaras, lagos subterráneos, y capillas esculpidas completamente en roca de sal, incluyendo la Capilla de Santa Kinga.",
  atractivos:[
   ["Minas de sal de Wieliczka","Patrimonio UNESCO · operativas desde el siglo XIII"],
   ["Capilla de Santa Kinga","esculpida completamente en sal · una de las obras más sorprendentes del mundo"],
   ["Lagos subterráneos","a 135 metros de profundidad · efecto espejo increíble"],
   ["300 km de galerías en 9 niveles","visita guiada de 2-3 horas · escala impresionante"],
  ],
  gastronomia:["Restaurante subterráneo dentro de la mina · experiencia única","Comida polaca en el pueblo de Wieliczka antes o después de la visita"]
 },
 {id:"kv",name:"Karlovy Vary",flag:"🇨🇿",base:"Desde Praga · 130 km · 1h 30min",
  desc:"Un famoso y elegante balneario conocido por sus doce fuentes termales. Frecuentado históricamente por la realeza y celebridades, es un lugar ideal para la relajación y el paseo por sus colonnades.",
  atractivos:[
   ["Colonadas y 12 fuentes termales","cada fuente con agua a diferente temperatura · icónicas"],
   ["Mlýnská kolonáda","la colonada más imponente del balneario · neorrenacentista"],
   ["Colina del castillo","vistas panorámicas sobre el valle de los ríos"],
   ["Moser Glass Factory","fábrica de cristal de Bohemia del s.XIX · visitable"],
  ],
  gastronomia:["Becherovka: licor herbáceo destilado aquí desde 1807 · imperdible","Oplatky: obleas azucaradas rellenas · el souvenir gastronómico del balneario"]
 },
 {id:"mun",name:"Múnich",flag:"🇩🇪",base:"Desde Núremberg · 170 km · 1h 45min",
  desc:"Capital de Baviera, famosa por el Oktoberfest, sus elegantes plazas (Marienplatz), edificios históricos como el Nuevo Ayuntamiento y su rica cultura cervecera.",
  atractivos:[
   ["Marienplatz y Nuevo Ayuntamiento","reloj glockenspiel que toca a las 11h y 17h"],
   ["Englischer Garten","el parque urbano más grande del mundo · mayor que Central Park"],
   ["Hofbräuhaus","cervecería histórica del s.XVI · la más famosa de Baviera"],
   ["Museo Alemán (Deutsches Museum)","el mayor museo de ciencia y tecnología del mundo"],
   ["Frauenkirche","catedral con torres gemelas · símbolo de Múnich"],
  ],
  gastronomia:["Weisswurst: salchicha blanca bávara · se sirve antes del mediodía con pretzel y mostaza dulce","Schweinshaxe: codillo de cerdo a la parrilla · el plato bávaro más contundente","Pretzel gigante con Obatzda (crema de queso bávara) en las cervecerías"]
 },
 {id:"noc",name:"Noche Checa con cena",flag:"🇨🇿",base:"En Praga",
  desc:"Una experiencia nocturna y cultural que generalmente incluye una cena tradicional checa, acompañada de música folclórica, bailes típicos y posiblemente vino o cerveza local.",
  atractivos:[
   ["Cena tradicional checa","svíčková, guláš y knedlíky en ambiente de época"],
   ["Música folclórica checa en vivo","canciones y danzas típicas de Bohemia"],
   ["Bailes típicos checos","demostración y participación incluidas"],
   ["Cerveza checa de barril","Pilsner Urquell, Kozel o Budvar directamente de la fuente"],
  ],
  gastronomia:["Menú completo de cocina checa incluido · 3 platos + bebidas","Ambiente íntimo en restaurante histórico del casco antiguo de Praga"]
 },
 {id:"bar",name:"Barco Río Meno (Frankfurt)",flag:"🇩🇪",base:"En Frankfurt",
  desc:"Un recorrido en el río Meno que permite apreciar el contraste de Frankfurt: desde el centro histórico (Römer) hasta la impresionante línea del horizonte con sus rascacielos financieros.",
  atractivos:[
   ["Crucero nocturno por el río Meno","contraste entre el Römerberg medieval y los rascacielos financieros"],
   ["Vistas del skyline de Frankfurt","la silueta más única de Alemania vista desde el agua"],
   ["Puentes históricos del centro","iluminados de noche durante el crucero"],
  ],
  gastronomia:["Algunos cruceros incluyen aperitivo de Äppelwoi (sidra local) a bordo","Disponible aperitivo ligero con bocadillos francofortianos"]
 },
 {id:"sch",name:"Ciudad de Schengen",flag:"🇱🇺",base:"Desde Metz · 60 km · 50 min",
  desc:"Un pequeño pueblo que es mundialmente conocido por ser el lugar donde se firmó el Acuerdo de Schengen en 1985, que abolió los controles fronterizos entre los países europeos signatarios.",
  atractivos:[
   ["Espacio Schengen (Museo)","donde se firmó el Acuerdo Schengen (1985) que abolió las fronteras internas europeas"],
   ["Monumento del Acuerdo","a orillas del Mosela · donde se unen Francia, Luxemburgo y Alemania"],
   ["Paseo por el río Mosela","viñedos y paisaje pittoresco de la región"],
  ],
  gastronomia:["Vino Mosela luxemburgués en bodegas locales · blancos secos excelentes","Pueblo pequeño con un par de restaurantes de cocina regional"]
 },
 {id:"vol",name:"Volendam, Marken y La Haya",flag:"🇳🇱",base:"Desde Ámsterdam: Volendam 22 km · La Haya 60 km",
  desc:"Volendam y Marken son pintorescos pueblos pesqueros conocidos por sus casas de madera y trajes tradicionales. La ciudad de La Haya (Den Haag) es la sede del gobierno neerlandés y hogar de la Corte Internacional de Justicia.",
  atractivos:[
   ["Volendam","pueblo pesquero con casas de madera y trajes tradicionales holandeses"],
   ["Marken","isla-pueblo con casas verdes sobre pilotes · muy fotogénico"],
   ["La Haya (Den Haag)","sede del gobierno neerlandés y la Corte Internacional de Justicia"],
   ["Mauritshuis (La Haya)","museo con La Joven de la Perla de Vermeer"],
  ],
  gastronomia:["Haring fresco en Volendam directamente del puerto · el más fresco del país","Stroopwafels artesanales en mercados locales","Poffertjes (mini panqueques con mantequilla) en puestos de Volendam"]
 },
]},
];

const distMain=[
 {de:"Ámsterdam",a:"Hannover",km:280,t:"2h 30min"},
 {de:"Hannover",a:"Berlín",km:288,t:"2h 45min"},
 {de:"Berlín",a:"Varsovia",km:575,t:"5h 30min"},
 {de:"Varsovia",a:"Cracovia",km:300,t:"3h 00min"},
 {de:"Cracovia",a:"Praga",km:540,t:"5h 15min"},
 {de:"Praga",a:"Núremberg",km:360,t:"3h 30min"},
 {de:"Núremberg",a:"Frankfurt",km:230,t:"2h 15min"},
 {de:"Frankfurt",a:"Luxemburgo",km:220,t:"2h 15min"},
 {de:"Luxemburgo",a:"Metz",km:55,t:"45min"},
 {de:"Metz",a:"Bruselas",km:310,t:"3h 00min"},
 {de:"Bruselas",a:"Ámsterdam",km:210,t:"2h 00min"},
];
const distTours=[
 {de:"Berlín",a:"Potsdam",km:35,t:"35min"},
 {de:"Cracovia",a:"Auschwitz-Birkenau",km:75,t:"1h 15min"},
 {de:"Cracovia",a:"Minas Wieliczka",km:15,t:"20min"},
 {de:"Núremberg",a:"Rothenburg ob der Tauber",km:100,t:"1h 00min"},
 {de:"Núremberg",a:"Múnich",km:170,t:"1h 45min"},
 {de:"Metz",a:"Estrasburgo",km:215,t:"2h 00min"},
 {de:"Estrasburgo",a:"Colmar",km:75,t:"45min"},
 {de:"Metz",a:"Ciudad de Schengen",km:60,t:"50min"},
 {de:"Praga",a:"Karlovy Vary",km:130,t:"1h 30min"},
 {de:"Bruselas",a:"Gante",km:55,t:"30min"},
 {de:"Bruselas",a:"Brujas",km:95,t:"1h 00min"},
 {de:"Ámsterdam",a:"Volendam/Marken",km:22,t:"25min"},
 {de:"Ámsterdam",a:"La Haya (Den Haag)",km:60,t:"50min"},
];

let curView='home',curCity=0,curSub='itinerario',curPkg=0,curTour=0;

function sv(v){
 curView=v;
 document.querySelectorAll('.view').forEach(e=>e.classList.remove('active'));
 document.querySelectorAll('.nav-btn').forEach(e=>e.classList.remove('active'));
 document.getElementById('view-'+v).classList.add('active');
 document.getElementById('nav-'+v).classList.add('active');
 if(v==='ciudades')renderCities();
 if(v==='tours')renderTours();
 if(v==='dist')renderDist();
 if(v==='monedas')renderMonedas();
}

function renderCities(){
 document.getElementById('city-pills').innerHTML=cities.map((c,i)=>
  `<button class="pill${i===curCity?' active':''}" onclick="selC(${i})">${c.flag} ${c.name}</button>`
 ).join('');
 const tabs=[['itinerario','📋 Del itinerario'],['recomendados','⭐ Recomendados'],['gastronomia','🍽️ Gastronomía'],['restaurantes','🍴 Dónde comer'],['saludos','🗣️ Saludos'],['mapa','🗺️ Mapa'],['fotos','📸 Fotos'],['video','📺 Video']];
 document.getElementById('sub-pills').innerHTML=tabs.map(s=>
  `<button class="subpill${curSub===s[0]?' active':''}" onclick="selS('${s[0]}')">${s[1]}</button>`
 ).join('');
 renderCityBody();
}

function renderCityBody(){
 const c=cities[curCity];let h='';
 if(c.libre.length) h+=`<div class="libre-box"><p>🗓️ ${c.libre[0]}</p></div>`;
 if(c.tourPersonal) h+=`<div class="tp-box"><div class="tpt">🌟 Tour personal sugerido</div><p>${c.tourPersonal}</p></div>`;
 if(curSub==='itinerario'){
  h+=`<div class="card"><div class="card-header"><div class="card-title">${c.flag} ${c.name}</div><div class="card-sub">${c.country} · ${c.days}<br><span style="color:var(--gold)">${c.dates}</span></div><div class="tag">${c.moneda} · ${c.cambio}</div></div>`;
  h+=`<div class="section-label">Atractivos que incluye el tour</div>`;
  h+=c.atractivos_itinerario.map(a=>{
   const isDay=a[0].startsWith('📅');
   const isLibre=a[0].includes('🟢');
   if(isDay&&isLibre) return `<div class="day-header day-libre">${a[0]}<div style="font-size:12px;font-weight:400;margin-top:2px;opacity:.85">${a[1]}</div></div>`;
   if(isDay) return `<div class="day-header">${a[0]}<div style="font-size:12px;font-weight:400;margin-top:2px;opacity:.85">${a[1]}</div></div>`;
   return `<div class="list-item"><span class="lb">◆</span><div class="list-text">${a[0]}<div class="list-sub">${a[1]}</div></div></div>`;
  }).join('');
  h+='</div>';
  h+=renderNotes(c.id,'itinerario');
 } else if(curSub==='recomendados'){
  h+=`<div class="card"><div class="card-header"><div class="card-title">⭐ Recomendados adicionales</div><div class="card-sub">No incluidos en el tour · visitar por tu cuenta en tiempo libre</div></div>`;
  h+=`<div class="section-label">Atractivos adicionales recomendados</div>`;
  h+=c.atractivos_recomendados.map(a=>`<div class="list-item"><span class="lb2">◇</span><div class="list-text">${a[0]}<div class="list-sub">${a[1]}</div></div></div>`).join('');
  h+='</div>';
  h+=renderNotes(c.id,'recomendados');
 } else if(curSub==='gastronomia'){
  h+=`<div class="card"><div class="card-header"><div class="card-title">🍽️ Gastronomía típica</div></div>`;
  h+=c.gastronomia.map(g=>`<div class="list-item"><span class="lb">◆</span><div class="list-text">${g[0]}<div class="list-sub">${g[1]}</div></div></div>`).join('');
  h+='</div>';
  h+=renderNotes(c.id,'gastronomia');
 } else if(curSub==='restaurantes'){
  h+=`<div class="card"><div class="card-header"><div class="card-title">🍴 Dónde comer económico</div></div>`;
  h+=c.restaurantes.map(r=>`<div class="rest-row"><div style="flex:1"><div class="rname">${r[0]}</div><div class="rdesc">${r[1]}</div></div><span class="rprice">${r[2]}</span></div>`).join('');
  h+='</div>';
  h+=renderNotes(c.id,'restaurantes');
 } else if(curSub==='saludos'){
  const s=c.saludos;
  h+=`<div class="card"><div class="card-header"><div class="card-title">🗣️ Frases útiles en ${s.idioma}</div><div class="card-sub">${s.nota}</div></div>`;
  h+=s.frases.map(f=>`<div class="saludo-row"><div class="saludo-cat">${f.cat}</div><div class="saludo-local">${f.local}</div><div class="saludo-pron">🔊 <em>${f.pron}</em></div><div class="saludo-tip">💡 ${f.tip}</div></div>`).join('');
  h+='</div>';
 } else if(curSub==='mapa'){
  const m=c.mapa;
  h+=`<div class="card"><div class="card-header"><div class="card-title">🗺️ Mapa de ${c.name}</div><div class="card-sub">Toca cualquier lugar para abrirlo en Google Maps</div></div>`;
  h+=`<a class="vlink" href="${m.url}" target="_blank" rel="noopener" style="background:rgba(201,168,76,0.08)"><div class="pbtn" style="background:var(--gold);color:#0f1923">📍</div><div style="flex:1"><div class="vtitle">Ver mapa general de ${c.name}</div><div class="vdesc">Abre Google Maps centrado en el casco histórico</div></div></a>`;
  h+=`<div class="section-label">📌 Lugares del itinerario</div>`;
  h+=m.pois.map(p=>`<a class="map-poi" href="https://www.google.com/maps/search/?api=1&query=${p[1]}" target="_blank" rel="noopener"><span class="poi-icon">📍</span><div class="poi-name">${p[0]}</div><span class="poi-arrow">↗</span></a>`).join('');
  h+='</div>';
 } else if(curSub==='fotos'){
  h+=renderFotos(c.id,c.name);
 } else if(curSub==='video'){
  h+=`<div class="card"><div class="card-header"><div class="card-title">📺 Mejor video en YouTube</div><div class="card-sub">En español · mejor valorado disponible para esta ciudad</div></div>`;
  h+=`<a class="vlink" href="${c.video.u}" target="_blank"><div class="pbtn">▶</div><div><div class="vtitle">${c.video.t}</div><div class="vdesc">${c.video.d}</div><div style="font-size:12px;color:var(--gold);margin-top:4px">Canal: ${c.video.canal}</div></div></a></div>`;
 }
 document.getElementById('city-body').innerHTML=h;
}

// ========= NOTES SYSTEM =========
function getNotes(cityId,section){
 try{
  const raw=localStorage.getItem('notes_'+cityId+'_'+section);
  return raw?JSON.parse(raw):[];
 }catch(e){return [];}
}
function saveNotes(cityId,section,arr){
 try{localStorage.setItem('notes_'+cityId+'_'+section,JSON.stringify(arr));}catch(e){}
}
function renderNotes(cityId,section){
 const notes=getNotes(cityId,section);
 const sectionTitle={itinerario:'itinerario',recomendados:'recomendados',gastronomia:'gastronomía',restaurantes:'dónde comer'}[section]||section;
 let h='<div class="card notes-card">';
 h+=`<div class="card-header"><div class="card-title">📝 Mis notas de ${sectionTitle}</div><div class="card-sub">Solo en este teléfono · ${notes.length} ${notes.length===1?'nota':'notas'}</div></div>`;
 if(notes.length){
  h+=notes.map((n,i)=>`<div class="note-row"><div class="note-content">${escapeHtml(n.text)}<div class="note-date">${n.date}</div></div><button class="note-del" onclick="delNote('${cityId}','${section}',${i})">🗑</button></div>`).join('');
 } else {
  h+=`<div style="padding:12px 14px;font-size:13px;color:var(--dim);text-align:center">No has agregado notas todavía</div>`;
 }
 h+=`<div class="note-add">
  <textarea id="note-input-${cityId}-${section}" placeholder="Escribe una nota (restaurante recomendado, lugar visto, etc.)" rows="2"></textarea>
  <button class="note-add-btn" onclick="addNote('${cityId}','${section}')">➕ Agregar nota</button>
 </div>`;
 h+='</div>';
 return h;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'})[c]);}
function addNote(cityId,section){
 const ta=document.getElementById('note-input-'+cityId+'-'+section);
 if(!ta)return;
 const text=ta.value.trim();
 if(!text)return;
 const notes=getNotes(cityId,section);
 const now=new Date();
 const dateStr=now.toLocaleDateString('es-MX',{day:'numeric',month:'short'})+' · '+now.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'});
 notes.push({text:text,date:dateStr});
 saveNotes(cityId,section,notes);
 renderCityBody();
}
function delNote(cityId,section,idx){
 if(!confirm('¿Borrar esta nota?'))return;
 const notes=getNotes(cityId,section);
 notes.splice(idx,1);
 saveNotes(cityId,section,notes);
 renderCityBody();
}

// ========= PHOTOS SYSTEM (IndexedDB) =========
// IndexedDB handles large binary data better than localStorage (which has ~5MB limit)
let photoDB=null;
function openPhotoDB(){
 return new Promise((resolve,reject)=>{
  if(photoDB){resolve(photoDB);return;}
  const req=indexedDB.open('europa_photos',1);
  req.onerror=()=>reject(req.error);
  req.onupgradeneeded=e=>{
   const db=e.target.result;
   if(!db.objectStoreNames.contains('photos')){
    const store=db.createObjectStore('photos',{keyPath:'id',autoIncrement:true});
    store.createIndex('cityId','cityId',{unique:false});
   }
  };
  req.onsuccess=()=>{photoDB=req.result;resolve(photoDB);};
 });
}
async function getPhotos(cityId){
 try{
  const db=await openPhotoDB();
  return new Promise((resolve)=>{
   const tx=db.transaction('photos','readonly');
   const store=tx.objectStore('photos');
   const idx=store.index('cityId');
   const req=idx.getAll(cityId);
   req.onsuccess=()=>resolve(req.result||[]);
   req.onerror=()=>resolve([]);
  });
 }catch(e){return [];}
}
async function savePhoto(cityId,dataUrl,caption){
 const db=await openPhotoDB();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction('photos','readwrite');
  const store=tx.objectStore('photos');
  const now=new Date();
  const dateStr=now.toLocaleDateString('es-MX',{day:'numeric',month:'short',year:'numeric'});
  const photo={cityId:cityId,data:dataUrl,caption:caption||'',date:dateStr,ts:Date.now()};
  const req=store.add(photo);
  req.onsuccess=()=>resolve(req.result);
  req.onerror=()=>reject(req.error);
 });
}
async function delPhoto(id){
 const db=await openPhotoDB();
 return new Promise((resolve)=>{
  const tx=db.transaction('photos','readwrite');
  tx.objectStore('photos').delete(id);
  tx.oncomplete=()=>resolve(true);
  tx.onerror=()=>resolve(false);
 });
}
// Compress image to max 1200px and JPEG quality 0.78
function compressImage(file){
 return new Promise((resolve,reject)=>{
  const reader=new FileReader();
  reader.onerror=()=>reject(reader.error);
  reader.onload=e=>{
   const img=new Image();
   img.onerror=()=>reject(new Error('Image load failed'));
   img.onload=()=>{
    const MAX=1200;
    let w=img.width,hT=img.height;
    if(w>MAX||hT>MAX){
     if(w>hT){hT=Math.round(hT*MAX/w);w=MAX;}
     else{w=Math.round(w*MAX/hT);hT=MAX;}
    }
    const cv=document.createElement('canvas');
    cv.width=w;cv.height=hT;
    cv.getContext('2d').drawImage(img,0,0,w,hT);
    resolve(cv.toDataURL('image/jpeg',0.78));
   };
   img.src=e.target.result;
  };
  reader.readAsDataURL(file);
 });
}
function renderFotos(cityId,cityName){
 // Async loader: render placeholder then load actual photos
 setTimeout(async()=>{
  const photos=await getPhotos(cityId);
  const grid=document.getElementById('photo-grid-'+cityId);
  const counter=document.getElementById('photo-counter-'+cityId);
  if(!grid)return;
  if(counter){
   const isOver=photos.length>10;
   counter.innerHTML=`${photos.length}/10 ${photos.length===1?'foto':'fotos'}${isOver?' <span style="color:#ffa552">⚠ excede recomendado</span>':''}`;
   counter.style.color=isOver?'#ffa552':'';
  }
  if(photos.length===0){
   grid.innerHTML='<div style="padding:18px 14px;font-size:13px;color:var(--dim);text-align:center;grid-column:1/-1">No has subido fotos todavía. Toca el botón verde para agregar.</div>';
  } else {
   grid.innerHTML=photos.sort((a,b)=>b.ts-a.ts).map(p=>`<div class="photo-tile" onclick="viewPhoto(${p.id})"><img src="${p.data}" loading="lazy" alt=""><button class="photo-del" onclick="event.stopPropagation();delPhotoUI(${p.id})">🗑</button></div>`).join('');
  }
 },10);
 return `<div class="card photos-card">
  <div class="card-header">
   <div class="card-title">📸 Mis fotos de ${cityName}</div>
   <div class="card-sub">Solo en este teléfono · <span id="photo-counter-${cityId}">cargando...</span> · Recomendado: máx. 10 por ciudad</div>
  </div>
  <div id="photo-status-${cityId}" class="photo-status"></div>
  <div class="photo-grid" id="photo-grid-${cityId}">
   <div style="padding:14px;font-size:13px;color:var(--dim);text-align:center;grid-column:1/-1">Cargando fotos...</div>
  </div>
  <div class="photo-add">
   <input type="file" id="photo-input-${cityId}" accept="image/*" multiple style="display:none" onchange="uploadPhotos('${cityId}',this.files)">
   <button class="photo-add-btn" onclick="document.getElementById('photo-input-${cityId}').click()">📷 Subir fotos</button>
   <div style="font-size:11px;color:var(--dim);text-align:center;margin-top:6px">Las originales en tu rollo no se modifican · esto es una copia comprimida</div>
  </div>
 </div>`;
}
async function uploadPhotos(cityId,files){
 if(!files||!files.length)return;
 const status=document.getElementById('photo-status-'+cityId);
 const list=Array.from(files);
 let done=0;
 if(status){status.innerHTML=`⏳ Procesando 0 de ${list.length}...`;status.style.display='block';}
 for(const f of list){
  try{
   if(!f.type.startsWith('image/'))continue;
   const compressed=await compressImage(f);
   await savePhoto(cityId,compressed,'');
   done++;
   if(status)status.innerHTML=`⏳ Procesando ${done} de ${list.length}...`;
  }catch(err){
   console.log('photo upload err:',err);
  }
 }
 if(status){status.innerHTML=`✅ ${done} ${done===1?'foto agregada':'fotos agregadas'}`;setTimeout(()=>{status.style.display='none';},2200);}
 renderCityBody();
}
async function delPhotoUI(id){
 if(!confirm('¿Borrar esta foto?'))return;
 await delPhoto(id);
 renderCityBody();
}
async function viewPhoto(id){
 const db=await openPhotoDB();
 const tx=db.transaction('photos','readonly');
 const req=tx.objectStore('photos').get(id);
 req.onsuccess=()=>{
  const p=req.result;
  if(!p)return;
  const overlay=document.createElement('div');
  overlay.className='photo-overlay';
  overlay.innerHTML=`<div class="photo-overlay-inner"><img src="${p.data}" alt=""><div class="photo-overlay-info">📅 ${p.date}</div><button class="photo-overlay-close" onclick="this.parentElement.parentElement.remove()">✕ Cerrar</button></div>`;
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove();});
  document.body.appendChild(overlay);
 };
}

function selC(i){curCity=i;renderCities();}
function selS(s){curSub=s;renderCities();}

// ========= DOCUMENTS SYSTEM (IndexedDB) =========
let docsDB=null;
function openDocsDB(){
 return new Promise((resolve,reject)=>{
  if(docsDB){resolve(docsDB);return;}
  const req=indexedDB.open('europa_docs',1);
  req.onerror=()=>reject(req.error);
  req.onupgradeneeded=e=>{
   const db=e.target.result;
   if(!db.objectStoreNames.contains('docs')){
    const store=db.createObjectStore('docs',{keyPath:'id',autoIncrement:true});
    store.createIndex('cityId','cityId',{unique:false});
   }
  };
  req.onsuccess=()=>{docsDB=req.result;resolve(docsDB);};
 });
}
async function getDocs(cityId){
 try{
  const db=await openDocsDB();
  return new Promise(resolve=>{
   const tx=db.transaction('docs','readonly');
   const req=tx.objectStore('docs').index('cityId').getAll(cityId);
   req.onsuccess=()=>resolve(req.result||[]);
   req.onerror=()=>resolve([]);
  });
 }catch(e){return [];}
}
async function saveDoc(cityId,name,data,size,type){
 const db=await openDocsDB();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction('docs','readwrite');
  const now=new Date();
  const dateStr=now.toLocaleDateString('es-MX',{day:'numeric',month:'short',year:'numeric'});
  const doc={cityId,name,data,size,type,date:dateStr,ts:Date.now()};
  const req=tx.objectStore('docs').add(doc);
  req.onsuccess=()=>resolve(req.result);
  req.onerror=()=>reject(req.error);
 });
}
async function delDoc(id){
 const db=await openDocsDB();
 return new Promise(resolve=>{
  const tx=db.transaction('docs','readwrite');
  tx.objectStore('docs').delete(id);
  tx.oncomplete=()=>resolve(true);
 });
}
function fmtSize(bytes){
 if(bytes<1024)return bytes+'B';
 if(bytes<1048576)return(bytes/1024).toFixed(1)+'KB';
 return(bytes/1048576).toFixed(1)+'MB';
}
function renderDocumentos(cityId,cityName){
 setTimeout(async()=>{
  const docs=await getDocs(cityId);
  const grid=document.getElementById('doc-list-'+cityId);
  const counter=document.getElementById('doc-counter-'+cityId);
  if(!grid)return;
  if(counter)counter.textContent=docs.length+' '+(docs.length===1?'documento':'documentos');
  if(docs.length===0){
   grid.innerHTML='<div style="padding:18px 14px;font-size:13px;color:var(--dim);text-align:center">No has subido documentos todavía.<br>Toca el botón dorado para agregar un PDF.</div>';
  } else {
   grid.innerHTML=docs.sort((a,b)=>b.ts-a.ts).map(d=>`
    <div class="doc-row" onclick="viewDoc(${d.id})">
     <div class="doc-icon">📄</div>
     <div style="flex:1;min-width:0">
      <div class="doc-name">${escapeHtml(d.name)}</div>
      <div class="doc-size">${fmtSize(d.size)} · ${d.date}</div>
     </div>
     <button class="doc-del" onclick="event.stopPropagation();delDocUI(${d.id})">🗑</button>
    </div>`).join('');
  }
 },10);
 return `<div class="card" style="border-left:3px solid var(--gold)">
  <div class="card-header">
   <div class="card-title">📄 Documentos de ${cityName}</div>
   <div class="card-sub">Solo en este teléfono · <span id="doc-counter-${cityId}">cargando...</span></div>
  </div>
  <div id="doc-status-${cityId}" class="photo-status"></div>
  <div id="doc-list-${cityId}">
   <div style="padding:14px;font-size:13px;color:var(--dim);text-align:center">Cargando documentos...</div>
  </div>
  <div class="doc-add">
   <input type="file" id="doc-input-${cityId}" accept=".pdf,application/pdf" multiple style="display:none" onchange="uploadDocs('${cityId}',this.files)">
   <button class="doc-add-btn" onclick="document.getElementById('doc-input-${cityId}').click()">📎 Subir PDF</button>
   <div style="font-size:11px;color:var(--dim);text-align:center;margin-top:6px">Toca para abrir · guarda boletos, vouchers, reservaciones</div>
  </div>
 </div>`;
}
async function uploadDocs(cityId,files){
 if(!files||!files.length)return;
 const status=document.getElementById('doc-status-'+cityId);
 const list=Array.from(files);
 let done=0;
 if(status){status.innerHTML=`⏳ Guardando ${done} de ${list.length}...`;status.style.display='block';}
 for(const f of list){
  try{
   if(f.type!=='application/pdf'&&!f.name.toLowerCase().endsWith('.pdf'))continue;
   const reader=new FileReader();
   const data=await new Promise((res,rej)=>{
    reader.onload=e=>res(e.target.result);
    reader.onerror=rej;
    reader.readAsDataURL(f);
   });
   await saveDoc(cityId,f.name,data,f.size,f.type||'application/pdf');
   done++;
   if(status)status.innerHTML=`⏳ Guardando ${done} de ${list.length}...`;
  }catch(err){console.log('doc upload err:',err);}
 }
 if(status){status.innerHTML=`✅ ${done} ${done===1?'documento guardado':'documentos guardados'}`;setTimeout(()=>{status.style.display='none';},2200);}
 if(cityId==='home'){
  // Refresh home list
  const docs=await getDocs('home');
  const counter=document.getElementById('doc-counter-home');
  const list=document.getElementById('doc-list-home');
  if(counter)counter.textContent=docs.length+' '+(docs.length===1?'documento':'documentos');
  if(list)list.innerHTML=docs.sort((a,b)=>b.ts-a.ts).map(d=>`
   <div class="doc-row" onclick="viewDoc(${d.id})">
    <div class="doc-icon">📄</div>
    <div style="flex:1;min-width:0">
     <div class="doc-name">${escapeHtml(d.name)}</div>
     <div class="doc-size">${fmtSize(d.size)} · ${d.date}</div>
    </div>
    <button class="doc-del" onclick="event.stopPropagation();delDocHomeUI(${d.id})">🗑</button>
   </div>`).join('');
 } else {
  renderCityBody();
 }
}
async function delDocUI(id){
 if(!confirm('¿Borrar este documento?'))return;
 await delDoc(id);
 renderCityBody();
}
async function viewDoc(id){
 const db=await openDocsDB();
 const tx=db.transaction('docs','readonly');
 const req=tx.objectStore('docs').get(id);
 req.onsuccess=()=>{
  const d=req.result;
  if(!d)return;
  const overlay=document.createElement('div');
  overlay.className='doc-overlay';
  overlay.innerHTML=`
   <div class="doc-overlay-bar">
    <div class="doc-overlay-title">📄 ${escapeHtml(d.name)}</div>
    <button class="doc-overlay-close" onclick="this.closest('.doc-overlay').remove()">✕ Cerrar</button>
   </div>
   <iframe class="doc-overlay-frame" src="${d.data}"></iframe>`;
  document.body.appendChild(overlay);
 };
}

function renderTours(){
 document.getElementById('pkg-pills').innerHTML=tourPkgs.map((p,i)=>
  `<button class="pill${i===curPkg?' active':''}" onclick="selP(${i})">${i===0?'🟡':'🔵'} ${p.label}</button>`
 ).join('');
 const pkg=tourPkgs[curPkg];
 document.getElementById('tour-pills').innerHTML=pkg.tours.map((t,i)=>
  `<button class="pill${i===curTour?' active':''}" onclick="selT(${i})">${t.flag} ${t.name.split(' ')[0]}</button>`
 ).join('');
 renderTourBody();
}
function renderTourBody(){
 const t=tourPkgs[curPkg].tours[curTour];
 let h=`<div class="card"><div class="card-header"><div class="card-title">${t.flag} ${t.name}</div><div class="card-sub">${t.base}</div><span class="tag">${tourPkgs[curPkg].label}</span></div>`;
 if(t.desc)h+=`<div style="padding:12px 14px;font-size:14px;color:var(--cream);line-height:1.6;border-bottom:1px solid rgba(201,168,76,0.1)">${t.desc}</div>`;
 h+=`<div class="section-label">Lugares y atractivos principales</div>`;
 h+=t.atractivos.map(a=>`<div class="list-item"><span class="lb">◆</span><div class="list-text">${a[0]}<div class="list-sub">${a[1]}</div></div></div>`).join('');
 h+='</div>';
 h+=`<div class="sec-hdr">Gastronomía típica</div><div class="card">`;
 h+=t.gastronomia.map(g=>`<div class="list-item"><span class="lb">◆</span><span class="list-text">${g}</span></div>`).join('');
 h+='</div>';
 document.getElementById('tour-body').innerHTML=h;
}
function selP(i){curPkg=i;curTour=0;renderTours();}
function selT(i){curTour=i;renderTours();}

function renderDist(){
 const total=distMain.reduce((s,r)=>s+r.km,0);
 let h=`<div class="dist-row" style="background:rgba(201,168,76,0.07)"><span class="dcity" style="color:var(--gold)">Total del circuito</span><span></span><span class="dkm" style="color:var(--gold)">${total.toLocaleString()} km</span><span class="dtime"></span></div>`;
 h+=distMain.map(r=>`<div class="dist-row"><span class="dcity">${r.de}</span><span style="color:var(--dim);font-size:11px">→</span><span class="dcity" style="color:var(--cream)">${r.a}</span><span class="dkm">${r.km} km</span><span class="dtime">&nbsp;${r.t}</span></div>`).join('');
 document.getElementById('dist-main-card').innerHTML=h;
 document.getElementById('dist-tour-card').innerHTML=distTours.map(r=>
  `<div class="dist-row"><span class="dcity">${r.de}</span><span style="color:var(--dim);font-size:11px">→</span><span class="dcity" style="color:var(--cream)">${r.a}</span><span class="dkm">${r.km} km</span><span class="dtime">&nbsp;${r.t}</span></div>`
 ).join('');
}

function renderMonedas(){
 document.getElementById('monedas-card').innerHTML=`
  <div class="curr-row"><div class="csym">€</div><div><div class="cname">Euro</div><div class="crate">1 € = $${EUR.toFixed(2)} MXN</div><div class="cnote">🇳🇱🇩🇪🇫🇷🇧🇪🇱🇺 Países Bajos, Alemania, Francia, Bélgica, Luxemburgo</div></div></div>
  <div class="curr-row"><div class="csym">zł</div><div><div class="cname">Złoty polaco (PLN)</div><div class="crate">1 zł = $${PLN.toFixed(2)} MXN · 100 zł ≈ $${(PLN*100).toFixed(0)} MXN</div><div class="cnote">🇵🇱 Polonia (Varsovia y Cracovia) · Es UE pero NO usa euro</div></div></div>
  <div class="curr-row"><div class="csym">Kč</div><div><div class="cname">Corona checa (CZK)</div><div class="crate">1 Kč = $${CZK.toFixed(2)} MXN · 100 Kč ≈ $${(CZK*100).toFixed(0)} MXN</div><div class="cnote">🇨🇿 República Checa (Praga) · No adoptó el euro</div></div></div>
  <div class="curr-row" style="background:rgba(201,168,76,0.04)"><div class="csym" style="font-size:13px">📅</div><div><div style="font-size:12px;color:var(--muted)">Tipo de cambio al 18 mayo 2026. Verificar antes del viaje en septiembre 2026.</div></div></div>`;
 calcUpdate();
}
// Tasas vs MXN (cuántos MXN vale 1 unidad)
const USD_MXN=17.28;
const ratesToMXN={MXN:1,EUR:EUR,PLN:PLN,CZK:CZK,USD:USD_MXN};
const currencyMeta={
 MXN:{flag:"🇲🇽",name:"Peso mexicano",sym:"$"},
 EUR:{flag:"💶",name:"Euro",sym:"€"},
 PLN:{flag:"🇵🇱",name:"Złoty polaco",sym:"zł"},
 CZK:{flag:"🇨🇿",name:"Corona checa",sym:"Kč"},
 USD:{flag:"💵",name:"Dólar (tarifa tour)",sym:"$"}
};
function fmtNum(n,cur){
 if(!isFinite(n))return'—';
 const abs=Math.abs(n);
 let dec=2;
 if(cur==='CZK'||cur==='PLN')dec=abs>=100?0:2;
 if(cur==='MXN')dec=abs>=100?0:2;
 return n.toLocaleString('es-MX',{minimumFractionDigits:dec,maximumFractionDigits:dec});
}
function calcUpdate(){
 const inp=document.getElementById('calc-input');
 const sel=document.getElementById('calc-from');
 const out=document.getElementById('calc-results');
 if(!inp||!sel||!out)return;
 const v=parseFloat(inp.value);
 const from=sel.value;
 if(!v||v<=0){
  out.innerHTML=`<div style="text-align:center;color:var(--dim);font-size:13px;padding:14px">Ingresa una cantidad para convertir</div>`;
  return;
 }
 const inMXN=v*ratesToMXN[from];
 const targets=['MXN','EUR','PLN','CZK','USD'].filter(c=>c!==from);
 out.innerHTML=targets.map(c=>{
  const result=inMXN/ratesToMXN[c];
  const m=currencyMeta[c];
  const isMXN=c==='MXN';
  return `<div class="calc-result-row${isMXN?' highlight':''}"><div class="cr-label"><span class="cr-flag">${m.flag}</span>${m.name}</div><div class="cr-value">${m.sym} ${fmtNum(result,c)}</div></div>`;
 }).join('');
}
function qSet(n){
 const inp=document.getElementById('calc-input');
 if(inp){inp.value=n;calcUpdate();}
}
document.addEventListener('input',e=>{
 if(e.target&&(e.target.id==='calc-input'||e.target.id==='calc-from'))calcUpdate();
});
document.addEventListener('change',e=>{
 if(e.target&&e.target.id==='calc-from')calcUpdate();
});

// HOME itinerary
const itin=[
 {d:"1",wd:"Dom",dt:"6 Sep",c:"✈️ México → Ámsterdam",n:"Vuelo trasatlántico · noche a bordo",tipo:"normal",
  full:`Presentarse en el Aeropuerto Internacional de la Ciudad de México 3 horas antes para tomar el vuelo trasatlántico con destino a Ámsterdam. Noche a bordo.`},
 {d:"2",wd:"Lun",dt:"7 Sep",c:"🇳🇱 Ámsterdam",n:"Llegada · recepción · recorrido panorámico",tipo:"normal",
  full:`Llegada a Ámsterdam, la capital del Reino de los Países Bajos. Por su belleza, el casco histórico de Ámsterdam está incluido en la Lista del Patrimonio Mundial de la UNESCO. Después del recorrido por la ciudad, recepción y traslado al hotel. Alojamiento.`},
 {d:"3",wd:"Mar",dt:"8 Sep",c:"🇳🇱→🇩🇪 Ámsterdam · Hannover · Berlín",n:"Desayuno · parada Hannover · llegada Berlín",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad de Hannover en la República Federal de Alemania. Situada en orilla del río Leine la ciudad lleva el nombre con este mismo significado "La Orilla Alta". Hannover fue fundada en época medieval por barqueros, pescadores y comerciantes que llevaban los barcos llenos de mercancías por el río. Durante nuestro recorrido veremos los bellos edificios del Palacio de la Opera, las ruinas de la iglesia San Gil (Aegidienkirche), la Iglesia del Mercado, los edificios del Ayuntamiento, Nuevo y Viejo. Luego seguiremos hacia la ciudad de Berlín, la capital de la República Federal de Alemania. Alojamiento.`},
 {d:"4",wd:"Mié",dt:"9 Sep",c:"🇩🇪 Berlín",n:"Recorrido panorámico · opt. Potsdam (Paq.1)",tipo:"normal",
  full:`Desayuno. Realizaremos una breve visita panorámica de Berlín. Situada en las orillas de dos ríos, Spree y Havel que confluyen dentro de la ciudad, Berlín ofrece unas vistas inolvidables. Durante nuestro recorrido vamos a ver la Plaza Gendarmenmarkt, La Puerta de Brandenburgo, Potsdamer Platz, Frauenkirche, el Palacio Zwinger, la Terraza Bruhl, el Camino del Rey, la Estatua de Martín Lutero y gozar de la belleza majestuosa de la milenaria ciudad. Alojamiento.`,
  opcionales:["Ciudad de Potsdam"]},
 {d:"5",wd:"Jue",dt:"10 Sep",c:"🇩🇪→🇵🇱 Berlín · Varsovia",n:"Desayuno · viaje · recorrido Ciudad Vieja UNESCO",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad de Varsovia, la capital de la República de Polonia. Nadie sabe cuándo apareció el pequeño pueblo de pescadores que desde el siglo XIII se convirtió en una de las ciudades más hermosas del mundo. La Ciudad Vieja – su casco histórico está incluido en la Lista del Patrimonio de la Humanidad de la UNESCO. Durante nuestro recorrido veremos el Castillo Real, la famosa Columna de Segismundo, la hermosa Iglesia de las Visitacionistas, también denominada iglesia de las Hermanas de la Visitación de San José de Varsovia de la Orden de la Visitación. Alojamiento.`},
 {d:"6",wd:"Vie",dt:"11 Sep",c:"🇵🇱 Varsovia → Cracovia",n:"Desayuno · viaje · recorrido panorámico Cracovia",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad polaca de Cracovia. Otra bella ciudad europea con su casco histórico incluido en la Lista del Patrimonio de la Humanidad de la UNESCO. Durante nuestro breve recorrido panorámico veremos el Castillo de Wawel, la increíble catedral con nombre completo de Basílica de San Estanislao y San Wenceslao con sus numerosas capillas de distintas épocas y estilos arquitectónicos, La Basílica de Santa María, El Corte Renacentista, la Plaza del Mercado y la pequeña iglesia de San Adalberto. Alojamiento.`},
 {d:"7",wd:"Sáb",dt:"12 Sep",c:"🇵🇱 Cracovia ★ DÍA LIBRE",n:"Opt. Auschwitz (Paq.1) · Wieliczka (Paq.2) · o tour personal",tipo:"libre",
  full:`Desayuno. Día libre para actividades personales o para realizar una excursión opcional. Alojamiento.`,
  opcionales:["Campo de concentración de Auschwitz–Birkenau","Minas de sal de Wieliczka"]},
 {d:"8",wd:"Dom",dt:"13 Sep",c:"🇵🇱→🇨🇿 Cracovia · Praga",n:"Desayuno · viaje · recorrido panorámico Praga",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad de Praga, la capital de la República Checa y la capital histórica de Bohemia. Construida en el siglo IX como un pequeño pueblo fronterizo en las orillas del río Moldava, en el siglo XVII-XIX llegó a tener tal esplendor que todo Europa la llamaba Praga Dorada. En nuestro tour panorámico de la ciudad pasaremos por la Plaza Vaclav Havel, que es una de las plazas más grandes de Praga, luego llegaremos a la Plaza de la Ciudad Vieja, que se encuentra entre la Plaza Vaclac Havel y el Puente Carlos (Karluv Most). En la Plaza de la Ciudad Vieja veremos la Torre del Reloj Astronómico, la Iglesia de Tyn, el Ayuntamiento Viejo, la Iglesia de San Nicolás y el Monumento a Jan Hus. Después del almuerzo continuaremos hacia la orilla opuesta de Praga. De paso veremos el Puente de Carlos, que fue construido en el siglo XIV. Alojamiento.`},
 {d:"9",wd:"Lun",dt:"14 Sep",c:"🇨🇿 Praga ★ DÍA LIBRE",n:"Opt. Barco Moldava (P1) · Karlovy Vary/Noche Checa (P2) · o personal",tipo:"libre",
  full:`Desayuno. Día libre para realizar actividades personales o posibilidad de realizar una excursión opcional. Alojamiento.`,
  opcionales:["Paseo en barco por el Río Moldava","Excursión a Karlovy Vary","Noche checa con cena tradicional"]},
 {d:"10",wd:"Mar",dt:"15 Sep",c:"🇨🇿→🇩🇪 Praga · Núremberg",n:"Desayuno · viaje · recorrido Núremberg",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad alemana de Núremberg. El fabuloso Castillo de Núremberg fue construido en lo alto de una colina hace unos mil años. En los siguientes siglos ese pintoresco complejo de edificios se convirtió en núcleo vivo de una ciudad creciendo rápidamente alrededor suyo. Durante nuestro recorrido por Núremberg veremos los impresionantes edificios de la Iglesia de Nuestra Señora, la Casa de la Opera, el Viejo Ayuntamiento y por supuesto las vistas fascinantes del río Pegnitz. Alojamiento.`},
 {d:"11",wd:"Mié",dt:"16 Sep",c:"🇩🇪 Núremberg ★ DÍA LIBRE",n:"Opt. Rothenburg (P1) · Múnich (P2) · o tour personal",tipo:"libre",
  full:`Desayuno. Día libre para realizar actividades personales o posibilidad de realizar una excursión opcional. Alojamiento.`,
  opcionales:["Ciudad Rothenburg ob der Tauber","Ciudad de Múnich"]},
 {d:"12",wd:"Jue",dt:"17 Sep",c:"🇩🇪 Núremberg → Frankfurt",n:"Desayuno · viaje · visita Frankfurt",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad de Frankfurt ubicada en el centro de Alemania a orillas del Rio Meno, importante centro financiero mundial. Los orígenes de la ciudad se pierden en lo hondo de los primeros siglos del Medioevo, pero siempre en la colina de Romer. Aquí veremos los impresionantes edificios de la familia de comerciantes Romer construidos en los siglos XIII y XIV, la iglesia de San Nicolás, la Catedral Imperial de la Colegiata de San Bartolomé y gozaremos de las majestuosas siluetas del Banco Central Europeo, el Banco de Alemania y la Bolsa de Frankfurt que son unas de las instituciones financieras más importantes del mundo. Alojamiento.`,
  opcionales:["Paseo nocturno en barco por el Río Meno"]},
 {d:"13",wd:"Vie",dt:"18 Sep",c:"🇩🇪→🇱🇺🇫🇷 Frankfurt · Luxemburgo · Metz",n:"Desayuno · parada Luxemburgo (opc.) · base Metz",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad francesa de Metz o a la ciudad francesa de Thionville. Tiempo libre para realizar excursiones opcionales a la ciudad de Luxemburgo en el estado de Gran Ducado de Luxemburgo y a la ciudad de Schengen. Alojamiento.`,
  opcionales:["Ciudad de Luxemburgo","Ciudad de Schengen"]},
 {d:"14",wd:"Sáb",dt:"19 Sep",c:"🇫🇷 Metz / Thionville ★ DÍA LIBRE",n:"Opt. Luxemburgo/Estr./Colmar (P1) · Schengen (P2) · o Metz libre",tipo:"libre",
  full:`Desayuno. Día libre para realizar actividades personales o posibilidad de realizar una excursión opcional. Alojamiento.`,
  opcionales:["Ciudad de Estrasburgo","Ciudad de Colmar"]},
 {d:"15",wd:"Dom",dt:"20 Sep",c:"🇫🇷→🇧🇪 Metz · Bruselas",n:"Desayuno · viaje · recorrido Bruselas",tipo:"normal",
  full:`Desayuno. Después nos dirigimos a la ciudad de Bruselas, la capital del Reino de Bélgica, sede la Comisión Europea, famosa por su cerveza y su chocolate. Aquí veremos la impresionante Plaza del Mercado, las galerías reales de Saint-Hubert, la escultura del Manneken Pis, el Palacio Real de Bruselas, los museos reales de Bellas Artes. Alojamiento.`},
 {d:"16",wd:"Lun",dt:"21 Sep",c:"🇧🇪 Bruselas ★ DÍA LIBRE",n:"Opt. Brujas y Gante (Paq.1) · o Bruselas por libre",tipo:"libre",
  full:`Desayuno. Día libre para realizar actividades personales o posibilidad de realizar una excursión opcional. Alojamiento.`,
  opcionales:["Ciudades de Brujas y Gante"]},
 {d:"17",wd:"Mar",dt:"22 Sep",c:"🇧🇪→🇳🇱 Bruselas · Ámsterdam ⭐ TOUR PERSONAL",n:"Si no tomas P2: Ámsterdam libre → Rijksmuseum, Jordaan, canales",tipo:"tp",
  full:`Desayuno. Después nos dirigimos a la ciudad de Ámsterdam. Tiempo libre para realizar actividades personales o bien realizar una excursión opcional. Alojamiento.`,
  opcionales:["Volendam y Marken","Ciudad de La Haya","Pueblo de Giethoorn"]},
 {d:"18",wd:"Mié",dt:"23 Sep",c:"🇳🇱 Ámsterdam → ✈️ México",n:"Desayuno · traslado aeropuerto · vuelo de regreso",tipo:"normal",
  full:`Desayuno. A la hora indicada, traslado al aeropuerto para tomar el vuelo de regreso a la Ciudad de México.`},
];
document.getElementById('quick-itinerary').innerHTML=itin.map((i,idx)=>{
 const opc=i.opcionales&&i.opcionales.length?`<div class="iexp-opc-title">Excursiones opcionales</div>`+i.opcionales.map(o=>`<div class="iexp-opc-item">◆ ${o}</div>`).join(''):'';
 return `<div class="irow" data-day="${idx}" id="irow-${idx}" role="button" tabindex="0">
  <div class="iday"><div class="idaynum">D${i.d}</div><div class="idaydate">${i.wd}<br>${i.dt}</div></div>
  <div style="flex:1;min-width:0">
   <div class="icity${i.tipo==='libre'?' libre':i.tipo==='tp'?' tp':''}">${i.c}<span class="iexp-chev" id="ichev-${idx}">▸</span></div>
   <div class="inote">${i.n}</div>
   <div class="iexp" id="iexp-${idx}" style="display:none">
    <div class="iexp-full">${i.full}</div>
    ${opc}
   </div>
  </div>
 </div>`;
}).join('');

// iOS-friendly: simple click handlers, no touchend interference
(function attachItinClicks(){
 const rows=document.querySelectorAll('#quick-itinerary .irow');
 rows.forEach(function(row){
  row.addEventListener('click',function(){
   const idx=row.getAttribute('data-day');
   const e=document.getElementById('iexp-'+idx);
   const c=document.getElementById('ichev-'+idx);
   if(!e)return;
   const isOpen=e.style.display==='block';
   e.style.display=isOpen?'none':'block';
   if(c)c.textContent=isOpen?'▸':'▾';
  });
 });
})();

document.getElementById('tp-home-box').innerHTML=`<div class="tph">5 oportunidades identificadas en el itinerario</div>`+[
 {d:"Día 7 · Sáb 12 Sep",c:"Cracovia",n:"Si no contratas Auschwitz (P1) ni Wieliczka (P2): Barrio Kazimierz + Plaza del Mercado a tu ritmo."},
 {d:"Día 9 · Lun 14 Sep",c:"Praga",n:"Sin tours opcionales: Castillo de Praga por tu cuenta + Puente de Carlos al amanecer."},
 {d:"Día 11 · Mié 16 Sep",c:"Núremberg",n:"Sin Rothenburg ni Múnich: Tribunal de Núremberg (Sala 600) + murallas medievales caminables."},
 {d:"Día 14 · Sáb 19 Sep",c:"Metz",n:"Sin excursiones: Catedral de San Esteban + Centre Pompidou-Metz + Barrio del Temple."},
 {d:"Día 17 · Mar 22 Sep ⭐",c:"Ámsterdam (recomendada)",n:"Si no tomas P2: Ámsterdam libre para Rijksmuseum, barrio Jordaan y canales sin prisas."},
].map(t=>`<div class="tpi"><strong>${t.d} · ${t.c}</strong><br>${t.n}</div>`).join('');

// Initialize home documents
(async function initHomeDocs(){
 const docs=await getDocs('home');
 const counter=document.getElementById('doc-counter-home');
 const list=document.getElementById('doc-list-home');
 if(counter)counter.textContent=docs.length+' '+(docs.length===1?'documento':'documentos');
 if(list){
  if(docs.length===0){
   list.innerHTML='<div style="padding:14px;font-size:13px;color:var(--dim);text-align:center">No has subido documentos todavía.<br>Toca el botón dorado para agregar PDFs del viaje.</div>';
  } else {
   list.innerHTML=docs.sort((a,b)=>b.ts-a.ts).map(d=>`
    <div class="doc-row" onclick="viewDoc(${d.id})">
     <div class="doc-icon">📄</div>
     <div style="flex:1;min-width:0">
      <div class="doc-name">${escapeHtml(d.name)}</div>
      <div class="doc-size">${fmtSize(d.size)} · ${d.date}</div>
     </div>
     <button class="doc-del" onclick="event.stopPropagation();delDocHomeUI(${d.id})">🗑</button>
    </div>`).join('');
  }
 }
})();

async function delDocHomeUI(id){
 if(!confirm('¿Borrar este documento?'))return;
 await delDoc(id);
 // Refresh home docs list
 const docs=await getDocs('home');
 const counter=document.getElementById('doc-counter-home');
 const list=document.getElementById('doc-list-home');
 if(counter)counter.textContent=docs.length+' '+(docs.length===1?'documento':'documentos');
 if(list){
  if(docs.length===0){
   list.innerHTML='<div style="padding:14px;font-size:13px;color:var(--dim);text-align:center">No has subido documentos todavía.</div>';
  } else {
   list.innerHTML=docs.sort((a,b)=>b.ts-a.ts).map(d=>`
    <div class="doc-row" onclick="viewDoc(${d.id})">
     <div class="doc-icon">📄</div>
     <div style="flex:1;min-width:0">
      <div class="doc-name">${escapeHtml(d.name)}</div>
      <div class="doc-size">${fmtSize(d.size)} · ${d.date}</div>
     </div>
     <button class="doc-del" onclick="event.stopPropagation();delDocHomeUI(${d.id})">🗑</button>
    </div>`).join('');
  }
 }
}

// PWA install
let deferred;
window.addEventListener('beforeinstallprompt',e=>{
 e.preventDefault();deferred=e;
 const b=document.getElementById('install-banner');
 b.style.display='block';
 b.addEventListener('click',()=>{deferred.prompt();deferred.userChoice.then(()=>b.style.display='none');});
});
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
