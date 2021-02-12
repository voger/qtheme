/* ************************************************************************

   Copyright: 2021 

   License: MIT license

   Authors: 

 ************************************************************************ */

qx.Theme.define("qtheme.theme.Appearance", {
  extend: qx.theme.indigo.Appearance,

  appearances: {
    dialog: {
      alias: "window",
      include: "window",

      style(states) {
        return {
          contentPadding: 10,
          padding: 10,
        };
      },
    },

    "custom-widget": {
      include: "widget",

      style(states) {
        return {
          backgroundColor: "blue",
        };
      },
    },
  },
});
