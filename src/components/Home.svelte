<script lang="ts">
  import Spacer from "./Spacer.svelte";
  import { navigate } from "../lib/router";
</script>

<div class="flex-1">
  <h1>Hello in there 👋</h1>
  <Spacer height={24} />
  <p>
    I'm <b>Grace</b>. I'm a frontend developer, designer, runner, and curious
    and imperfect human.
  </p>
  <Spacer height={24} />
  <p>What I'm working on:</p>
  <Spacer height={16} />
  <ul class="list-disc px-8">
    <li>
      An app to <button on:click={() => navigate("/projects", "memz")}
        >roast your friends</button
      > 🔥
    </li>
    <li>
      A tool to track which <button
        on:click={() => navigate("/projects", "run-there")}
        >neighborhoods</button
      > I've run in
    </li>
  </ul>
  <Spacer height={24} />
  <p>📍 Seattle, WA 🏔️</p>
</div>
