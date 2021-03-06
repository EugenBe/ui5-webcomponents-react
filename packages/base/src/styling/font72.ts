import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';

deprecationNotice(
  'font72',
  "The global font face defined in '@ui5/webcomponents-react-base/lib/font72' is deprecated and will be removed in the next major release.\n. This font is now provided the the UI5 Web Components itself."
);

const font72 = {
  '@font-face': [
    {
      fontFamily: "'72'",
      fontStyle: 'normal',
      fontWeight: 400,
      src: [
        "local('72')",
        "url('https://sapui5.hana.ondemand.com/1.54.3/resources/sap/ui/core/themes/sap_belize/fonts/72-Regular.woff2') format('woff2')",
        "url('https://sapui5.hana.ondemand.com/1.54.3/resources/sap/ui/core/themes/sap_belize/fonts/72-Regular.woff') format('woff')"
      ]
    },
    {
      fontFamily: "'72'",
      fontStyle: 'normal',
      fontWeight: 700,
      src: [
        "local('72-Bold')",

        "url('https://sapui5.hana.ondemand.com/1.54.3/resources/sap/ui/core/themes/sap_belize/fonts/72-Bold.woff2') format('woff2')",
        "url('https://sapui5.hana.ondemand.com/1.54.3/resources/sap/ui/core/themes/sap_belize/fonts/72-Bold.woff') format('woff')"
      ]
    }
  ]
};

export { font72 };
