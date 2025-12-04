import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "This website uses cookies and other tracking technologies to improve your browsing experience for the following purposes: to enable basic functionality of the website, to provide a better experience on the website, to measure your interest in our products and services and to personalize marketing interactions.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/legal/privacy-policy\">Privacy Policy</a>\n<a href=\"/legal/terms-and-conditions\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "This website uses cookies and other tracking technologies to improve your browsing experience for the following purposes: to enable basic functionality of the website, to provide a better experience on the website, to measure your interest in our products and services and to personalize marketing interactions."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential to the basic functionality of the website and cannot be disabled. They enable core functionalities such as security, network management, and accessibility.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website. For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you. The information collected through these tracking and performance cookies do not identify any individual visitor.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"mailto:legal@smartico.ai\">contact me</a>."
                        }
                    ]
                }
            }
        }
    }
});
