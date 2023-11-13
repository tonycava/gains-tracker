<script lang="ts">
	import InputField from '@components/common/InputField.svelte';
	import { INPUT } from '$lib/helpers/form.helper';
</script>

<InputField
  placeholder="example@exemple.com"
  title="Email"
  name={INPUT.EMAIL}
/>
<InputField
  placeholder="example"
  title="Name"
  name={INPUT.NAME}
/>
<InputField
  placeholder="123456"
  title="Password"
  name={INPUT.PASSWORD}
/>
<InputField
  placeholder="123456"
  title="Verify password"
  name={INPUT.VERIFY_PASSWORD}
/>
