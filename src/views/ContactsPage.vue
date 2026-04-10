<template>
  <div class="main-window">
    <!-- Левая колонка: контактные карточки -->
    <div class="left-side">
      <div class="left-title">Связаться</div>

      <a class="contact-card"
         v-for="(c, i) in contacts" :key="c.name"
         :href="c.href" :target="c.external ? '_blank' : undefined"
         :style="{ '--card-glow': c.color, '--card-delay': i * 0.1 + 's' }">
        <div class="card-icon">
          <img v-if="c.svg" :src="c.svg" class="card-svg" :alt="c.name">
          <span v-else class="card-emoji">✉</span>
        </div>
        <div class="card-info">
          <div class="card-name">{{ c.name }}</div>
          <div class="card-value">{{ c.value }}</div>
        </div>
      </a>
    </div>

    <!-- Правая часть: формы -->
    <div class="content">
      <div class="right-side">
        <!-- Email форма -->
        <div class="glass-panel form-panel" style="--panel-delay: 0.15s">
          <h2 class="section-title">Написать на почту</h2>
          <p class="section-sub">Заполните форму — отвечу в течение дня</p>
          <form @submit.prevent="submitEmail" @focusin="status = ''">
            <div class="field-row">
              <div class="field" style="flex: 1.2">
                <label>Имя</label>
                <input v-model="form.name" name="name" type="text" required>
              </div>
              <div class="field" style="flex: 1.5">
                <label>Email</label>
                <input v-model="form.email" name="email" type="email" required>
              </div>
              <div class="field" style="flex: 1">
                <label>Телефон</label>
                <input v-model="form.phone" name="phone" type="text">
              </div>
            </div>
            <div class="field">
              <label>Сообщение</label>
              <textarea v-model="form.message" name="message" rows="4" required></textarea>
            </div>
            <div class="form-footer">
              <button class="send-btn" type="submit" :disabled="sending">
                <span class="btn-text">{{ buttonText }}</span>
                <span class="btn-arrow">&rarr;</span>
              </button>
              <Transition name="fade">
                <div v-if="status" :class="['status-msg', statusOk ? 'status-ok' : 'status-err']">{{ status }}</div>
              </Transition>
            </div>
          </form>
        </div>

        <!-- Мессенджеры -->
        <div class="glass-panel messenger-panel" style="--panel-delay: 0.3s">
          <h2 class="section-title">Написать в мессенджер</h2>
          <div class="field">
            <textarea v-model="messengerText" rows="3" placeholder="Ваше сообщение..."></textarea>
          </div>
          <div class="messenger-grid">
            <button v-for="m in messengers" :key="m.type"
                    class="msg-pill"
                    :style="{ '--pill-color': m.color }"
                    @click="openMessenger(m.type)">
              <img :src="m.svg" class="pill-svg" :alt="m.label">
              <span>{{ m.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const base = import.meta.env.BASE_URL

const contacts = [
  { name: 'WhatsApp',   value: '+7-903-433-90-11', svg: `${base}img/wp.svg`,     href: 'https://wa.me/79034339011',    color: '#25d366', external: true },
  { name: 'Telegram',   value: '@trionon_v',       svg: `${base}img/telega.svg`, href: 'https://t.me/trionon_v',       color: '#2aabee', external: true },
  { name: 'ВКонтакте',  value: 'vk.com/id4226428', svg: `${base}img/vk.svg`,    href: 'https://vk.com/id4226428',     color: '#0077ff', external: true },
  { name: 'MAX',        value: '+7-903-433-90-11', svg: `${base}img/max.svg`,    href: 'https://web.max.ru',           color: '#a06cf9', external: true },
  { name: 'Email',      value: 'shagy@mail.ru',    svg: null,                     href: 'mailto:shagy@mail.ru',         color: '#decc95', external: false },
]

const messengers = [
  { type: 'whatsapp', label: 'WhatsApp',   svg: `${base}img/wp.svg`,     color: '#25d366' },
  { type: 'telegram', label: 'Telegram',   svg: `${base}img/telega.svg`, color: '#2aabee' },
  { type: 'vk',       label: 'ВКонтакте',  svg: `${base}img/vk.svg`,    color: '#0077ff' },
  { type: 'max',      label: 'MAX',        svg: `${base}img/max.svg`,   color: '#a06cf9' },
]

const form = reactive({ name: '', email: '', phone: '', message: '' })
const sending = ref(false)
const status = ref('')
const statusOk = ref(false)
const buttonText = ref('Отправить')
const messengerText = ref('')

async function submitEmail() {
  sending.value = true
  buttonText.value = 'Отправка...'
  status.value = ''
  statusOk.value = false
  try {
    const data = new FormData()
    data.append('name', form.name)
    data.append('email', form.email)
    data.append('phone', form.phone)
    data.append('message', form.message)
    data.append('_subject', 'Новое сообщение с портфолио')
    data.append('_captcha', 'false')
    const res = await fetch('https://formsubmit.co/ajax/shagy@mail.ru', {
      method: 'POST',
      body: data
    })
    if (res.ok) {
      statusOk.value = true
      status.value = 'Сообщение отправлено!'
      form.name = ''; form.email = ''; form.phone = ''; form.message = ''
    } else {
      statusOk.value = false
      status.value = 'Ошибка отправки. Попробуйте позже.'
    }
  } catch {
    statusOk.value = false
    status.value = 'Ошибка сети. Проверьте подключение.'
  }
  sending.value = false
  buttonText.value = 'Отправить'
}

function openMessenger(type) {
  const text = encodeURIComponent(messengerText.value || 'Здравствуйте!')
  const urls = {
    whatsapp: `https://wa.me/79034339011?text=${text}`,
    telegram: `https://t.me/trionon_v`,
    vk: `https://vk.me/id4226428`,
    max: `https://web.max.ru`
  }
  window.open(urls[type], '_blank')
}
</script>

<style scoped>
/* === Layout === */
.main-window {
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  width: calc(100vw - var(--sidebar-width));
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: var(--body-font);
}

/* === Left: Contact Cards === */
.left-side {
  width: 24rem;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  gap: 0.8rem;
  position: relative;
}

.left-side::after {
  content: "";
  position: absolute;
  height: 60%;
  width: 1px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(transparent, rgba(162, 118, 255, 0.4), transparent);
}

.left-title {
  font-family: var(--main-font);
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1rem;
  animation: fadeSlideIn 0.6s ease both;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.4rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeSlideIn 0.6s ease both;
  animation-delay: var(--card-delay);
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--card-glow);
  box-shadow: 0 0 20px color-mix(in srgb, var(--card-glow) 25%, transparent),
              inset 0 0 20px color-mix(in srgb, var(--card-glow) 8%, transparent);
  transform: translateX(4px);
}

.card-icon {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
  transition: background 0.3s;
}

.contact-card:hover .card-icon {
  background: color-mix(in srgb, var(--card-glow) 20%, transparent);
}

.card-svg {
  width: 22px;
  height: 22px;
}

.card-emoji {
  font-size: 1.8rem;
}

.card-name {
  font-family: var(--main-font);
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

.card-value {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 1px;
}

/* === Right: Forms === */
.content {
  flex: 1;
  overflow-y: auto;
  padding: 3rem 4rem 4rem;
  display: flex;
  align-items: flex-start;
}

.content::-webkit-scrollbar { width: 0; }

.right-side {
  max-width: 60rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* === Glass Panels === */
.glass-panel {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.6rem;
  padding: 3rem;
  backdrop-filter: blur(12px);
  animation: fadeScaleIn 0.7s ease both;
  animation-delay: var(--panel-delay);
}

.section-title {
  font-family: var(--main-font);
  font-size: 2.6rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  margin: 0 0 0.5rem;
  color: var(--main-color);
}

.section-sub {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 2.5rem;
}

/* === Form Fields === */
.field-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}

.field {
  margin-bottom: 1.5rem;
}

.field label {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 0.6rem;
}

.field input,
.field textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: var(--main-color);
  font-family: var(--body-font);
  font-size: 1.5rem;
  padding: 1.2rem 1.4rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.field input:focus,
.field textarea:focus {
  border-color: var(--highligh-color);
  box-shadow: 0 0 12px rgba(162, 118, 255, 0.2);
}

.field textarea {
  resize: none;
  min-height: 10rem;
}

/* === Send Button === */
.form-footer {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
}

.send-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2.8rem;
  background: linear-gradient(135deg, var(--highligh-color), #7c4dff);
  color: #fff;
  font-family: var(--main-font);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.send-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.15));
  opacity: 0;
  transition: opacity 0.3s;
}

