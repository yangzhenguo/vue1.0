/**
 * Created by Sam on 2019/5/5.
 */
Vue.component('hello', {
    template: '#hello-comp',
    props: ['text', 'type']
})
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            type: 'face'
        }
    })
}