<script lang="ts">
  import { navigate } from "../lib/router";
  import Spacer from "./Spacer.svelte";
</script>

<div>
  <h2>👆 That page does not exist yet...</h2>
  <Spacer height={24} />
  <button on:click={() => navigate("/")}>Go Home</button>
</div>
