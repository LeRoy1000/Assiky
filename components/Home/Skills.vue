<template>
  <div class="bg-silver dark:bg-transparent py-6 md:py-0">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <section>
        <h2
          class="font-semibold text-4xl text-tertiary dark:text-white mb-4 ff-raleway text-center md:text-left"
        >
          Elevate Your Skills
        </h2>
        <p class="mb-8">
          Stay at the forefront of technology with our curated resources. Dive into expert-led
          courses, hands-on tutorials, and insightful articles, all tailored to your chosen domain.
          Harness the power of learning to unlock your true potential.
        </p>
        <BaseButton label="Learn More" href="/" variant="primary" class="mx-auto md:mx-0" />
      </section>
      <div class="">
        <div
          class="web-dev-container mx-auto ml-auto md:mr-0 relative max-w-max bg-silver dark:bg-fourthly"
        >
          <img
            src="~/assets/img/web-dev.png"
            alt=""
            role="presentation"
            class="grayscale-0 dark:grayscale"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.web-dev-container::after {
  content: url('~/assets/img/rocket.png');
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  background-color: inherit;
  width: calc(125px + 12.5vw);
  height: calc(125px + 12.5vw);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .web-dev-container::after {
    width: 175px;
    height: 175px;
  }
}
@media (min-width: 992px) {
  .web-dev-container::after {
    width: 220px;
    height: 220px;
  }
}

@media (min-width: 1280px) {
  .web-dev-container::after {
    width: 230px;
    height: 230px;
  }
}
</style>
