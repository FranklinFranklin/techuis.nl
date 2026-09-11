// Techuis ICT - Core Interactivity Script

document.addEventListener("DOMContentLoaded", () => {
  const openNavbarButton = document.getElementById("openNavbarButton");
  const overlayNavbar = document.getElementById("overlayNavbar");
  const sidebarNavbar = document.getElementById("sidebarNavbar");
  const categoriesBtn = document.getElementById("categoriesBtn");
  const sidebarCategories = document.getElementById("sidebarCategories");
  const closeButtons = document.querySelectorAll(".closeButton");
  const details = document.querySelectorAll("details");

  // Close other details when one is opened
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  // Mobile Drawer Navigation handlers
  function closeDrawer() {
    if (sidebarNavbar) sidebarNavbar.classList.remove("show");
    if (sidebarCategories) sidebarCategories.classList.remove("show");
    if (overlayNavbar) overlayNavbar.classList.remove("show");
  }

  function openNavbar() {
    if (sidebarNavbar) sidebarNavbar.classList.add("show");
    if (overlayNavbar) overlayNavbar.classList.add("show");
  }

  function openCategories() {
    if (sidebarCategories) sidebarCategories.classList.add("show");
    if (overlayNavbar) overlayNavbar.classList.add("show");
  }

  if (openNavbarButton) openNavbarButton.addEventListener("click", openNavbar);
  if (categoriesBtn) categoriesBtn.addEventListener("click", openCategories);
  if (overlayNavbar) overlayNavbar.addEventListener("click", closeDrawer);

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeDrawer);
  });

  // Accessibility: close drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });

  // Analytics: Track WhatsApp and Phone Clicks
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-event]");
    if (!target) return;
    const eventType = target.getAttribute("data-event");

    if (typeof gtag === "function") {
      if (eventType === "whatsapp-click") {
        gtag("event", "click_whatsapp", {
          event_category: "Contact",
          event_label: target.href || "WhatsApp Button",
        });
      } else if (eventType === "call-click") {
        gtag("event", "click_call", {
          event_category: "Contact",
          event_label: target.href || "Phone Call",
        });
      }
    }
  });

  // Top 10 UX: Dynamic "Nu Bereikbaar" Status Indicator (Point 2)
  function updateLiveStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    // Open Monday - Saturday: 08:30 - 20:00
    const isOpen = day >= 1 && day <= 6 && currentTime >= 8.5 && currentTime < 20.0;

    const heroStatus = document.getElementById("heroLiveStatus");
    const heroText = document.getElementById("heroLiveStatusText");
    const topBadges = document.querySelectorAll(".live-status-badge");

    if (isOpen) {
      if (heroStatus) {
        heroStatus.className = "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs";
        heroStatus.innerHTML = `
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span id="heroLiveStatusText">Nu geopend & bereikbaar voor IT-hulp</span>
        `;
      }
      topBadges.forEach((badge) => {
        badge.className = "live-status-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold";
        badge.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Nu bereikbaar: 08:30 - 20:00</span>
        `;
      });
    } else {
      if (heroStatus) {
        heroStatus.className = "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 shadow-xs";
        heroStatus.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          <span id="heroLiveStatusText">Nu gesloten (morgen 08:30 open) • WhatsApp 24/7 bereikbaar</span>
        `;
      }
      topBadges.forEach((badge) => {
        badge.className = "live-status-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-semibold";
        badge.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>Morgen weer open vanaf 08:30</span>
        `;
      });
    }
  }

  updateLiveStatus();
  setInterval(updateLiveStatus, 60000);

  // Top 10 UX: Mobile Scroll to Top Button (Point 9)
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        scrollToTopBtn.classList.remove("opacity-0", "pointer-events-none");
        scrollToTopBtn.classList.add("opacity-100", "pointer-events-auto");
      } else {
        scrollToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
        scrollToTopBtn.classList.add("opacity-0", "pointer-events-none");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
