"use strict";
ig.module("al-menu-open.keybind")
    .defines(() => {
    sc.OPTIONS_DEFINITION["keys-al-menu-open"] = {
        type: "CONTROLS",
        init: {
            key1: ig.KEY.X,
            key2: undefined,
        },
        // @ts-ignore They're not typed.
        cat: 5 //sc.OPTION_CATERGORY.CONTROLS
    };
    // @ts-ignore
    sc.KEY_OPTION_MAP["al-menu-open"] = "keys-al-menu-open";
    // @ts-ignore
    sc.fontsystem.changeGamepadIcon("al-menu-open", "left-stick-press");
});
//# sourceMappingURL=keybind.js.map