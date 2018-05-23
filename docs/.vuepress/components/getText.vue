<template>
    <div class="text" v-text="msg"></div>
</template>

<script>
export default {
    data () {
        return {
            msg: ''
        }
    },
    mounted () {
        this.getText()
    },
    methods: {
        getText () {
            var xhr = new XMLHttpRequest();
            xhr.open('get', 'https://v1.hitokoto.cn')
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    let data = JSON.parse(xhr.responseText)
                    this.msg = data.hitokoto
                    console.log(this.msg)
                }
            }
            xhr.send()
        }
    }
}
</script>

<style scoped>
    .text{
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        height: 20px;
    }
</style>