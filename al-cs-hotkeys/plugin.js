export default class ModuleCache {
    constructor(mod) {
        this.mod = mod;
    }
    prestart() {
        window.moduleCache.registerModPrefix("al-cs-hotkeys", this.mod.baseDirectory.substring(7));
        ig._loadScript("al-cs-hotkeys.al-menu-open-keybind");
        ig._loadScript("al-cs-hotkeys.al-skill-toggle-keybind");
    }
    poststart() {
        ig._loadScript("al-cs-hotkeys.al-menu-open-switch");
        ig._loadScript("al-cs-hotkeys.al-skill-toggle-switch");
    }
}
//# sourceMappingURL=plugin.js.map