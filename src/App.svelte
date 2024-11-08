<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import Home from "./components/Home.svelte";
  import Projects from "./components/Projects.svelte";
  import Spacer from "./components/Spacer.svelte";
  import { currentPath } from "./lib/router";
  import Error from "./components/Error.svelte";
</script>

<main class="flex flex-1 flex-col py-8 px-16 min-h-screen">
  <Nav />
  <Spacer height={32} />
  <p class="italic opacity-50">{$currentPath}</p>
  <Spacer height={32} />
  {#if $currentPath === "/"}
    <Home />
  {:else if $currentPath === "/projects"}
    <Projects />
  {:else}
    <Error />
  {/if}
</main>
