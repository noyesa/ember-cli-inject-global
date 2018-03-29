import { computed, get } from '@ember/object';
import { getOwner } from '@ember/application';
import getLookupKey from './-private/get-lookup-key';

/**
 * Fetch the global from the application container if it's already there,
 * otherwise get it off the window and register it in the container.
 * @param {@ember/application} app The ember application
 * @param {string} name The name of the global to lookup
 * @returns {object} The global named by name
 */
export function getOrRegisterGlobal(app, name, win = window) {
  const lookupKey = getLookupKey(name);
  if (app.hasRegistration(lookupKey)) {
    return app.lookup(lookupKey);
  } else {
    const global = get(win, name);
    app.register(lookupKey, global, { instantiate: false });
    return global;
  }
}

/**
 * Injects a global object from the DI container.
 * @param {string} globalName The name of the global to inject
 */
export default function injectGlobal(globalName) {
  return computed(function(propertyName) {
    const app = getOwner(this);
    return getOrRegisterGlobal(app, globalName || propertyName, window);
  });
}