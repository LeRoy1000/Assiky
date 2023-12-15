<template>
  <div class="bg-silver dark:bg-transparent py-14">
    <div class="container mx-auto">
      <section class="text-center">
        <h2 class="font-semibold text-4xl text-fourthly dark:text-white mb-4 ff-raleway">
          Meet Our <span class="text-secondary dark:text-inherit">Team</span>
        </h2>
        <p class="mb-8 max-w-xl mx-auto">
          We love hearing from you. Feel free to reach out with your questions, feedback, or stories
          of how <strong>Assiky</strong> has impacted your journey.
        </p>
      </section>
      <div class="flex items-center justify-center gap-24 flex-wrap">
        <div
          class="team-card p-6 bg-white rounded-lg w-52 text-center flex flex-col items-center group"
          v-for="item in team"
          :key="item.name"
        >
          <img
            src="~/assets/img/team-member.png"
            alt=""
            class="w-20 h-20 rounded-full object-cover mb-2 border-2 border-silver"
          />
          <h4 class="font-semibold text-fourthly group-even:text-white group-hover:text-fourthly">
            {{ item.name }}
          </h4>
          <p
            class="text-grey-blue hover:text-tertiary group-even:text-tertiary group-hover:text-grey-blue mb-2"
          >
            {{ item.role }}
          </p>
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/"
              aria-label="Visit our manager's Linkedin account"
              class="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-primary transition-colors text-white flex items-center justify-center group-even:text-tertiary group-even:bg-none group-even:hover:text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 448 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/"
              aria-label="Visit our manager's twitter account"
              class="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-primary text-white flex items-center justify-center group-even:text-tertiary group-even:bg-none group-even:hover:text-secondary"
            >
              <i class="bi bi-twitter text-sm"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const team = [
  {
    name: 'Loop Sinus',
    role: 'Manager',
    linkedin: '/',
    twitter: '/',
  },
  {
    name: 'Autumn Phillips',
    role: 'CEO',
    linkedin: '/',
    twitter: '/',
  },
  {
    name: 'Chris Glasser',
    role: 'Co-Manager',
    linkedin: '/',
    twitter: '/',
  },
];
</script>

<style scoped>
.team-card:not(:nth-of-type(2n)),
.team-card:nth-of-type(2n):hover,
.team-card:nth-of-type(2n):focus {
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(90deg, #1ae81a 0%, #466884 100%) border-box;
  box-shadow: 0px 8px 16px 0px rgba(171, 190, 209, 0.4);
}
.team-card:nth-of-type(2n),
.team-card:not(:nth-of-type(2n)):hover,
.team-card:not(:nth-of-type(2n)):focus {
  border: 1px solid #1ae81a;
  background: linear-gradient(to right, #4caf50, #1ae81a);
  box-shadow: none;
}
</style>
