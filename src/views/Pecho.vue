<template>
  <section>
    <h2>Ejercicios para Pecho</h2>
    <p class="intro">Programa para trabajar la fuerza y la forma del pectoral: combina press plano e inclinado para masa, y ejercicios de aislamiento para definir el contorno. Opciones escalables según tu nivel.</p>
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
  { name: 'Press de banca', desc: 'Ejercicio clásico para el pecho y tríceps con excelente transferencia para fuerza.', focus: 'Pectoral medio y tríceps', duration: '4-5 min', sets: '4', reps: '8-10', equipment: 'Barra y banco', video: 'https://www.youtube.com/embed/rT7DgCr-3pg' },
  { name: 'Press inclinado con mancuernas', desc: 'Enfocado en la parte superior del pecho y estabilidad del hombro.', focus: 'Pectoral superior', duration: '3-4 min', sets: '3', reps: '10-12', equipment: 'Mancuernas', video: 'https://www.youtube.com/embed/8iPEnn-ltC8' },
  { name: 'Aperturas con mancuernas', desc: 'Aislamiento para estirar y abrir el pecho, mejorando la definición.', focus: 'Pectoral interno y amplitud', duration: '3-4 min', sets: '3', reps: '12-15', equipment: 'Mancuernas', video: 'https://www.youtube.com/embed/eozdVDA78K0' },
  { name: 'Fondos para pecho', desc: 'Excelente para la parte inferior del pecho y el desarrollo del torso.', focus: 'Pectoral inferior y tríceps', duration: '3-4 min', sets: '3', reps: '8-12', equipment: 'Paralelas', video: 'https://www.youtube.com/embed/6kALZikXxLc' }
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
  background: rgba(96, 165, 250, 0.16);
  border: 1px solid rgba(96, 165, 250, 0.24);
}
.exercise-meta li:nth-child(1) { background: rgba(248, 113, 113, 0.16); border-color: rgba(248, 113, 113, 0.24); }
.exercise-meta li:nth-child(2) { background: rgba(251, 191, 36, 0.16); border-color: rgba(251, 191, 36, 0.24); }
.exercise-meta li:nth-child(3) { background: rgba(168, 85, 247, 0.16); border-color: rgba(168, 85, 247, 0.24); }
.exercise-meta li:nth-child(4) { background: rgba(16, 185, 129, 0.16); border-color: rgba(16, 185, 129, 0.24); }
.exercise-meta li:nth-child(5) { background: rgba(148, 163, 184, 0.16); border-color: rgba(148, 163, 184, 0.24); }
.video iframe { max-width:100% }
</style>
