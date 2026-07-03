<template>
  <section class="home">
    <div class="hero">
      <h2>Bienvenido al Gym</h2>
      <p>Transforma tu cuerpo con rutinas específicas por zona. Elige una opción.</p>
    </div>

    <div class="options">
      <router-link class="card brazo" to="/brazo">
        <div class="img-placeholder"><img src="https://img.magnific.com/fotos-premium/hombre-musculoso-forma-haciendo-ejercicio-brazo-gimnasio_606562-502.jpg?w=2000" alt=""></div>
        <div class="title">Brazo</div>
        <div class="subtitle">Rutinas para bíceps y tríceps: fuerza, volumen y definición. Incluye variaciones para principiantes y avanzados.</div>
      </router-link>

      <router-link class="card pecho" to="/pecho">
        <div class="img-placeholder"><img src="https://tse1.mm.bing.net/th/id/OIP.bmN73_mmdgGgCR3accZnCAHaE8?r=0&cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Pecho"></div>
        <div class="title">Pecho</div>
        <div class="subtitle">Ejercicios para desarrollar la masa y forma del pectoral: press plano, inclinado y movimientos de aislamiento controlados.</div>
      </router-link>

      <router-link class="card pierna" to="/pierna">
        <div class="img-placeholder"><img src="https://cdn.shopify.com/s/files/1/0754/7279/8002/files/9ef0cc9a0f76c9202234cf240e2334bf.png?v=1749553722" alt=""></div>
        <div class="title">Pierna</div>
        <div class="subtitle">Entrenamientos para cuádriceps, isquiotibiales y glúteos: fuerza, potencia y estabilidad unilateral.</div>
      </router-link>

      <router-link class="card espalda" to="/espalda">
        <div class="img-placeholder"><img src="https://img.magnific.com/fotos-premium/culturista-ejercitar-espalda-gimnasio_600776-34724.jpg" alt=""></div>
        <div class="title">Espalda</div>
        <div class="subtitle">Rutinas de tracción para dorsal, romboides y espalda baja, con enfoque en postura y fuerza funcional.</div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.hero { background: linear-gradient(90deg, rgba(91,140,255,0.18), rgba(122,252,255,0.12)); padding:24px; border-radius:20px; margin-bottom:24px }
.hero h2 { margin: 0 0 8px; font-size:28px }
.hero p { margin: 0; color: var(--text); font-size:16px; line-height:1.6 }

.options { display:grid; grid-template-columns: repeat(2, 1fr); gap:24px; margin-top:18px }
.card {
  display:flex;
  flex-direction:column;
  background: linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.32));
  border-radius:24px;
  overflow:hidden;
  text-decoration:none;
  color: inherit;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  min-height: 420px;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
}
.img-placeholder {
  width: 100%;
  min-height: 220px;
  overflow: hidden;
  position: relative;
}
.img-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.02);
  transition: transform 0.5s ease;
}
.card:hover .img-placeholder img {
  transform: scale(1.05);
}
.card .title {
  font-size: 20px;
  margin: 16px 20px 8px;
}
.card .subtitle {
  font-size: 14px;
  margin: 0 20px 20px;
  color: rgba(15, 23, 42, 0.84);
  line-height: 1.65;
}
.card.brazo { background: linear-gradient(135deg, #ffaf9a, #ff7a7a); }
.card.pecho { background: linear-gradient(135deg, #8bb8ff, #6b8bff); }
.card.pierna { background: linear-gradient(135deg, #88ffba, #3dd2ff); }
.card.espalda { background: linear-gradient(135deg, #d9a8ff, #ff8ae5); }

@media (max-width: 1024px) {
  .options { gap:22px }
  .card { min-height: 400px }
}

@media (max-width: 768px) {
  .hero { padding:20px }
  .hero h2 { font-size:26px }
  .card { min-height: 380px }
  .img-placeholder { min-height: 200px }
  .card .title { font-size: 19px }
}

@media (max-width: 640px) {
  .options { grid-template-columns: 1fr; gap:18px }
  .hero { padding:16px; margin-bottom:20px }
  .hero h2 { font-size:24px }
  .hero p { font-size:15px }
  .card { min-height: 360px }
  .img-placeholder { min-height: 180px }
  .card .title { font-size: 18px }
  .card .subtitle { font-size: 13px; margin: 0 18px 18px }
}

@media (max-width: 480px) {
  .hero { padding:14px }
  .hero h2 { font-size: 22px }
  .hero p { font-size: 14px }
  .card { min-height: 340px; }
  .img-placeholder { min-height: 160px }
  .card .title { font-size: 17px; margin: 12px 16px 6px }
  .card .subtitle { font-size: 12px; margin: 0 16px 16px }
}
</style>
