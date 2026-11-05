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

  #particulas-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
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
