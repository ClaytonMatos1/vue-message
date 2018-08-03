<template>
	<div id="app">
		<message-list :messages="messages"/>
	</div>
</template>

<script>
	import MessageList from './components/MessageList';

	export default {
		name : 'app',

		data : () => ({ messages : ['Olá', 'Tudo bom'] }),

		components : {
			MessageList
		}
	}
</script>
