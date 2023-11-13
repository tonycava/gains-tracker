<script lang="ts">
	import GoBack from '@components/layout/GoBack.svelte';
	import InputField from '@components/common/InputField.svelte';
	import { INPUT } from '$lib/helpers/form.helper';

	const exercices = ['Bench press', 'Squat'];
</script>

<GoBack href="/" className="p-4" />


<div class="w-full flex gap-6 flex-col items-center">
  <h1
    class="text-3xl w-full text-secondary mb-16 text-center font-poppins-bold"
  >
    💪 Create your workout here ! 💪
  </h1>
  <div class="sm:w-3/12 w-auto">
    <InputField
      title="Name of your workout :"
      name={INPUT.WORKOUT_NAME}
    />
  </div>

  <div class="flex justify-center gap-6">

    <div>
      <p
        class="text-primary font-poppins-regular mt-2"
      >
        Choose your exercise
      </p>

      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-trigger="click"
        class="border-red-500 w-max border-2 font-poppins-regular text-md rounded-lg text-left px-2.5 py-2.5 inline-flex items-center"
        type="button"
      >
        CLick to select your exercice
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        class="z-10 mt-1 shadow-md bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDelayButton"
        >
          {#each exercices as exercice}
            <li>
              <a
                href="#"
                class="block px-4 py-2 outline-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {exercice}
              </a>
            </li>
            <hr class="w-10/12 mx-auto border-red-500">
          {/each}
        </ul>
      </div>
    </div>


    <div class="sm:w-6/12 w-auto">
      <InputField
        title="Date of your workout :"
        name={INPUT.WORKOUT_NAME}
        type="date"
      />
    </div>
  </div>

</div>