<template>
	<input type="checkbox" id="add-todo" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box relative">
			<label for="add-todo" class="btn btn-sm btn-circle absolute right-2 top-2"
				>✕
			</label>

			<div>
				<input
					type="text"
					placeholder="Rule the world...."
					class="input w-full max-w-xs"
					v-model="todoTitle"
				/>
				<button class="btn btn-primary ml-2" @click="addTodo(todoTitle)">
					Add
				</button>
			</div>
		</div>
	</div>

	<label
		for="add-todo"
		class="btn modal-button btn-lg btn-circle fixed z-90 bottom-10 right-8 btn-primary"
	>
		<span class="material-icons">add</span>
	</label>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { addTodo } from '../utils/todoFunctions';

export default defineComponent({
	setup() {
		const todoTitle = ref('');

		return {
			todoTitle,
			addTodo,
		};
	},
});
</script>
