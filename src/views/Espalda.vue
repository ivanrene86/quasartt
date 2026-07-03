<template>
  <section>
    <h2>Ejercicios para Espalda</h2>
    <p class="intro">Rutinas para mejorar tracción, postura y fuerza posterior: dominadas, remos y peso muerto enfocados en técnica, estabilidad escapular y prevención de molestias lumbares.</p>
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
  { name: 'Dominadas', desc: 'Gran ejercicio para dorsal ancho y fuerza de tracción.', focus: 'Dorsal ancho y fuerza de tirón', duration: '4-5 min', sets: '4', reps: '6-10', equipment: 'Barra de dominadas', video: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
  { name: 'Remo con barra', desc: 'Desarrolla grosor de la espalda media.', focus: 'Espalda media y romboides', duration: '4 min', sets: '4', reps: '8-10', equipment: 'Barra', video: 'https://www.youtube.com/embed/vT2GjY_Umpw' },
  { name: 'Remo con polea', desc: 'Aislamiento y control del movimiento.', focus: 'Dorsal y control técnico', duration: '3-4 min', sets: '3', reps: '10-12', equipment: 'Polea', video: 'https://www.youtube.com/embed/GZbfZ033f74' },
  { name: 'Peso muerto', desc: 'Ejercicio completo que fortalece la espalda baja.', focus: 'Espalda baja y cadena posterior', duration: '4-5 min', sets: '3', reps: '6-8', equipment: 'Barra', video: 'https://www.youtube.com/embed/ytGaGIn3SjE' }
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
  background: rgba(216, 134, 255, 0.16);
  border: 1px solid rgba(216, 134, 255, 0.24);
}
.exercise-meta li:nth-child(1) { background: rgba(96, 165, 250, 0.16); border-color: rgba(96, 165, 250, 0.24); }
.exercise-meta li:nth-child(2) { background: rgba(248, 113, 113, 0.16); border-color: rgba(248, 113, 113, 0.24); }
.exercise-meta li:nth-child(3) { background: rgba(251, 191, 36, 0.16); border-color: rgba(251, 191, 36, 0.24); }
.exercise-meta li:nth-child(4) { background: rgba(16, 185, 129, 0.16); border-color: rgba(16, 185, 129, 0.24); }
.exercise-meta li:nth-child(5) { background: rgba(148, 163, 184, 0.16); border-color: rgba(148, 163, 184, 0.24); }
.video iframe { max-width:100% }
</style>
