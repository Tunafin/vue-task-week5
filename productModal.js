export default {
  template: '#productModalTemplate',
  props: {
    product: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
      status: {},
      modal: '',
      qty: 1,
    };
  },
  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modal, {
    });
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
}
