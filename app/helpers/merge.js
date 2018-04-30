import { helper } from '@ember/component/helper';

export default helper(function(hashes, hash) {
  return Object.assign(Object.create(null), ...hashes, hash);
});
