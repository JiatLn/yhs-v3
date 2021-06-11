import { computed } from 'vue';

import useAppStore from '@/store/index.js';

export function useYuhunStore() {
  const appStore = useAppStore();

  const hasYYXState = computed(() => appStore.hasYYXState);
  const getEqData = computed(() => appStore.getEqData || []);
  const getUserInfo = computed(() => appStore.getUserInfo);

  function setYuhunStore(data) {
    appStore.setYuhunStore(data);
  }

  return {
    hasYYXState,
    getEqData,
    getUserInfo,
    setYuhunStore,
  };
}
