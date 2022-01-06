<template>
  <div aria-live="polite" aria-atomic="true" class="position-relative">
    <div class="toast-container position-absolute bottom-0 end-0 p-3">
      <div class="toast show bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">PhotApp</strong>
          <!-- <small class="text-muted">just now</small> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body text-white">Oops! An Error Occured, try again</div>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";
export default {
  name: "ErrorToast",
  props: {
    errorMessage: {
      type: String,
    },
  },
  mounted() {
    //init toast
    Array.from(document.querySelectorAll(".toast")).forEach(
      (toastNode) => new Toast(toastNode)
    );
  },
};
</script>
