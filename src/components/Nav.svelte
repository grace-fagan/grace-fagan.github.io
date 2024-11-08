<script lang="ts">
  import { navigate } from "../lib/router";
  import Spacer from "./Spacer.svelte";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "GF_Resume.pdf";
    link.click();
  };
</script>

<div class="justify-between w-full flex flex-row items-center">
  <button on:click={() => navigate("/")}>
    <img class="h-16" src="./owen.png" alt="Profile" />
  </button>
  <div class="flex flex-row items-center">
    <a
      class="text-dark underline opacity-50 hover:opacity-100 hover:text-dark cursor-pointer"
      href="https://github.com/grace-fagan"
      target="_blank"
    >
      Github
    </a>
    <Spacer width={24} />
    <button
      class="text-dark underline opacity-50 hover:opacity-100 hover:text-dark cursor-pointer"
      on:click={downloadResume}
    >
      Resume
    </button>
  </div>
</div>
