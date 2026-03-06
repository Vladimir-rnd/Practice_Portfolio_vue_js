<template>
  <div class="dashboard-desktop-child">
    <div class="text-block">
      <div class="clean-page">
        <span>Мои навыки</span>
      </div>
      <span class="highligh-line"></span>
      <p class="main-text">
        Я начинающий разработчик фронтенда, активно изучаю основы веб-разработки. Обладаю базовыми знаниями
        HTML, CSS и JavaScript, Vue.js и стремлюсь развивать свои навыки в этих областях.
      </p>
      <p class="main-text">
        Я сосредоточен на создании чистого и понятного кода, и тщательно изучаю лучшие практики и стандарты разработки. Моя целеустремленность и желание учиться позволяют постоянно совершенствоваться.
      </p>
      <p class="main-text">
        Обладаю аналитическим мышлением и способностью разбираться в сложных концепциях. Мое умение решать проблемы и готовность принять вызовы помогают преодолевать препятствия в процессе обучения.
      </p>
    </div>
    <div class="starsky">
      <img class="starsky-icon" alt="" src="/img/I.jpg">
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard-desktop-child {
  position: relative;
  margin-left: var(--text-window-left);
  margin-top: 2rem;
  width: calc(100vw - var(--sidebar-width) - var(--text-window-left));
  min-height: 80vh;
  border-radius: 4rem 4rem 0 0;
  background-color: rgba(255, 255, 255, 0.85);
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-bottom: 5rem;
}

.text-block {
  margin-top: 10rem;
  margin-left: 10rem;
  color: #111;
  width: 62rem;
  font-size: var(--page-font-size);
  letter-spacing: 0.01em;
}

.clean-page {
  font-size: var(--big-font-size);
  font-weight: 700;
}

.highligh-line {
  display: block;
  margin-top: 0.5rem;
  width: 8rem;
  height: 0.7rem;
  border-radius: 1rem;
  background-color: var(--highligh-color);
}

.main-text {
  line-height: 156%;
  font-family: var(--body-font);
}

.starsky {
  margin-top: 11rem;
  margin-left: 12rem;
  width: 40rem;
  height: 60rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.45);
  border: 0.6rem solid var(--main-color);
}

.starsky:hover {
  border: 0.6rem solid var(--alt-color-1);
}

.starsky-icon {
  height: 100%;
  width: 100%;
}

@media (max-width: 1399px) {
  .text-block {
    width: 50%;
    margin-top: 5rem;
    margin-left: 5rem;
  }
  .main-text {
    line-height: 125%;
  }
  .starsky {
    margin-top: 5rem;
    margin-left: 5rem;
    width: 33%;
    height: 45rem;
  }
}

@media (max-width: 1199px) {
  .starsky {
    height: 40rem;
  }
}

@media (max-width: 991px) {
  .dashboard-desktop-child {
    margin-top: -7rem;
  }
  .starsky {
    margin-left: 3rem;
    height: 35rem;
    border-radius: 2rem;
  }
}

@media (max-width: 767px) {
  .starsky {
    margin-left: 2rem;
    height: 27rem;
  }
}

@media (max-width: 575px) {
  .dashboard-desktop-child {
    margin-top: -10rem;
    justify-content: center;
  }
  .text-block {
    width: 90%;
    margin-top: 2rem;
    margin-left: 0;
  }
  .starsky {
    width: 50%;
    margin-top: 0;
    height: 30rem;
  }
}

@media (max-width: 374px) {
  .dashboard-desktop-child {
    margin-right: var(--text-window-left);
    width: auto;
    background: none;
    flex-direction: column;
    align-content: center;
  }
  .text-block {
    margin-top: 0rem;
    width: 95%;
    color: var(--main-color);
  }
  .starsky {
    margin-top: 1rem;
    width: 80%;
    height: auto;
  }
}
</style>
