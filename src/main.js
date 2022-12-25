import { createApp } from 'vue'
import App from './App'
// import components from '@/components/UI';
import MyButton from "@/components/UI/MyButton.vue"
import MyInput from "@/components/UI/MyInput.vue"
const app = createApp(App)

// Array.from(components).forEach(element => {
    // app.component(element.name, element)
    // console.log(element.name);
// })

app.component(MyButton.name, MyButton)
app.component(MyInput.name, MyInput)

app.mount('#app')
