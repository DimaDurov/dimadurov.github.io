const ContactModel = {
  id: null,
  fullName: null,
  phoneNumber: null,
  group: null
};

const state = {
  model: {
    ...ContactModel
  },
  items: [
    {
      id: "9092",
      fullName: "Дмитрий",
      phoneNumber: "+7 (963) 777 02 61"
    }
  ]
};

export default {
  namespaced: true,
  state,
  mutations: {
    addContact(state) {
      state.items = state.items.concat({ ...state.model });
      state.model = { ...ContactModel };
    },
    editContact(state, item) {
      state.model = item ? { ...item } : { ...ContactModel };
    },
    updateContact(state) {
      state.items = state.items.map(c => {
        if (state.model.id !== c.id) {
          return c;
        }

        return Object.assign({}, state.model);
      });

      state.model = { ...ContactModel };
    },
    deleteContact(state, payload) {
      state.items = state.items.filter(c => c.id !== payload.id);
    }
  }
};
