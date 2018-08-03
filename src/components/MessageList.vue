<template>
    <ul>
        <message
			@message-clicked="handleMessageClick"
			:message="message"
			v-for="message in messages"
			:key="message"/>
    </ul>
</template>

<script>
	import Message from './Message';

    export default {
        name : 'message-list',

		props : ['messages'],

		methods : {
			handleMessageClick (message) {
				console.log(message);
			}
		},

		components : {
			Message
		}
    }
</script>
