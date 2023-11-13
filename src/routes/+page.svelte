<script lang="ts">
	import PrimaryButton from '@components/common/PrimaryButton.svelte';
	import SecondaryButton from '@components/common/SecondaryButton.svelte';
	import { goto } from '$app/navigation';
</script>


<h1
  class="text-3xl w-full mt-24 text-secondary text-center font-poppins-bold">💪 Welcome to gains tracker 💪</h1>

<div
  class="flex flex-col h-full items-start ml-8 mt-32 gap-4"
>
  <PrimaryButton
    on:click={() => goto("/create-workout")}
    className="p-4 z-20"
  >
    Create a workout
  </PrimaryButton>
  <SecondaryButton
    on:click={() => goto("/previous-workout")}
    className="p-4"
  >
    See previous workout
  </SecondaryButton>
</div>