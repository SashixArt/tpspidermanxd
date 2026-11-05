function setup() {
  noCanvas();

  document.body.innerHTML = `
  <style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html { scroll-behavior: smooth; }

  body {
    background: #080e1b;
    color: #f5f5f5;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
  }

  :root {
    --rojo: #e62429;
    --azul: #0866c6;
    --amarillo: #ffdf38;
    --oscuro: #080e1b;
    --panel: #111b30;
  }

  .barra {
    width: 100%;
    padding: 18px 7%;
    background: #0c1425;
    border-bottom: 3px solid var(--rojo);
    display: flex;
    align-items: center;
  }

  .logo {
    font-family: Impact, 'Arial Narrow', sans-serif;
    font-size: 28px;
    letter-spacing: 2px;
  }

  .logo span { color: var(--rojo); }

  .portada {
    min-height: 650px;
    padding: 75px 8%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 55px;
    align-items: center;
    background:
      radial-gradient(ellipse at 15% 50%, #152f58 0%, transparent 55%),
      linear-gradient(135deg, #080e1b, #101b32);
    position: relative;
    overflow: hidden;
  }

  .portada::after {
    content: "SPIDER-MAN";
    position: absolute;
    bottom: -38px;
    right: -20px;
    font-family: Impact, 'Arial Narrow', sans-serif;
    font-size: clamp(100px, 18vw, 260px);
    color: rgba(230, 36, 41, 0.07);
    pointer-events: none;
    white-space: nowrap;
  }

  .etiqueta {
    display: inline-block;
    padding: 8px 13px;
    background: var(--amarillo);
    color: #111;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  h1, h2, h3 {
    font-family: Impact, 'Arial Narrow', sans-serif;
    font-weight: normal;
    line-height: 0.98;
  }

  h1 {
    font-size: clamp(55px, 7vw, 100px);
    margin-bottom: 25px;
    letter-spacing: 1px;
  }

  h1 span {
    color: var(--rojo);
    display: block;
  }

  .introduccion {
    color: #c4cede;
    line-height: 1.8;
    font-size: 16px;
    max-width: 540px;
    margin-bottom: 28px;
  }

  .boton {
    display: inline-block;
    background: var(--rojo);
    color: white;
    padding: 15px 23px;
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%);
    transition: background 0.2s, transform 0.2s;
    border: none;
    cursor: pointer;
  }

  .boton:hover {
    background: var(--azul);
    transform: translateY(-3px);
  }

  .imagen-principal {
    position: relative;
    z-index: 1;
  }

  .imagen-principal img {
    display: block;
    width: 100%;
    max-height: 570px;
    object-fit: contain;
    border: 3px solid var(--azul);
    box-shadow: 12px 12px 0 var(--rojo);
    transition: transform 0.4s;
  }

  .imagen-principal img:hover { transform: scale(1.025); }

  .pie-imagen {
    margin-top: 20px;
    color: var(--amarillo);
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
    text-align: center;
  }

  .biografia {
    padding: 90px 10%;
    background: #f0f0ed;
    color: #111827;
  }

  .titulo-seccion {
    font-size: clamp(40px, 5vw, 65px);
    margin-bottom: 18px;
  }

  .titulo-seccion span { color: var(--rojo); }

  .subtitulo {
    color: #657083;
    max-width: 700px;
    line-height: 1.8;
    margin-bottom: 40px;
  }

  .bio-contenido {
    display: grid;
    grid-template-columns: 5px 1fr;
    gap: 25px;
    max-width: 850px;
  }

  .bio-linea { background: var(--rojo); }

  .bio-texto {
    font-size: 16px;
    line-height: 1.9;
    color: #283247;
  }

  .bio-texto strong { color: #075bb3; }

  .dato {
    display: inline-block;
    margin-top: 25px;
    margin-right: 12px;
    padding: 12px 16px;
    background: #dce7f5;
    border-bottom: 3px solid var(--azul);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .galeria {
    padding: 90px 8%;
    background:
      radial-gradient(ellipse at 90% 5%, #10264b 0%, transparent 35%),
      var(--oscuro);
  }

  .encabezado-galeria {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;
    margin-bottom: 45px;
  }

  .encabezado-galeria .titulo-seccion {
    color: white;
    margin: 0;
  }

  .numero {
    font-family: Impact, 'Arial Narrow', sans-serif;
    font-size: 24px;
    color: var(--amarillo);
    white-space: nowrap;
  }

  .comic-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }

  .comic {
    background: var(--panel);
    border-bottom: 4px solid var(--azul);
    overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
  }

  .comic:hover {
    transform: translateY(-8px);
    border-color: var(--rojo);
  }

  .comic-imagen {
    height: 350px;
    background: #18243a;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .comic-imagen img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s;
  }

  .comic:hover .comic-imagen img { transform: scale(1.04); }

  .comic-numero {
    position: absolute;
    top: 12px;
    left: 12px;
    background: var(--amarillo);
    color: #101010;
    padding: 7px 11px;
    font-size: 11px;
    font-weight: 900;
  }

  .comic-info { padding: 24px; }

  .categoria {
    color: #69aaff;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 900;
    margin-bottom: 12px;
  }

  .comic h3 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  .comic p {
    color: #b9c4d6;
    font-size: 13px;
    line-height: 1.8;
  }

  .comic-destacado { border-bottom-color: var(--rojo); }

  .comic-destacado .categoria { color: var(--amarillo); }

  /* CANVAS OCULTO POR DEFECTO EN EL MENÚ PRINCIPAL */
  #particulas-canvas {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 100000;
    pointer-events: none;
  }

  .linea-tiempo {
    padding: 90px 10%;
    background: #0c1425;
  }

  .timeline {
    margin-top: 40px;
    border-left: 3px solid var(--rojo);
    padding-left: 25px;
  }

  .evento {
    margin-bottom: 30px;
  }

  .evento h3 {
    font-size: 24px;
    color: var(--amarillo);
    margin-bottom: 8px;
  }

  .evento p {
    color: #c4cede;
    line-height: 1.6;
  }

  .experiencia-ar {
    padding: 90px 8%;
    background: var(--panel);
  }

  .ar-panel {
    margin-top: 30px;
    padding: 30px;
    background: #080e1b;
    border: 2px solid var(--azul);
    text-align: center;
  }

  .cierre {
    padding: 90px 10%;
    text-align: center;
    background: #0c1425;
  }

  .cierre p {
    max-width: 700px;
    margin: 20px auto 30px;
    line-height: 1.8;
    color: #c4cede;
  }

  footer {
    padding: 30px;
    background: #050810;
    text-align: center;
    font-size: 12px;
    color: #657083;
  }

  @media (max-width: 900px) {
    .portada {
      grid-template-columns: 1fr;
      padding: 60px 7%;
    }

    .imagen-principal {
      max-width: 650px;
      margin: 0 auto;
      width: 90%;
    }

    .comic-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .comic-imagen { height: 320px; }
  }

  @media (max-width: 600px) {
    .barra {
      position: relative;
      padding: 16px 6%;
    }

    .portada {
      min-height: auto;
      padding: 55px 7%;
      gap: 35px;
    }

    h1 { font-size: 58px; }

    .biografia, .galeria {
      padding: 65px 7%;
    }

    .comic-grid { grid-template-columns: 1fr; }

    .comic-imagen {
      height: auto;
      min-height: 300px;
      max-height: 500px;
    }

    .comic-imagen img { max-height: 500px; }

    .encabezado-galeria {
      align-items: flex-start;
      flex-direction: column;
    }

    .dato { margin-top: 12px; }
  }
  </style>

  <header class="barra">
    <div class="logo">TPFINAL</div>
  </header>

  <main>
    <section class="portada" id="inicio">
      <div>
        <div class="etiqueta">Leyendas del cómic · Marvel</div>
        <h1>JOHN ROMITA <span>SR.</span></h1>
        <p class="introduccion">
          El artista que ayudó a definir el rostro de Spider-Man para
          generaciones de lectores. Desde sus páginas llenas de acción
          hasta los momentos más humanos de Peter Parker, su trabajo
          convirtió al héroe arácnido en una leyenda del cómic.
        </p>
        <a class="boton" href="#momentos">Explorar su legado ↓</a>
      </div>

      <div class="imagen-principal">
        <img src="romitaescritorio.jpeg" alt="John Romita Sr. junto a personajes de cómic">
        <div class="pie-imagen">John Romita Sr. · Una leyenda de Marvel</div>
      </div>
    </section>

    <section class="biografia" id="biografia">
      <div class="etiqueta">El hombre detrás del lápiz</div>
      <h2 class="titulo-seccion">EL ARTISTA QUE <span>DEFINIÓ UNA ERA</span></h2>
      <p class="subtitulo">
        Un estilo inconfundible que combinó acción, expresividad
        y emociones humanas.
      </p>

      <div class="bio-contenido">
        <div class="bio-linea"></div>
        <div class="bio-texto">
          <p>
            <strong>John Victor Romita Sr. (1930-2023)</strong> fue un
            historietista estadounidense reconocido por su enorme
            contribución al universo de Marvel Comics. Después de
            trabajar en historias románticas y otros géneros, se
            incorporó de lleno a <em>The Amazing Spider-Man</em> en
            1966, sucediendo a Steve Ditko como dibujante principal.
          </p>
          <br>
          <p>
            Su estilo aportó una figura más dinámica y expresiva
            al Hombre Araña. También fue fundamental para establecer
            la imagen de <strong>Mary Jane Watson</strong>, cuyo debut
            completo en las páginas dibujadas por Romita se convirtió
            en uno de los momentos más recordados de la serie.
          </p>
          <br>
          <p>
            Romita no se limitó a las peleas entre héroes y villanos:
            dio importancia a las relaciones, los conflictos personales
            y la vida cotidiana de Peter Parker. En 1973 se convirtió
            en director artístico de Marvel, ayudando a definir la
            identidad visual de toda una editorial.
          </p>

          <div class="dato">1966 · Llega a Spider-Man</div>
          <div class="dato">1973 · Director artístico de Marvel</div>
        </div>
      </div>
    </section>

    <section class="galeria" id="momentos">
      <div class="encabezado-galeria">
        <div>
          <div class="etiqueta">La historia en viñetas</div>
          <h2 class="titulo-seccion">MOMENTOS <span>INOLVIDABLES</span></h2>
        </div>
        <div class="numero">01 — 06 / ARCHIVO</div>
      </div>

      <div class="comic-grid">
        <article class="comic comic-destacado">
          <div class="comic-imagen">
            <img src="nomore.jpeg" alt="Spider-Man No More, el traje abandonado en la basura" loading="lazy">
            <span class="comic-numero">ASM #50</span>
          </div>
          <div class="comic-info">
            <div class="categoria">1967 · El héroe y la persona</div>
            <h3>SPIDER-MAN NO MORE!</h3>
            <p>
              Peter Parker, agotado por el peso de sus responsabilidades,
              decide abandonar su identidad de Spider-Man. La imagen
              del traje arrojado a un cesto de basura expresa el conflicto
              entre su vida personal y su deber como héroe. Una de las
              imágenes más emblemáticas de toda la historia del personaje.
            </p>
          </div>
        </article>

        <article class="comic">
          <div class="comic-imagen">
            <img src="dndvfinal.jpeg" alt="Portada de Spider-Man enfrentándose al Duende Verde" loading="lazy">
            <span class="comic-numero">1966</span>
          </div>
          <div class="comic-info">
            <div class="categoria">Rivalidad · Acción</div>
            <h3>EL DUENDE VERDE</h3>
            <p>
              El enfrentamiento entre Spider-Man y el Duende Verde
              marcó una etapa decisiva de la serie. Romita tomó las
              riendas artísticas cuando la identidad de Peter Parker
              y la de su enemigo estaban en el centro de la historia,
              elevando la tensión y el dramatismo de sus encuentros.
            </p>
          </div>
        </article>

        <article class="comic comic-destacado">
          <div class="comic-imagen">
            <img src="desenmascaramiento.jpeg" alt="Spider-Man desenmascarado por el Duende Verde" loading="lazy">
            <span class="comic-numero">ASM #39-40</span>
          </div>
          <div class="comic-info">
            <div class="categoria">1966 · Identidad secreta</div>
            <h3>EL ROSTRO DETRÁS DE LA MÁSCARA</h3>
            <p>
              En la etapa inicial de Romita, el Duende Verde descubre
              que Spider-Man es Peter Parker. La revelación transforma
              su rivalidad: el conflicto ya no amenaza solamente al
              superhéroe, sino también a la persona que existe debajo
              de la máscara.
            </p>
          </div>
        </article>

        <article class="comic">
          <div class="comic-imagen">
            <img src="boda.jpg" alt="La boda de Spider-Man y Mary Jane Watson" loading="lazy">
            <span class="comic-numero">1987</span>
          </div>
          <div class="comic-info">
            <div class="categoria">Amor · Un nuevo capítulo</div>
            <h3>LA BODA DE PETER Y MJ</h3>
            <p>
              La relación entre Peter Parker y Mary Jane se convirtió
              en uno de los pilares emocionales de la franquicia.
              Romita participó en la representación de esta unión,
              que llegó a las páginas de <em>The Amazing Spider-Man
              Annual #21</em>, publicado en 1987. El acontecimiento
              trascendió el cómic y se celebró también con un evento
              promocional en la vida real.
            </p>
          </div>
        </article>

        <article class="comic">
          <div class="comic-imagen">
            <img src="dewolff.jpeg" alt="Portada relacionada con la historia de Jean DeWolff" loading="lazy">
            <span class="comic-numero">1985</span>
          </div>
          <div class="comic-info">
            <div class="categoria">Drama · Historias oscuras</div>
            <h3>LA MUERTE DE JEAN DEWOLFF</h3>
            <p>
              La muerte de la capitana Jean DeWolff conduce a Spider-Man
              a una investigación marcada por la pérdida, la ira y
              la búsqueda de justicia. Esta historia, publicada en
              <em>Peter Parker, The Spectacular Spider-Man</em>,
              mostró un costado mucho más sombrío del universo
              arácnido. Es un hito de la historia del personaje,
              aunque no corresponde atribuir toda su realización
              artística a Romita Sr.
            </p>
          </div>
        </article>

        <article class="comic comic-destacado">
          <div class="comic-imagen">
            <img src="100.jpeg" alt="Portada del número 100 de The Amazing Spider-Man" loading="lazy">
            <span class="comic-numero">ASM #100</span>
          </div>
          <div class="comic-info">
            <div class="categoria">1971 · Una edición histórica</div>
            <h3>EL ASOMBROSO NÚMERO 100</h3>
            <p>
              Una portada histórica para una serie que ya se había
              consolidado como una de las más importantes de Marvel.
              Publicado en 1971, el número 100 presenta a Peter Parker
              enfrentándose a las consecuencias de sus propios
              experimentos. El arte de Romita contribuyó a convertir
              esta etapa en una referencia visual para los lectores.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="linea-tiempo" id="legado">
      <div class="etiqueta">Una carrera extraordinaria</div>
      <h2 class="titulo-seccion">EL LEGADO DE <span>ROMITA</span></h2>

      <div class="timeline">
        <div class="evento">
          <h3>1966 · Un nuevo Spider-Man</h3>
          <p>
            Romita sucede a Steve Ditko en The Amazing Spider-Man.
            Su interpretación contribuye a establecer la imagen
            del personaje para las siguientes generaciones.
          </p>
        </div>

        <div class="evento">
          <h3>1966 · La llegada de Mary Jane</h3>
          <p>
            Su versión de Mary Jane Watson aparece por primera vez
            con el rostro completamente visible en el número 42,
            con una entrada que se convierte en un clásico.
          </p>
        </div>

        <div class="evento">
          <h3>1967 · Spider-Man No More!</h3>
          <p>
            Una imagen sencilla y poderosa expresa el agotamiento
            de Peter Parker y el conflicto entre su identidad
            heroica y su vida cotidiana.
          </p>
        </div>

        <div class="evento">
          <h3>1973 · Director artístico de Marvel</h3>
          <p>
            Su influencia se extiende más allá de Spider-Man.
            Desde su posición editorial, ayuda a definir la
            identidad visual de Marvel y a orientar a otros artistas.
          </p>
        </div>

        <div class="evento">
          <h3>2023 · Una influencia que permanece</h3>
          <p>
            Romita fallece a los 93 años, dejando un legado
            fundamental en la historia del cómic estadounidense
            y en la imagen de uno de sus héroes más queridos.
          </p>
        </div>
      </div>
    </section>

    <section class="experiencia-ar" id="realidad-aumentada">
      <div class="ar-contenido">
        <div class="etiqueta">Una experiencia más allá de la página</div>
        <h2 class="titulo-seccion">SPIDER-MAN <span>COBRA VIDA</span></h2>
        <p class="ar-descripcion">
          Prepará tu historieta y viví la experiencia en realidad aumentada.
          Abrí la cámara, apuntá a la página indicada y mirá cómo Spider-Man
          aparece en 3D sobre el cómic.
        </p>

        <div class="ar-panel">
          <div class="ar-icono" aria-hidden="true">🕷️</div>
          <h3 style="font-size: 30px; margin-bottom: 15px;">¿LISTO PARA ESCANEAR?</h3>

          <p class="ar-descripcion">
            Tocá el botón, permití el acceso a la cámara y apuntá a la misma
            página de la historieta que se preparó para esta experiencia.
          </p>

          <button type="button" class="boton boton-ar" id="abrir-ar">
            Abrir cámara y escanear →
          </button>

          <p class="ar-nota">
            Usá la cámara del celular. El QR abre esta experiencia; la página
            del cómic es la imagen que la cámara debe reconocer.
          </p>
        </div>
      </div>
    </section>

    <section class="cierre">
      <div class="etiqueta">El arte detrás de la máscara</div>
      <h2>UN GRAN PODER <span>ARTÍSTICO</span></h2>
      <p>
        John Romita Sr. demostró que Spider-Man era mucho más que
        un héroe capaz de trepar paredes. Era un joven con problemas,
        relaciones, responsabilidades y dudas. Su legado vive en cada
        artista que vuelve a dibujar al Hombre Araña y en cada lector
        que encuentra algo propio detrás de su máscara.
      </p>
      <a href="#inicio" class="boton">Volver al comienzo ↑</a>
    </section>
  </main>

  <footer>
    <div><strong>TPFINAL</strong> · Especial John Romita Sr.</div>
    <div>Proyecto educativo y cultural · Spider-Man y sus personajes pertenecen a Marvel.</div>
  </footer>

  <div id="ar-overlay" aria-hidden="true">
    <div id="ar-container"></div>

    <div class="ar-inicio" id="ar-inicio">
      <div class="ar-inicio-panel">
        <div class="etiqueta">Experiencia de realidad aumentada</div>

        <h2>SPIDER-MAN <span>COBRA VIDA</span></h2>

        <p>1. Tocá el botón y permití el acceso a la cámara.</p>
        <p>2. Apuntá a la página exacta del cómic que se preparó como referencia.</p>
        <p>3. Cuando la reconozca, Spider-Man aparecerá en 3D encima de la página.</p>

        <button type="button" class="boton boton-ar" id="ar-empezar">
          Permitir cámara
        </button>

        <p id="ar-mensaje" role="status" aria-live="polite">
          Para empezar, tocá “Permitir cámara”.
        </p>

        <p class="ar-nota">
          La cámara funciona cuando esta página está publicada en una dirección HTTPS.
          También necesitás el archivo data/targets.mind de tu historieta.
        </p>
      </div>
    </div>

    <div class="ar-hud" id="ar-hud">
      <p id="ar-estado">Apuntá la cámara a la página del cómic…</p>
    </div>

    <button type="button" id="ar-cerrar">Cerrar experiencia</button>
  </div>
  `;

  // CANVAS DE PARTICULAS (Inicia oculto)
  const canvasParticulas = document.createElement('canvas');
  canvasParticulas.id = 'particulas-canvas';
  document.body.appendChild(canvasParticulas);
  const ctxParticulas = canvasParticulas.getContext('2d');
  let anchoPantalla = window.innerWidth;
  let altoPantalla = window.innerHeight;

  function ajustarCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    anchoPantalla = window.innerWidth;
    altoPantalla = window.innerHeight;
    canvasParticulas.width = anchoPantalla * dpr;
    canvasParticulas.height = altoPantalla * dpr;
    ctxParticulas.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', ajustarCanvas);
  ajustarCanvas();

  const particulas = [];
  const cantidadParticulas = 65;

  function crearParticula(x, y, explosion = false) {
    return {
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * (explosion ? 9 : 0.7),
      vy: (Math.random() - 0.5) * (explosion ? 9 : 0.7),
      radio: explosion ? Math.random() * 3 + 1 : Math.random() * 5 + 3,
      vida: explosion ? 1 : Infinity,
      color: Math.random() > 0.5 ? '#e62429' : '#ffffff',
      explosion: explosion
    };
  }

  for (let i = 0; i < cantidadParticulas; i++) {
    particulas.push(
      crearParticula(
        Math.random() * anchoPantalla,
        Math.random() * altoPantalla
      )
    );
  }

  function explotar(x, y) {
    for (let i = 0; i < 18; i++) {
      particulas.push(crearParticula(x, y, true));
    }
  }

  let impacto = null;
  let animandoParticulas = false;

  function actualizarParticulas() {
    if (!animandoParticulas) return;

    ctxParticulas.clearRect(0, 0, anchoPantalla, altoPantalla);
    for (let i = particulas.length - 1; i >= 0; i--) {
      const p = particulas[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.explosion) {
        p.vida -= 0.018;
        p.vx *= 0.98;
        p.vy *= 0.98;
        if (p.vida <= 0) {
          particulas.splice(i, 1);
          continue;
        }
      } else {
        p.vx += (Math.random() - 0.5) * 0.025;
        p.vy += (Math.random() - 0.5) * 0.025;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.vx = Math.max(-0.8, Math.min(0.8, p.vx));
        p.vy = Math.max(-0.8, Math.min(0.8, p.vy));

        if (p.x < -10) p.x = anchoPantalla + 10;
        if (p.x > anchoPantalla + 10) p.x = -10;
        if (p.y < -10) p.y = altoPantalla + 10;
        if (p.y > altoPantalla + 10) p.y = -10;
      }

      ctxParticulas.beginPath();
      ctxParticulas.arc(p.x, p.y, p.radio, 0, Math.PI * 2);
      ctxParticulas.fillStyle = p.color;
      ctxParticulas.globalAlpha = p.explosion ? p.vida : 0.75;
      ctxParticulas.shadowBlur = 12;
      ctxParticulas.shadowColor = p.color;
      ctxParticulas.fill();
      ctxParticulas.globalAlpha = 1;
      ctxParticulas.shadowBlur = 0;
    }

    ctxParticulas.lineWidth = 0.6;
    for (let i = 0; i < particulas.length; i++) {
      for (let j = i + 1; j < particulas.length; j++) {
        const a = particulas[i];
        const b = particulas[j];
        const distancia = Math.hypot(a.x - b.x, a.y - b.y);

        if (distancia < 110 && !a.explosion && !b.explosion) {
          const alfa = 1 - distancia / 110;
          ctxParticulas.beginPath();
          ctxParticulas.moveTo(a.x, a.y);
          ctxParticulas.lineTo(b.x, b.y);
          ctxParticulas.strokeStyle = `rgba(120, 170, 230, ${alfa * 0.4})`;
          ctxParticulas.stroke();
        }
      }
    }

    if (impacto) {
      impacto.progreso += 0.035;
      const t = Math.min(impacto.progreso, 1);
      const x = impacto.inicio.x + (impacto.destino.x - impacto.inicio.x) * t;
      const y = impacto.inicio.y + (impacto.destino.y - impacto.inicio.y) * t;

      ctxParticulas.beginPath();
      ctxParticulas.arc(x, y, 8, 0, Math.PI * 2);
      ctxParticulas.fillStyle = '#ffdf38';
      ctxParticulas.shadowBlur = 20;
      ctxParticulas.shadowColor = '#e62429';
      ctxParticulas.fill();
      ctxParticulas.shadowBlur = 0;

      if (t >= 1) {
        explotar(x, y);
        impacto = null;
      }
    }
    requestAnimationFrame(actualizarParticulas);
  }

  // EFECTO DE SONIDO
  let audioContexto = null;
  let sonidoTelarana = null;
  let botonIzquierdo = false;
  let botonDerecho = false;

  function iniciarSonidoTelarana() {
    if (sonidoTelarana) return;
    if (!audioContexto) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioContexto = new AudioContext();
    }
    audioContexto.resume();

    const oscilador = audioContexto.createOscillator();
    const ganancia = audioContexto.createGain();
    const filtro = audioContexto.createBiquadFilter();

    oscilador.type = 'sawtooth';
    oscilador.frequency.setValueAtTime(420, audioContexto.currentTime);
    oscilador.frequency.exponentialRampToValueAtTime(110, audioContexto.currentTime + 0.25);

    filtro.type = 'bandpass';
    filtro.frequency.value = 950;
    filtro.Q.value = 1.5;

    ganancia.gain.setValueAtTime(0.0001, audioContexto.currentTime);
    ganancia.gain.linearRampToValueAtTime(0.12, audioContexto.currentTime + 0.04);

    oscilador.connect(filtro);
    filtro.connect(ganancia);
    ganancia.connect(audioContexto.destination);

    oscilador.start();
    sonidoTelarana = { oscilador: oscilador, ganancia: ganancia };
  }

  function detenerSonidoTelarana() {
    if (!sonidoTelarana) return;
    const sonido = sonidoTelarana;
    sonidoTelarana = null;
    sonido.ganancia.gain.cancelScheduledValues(audioContexto.currentTime);
    sonido.ganancia.gain.setTargetAtTime(0.0001, audioContexto.currentTime, 0.025);
    sonido.oscilador.stop(audioContexto.currentTime + 0.12);
  }

  function comprobarBotones() {
    if (botonIzquierdo && botonDerecho) {
      iniciarSonidoTelarana();
    } else {
      detenerSonidoTelarana();
    }
  }

  window.addEventListener('mousedown', function(event) {
    if (event.button === 0) botonIzquierdo = true;
    if (event.button === 2) botonDerecho = true;
    comprobarBotones();
  });

  window.addEventListener('mouseup', function(event) {
    if (event.button === 0) botonIzquierdo = false;
    if (event.button === 2) botonDerecho = false;
    comprobarBotones();
  });

  window.addEventListener('contextmenu', function(event) {
    if (botonIzquierdo && botonDerecho) {
      event.preventDefault();
    }
  });

  window.addEventListener('blur', function() {
    botonIzquierdo = false;
    botonDerecho = false;
    detenerSonidoTelarana();
  });

  // ESTILOS AR
  const estilosAR = document.createElement('style');
  estilosAR.textContent = `
    #ar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: #050505;
      color: white;
      font-family: Arial, sans-serif;
    }

    #ar-container {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #ar-container video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    #ar-inicio {
      position: absolute;
      inset: 0;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.78);
    }

    .ar-inicio-panel {
      width: min(500px, 100%);
      padding: 30px;
      background: #151515;
      border: 1px solid #e62429;
      border-radius: 12px;
      text-align: center;
    }

    .ar-inicio-panel h2 {
      font-size: 32px;
      margin: 18px 0;
    }

    .ar-inicio-panel h2 span { color: #e62429; }
    .ar-inicio-panel p { line-height: 1.6; margin: 12px 0; }

    .ar-hud {
      position: absolute;
      z-index: 2;
      bottom: 25px;
      left: 0;
      width: 100%;
      text-align: center;
      pointer-events: none;
    }

    .ar-hud p {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 30px;
      background: rgba(0, 0, 0, 0.7);
    }

    #ar-cerrar {
      position: absolute;
      z-index: 5;
      top: 20px;
      right: 20px;
      padding: 12px 18px;
      color: white;
      background: #e62429;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .ar-nota {
      font-size: 12px;
      opacity: 0.7;
    }
  `;
  document.head.appendChild(estilosAR);

  // IMPORTMAP
  const mapaImportaciones = document.createElement('script');
  mapaImportaciones.type = 'importmap';
  mapaImportaciones.textContent = JSON.stringify({
    imports: {
      "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/",
      "mind-ar/": "https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/"
    }
  });
  document.head.appendChild(mapaImportaciones);

  // MODULO REALIDAD AUMENTADA
  const moduloAR = document.createElement('script');
  moduloAR.type = 'module';
  moduloAR.textContent = `
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { MindARThree } from 'mind-ar/mindar-image-three.prod.js';

    const overlay = document.querySelector('#ar-overlay');
    const contenedor = document.querySelector('#ar-container');
    const botonAbrir = document.querySelector('#abrir-ar');
    const botonEmpezar = document.querySelector('#ar-empezar');
    const botonCerrar = document.querySelector('#ar-cerrar');
    const pantallaInicio = document.querySelector('#ar-inicio');
    const mensaje = document.querySelector('#ar-mensaje');
    const estado = document.querySelector('#ar-estado');
    const canvasParticulas = document.querySelector('#particulas-canvas');

    function esMovil() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    botonAbrir.addEventListener('click', () => {
      if (!esMovil()) {
        alert("La experiencia de Realidad Aumentada está diseñada para celulares. En PC puedes explorar todo el contenido y la galería.");
        return;
      }

      overlay.style.display = 'block';
      overlay.setAttribute('aria-hidden', 'false');
      pantallaInicio.style.display = 'flex';
      mensaje.textContent = 'Para empezar, tocá “Permitir cámara”.';
    });

    botonEmpezar.addEventListener('click', async () => {
      if (cargando || activo) return;
      cargando = true;
      mensaje.textContent = 'Preparando la cámara...';

      try {
        mindar = new MindARThree({
          container: contenedor,
          imageTargetSrc: './data/targets.mind'
        });

        const { renderer, scene, camera } = mindar;
        const anchor = mindar.addAnchor(0);

        const luzAmbiental = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(luzAmbiental);

        const loader = new GLTFLoader();
        loader.load('./data/spiderman.gltf', (gltf) => {
          const modelo = gltf.scene;
          modelo.scale.set(0.1, 0.1, 0.1);
          anchor.group.add(modelo);
        });

        anchor.onTargetFound = () => {
          estado.textContent = '¡Spider-Man detectado!';
        };

        anchor.onTargetLost = () => {
          estado.textContent = 'Buscando la página del cómic...';
        };

        await mindar.start();
        
        // MOSTRAR LAS PARTÍCULAS SOLO CUANDO SE ACTIVA LA RA
        canvasParticulas.style.display = 'block';
        animandoParticulas = true;
        actualizarParticulas();

        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera);
        });

        pantallaInicio.style.display = 'none';
        activo = true;
      } catch (err) {
        mensaje.textContent = 'Error al iniciar la cámara o cargar assets.';
        console.error(err);
      } finally {
        cargando = false;
      }
    });

    botonCerrar.addEventListener('click', () => {
      if (mindar && activo) {
        mindar.stop();
        activo = false;
      }
      // OCULTAR LAS PARTÍCULAS AL CERRAR LA RA
      canvasParticulas.style.display = 'none';
      animandoParticulas = false;

      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
    });
  `;
  document.head.appendChild(moduloAR);
}
