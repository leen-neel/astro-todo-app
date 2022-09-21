<template>
	<div
		v-for="todo in todos"
		:key="todo.title"
		class="card bg-base-100 shadow-xl mt-1.5"
	>
		<div class="card-body">
			<h2 class="card-title">{{ todo.title }}</h2>
			<p>{{ todo.date }}</p>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import * as todoHelpers from '../utils/todoFunctions';

export default defineComponent({
	setup() {
		const obj = [
			{
				title: 'Kill everyone',
				date: '24th September, 2022',
				done: false,
			},
			{
				title: 'End the world',
				date: '25th September, 2022',
				done: true,
			},
		];

		const todos = ref();

		localStorage.setItem('todos', JSON.stringify(obj));
		todos.value = todoHelpers.getTodos();

		return {
			todos,
		};
	},
});
</script>
