import { computed } from 'vue';

import useAppStore from '@/store/index.js';

export function useYuhunStore() {
  const appStore = useAppStore();

  const hasYYXState = computed(() => appStore.hasYYXState);
  const getEqData = computed(() => appStore.getEqData || []);
  const getUserInfo = computed(() => appStore.getUserInfo);
  const getEqDataL15 = computed(
    () => appStore?.getEqData?.filter((item) => item.level === 15) || [],
  );

  function setYuhunStore(data) {
    appStore.setYuhunStore(data);
  }

  return {
    hasYYXState,
    getEqData,
    getEqDataL15,
    getUserInfo,
    setYuhunStore,
  };
}
