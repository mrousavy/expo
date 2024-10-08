"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const getenv_1 = require("getenv");
class Env {
    /** Enable debug logging */
    get EXPO_DEBUG() {
        return (0, getenv_1.boolish)('EXPO_DEBUG', false);
    }
    /** Enable the experimental "exotic" mode. [Learn more](https://blog.expo.dev/drastically-faster-bundling-in-react-native-a54f268e0ed1). */
    get EXPO_USE_EXOTIC() {
        return (0, getenv_1.boolish)('EXPO_USE_EXOTIC', false);
    }
    /** The React Metro port that's baked into react-native scripts and tools. */
    get RCT_METRO_PORT() {
        return (0, getenv_1.int)('RCT_METRO_PORT', 8081);
    }
    /** Disable Environment Variable injection in client bundles. */
    get EXPO_NO_CLIENT_ENV_VARS() {
        return (0, getenv_1.boolish)('EXPO_NO_CLIENT_ENV_VARS', false);
    }
    /** Enable the use of Expo's custom metro require implementation. The custom require supports better debugging, tree shaking, and React Server Components. */
    get EXPO_USE_METRO_REQUIRE() {
        return (0, getenv_1.boolish)('EXPO_USE_METRO_REQUIRE', false);
    }
}
exports.env = new Env();
//# sourceMappingURL=env.js.map