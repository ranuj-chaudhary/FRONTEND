<template>
  <base-card>
    <!-- when we add props or  click listner on component than main root 
     component get the event listner automatically by vue-->
    <base-button
      :mode="storedResButtonMode"
      @click="setSelectedTab('stored-resources')"
    >
      Stored Resources
    </base-button>

    <base-button
      :mode="addResButtonMode"
      @click="setSelectedTab('add-resources')"
    >
      Add Resources
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import StoredResources from "./StoredResources.vue";
import AddResources from "./AddResources.vue";

export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "google",
          title: "Google Documentation",
          description: "The vuejs official documentation",
          link: "https:://www.google.com",
        },
        {
          id: "vuejs",
          title: "Vue Documentation",
          description: "The google official documentation",
          link: "https:://www.google.com",
        },
      ],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addNewResources(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    deleteResource(id) {
      const index = this.storedResources.findIndex((ele) => ele.id === id);
      if (index > -1) {
        this.storedResources.splice(index, 1);
      } else {
        console.error("Invalid Id Passed", id);
        alert("Cannot delete item that does not exist in resources.");
      }
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resources" ? null : "flat";
    },
  },
  provide() {
    return {
      addNewResources: this.addNewResources,
      resources: this.storedResources,
      deleteResource: this.deleteResource,
    };
  },
};
</script>

<style lang="scss" scoped></style>