.send-btn:hover::before { opacity: 1; }

.send-btn:hover {
  box-shadow: 0 4px 24px rgba(162, 118, 255, 0.4);
  transform: translateY(-1px);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: wait;
  transform: none;
}

.btn-arrow {
  transition: transform 0.3s;
}

.send-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.status-msg {
  font-size: 1.4rem;
  font-weight: 500;
}

.status-ok { color: #4caf50; }
.status-err { color: #f44336; }

/* === Messenger Pills === */
.messenger-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.msg-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5rem;
  color: #fff;
  font-family: var(--body-font);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.msg-pill:hover {
  background: color-mix(in srgb, var(--pill-color) 20%, transparent);
  border-color: var(--pill-color);
  box-shadow: 0 0 16px color-mix(in srgb, var(--pill-color) 30%, transparent);
}

.pill-svg {
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background: color-mix(in srgb, var(--pill-color) 30%, transparent);
  padding: 2px;
}

/* === Animations === */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateX(-16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeScaleIn {
  from {
    opacity: 0;
    transform: scale(0.97) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.fade-enter-active { transition: opacity 0.3s; }
.fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* === Responsive === */
@media (max-width: 991px) {
  .field-row {
    flex-direction: column;
    gap: 0;
  }
  .glass-panel {
    padding: 2rem;
  }
}

@media (max-width: 767px) {
  .main-window {
    position: relative;
    left: auto;
    width: 100%;
    height: auto;
    flex-direction: column;
  }
  .left-side {
    width: 100%;
    padding: 2rem;
    gap: 0.6rem;
  }
  .left-side::after { display: none; }
  .left-title { text-align: center; }
  .content {
    overflow-y: visible;
    padding: 2rem;
  }
  .field-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>
