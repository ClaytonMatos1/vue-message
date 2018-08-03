<template>
    <li class="message" @click="handleClick">{{ message }}</li>
</template>

<script>
    export default {
        props : {
            message : {
                type : String,
                required : true,
                validator : message => message.length > 1
            },
            author : {
                type : String,
                default : 'José'
            }
        },

        methods : {
            handleClick() {
                this.$emit('message-clicked', this.message);
            }
        },

        created () {
            console.log('Message.vue CREATED!');
        }
    }
</script>

<style scoped>
    .message {
        margin-top: 10px;
    }
</style>
