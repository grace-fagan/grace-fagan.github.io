<script lang="ts">
  import { onMount } from "svelte";
  import { currentHash } from "../lib/router";
  import Spacer from "./Spacer.svelte";
  import RunThere from "../assets/run-there-1.png";
  import Memz from "../assets/memz-cards.png";

  const projects = [
    {
      id: "memz",
      title: "Memz",
      subtitle: "Roast Your Friends!",
      image: Memz,
      description:
        "Memz is a party game where players create memes from personal photos. (Think: Cards Against Humanity meets your camera roll).\n\nIt started as a pen and paper game that we played with our college friends and has become a passion project that taught me how to design, build, test, and maintain production-level apps. It is a cross-platform app available now in the iOS App Store and Google Play store.\n\nMemz is a work in progress. We are always looking for feedback!",
      tools: ["React Native", "Expo", "Figma"],
      links: [
        {
          display: "Memz for iOS",
          url: "https://apps.apple.com/us/app/memz-roast-your-friends/id6479333072?ign-itscg=30200&ign-itsct=apps_box_badge",
        },
        {
          display: "Memz for Android",
          url: "https://play.google.com/store/apps/details?id=party.memz.app&hl=en_US&gl=US&utm_source=web&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
        },
      ],
    },
    {
      id: "run-there",
      title: "Run There",
      image: RunThere,
      description:
        "Run There is a tool I built to track my progress in a quest to run every neighborhood in NYC, though I have now expanded it to other places I have lived.\n\nThe tool visualizes your Strava route data. I use it to see which parts of a city I most frequent, discover new areas to run, and I love to see the beautiful culmination of little lines on a map.",
      tools: ["Svelte", "MapboxGL", "Netlify Serverless Functions", "Figma"],
      links: [
        {
          display: "Try it!",
          url: "https://runthere.app/",
        },
      ],
    },
  ];

  // Scroll to the element when hash changes
  const scrollToHash = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ block: "start" });
    }
  };

  onMount(() => {
    scrollToHash($currentHash);
  });
</script>

{#each projects as project}
  <section id={project.id}>
    <div class="flex flex-1 flex-col md:flex-row">
      <div class="flex flex-col max-w-none md:w-2/5">
        <h1>{project.title}</h1>
        {#if project.subtitle}
          <h2 class="font-bold">{project.subtitle}</h2>
        {/if}
        <Spacer height={24} />
        <p class="whitespace-pre-line">{project.description}</p>
        <Spacer height={16} />
        <h2>Tools I am using:</h2>
        <Spacer height={16} />
        <ul class="list-disc px-8">
          {#each project.tools as tool}
            <li>{tool}</li>
          {/each}
        </ul>
        <Spacer height={16} />
        {#each project.links as link}
          <a href={link.url}>{link.display}</a>
        {/each}
      </div>
      <div
        class="flex flex-1 flex-col justify-center items-center py-6 md:py-0 px-0 md:px-8"
      >
        <img
          class="md:max-h-[500px] max-h-[300px]"
          src={project.image}
          alt={project.title}
        />
      </div>
    </div>
  </section>
  <Spacer height={32} />
  <div class="w-full border"></div>
  <Spacer height={32} />
{/each}
