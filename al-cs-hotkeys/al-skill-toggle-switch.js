"use strict";
ig.module("al-skill-toggle.switch")
    .requires("game.feature.player.player-model", "game.feature.model.options-model", "game.feature.control.control")
    .defines(() => {
    const skills = {};
    const pairs = {};
    // @ts-ignore
    sc.GlobalInput.inject({
        onPostUpdate() {
            this.parent();
            if (
            // @ts-ignore
            !ig.game.isControlBlocked() &&
                // @ts-ignore
                sc.model.isGame() &&
                !ig.loading &&
                // @ts-ignore
                !sc.model.isPaused() &&
                // @ts-ignore
                !sc.model.isCutscene() &&
                // @ts-ignore
                sc.model.isRunning() &&
                // @ts-ignore
                (ig.input.pressed("al-skill-toggle")|| ig.gamepad.isButtonPressed(ig.BUTTONS.LEFT_STICK))) {
                // Key bind stuff goes here
                // Particle event stuff here
                const steps = [];
                steps.push(
                    {
                        type: "SHOW_EFFECT",
                        entity: ig.game.playerEntity,
                        "align": "CENTER",
                        effect: {
                            "sheet": "scene.hacking",
                            "name": "alSkillToggle"
                        }
                    },
                    {
                        type: "TOGGLE_ITEM",
                        item: "toggle-arcanelab-skill"
                    }
                );
                // @ts-ignore
                const event = new ig.Event({ steps });
                // @ts-ignore
                event.addHint("SKIN_ALLOWED");
                // @ts-ignore
                ig.game.events.callEvent(event, ig.EventRunType.PARALLEL);
            }
        }
    });
});
//# sourceMappingURL=switch.js.map