"use strict";
ig.module("al-skill-toggle.keybind")
    .defines(() => {
    sc.OPTIONS_DEFINITION["keys-al-skill-toggle"] = {
        type: "CONTROLS",
        init: {
            key1: ig.KEY.C,
            key2: undefined,
        },
        // @ts-ignore They're not typed.
        cat: 5 //sc.OPTION_CATERGORY.CONTROLS
    };
    // @ts-ignore
    sc.KEY_OPTION_MAP["al-skill-toggle"] = "keys-al-skill-toggle";
    // @ts-ignore
    sc.fontsystem.changeGamepadIcon("al-skill-toggle", "left-stick-press");
});
//# sourceMappingURL=keybind.js.map