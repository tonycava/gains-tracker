<script lang="ts">
	import { user } from '@stores/user.store';
	import Svg from '@components/common/Svg.svelte';
	import {enhance} from '$app/forms';

	let buttonRef: HTMLButtonElement;
</script>

<div class="p-3 flex border-b-4 border-red-500 justify-between w-full items-center">
  <p class="font-poppins-bold text-lg">{$user?.name}</p>
  <form
    enctype="multipart/form-data"
    use:enhance
    method="POST"
    action="?/onLogout"
    class="rotate-180 cursor-pointer"
  >
    <Svg
      on:click={() => buttonRef.click()}
      size={6}
      src="/icons/Logout.svg"
    />
    <button
      bind:this={buttonRef}
      aria-label="hidden"
      class="hidden"
    ></button>
  </form>
</div>