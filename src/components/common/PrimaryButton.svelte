<script lang="ts">
	export let type: 'submit' | 'button' = 'submit';
	export let className = '';
</script>

<button
  on:click
  {type}
  class="bg-red-500 text-[#E7E9EB] font-poppins-bold py-2 rounded {className}"
>
  <slot />
</button>