<template>
  <div class="sb-nav-fixed">
    <!-- navbar -->
    <app-navbar v-if="isAuth"></app-navbar>
    <div v-if="isAuth ? id='layoutSidenav' : id='layoutAuthentication'">
      <app-sidebar v-if="isAuth"></app-sidebar>
      <div v-if="isAuth ? id='layoutSidenav_content' : id='layoutAuthentication_content'">
        <Nuxt />
        <app-footer v-if="isAuth"></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/layouts/Sidebar.vue";
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  data() {
    return {
      isAuth: false
    }
  },
  components: {
    "app-sidebar": Sidebar,
    "app-navbar": Navbar,
    "app-footer": Footer
  },
  mounted() {
    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
      e.preventDefault();
      $("body").toggleClass("sb-sidenav-toggled");
    });
  },
};
</script>
