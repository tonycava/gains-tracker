<script lang="ts">
	export let title: string;
	export let value = '';

	export let name = '';
	export let type: 'date' | 'text' | 'password' | 'radio' | 'checkbox' = 'text';
	export let placeholder = '';

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};

</script>

<fieldset class="flex gap-1 flex-col">
  <p class="text-primary font-poppins-regular mt-2">{title}</p>
  <input
    use:typeAction
    {name}
    {placeholder}
    bind:value
    class="p-2 focus-within:outline-red-500 text-black border-2 rounded text-secondary w-full border-red-500"
  />
</fieldset>