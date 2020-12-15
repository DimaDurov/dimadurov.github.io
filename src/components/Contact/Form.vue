<template>
  <div>
    <h2>{{ editMode ? "Редактировать" : "Добавить" }} номер телефона</h2>
    <form class="contact-form" @submit.prevent="onSubmitForm()">
      <label>
        <span class="title">Полное имя</span>
        <span class="dot">:</span>
        <input v-model="contact.fullName" placeholder="ФИО" required />
      </label>
      <label>
        <span class="title">Номер телефона</span>
        <span class="dot">:</span>
        <PhoneNumber v-model="contact.phoneNumber" required />
      </label>

      <div class="actions">
        <button
          v-if="editMode"
          type="button"
          class="cancel-btn warning"
          @click="editContact(null)"
        >
          Назад
        </button>
        <button type="submit">{{ editMode ? "Редактировать" : "Добавить" }} контакт</button>
      </div>
    </form>
  </div>
</template>

<script>
import PhoneNumber from "@/components/_shared/PhoneNumber";
import { createId } from "@/helpers";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContactForm",
  components: {
    PhoneNumber
  },
  computed: {
    ...mapState("contact", {
      contact: state => state.model,
      editMode: state => !!state.model.id
    }),
    ...mapState("contactGroup", {
      contactGroups: state => state.items
    })
  },
  methods: {
    ...mapMutations("contact", ["addContact", "editContact", "updateContact"]),
    onSubmitForm() {
      if (this.contact.phoneNumber.length !== 19) {
        return;
      }

      if (this.editMode) {
        this.updateContact();
      } else {
        this.contact.id = createId();
        this.addContact();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
}
@media (min-width: 320px) and (max-width: 450px) {
  .contact-form {
  }
}
</style>
