import type { BbPluginApi } from "@get-bb/plugin-sdk";

/**
 * Theme-only plugin. The palettes and code themes are declared in package.json;
 * BB requires this load-safe backend entry to activate the contribution.
 */
export default function plugin(bb: BbPluginApi) {
  bb.log.info("Noctis themes registered");
}
