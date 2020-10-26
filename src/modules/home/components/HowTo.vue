<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-transparent via-gray-200 to-transparent"
  >
    <div
      class="container relative z-10 py-32 mx-auto lg:py-40 lg:max-w-screen-lg"
    >
      <article class="mb-16 lg:mb-40">
        <h1 class="leading-tight md:leading-normal">
          How to become a volunteer?
        </h1>
        <div class="items-end md:flex">
          <p class="md:w-1/2">
            Aqui temos um texto descritivo sobre o que a pessoa deve fazer...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum fermentum ligula gravida feugiat. Fusce molestie at nibh id
            varius. Nunc suscipit hendrerit ex, vel commodo arcu dignissim
            porttitor. Ut vestibulum dui eu ligula vehicula
          </p>
          <button class="mt-6 md:ml-32">LEARN MORE</button>
        </div>
      </article>
      <article class="text-right">
        <h1 class="leading-tight md:leading-normal">How are the projects?</h1>
        <div class="flex-row-reverse items-end md:flex">
          <p class="md:w-1/2">
            Aqui temos um texto descritivo sobre o que a pessoa deve fazer...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum fermentum ligula gravida feugiat. Fusce molestie at nibh id
            varius. Nunc suscipit hendrerit ex, vel commodo arcu dignissim
            porttitor. Ut vestibulum dui eu ligula vehicula
          </p>
          <button class="mt-6 md:mr-32">LEARN MORE</button>
        </div>
      </article>
    </div>

    <!-- decoration -->
    <img
      class="absolute top-0 hidden md:block left"
      style="margin-left: 66%; height: 920px"
      src="../assets/how-to-shape-1.svg"
      alt="Decoration"
    />
    <img
      class="absolute top-0 right-0 hidden mt-32 md:block"
      style="margin-right: 68%; height: 920px"
      src="../assets/how-to-shape-2.svg"
      alt="Decoration"
    />
  </section>
</template>
<script lang="ts">
export default {
  name: 'how-to'
}
</script>
<style scoped>
a:focus,
a:hover {
  @apply text-blue-500 outline-none;
}

h1 {
  @apply mb-5 text-5xl font-bold text-blue-500 font-serif2;
}

p {
  @apply text-xl text-gray-900;
}

button {
  @apply w-48 py-3 text-base text-white bg-blue-500 rounded-full shadow outline-none;
}
button:focus {
  @apply shadow-outline;
}
button:hover {
  @apply bg-blue-400;
}
</style>
