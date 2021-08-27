<template>
  <div id="root">
    <h2>I will find YOU!</h2>
    <input
      type="text"
      placeholder="Search"
      :value="searchValue"
      @input="searchInput($event.target.value)"
    />
    <strong
      >Total {{ users.length }} users,
      <span v-if="showMatch">{{ matches }}</span></strong
    >
    <ul>
      <li v-for="(user, index) in getFilteredUsers" :key="index">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWork",
  data() {
    return {
      searchValue: "",
      showMatch: false,
      users: [
        {
          name: "Adam",
        },
        {
          name: "Ben",
        },
        {
          name: "Alan",
        },
        {
          name: "Dan",
        },
        {
          name: "Fred",
        },
        {
          name: "George",
        },
        {
          name: "Alex",
        },
        {
          name: "John",
        },
        {
          name: "Cannon",
        },
        {
          name: "Jack",
        },
      ],
    };
  },
  computed: {
    getFilteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchValue.toLowerCase()),
      );
    },
    matches() {
      return `matches ${this.getFilteredUsers.length}`;
    },
  },
  methods: {
    searchInput(value) {
      this.searchValue = value;
      this.showMatch = true;
    },
  },
};
</script>
