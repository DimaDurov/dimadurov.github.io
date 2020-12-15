<template>
  <div class="contacts-container">
    <h2>Ваши контакты</h2>
    <div v-if="!contacts.length" class="no-record">Контакты не найдены.</div>
    <ul v-else class="contacts">
      <ContactListItem
        v-for="(contact, index) in contacts"
        :key="index"
        :item="contact"
      ></ContactListItem>
    </ul>
  </div>
</template>

<script>
import ContactListItem from "./Item";

import { mapState } from "vuex";

export default {
  name: "Contacts",
  components: { ContactListItem },
  computed: {
    ...mapState("contact", {
      contacts: state => state.items
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.contacts {
}
</style>
