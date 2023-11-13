<script lang="ts">
	import GoBack from '@components/layout/GoBack.svelte';
	import { getRelativeTime } from '$lib/helpers/date.helper';

	export let data;
</script>

<GoBack href="/" className="p-4" />
<h1
  class="text-3xl text-secondary text-center font-poppins-bold"
>💪 Your last workout appear here 💪</h1>


<div
  class="flex mt-12 justify-start items-center h-screen flex-col gap-6"
>
  <div class="flex flex-col gap-4 w-3/12">
    {#each data.workouts as workout (workout.id)}
      <div
        class="flex p-4 rounded-lg shadow-lg"
      >
        <div>
          <h2 class="font-bold">{workout.name}</h2>
          <h3 class="text-sm">{getRelativeTime(workout.date)}</h3>
        </div>
          <GoBack
            color="#EF4444"
            className="rotate-180 ml-auto"
            href={`/previous-workout/${workout.id}`}
          />
      </div>
    {:else}
      <h2>Nothing here</h2>
    {/each}
  </div>
</div>