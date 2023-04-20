import { useShepherd } from 'vue-shepherd'
import router from '../router'

export const tour = useShepherd({
  useModalOverlay: true,
  exitOnEsc: false,
})
const backButton = {
  action() {
    return this.back()
  },
  classes: 'shepherd-button-secondary',
  text: 'Back',
}
const nextButton = {
  action() {
    return this.next()
  },
  text: 'Next',
}
// 'Baxter: Uniting to Save and Sustain Lives',
export const steps = [
  {
    title: `
          <div class="waviy">
            <span style="--i:1">B</span>
            <span style="--i:2">A</span>
            <span style="--i:3">X</span>
            <span style="--i:4">T</span>
            <span style="--i:5">E</span>
            <span style="--i:6">R</span>
          </div>
        `,
    text: `
        <video width="100%" height="auto" controls>
            <source src="https://media.istockphoto.com/id/1322868319/video/futuristic-laboratory-with-diverse-scientists-holographic-three-dimensional-skeleton-and-dna.mp4?s=mp4-640x640-is&k=20&c=o8-Rizeo6YsopGNShnndnM7Nmiz-ipYxe-GcxFdB-14=" type="video/mp4">
        </video>
        <br><br>
        <b>Driven by Our Purpose, Destined to Transform</b>
        <br>
        <p>Start a quick tour to understand our platform.</p>
        `,
    buttons: [
      {
        action() {
          return this.next()
        },
        text: 'Start',
        classes: 'start-button',
      },
    ],
    id: 'start-modal',
  },
  {
    text: 'Click here to open the profile menu',
    attachTo: {
      element: '#avatar-icon',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    buttons: [backButton, nextButton],
    id: 'avatar-icon',
  },
  {
    attachTo: {
      element: '#account-nav-btn',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    text: 'Click here to navigate to the profile page',
    buttons: [
      backButton,
      {
        action() {
          router.push({ path: '/account-settings' })
          setTimeout(() => {
            document.getElementById('email-field-item').value = ''
            setTimeout(() => {
              document.getElementById('email-field-item').value = 'johndoe@example.com'
            }, 1000)
            return this.next()
          }, 1000)
        },
        text: 'Next',
      },
    ],
    id: 'profile-menu-item',
  },
  {
    attachTo: {
      element: '#email-field-wrapper',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    text: 'Click here to edit your email',
    buttons: [
      {
        action() {
          return this.next()
        },
        text: 'Next',
      },
    ],
    id: 'email-field-wrapper',
  },
  {
    attachTo: {
      element: '#security-tab-btn',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    text: `
          <img src="https://cdn.pixabay.com/photo/2020/10/14/08/19/gears-5653653_960_720.jpg" width="100%">
          <b>Click here to manage your security</b>
        `,
    buttons: [
      backButton,
      {
        action() {
          document.getElementById('security-tab-btn').click()
          setTimeout(() => {
            return this.next()
          }, 500)
        },
        text: 'Next',
      },
    ],
    id: 'email-field-wrapper',
  },
  {
    attachTo: {
      element: '#change-password-wrapper',
      on: 'top',
    },
    text: 'You can update your password in this section',
    classes: 'top-view-step',
    buttons: [
      backButton,
      {
        action() {
          return this.next()
        },
        text: 'Next',
      },
    ],
    id: 'change-password-wrapper',
  },
  {
    attachTo: {
      element: '#notification-tab-btn',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    text: 'Click here to manage your notification',
    buttons: [
      backButton,
      {
        action() {
          document.getElementById('notification-tab-btn').click()
          setTimeout(() => {
            return this.next()
          }, 500)
        },
        text: 'Next',
      },
    ],
    id: 'notification-tab-btn',
  },
  {
    attachTo: {
      element: '#notification-settings-wrapper',
      on: 'top',
    },
    text: 'You can update your notification settings in this section',
    classes: 'top-view-step',
    buttons: [
      backButton,
      {
        action() {
          return this.next()
        },
        text: 'Next',
      },
    ],
    id: 'notification-settings-wrapper',
  },
  {
    attachTo: {
      element: '#dashboard-nav-btn',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    text: 'Click here to navigate to the dashboard page',
    buttons: [
      backButton,
      {
        action() {
          router.push({ path: '/' })
          setTimeout(() => {
            return this.next()
          }, 1000)
        },
        text: 'Next',
      },
    ],
    id: 'dashboard-menu-item',
  },
  {
    text: 'You can find the details about the top performer here.',
    attachTo: {
      element: '#analytics-award-widget',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    buttons: [nextButton],
    id: 'analytics-award-widget',
  },
  {
    text: 'Summary of the all kind of trnsactions that happened in the last month.',
    attachTo: {
      element: '#transactions-widget',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    buttons: [backButton, nextButton],
    id: 'transactions-widget',
  },
  {
    text: 'It shows the weekly overview of your sales performance compared to the last month.',
    attachTo: {
      element: '#weekly-overview-widget',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    buttons: [backButton, nextButton],
    id: 'weekly-overview-widget',
    scrollTo: true,
  },
  {
    text: 'You can find the total earning compared to the last year from different sources',
    attachTo: {
      element: '#total-earning-widget',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    buttons: [backButton, nextButton],
    id: 'total-earning-widget',
    scrollTo: true,
  },
  {
    text: 'Here you can find the total sales by different countries.',
    attachTo: {
      element: '#sales-widget',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    buttons: [backButton, nextButton],
    id: 'sales-widget',
    scrollTo: true,
  },
  {
    text: 'It shows the deposits and withdraws by different organizations',
    attachTo: {
      element: '#deposit-withdraw-widget',
      on: 'bottom',
    },
    classes: 'bottom-view-step',
    buttons: [
      backButton,
      {
        action() {
          return this.next()
        },
        text: 'Finish',
      },
    ],
    id: 'deposit-withdraw-widget',
    scrollTo: true,
  },
]
