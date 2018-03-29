import getLookupKey from '../-private/get-lookup-key';

export default function injectFakeGlobal(app, name, o) {
  app.register(
    getLookupKey(name),
    o,
    { instantiate: false }
  );
}