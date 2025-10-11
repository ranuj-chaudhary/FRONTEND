<template>
  <div class="fuzzy">
    <div class="fuzzy__input">
      <input type="text" v-model="query" class="border-2 padding-4 w-full" />
    </div>
    <ul class="fuzzy__list w-full flex gap-6 flex-wrap justify-center pt-6">
      <template v-for="(product, index) in fuseSearchResults" :key="index">
        <li class="fuzzy__list__item bg-gray-800 h-auto w-[300px] p-4">
          <h2 class="font-bold text-3xl pb-4 block">
            {{ product.title }}
          </h2>
          <p>{{ product.description }}</p>
          <p>{{ product.brand }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Fuse from "fuse.js";
const query = ref("");
const products = ref([
  {
    title: "Wireless Bluetooth Headphones",
    description:
      "Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and immersive sound quality.",
    brand: "SoundMax",
  },
  {
    title: "Smart Fitness Watch",
    description:
      "Track your steps, heart rate, sleep, and workouts with this sleek fitness tracker. Waterproof and compatible with iOS and Android.",
    brand: "FitCore",
  },
  {
    title: "Ergonomic Office Chair",
    description:
      "Adjustable lumbar support, breathable mesh back, and high-density foam seat for all-day comfort.",
    brand: "ErgoPlus",
  },
  {
    title: "Stainless Steel Water Bottle",
    description:
      "Leak-proof, insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.",
    brand: "HydraSteel",
  },
  {
    title: "Portable Laptop Stand",
    description:
      "Foldable, lightweight aluminum stand for laptops up to 17 inches. Improves posture and reduces neck strain.",
    brand: "WorkLift",
  },
  {
    title: "4K Ultra HD Smart TV - 55 inch",
    description:
      "Enjoy stunning visuals with HDR10, Dolby Audio, and built-in apps like Netflix and YouTube.",
    brand: "VisionPlus",
  },
  {
    title: "Organic Green Tea Bags - 100 Count",
    description:
      "Premium, handpicked green tea leaves packed for freshness and health benefits. Antioxidant-rich.",
    brand: "NatureBrew",
  },
  {
    title: "Wireless Gaming Mouse",
    description:
      "High-precision sensor, RGB lighting, and up to 12 programmable buttons. Lag-free performance.",
    brand: "XtremeGear",
  },
  {
    title: "Cotton Bedsheet Set - King Size",
    description:
      "Soft and breathable 100% cotton bedsheets with 2 pillow covers. Machine washable and wrinkle-resistant.",
    brand: "ComfortNest",
  },
  {
    title: "Mini Air Fryer - 2.5L",
    description:
      "Cook crispy and healthy meals with little to no oil. Easy to clean, compact design, perfect for small kitchens.",
    brand: "Crispo",
  },
]);

const fuseOptions = {
  keys: ["title"], // Field to search
  includeScore: true, // Optional: shows match score
  ignoreLocation: true, // Makes search location-insensitive
  threshold: 0.3, // Match threshold (lower is stricter)// 🔑 This makes the search case-insensitive
};

const fuse = new Fuse(products.value, fuseOptions);

const fuseSearchResults = computed(() => {
  if (!query.value) return products.value;
  return fuse.search(query.value).map((result) => result.item);
});
console.log(fuseSearchResults);
</script>

<style lang="scss" scoped></style>
