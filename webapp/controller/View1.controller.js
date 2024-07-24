sap.ui.define([
    "sap/ui/core/mvc/Controller"
],

function (Controller) {
    "use strict";

    return Controller.extend("sap.btp.printfullscreen.controller.View1", {
        onInit: function () {

        },

        onPressPrint: function () {
            this.hideScrollbarsBeforePrint();
            window.print();
            this.showScrollbarsAfterPrint();
        },

        hideScrollbarsBeforePrint: function () {
            // Nascondi le scrollbar prima della stampa
            document.body.style.overflow = 'hidden';
        },

        showScrollbarsAfterPrint: function () {
            // Ripristina le scrollbar dopo la stampa
            document.body.style.overflow = '';
        }
    });
});
