<template>
  <div id="root">
    <div class="user-card">
      <h1>Научу зарабатывать от 50 000р. в час</h1>
      <div class="main-information flex">
        <div class="info">
          <h2>{{ fullName }}</h2>
          <strong>Vue.js</strong>
          <ul class="list">
            <li>
              Учу делать РЕАЛЬНЫЕ бабки, на себя просто не хватило времени
            </li>
            <li>
              НЕ знаю, что такое "Успешный Успех", но знаю, что нужно ТЕБЕ!
            </li>
            <li>Пообещал, что побреюсь, когда кого-нибудь ОБМАНУ.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="loop">
      <h3>Members: {{ members.length }}</h3>
      <ul>
        <li v-for="(member, index) in pagination()" :key="index">
          {{ `#${index + 1} ${getFullName(member)}` }}
        </li>
        <!--        <li v-for="(value, key, index) in members[0]" :key="index">-->
        <!--          <strong>{{ `${key}: ${value}` }}</strong>-->
        <!--        </li>-->
      </ul>
    </div>
    <div class="pagination">
      <button @click="prev()">Prev</button>
      <button
        v-for="(page, index) in pages"
        :key="index"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
      <button @click="next()">Next</button>
      <p>Page {{ currentPage }} of {{ pages }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCard",
  data() {
    return {
      firstName: "Salokhiddin",
      secondName: "Berdiyorov",
      perPage: 3,
      currentPage: 1,
      members: [
        {
          firstName: "Ivan",
          secondName: "Ivanov",
        },
        {
          firstName: "firstName1",
          secondName: "secondName",
        },
        {
          firstName: "firstName2",
          secondName: "secondName",
        },
        {
          firstName: "firstName3",
          secondName: "secondName",
        },
        {
          firstName: "firstName4",
          secondName: "secondName",
        },
        {
          firstName: "firstName5",
          secondName: "secondName",
        },
        {
          firstName: "firstName6",
          secondName: "secondName",
        },
        {
          firstName: "firstName7",
          secondName: "secondName",
        },
        {
          firstName: "firstName8",
          secondName: "secondName",
        },
        {
          firstName: "firstName9",
          secondName: "secondName",
        },
      ],
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.secondName}`.toUpperCase();
    },
    pages() {
      return Math.ceil(this.members.length / this.perPage);
    },
  },
  methods: {
    getFullName(member) {
      return `${member.firstName} ${member.secondName}`.toUpperCase();
    },
    next() {
      if (this.currentPage >= this.pages) return;
      return this.currentPage++;
    },
    prev() {
      if (this.currentPage <= 1) return;
      return this.currentPage--;
    },
    pagination() {
      return this.members.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage,
      );
    },
    loadUsers(page) {
      console.log(`Load Users: page ${page}`);
    },
  },
  watch: {
    currentPage(page) {
      this.loadUsers(page);
    },
  },
};
</script>

<style>
.user-card {
  margin-top: 40px;
}

.info {
  margin-left: 50px;
}

h2 {
  margin-bottom: 14px;
}
</style>
