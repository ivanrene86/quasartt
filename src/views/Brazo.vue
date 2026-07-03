<template>
  <section>
    <h2>Ejercicios para Brazo</h2>
    <p class="intro">Rutinas centradas en el desarrollo de bíceps y tríceps: mezcla de movimientos compuestos y aislados para ganar fuerza, volumen y definición. Encontrarás variantes para distintos niveles y consejos de progresión.</p>
    <div class="exercise" v-for="(e, i) in exercises" :key="i">
      <h3>{{ e.name }}</h3>
      <p class="exercise-desc">{{ e.desc }}</p>
      <ul class="exercise-meta">
        <li><strong>Objetivo:</strong> {{ e.focus }}</li>
        <li><strong>Duración estimada:</strong> {{ e.duration }}</li>
        <li><strong>Series:</strong> {{ e.sets }}</li>
        <li><strong>Reps:</strong> {{ e.reps }}</li>
        <li><strong>Equipo:</strong> {{ e.equipment }}</li>
      </ul>
      <div class="video">
        <iframe :src="e.video" frameborder="0" allowfullscreen width="560" height="315"></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const exercises = [
  { name: 'Curl con mancuerna', desc: 'Curl de bíceps con mancuerna para fuerza y forma.', focus: 'Bíceps y antebrazo', duration: '3-4 min', sets: '3', reps: '10-12', equipment: 'Mancuernas', video: 'https://www.youtube.com/embed/ykJmrZ5v0Oo' },
  { name: 'Curl martillo', desc: 'Trabaja el braquial y el antebrazo.', focus: 'Bíceps y braquial', duration: '3-4 min', sets: '3', reps: '10-12', equipment: 'Mancuernas', video: 'https://www.youtube.com/embed/5FyBYKhCA_0?si=OuSPn2LdDEcctBEy' },
  { name: 'Fondos en paralelas', desc: 'Fuerza para tríceps y estabilidad de hombro.', focus: 'Tríceps y pecho inferior', duration: '3-4 min', sets: '3', reps: '8-10', equipment: 'Paralelas', video: 'https://www.youtube.com/embed/0326dy_-CzM' },
  { name: 'Extensión de tríceps con cable', desc: 'Aislamiento del tríceps para definición.', focus: 'Tríceps', duration: '3-4 min', sets: '3', reps: '12-15', equipment: 'Polea', video: 'https://www.youtube.com/embed/2-LAMcpzODU' }
]
</script>

<style scoped>
.intro { margin: 8px 0 18px; color: var(--text) }
.exercise { margin-bottom:24px }
.exercise-desc { margin: 8px 0 14px; color: var(--text) }
.exercise-meta { list-style: none; padding: 0; margin: 0 0 16px; display: flex; flex-wrap: wrap; gap: 10px; }
.exercise-meta li {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  background: rgba(248, 113, 113, 0.16);
  border: 1px solid rgba(248, 113, 113, 0.25);
}
.exercise-meta li:nth-child(1) { background: rgba(96, 165, 250, 0.16); border-color: rgba(96, 165, 250, 0.24); }
.exercise-meta li:nth-child(2) { background: rgba(251, 191, 36, 0.16); border-color: rgba(251, 191, 36, 0.24); }
.exercise-meta li:nth-child(3) { background: rgba(168, 85, 247, 0.16); border-color: rgba(168, 85, 247, 0.24); }
.exercise-meta li:nth-child(4) { background: rgba(16, 185, 129, 0.16); border-color: rgba(16, 185, 129, 0.24); }
.exercise-meta li:nth-child(5) { background: rgba(148, 163, 184, 0.16); border-color: rgba(148, 163, 184, 0.24); }
.video iframe { max-width:100% }
</style>
