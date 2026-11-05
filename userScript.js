// Runs inside the Sagefire Media (Jellyfin) web client loaded from the NAS.
// Picks the TV layout (remote-friendly navigation) unless a layout was already chosen.
(function () {
  try {
    if (!localStorage.getItem('layout')) {
      localStorage.setItem('layout', 'tv');
    }
  } catch (e) { /* storage unavailable: Jellyfin falls back to its own detection */ }
})();
