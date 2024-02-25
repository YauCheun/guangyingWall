import Message from './message/message.js'
export default {
    install(app){
        app.config.globalProperties.Modal = Message
    }
}