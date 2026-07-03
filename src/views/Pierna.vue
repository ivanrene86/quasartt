<template>
  <section>
    <h2>Ejercicios para Pierna</h2>
    <p class="intro">Plan integral para piernas: sentadillas y empujes para potencia, peso muerto para cadena posterior, y ejercicios unilaterales para equilibrio y prevención de lesiones.</p>
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
  { name: 'Sentadilla', desc: 'Ejercicio fundamental para fuerza de piernas y coordinación general.', focus: 'Cuádriceps, glúteos e isquiotibiales', duration: '4-5 min', sets: '4', reps: '8-10', equipment: 'Barra', video: 'https://www.youtube.com/embed/UXJrBgI2RxA' },
  { name: 'Prensa de piernas', desc: 'Permite trabajar con cargas seguras y enfoque en cuádriceps.', focus: 'Cuádriceps y glúteos', duration: '3-4 min', sets: '4', reps: '10-12', equipment: 'Máquina de prensa', video: 'https://www.youtube.com/embed/IZxyjW7MPJQ' },
  { name: 'Peso muerto rumano', desc: 'Cliente ideal para cadena posterior, isquiotibiales y glúteos.', focus: 'Isquiotibiales y glúteos', duration: '3-4 min', sets: '3', reps: '8-10', equipment: 'Barra', video: 'https://www.youtube.com/embed/2SHsk9AzdjA' },
  { name: 'Zancadas', desc: 'Mejora el equilibrio, estabilidad y fuerza unilateral.', focus: 'Pierna completa y estabilidad', duration: '3-4 min', sets: '3', reps: '10-12 por pierna', equipment: 'Mancuernas', video: 'https://www.youtube.com/embed/QOVaHwm-Q6U' }
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
  background: rgba(16, 185, 129, 0.16);
  border: 1px solid rgba(16, 185, 129, 0.24);
}
.exercise-meta li:nth-child(1) { background: rgba(96, 165, 250, 0.16); border-color: rgba(96, 165, 250, 0.24); }
.exercise-meta li:nth-child(2) { background: rgba(248, 113, 113, 0.16); border-color: rgba(248, 113, 113, 0.24); }
.exercise-meta li:nth-child(3) { background: rgba(251, 191, 36, 0.16); border-color: rgba(251, 191, 36, 0.24); }
.exercise-meta li:nth-child(4) { background: rgba(168, 85, 247, 0.16); border-color: rgba(168, 85, 247, 0.24); }
.exercise-meta li:nth-child(5) { background: rgba(148, 163, 184, 0.16); border-color: rgba(148, 163, 184, 0.24); }
.video iframe { max-width:100% }
</style>
