export default function getLookupKey(globalName) {
  return `global:${globalName.dasherize()}`;
}