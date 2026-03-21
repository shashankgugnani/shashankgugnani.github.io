(function () {
    var dlg = document.getElementById("photo-lightbox");
    if (!dlg || typeof dlg.showModal !== "function") return;

    var trigger = document.querySelector("[data-photo-modal]");
    var closeBtn = dlg.querySelector(".photo-lightbox__close");
    var scrim = dlg.querySelector(".photo-lightbox__scrim");
    var lastFocus = null;

    function openModal() {
        lastFocus = document.activeElement;
        dlg.showModal();
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        dlg.close();
    }

    dlg.addEventListener("close", function () {
        if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    });

    if (trigger) {
        trigger.addEventListener("click", function () {
            openModal();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            closeModal();
        });
    }

    if (scrim) {
        scrim.addEventListener("click", function (e) {
            if (e.target === scrim) closeModal();
        });
    }
})();
