const WHATSAPP_NUMERO = "50431626792";

const PLANTILLAS = [
  { archivo: "elegante", nombre: "Elegante", tag: "Crema, script y fotos con marco — minimalista y refinada" },
  { archivo: "rojo", nombre: "Señora Elegante", tag: "Vino y rosa, tipografía formal, composición asimétrica" },
  { archivo: "playa", nombre: "Playa Kawaii", tag: "Turquesa y arena, navegación por capítulos, palmeras y sol" },
  { archivo: "bosque", nombre: "Bosque Encantado", tag: "Luciérnagas, luna y galería en carrusel infinito" },
  { archivo: "realeza", nombre: "Realeza", tag: "Blanco y dorado, emblema con corona y laureles" },
  { archivo: "fiesta", nombre: "Luces Cálidas", tag: "Noche con guirnalda de luces y sección para pedir canciones" },
  { archivo: "hotel", nombre: "Hotel de Lujo", tag: "Mármol blanco, reservación tipo boarding pass, tiras de fotomatón" },
  { archivo: "retro", nombre: "Retro Nostálgica", tag: "Postal antigua, Polaroids, carrete de película, carta con sello de cera" },
  { archivo: "opuestos", nombre: "Opuestos", tag: "Díptico editorial en blanco y negro, prosa tipo museo" },
  { archivo: "celeste", nombre: "Mapa Celeste", tag: "Astrolabio, constelación que serpentea, nebulosas de fondo" },
  { archivo: "colonial", nombre: "Pueblo Colonial", tag: "Arcos, campanario, catedral de fondo, calle de puertas" },
  { archivo: "roatan", nombre: "Roatán", tag: "Mapa del tesoro, tabla de mareas, suelta tu deseo al mar" }
];

document.addEventListener('DOMContentLoaded', () => {
  pintarCatalogo();
  pintarFAQ();
  configurarWhatsapp();
});

function pintarCatalogo(){
  const grid = document.getElementById('catalogo-grid');
  grid.innerHTML = PLANTILLAS.map(p => `
    <div class="plantilla-card">
      <div class="telefonos-wrap">
        <div class="telefono telefono--atras">
          <div class="telefono-pantalla"><iframe src="templates/${p.archivo}.html" loading="lazy"></iframe></div>
        </div>
        <div class="telefono telefono--frente">
          <div class="telefono-pantalla"><iframe src="templates/${p.archivo}.html" loading="lazy"></iframe></div>
        </div>
      </div>
      <p class="plantilla-nombre">${p.nombre}</p>
      <p class="plantilla-tag">${p.tag}</p>
      <a href="https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent('Hola, me interesa la plantilla "' + p.nombre + '" del catálogo')}" target="_blank" class="btn-plantilla">Encargar invitación</a>
    </div>
  `).join('');
}

const FAQS = [
  { p: "¿Cómo pago mi invitación?", r: "Todo el proceso es por WhatsApp: nos escribes, eliges tu plantilla y paquete, y te enviamos los datos de pago por transferencia bancaria." },
  { p: "¿Cuánto tarda la entrega?", r: "El tiempo estimado es de 48 horas después de recibir todos tus datos, fotos e historia completos." },
  { p: "¿Puedo cambiar fotos o textos después de recibirla?", r: "Sí, incluimos una ronda de ajustes sin costo antes de la entrega final." },
  { p: "¿Funciona en cualquier celular?", r: "Sí, es un sitio web — funciona en cualquier celular con navegador, sin necesidad de instalar nada." },
  { p: "¿Puedo pedir una plantilla que no esté en el catálogo?", r: "Sí, podemos platicar tu idea y ver si es posible crear un diseño a la medida." },
  { p: "¿El link tiene fecha de vencimiento?", r: "No, tu invitación se mantiene activa; si quieres desactivarla después del evento, también podemos hacerlo." }
];

function pintarFAQ(){
  const cont = document.getElementById('faq-lista');
  cont.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-i="${i}">
      <div class="faq-pregunta">
        <span>${f.p}</span>
        <span class="signo">+</span>
      </div>
      <div class="faq-respuesta"><p>${f.r}</p></div>
    </div>
  `).join('');

  cont.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-pregunta').addEventListener('click', () => {
      item.classList.toggle('abierto');
    });
  });
}

function configurarWhatsapp(){
  const msj = encodeURIComponent('Hola, quiero información sobre las invitaciones digitales de boda');
  document.getElementById('nav-whatsapp').href = `https://wa.me/${WHATSAPP_NUMERO}?text=${msj}`;
  document.getElementById('footer-whatsapp').href = `https://wa.me/${WHATSAPP_NUMERO}?text=${msj}`;
}
