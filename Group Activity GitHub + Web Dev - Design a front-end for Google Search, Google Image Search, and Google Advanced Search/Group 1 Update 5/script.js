    document.addEventListener("DOMContentLoaded", function() {
        const filipinoBtn = document.getElementById("filipinoBtn");
        const cebuanoBtn = document.getElementById("cebuanoBtn");

        filipinoBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            toggleLanguage("filipino");
        });

        cebuanoBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            toggleLanguage("cebuano");
        });

        function toggleLanguage(language) {
            const elements = {
                googleSearchBtn: document.getElementById("googleSearchBtn"),
                luckyBtn: document.getElementById("luckyBtn"),
                languageOffered: document.getElementById("languageOffered"),
                location: document.getElementById("location"),
                filipinoBtn: document.getElementById("filipinoBtn"),
                cebuanoBtn: document.getElementById("cebuanoBtn"),
                aboutLink: document.getElementById("aboutLink"),
                advertisingLink: document.getElementById("advertisingLink"),
                businessLink: document.getElementById("businessLink"),
                howSearchWorksLink: document.getElementById("howSearchWorksLink"),
                privacyLink: document.getElementById("privacyLink"),
                termsLink: document.getElementById("termsLink"),
                settingsLink: document.getElementById("settingsLink")
            };

            if (language === "filipino") {
                if (elements.filipinoBtn.textContent === "Filipino") {
                    elements.googleSearchBtn.value = "Maghanap sa Google";
                    elements.luckyBtn.value = "Sinuswerte Ako";
                    elements.languageOffered.innerHTML = 'Inaalok ng Google sa: <a href="#" id="filipinoBtn">English</a> <a href="#" id="cebuanoBtn">Cebuano</a>';
                    elements.location.textContent = "Pilipinas";
                    elements.aboutLink.textContent = "Tungkol dito";
                    elements.advertisingLink.textContent = "Advertising";
                    elements.businessLink.textContent = "Negosyo";
                    elements.howSearchWorksLink.textContent = "Paano gumagana ang Paghahanap";
                    elements.privacyLink.textContent = "Privacy";
                    elements.termsLink.textContent = "Mga Tuntunin";
                    elements.settingsLink.textContent = "Mga Setting";
                } else {
                    resetToEnglish();
                }
            } else if (language === "cebuano") {
                if (elements.cebuanoBtn.textContent === "Cebuano") {
                    elements.googleSearchBtn.value = "Google Pangita";
                    elements.luckyBtn.value = "Bisan Unsa";
                    elements.languageOffered.innerHTML = 'Inaalok ang Google sa: <a href="#" id="filipinoBtn">Filipino</a> <a href="#" id="cebuanoBtn">English</a>';
                    elements.location.textContent = "Pilipinas";
                    elements.aboutLink.textContent = "Bahin sa";
                    elements.advertisingLink.textContent = "Mga pahibalo";
                    elements.businessLink.textContent = "Negosyo";
                    elements.howSearchWorksLink.textContent = "Paano gumagana ang search";
                    elements.privacyLink.textContent = "Privacy";
                    elements.termsLink.textContent = "Mga Tuntunin";
                    elements.settingsLink.textContent = "Mga Han-ay";
                } else {
                    resetToEnglish();
                }
            }

            // Reattach event listeners to new elements
            document.getElementById("filipinoBtn").addEventListener("click", function(event) {
                event.preventDefault();
                toggleLanguage("filipino");
            });

            document.getElementById("cebuanoBtn").addEventListener("click", function(event) {
                event.preventDefault();
                toggleLanguage("cebuano");
            });
        }

        function resetToEnglish() {
            const elements = {
                googleSearchBtn: document.getElementById("googleSearchBtn"),
                luckyBtn: document.getElementById("luckyBtn"),
                languageOffered: document.getElementById("languageOffered"),
                location: document.getElementById("location"),
                aboutLink: document.getElementById("aboutLink"),
                advertisingLink: document.getElementById("advertisingLink"),
                businessLink: document.getElementById("businessLink"),
                howSearchWorksLink: document.getElementById("howSearchWorksLink"),
                privacyLink: document.getElementById("privacyLink"),
                termsLink: document.getElementById("termsLink"),
                settingsLink: document.getElementById("settingsLink")
            };
            elements.googleSearchBtn.value = "Google Search";
            elements.luckyBtn.value = "I'm Feeling Lucky";
            elements.languageOffered.innerHTML = 'Google offered in: <a href="#" id="filipinoBtn">Filipino</a> <a href="#" id="cebuanoBtn">Cebuano</a>';
            elements.location.textContent = "Philippines";
            elements.aboutLink.textContent = "About";
            elements.advertisingLink.textContent = "Advertising";
            elements.businessLink.textContent = "Business";
            elements.howSearchWorksLink.textContent = "How Search Works";
            elements.privacyLink.textContent = "Privacy";
            elements.termsLink.textContent = "Terms";
            elements.settingsLink.textContent = "Settings";

            // Reattach event listeners to new elements
            document.getElementById("filipinoBtn").addEventListener("click", function(event) {
                event.preventDefault();
                toggleLanguage("filipino");
            });

            document.getElementById("cebuanoBtn").addEventListener("click", function(event) {
                event.preventDefault();
                toggleLanguage("cebuano");
            });
        }
    });
