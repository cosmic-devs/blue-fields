<template>
  <section class="relative overflow-hidden">
    <img
      class="absolute w-full h-full mt-4 transform scale-105 rotate-180"
      draggable="false"
      src="../assets/footer-home.svg"
      alt="BlueFields Background"
    />
    <section class="container relative px-10 mx-auto mt-40 lg:flex">
      <div class="lg:w-1/2">
        <img
          class="w-56 mb-8 transform rotate-180"
          draggable="false"
          src="../assets/footer-logo.svg"
          alt="BlueFields Logo"
        />
        <h2 class="mb-1 ml-3 font-semibold text-white">Newsletter:</h2>
        <form class="flex mb-10 lg:mb-0">
          <input
            type="text"
            class="w-full max-w-sm py-2 pl-3 pr-32 text-xs text-blue-400 bg-blue-100 rounded-full lg:w-1/2
            focus:outline-none focus:shadow-outline"
            placeholder="Enter e-mail address"
          />
          <button
            class="w-24 px-3 -ml-24 text-sm font-semibold text-white uppercase bg-blue-600 rounded-full
            focus:outline-none focus:shadow-outline hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="text-base font-light lg:w-1/2">
        <section class="lg:flex">
          <div>
            <a
              href=""
              class="block mb-4 text-blue-100 uppercase cursor-pointer hover:text-blue-800"
            >
              Find a Project
            </a>
            <a
              href=""
              class="block mb-4 text-blue-100 uppercase cursor-pointer hover:text-blue-800"
            >
              Be a Volunteer
            </a>
            <a
              href=""
              class="block mb-4 text-blue-100 uppercase cursor-pointer hover:text-blue-800"
            >
              Creating a Project
            </a>
            <a
              href=""
              class="block mb-4 text-blue-100 uppercase cursor-pointer hover:text-blue-800"
            >
              Contact us
            </a>
          </div>
          <div
            class="flex pt-8 mb-10 lg:ml-auto lg:mr-0"
          >
            <p class="mb-4 text-blue-100">Follow Us:</p>
            <a href="" class="w-10 h-10 ml-5 text-blue-600 fill-current">
              <icon type="facebook" />
            </a>
            <a href="" class="w-10 h-10 ml-3 text-blue-600 fill-current">
              <icon type="instagram" />
            </a>
            <a href="" class="w-10 h-10 ml-3 text-blue-600 fill-current">
              <icon type="twitter" />
            </a>
            <a href="" class="w-10 h-10 ml-3 text-blue-600 fill-current">
              <icon type="youtube" />
            </a>
          </div>
        </section>
        <p class="mb-1 text-center text-gray-400 lg:text-right">
          By CosmicDevs
        </p>
        <p class="mb-1 text-center text-gray-400 lg:text-right">
          Copyright 2020-2030 Blue Fields -
          <a href="" class="footer-link">Privacy Notice</a> -
          <a href="" class="footer-link">Terms and Conditions</a>
        </p>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import Icon from '../../core/components/Icon.vue'

export default {
  name: 'footer-home',
  components: { Icon }
}
</script>
<style scoped>
h1 {
  @apply font-bold font-serif2;
}

a:focus,
a:hover {
  @apply text-blue-500 outline-none;
}

.footer-link {
  @apply underline;
}
.footer-link:hover {
  @apply text-blue-800 outline-none;
}
</style>
