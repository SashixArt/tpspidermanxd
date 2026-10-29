function setup() {
  noCanvas();

  document.body.innerHTML = `
  <style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

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

  .logo span {
    color: var(--rojo);
  }

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

  .imagen-principal img:hover {
    transform: scale(1.025);
  }

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

  .titulo-seccion span {
    color: var(--rojo);
  }

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

  .bio-linea {
    background: var(--rojo);
  }

  .bio-texto {
    font-size: 16px;
    line-height: 1.9;
    color: #283247;
  }

  .bio-texto strong {
    color: #075bb3;
  }

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
    align-items: end;
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

  .comic:hover .comic-imagen img {
    transform: scale(1.04);
  }

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

  .comic-info {
    padding: 24px;
  }

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

  .comic-destacado {
    border-bottom-color: var(--rojo);
  }

  .comic-destacado .categoria {
    color: var(--amarillo);
  }

  .linea-tiempo {
    padding: 90px 10%;
    background: #101b30;
  }

  .linea-tiempo .titulo-seccion {
    color: white;
  }

  .timeline {
    margin-top: 40px;
    border-left: 3px solid var(--rojo);
    padding-left: 30px;
  }

  .evento {
    position: relative;
    padding: 0 0 35px 0;
  }

  .evento::before {
    content: "";
    position: absolute;
    left: -39px;
    top: 5px;
    width: 13px;
    height: 13px;
    background: var(--amarillo);
    border: 3px solid var(--rojo);
    border-radius: 50%;
  }

  .evento h3 {
    font-size: 27px;
    color: var(--amarillo);
    margin-bottom: 8px;
  }

  .evento p {
    color: #c4cede;
    line-height: 1.8;
    font-size: 14px;
    max-width: 700px;
  }

  .experiencia-ar {
    padding: 85px 8%;
    background:
      radial-gradient(ellipse at 15% 50%, rgba(8, 102, 198, 0.25), transparent 50%),
      linear-gradient(135deg, #080e1b, #111b30);
    text-align: center;
  }

  .ar-contenido {
    max-width: 850px;
    margin: 0 auto;
  }

  .ar-contenido .titulo-seccion {
    color: white;
  }

  .ar-descripcion {
    color: #c4cede;
    line-height: 1.8;
    max-width: 650px;
    margin: 0 auto 28px;
  }

  .ar-panel {
    max-width: 650px;
    margin: 35px auto 0;
    padding: 35px 25px;
    border: 2px solid var(--azul);
    border-bottom: 5px solid var(--rojo);
    background: rgba(17, 27, 48, 0.9);
  }

  .ar-icono {
    font-size: 58px;
    margin-bottom: 18px;
  }

  .ar-nota {
    margin-top: 18px;
    color: #9eabc0;
    font-size: 12px;
    line-height: 1.7;
  }

  .experiencia-ar .boton {
    border: 0;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
  }

  /* VENTANA DE REALIDAD AUMENTADA */

  .boton-ar {
    border: 0;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

  #ar-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: #080e1b;
    color: white;
    overflow: hidden;
  }

  #ar-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #080e1b;
  }

  #ar-container video {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    z-index: 1 !important;
  }

  #ar-container canvas {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 2 !important;
  }

  .ar-inicio {
    position: absolute;
    z-index: 5;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px;
    background: radial-gradient(ellipse at 50% 20%, #152f58, #080e1b 70%);
  }

  .ar-inicio-panel {
    width: 100%;
    max-width: 440px;
    padding: 28px 22px;
    text-align: center;
    border: 2px solid var(--azul);
    border-bottom: 5px solid var(--rojo);
    background: rgba(17, 27, 48, 0.97);
  }

  .ar-inicio-panel h2 {
    font-size: clamp(35px, 9vw, 48px);
    margin-bottom: 18px;
  }

  .ar-inicio-panel h2 span {
    color: var(--rojo);
  }

  .ar-inicio-panel p {
    margin-top: 10px;
    color: #c4cede;
    line-height: 1.6;
    font-size: 14px;
  }

  #ar-mensaje {
    min-height: 40px;
    color: var(--amarillo) !important;
    overflow-wrap: anywhere;
  }

  .ar-hud {
    position: absolute;
    z-index: 6;
    top: 0;
    left: 0;
    right: 0;
    display: none;
    padding: 16px;
    text-align: center;
    background: linear-gradient(rgba(8, 14, 27, 0.88), transparent);
    pointer-events: none;
  }

  #ar-estado {
    display: inline-block;
    max-width: 90%;
    padding: 10px 13px;
    border-radius: 4px;
    background: rgba(8, 14, 27, 0.86);
    color: white;
    font-size: 14px;
  }

  #ar-cerrar {
    position: absolute;
    z-index: 7;
    display: none;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 13px 18px;
    border: 0;
    background: var(--rojo);
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
  }

  .cierre {
    padding: 100px 10%;
    text-align: center;
    background:
      linear-gradient(rgba(8, 14, 27, 0.88), rgba(8, 14, 27, 0.96)),
      repeating-linear-gradient(45deg, #142544 0px, #142544 2px, #080e1b 2px, #080e1b 12px);
  }

  .cierre h2 {
    font-size: clamp(45px, 7vw, 85px);
    margin-bottom: 20px;
  }

  .cierre h2 span {
    color: var(--rojo);
  }

  .cierre p {
    color: #c4cede;
    max-width: 650px;
    margin: 0 auto 30px;
    line-height: 1.9;
  }

  footer {
    padding: 25px 8%;
    background: #050912;
    border-top: 3px solid var(--rojo);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    color: #8b98ad;
    font-size: 11px;
    line-height: 1.7;
  }

  footer strong {
    color: white;
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

    .comic-imagen {
      height: 320px;
    }
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

    h1 {
      font-size: 58px;
    }

    .biografia, .galeria, .linea-tiempo {
      padding: 65px 7%;
    }

    .comic-grid {
      grid-template-columns: 1fr;
    }

    .comic-imagen {
      height: auto;
      min-height: 300px;
      max-height: 500px;
    }

    .comic-imagen img {
      max-height: 500px;
    }

    .encabezado-galeria {
      align-items: flex-start;
      flex-direction: column;
    }

    .dato {
      margin-top: 12px;
    }

    .cierre {
      padding: 70px 7%;
    }

    footer {
      flex-direction: column;
    }
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
          <button type="button" class="boton boton-ar" id="abrir-ar">Abrir cámara y escanear →</button>
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
        <button type="button" class="boton boton-ar" id="ar-empezar">Permitir cámara</button>
        <p id="ar-mensaje" role="status" aria-live="polite">Para empezar, tocá “Permitir cámara”.</p>
        <p class="ar-nota">La cámara funciona cuando esta página está publicada en una dirección HTTPS. También necesitás el archivo data/targets.mind de tu historieta.</p>
      </div>
    </div>

    <div class="ar-hud" id="ar-hud">
      <p id="ar-estado">Apuntá la cámara a la página del cómic…</p>
    </div>
    <button type="button" id="ar-cerrar">Cerrar experiencia</button>
  </div>
  `;

  document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('error', function() {
      this.style.background = '#18243a';
      this.style.minHeight = '150px';
      this.alt = 'No se encontró el archivo: ' + this.getAttribute('src');
      this.title = 'Revisá el nombre del archivo y su ubicación.';
    });
  });

  const abrirAR = document.querySelector('#abrir-ar');
  const overlayAR = document.querySelector('#ar-overlay');
  const botonCerrarAR = document.querySelector('#ar-cerrar');
  const inicioAR = document.querySelector('#ar-inicio');
  const hudAR = document.querySelector('#ar-hud');
  const mensajeAR = document.querySelector('#ar-mensaje');

  const mostrarAR = function() {
    overlayAR.style.display = 'block';
    overlayAR.setAttribute('aria-hidden', 'false');
    inicioAR.style.display = 'flex';
    hudAR.style.display = 'none';
    botonCerrarAR.style.display = 'none';
    mensajeAR.textContent = 'Tocá “Permitir cámara” para continuar.';
  };

  const cerrarAR = function() {
    document.dispatchEvent(new Event('cerrar-ar-interno'));
    overlayAR.style.display = 'none';
    overlayAR.setAttribute('aria-hidden', 'true');
    inicioAR.style.display = 'flex';
    hudAR.style.display = 'none';
    botonCerrarAR.style.display = 'none';
  };

  if (abrirAR) abrirAR.addEventListener('click', mostrarAR);
  if (botonCerrarAR) botonCerrarAR.addEventListener('click', cerrarAR);

  const mapaImportaciones = document.createElement('script');
  mapaImportaciones.type = 'importmap';
  mapaImportaciones.textContent = JSON.stringify({
    imports: {
      'three': 'https://unpkg.com/three@0.160.0/build/three.module.js',
      'three/addons/': 'https://unpkg.com/three@0.160.0/examples/jsm/',
      'mindar-image-three': 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-three.prod.js'
    }
  });
  document.head.appendChild(mapaImportaciones);

  const moduloAR = document.createElement('script');
  moduloAR.type = 'module';
  moduloAR.textContent = `
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { MindARThree } from 'mindar-image-three';

    const boton = document.querySelector('#ar-empezar');
    const pantalla = document.querySelector('#ar-inicio');
    const hud = document.querySelector('#ar-hud');
    const mensaje = document.querySelector('#ar-mensaje');
    const estado = document.querySelector('#ar-estado');
    const botonCerrar = document.querySelector('#ar-cerrar');
    const contenedor = document.querySelector('#ar-container');

    let experiencia = null;
    let iniciando = false;

    async function iniciarExperiencia() {
      if (iniciando || experiencia) return;
      iniciando = true;
      boton.disabled = true;
      mensaje.textContent = 'Preparando el modelo 3D y la cámara…';

      try {
        experiencia = new MindARThree({
          container: contenedor,
          imageTargetSrc: './data/targets.mind',
          maxTrack: 1,
          uiLoading: 'no',
          uiScanning: 'no',
          uiError: 'no'
        });

        const renderer = experiencia.renderer;
        const scene = experiencia.scene;
        const camera = experiencia.camera;

        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        scene.add(new THREE.HemisphereLight(0xffffff, 0x526080, 2));

        const luz = new THREE.DirectionalLight(0xffffff, 2);
        luz.position.set(0, 4, 5);
        scene.add(luz);

        const anchor = experiencia.addAnchor(0);

        anchor.onTargetFound = () => {
          estado.textContent = '¡PÁGINA RECONOCIDA! Spider-Man está sobre el cómic.';
        };

        anchor.onTargetLost = () => {
          estado.textContent = 'No veo la página. Volvé a apuntar a la historieta.';
        };

        mensaje.textContent = 'Aceptá el permiso de cámara si aparece. Estamos preparando Spider-Man…';

        const loader = new GLTFLoader();
        const promesaCamara = experiencia.start();
        const promesaModelo = loader.loadAsync('./data/spiderman.glb');
        const resultados = await Promise.all([promesaModelo, promesaCamara]);

        const gltf = resultados[0];
        const modelo = gltf.scene;
        const caja = new THREE.Box3().setFromObject(modelo);
        const tamano = new THREE.Vector3();
        const centro = new THREE.Vector3();

        caja.getSize(tamano);
        caja.getCenter(centro);

        if (tamano.y > 0) {
          const alturaDeseada = 0.65;
          const escala = alturaDeseada / tamano.y;

          modelo.scale.setScalar(escala);
          modelo.position.set(
            -centro.x * escala,
            -caja.min.y * escala,
            -centro.z * escala + 0.10
          );
        }

        anchor.group.add(modelo);

        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera);
        });

        pantalla.style.display = 'none';
        hud.style.display = 'block';
        botonCerrar.style.display = 'block';
        estado.textContent = 'Apuntá la cámara a la página del cómic…';

      } catch (error) {
        console.error('Error al iniciar la realidad aumentada:', error);

        const detalle = error && error.message ? error.message : String(error);

        if (detalle.toLowerCase().includes('target') ||
            detalle.toLowerCase().includes('mind')) {
          mensaje.textContent = 'Falta data/targets.mind. Generá ese archivo con una foto de la página del cómic y guardalo en la carpeta data.';
        } else if (detalle.toLowerCase().includes('camera') ||
                   detalle.toLowerCase().includes('permission')) {
          mensaje.textContent = 'No se pudo acceder a la cámara. Aceptá el permiso y abrí la página con HTTPS desde el celular.';
        } else {
          mensaje.textContent = 'No se pudo iniciar. Revisá que data/spiderman.glb y data/targets.mind existan, que haya internet y que la página use HTTPS. Detalle: ' + detalle;
        }

        if (experiencia) {
          try {
            experiencia.stop();
          } catch (_) {}

          experiencia = null;
          contenedor.innerHTML = '';
        }

        boton.disabled = false;
        iniciando = false;
      }
    }

    boton.addEventListener('click', iniciarExperiencia);

    document.addEventListener('cerrar-ar-interno', () => {
      if (experiencia) {
        try {
          experiencia.renderer.setAnimationLoop(null);
          experiencia.stop();
        } catch (error) {
          console.warn(error);
        }

        experiencia = null;
      }

      contenedor.innerHTML = '';
      iniciando = false;
      boton.disabled = false;
      pantalla.style.display = 'flex';
      hud.style.display = 'none';
      botonCerrar.style.display = 'none';
      mensaje.textContent = 'Cámara cerrada. Podés volver a intentarlo.';
    });

    window.addEventListener('resize', () => {
      if (experiencia) {
        experiencia.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    });
  `;

  document.body.appendChild(moduloAR);

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && overlayAR.style.display === 'block') {
      cerrarAR();
    }
  });
}

function draw() {
}
