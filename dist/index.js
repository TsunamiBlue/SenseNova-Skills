"use strict";

// SenseNova-Skills is a skills-only OpenClaw bundle: it ships 24 agent
// skills and no tools, hooks, or commands. OpenClaw still requires every
// plugin package to expose an `openclaw.extensions` entry with a plugin
// definition, so this module provides a minimal no-op definition. The
// skills themselves are declared in openclaw.plugin.json and loaded by
// the host independently of this extension.

const plugin = {
  id: "sensenova-skills",
  name: "SenseNova-Skills",
  register() {
    // No tools/hooks/commands to register — skills load from
    // openclaw.plugin.json.
  },
};

module.exports = plugin;
module.exports.default = plugin;
