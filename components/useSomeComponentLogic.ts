import type { MaybeRef } from 'vue';
import { unref, computed } from 'vue';
import { AppEvent, useAppEventBus } from '~/composables/event-bus';

export const useSomeComponentLogic = (_ref: MaybeRef<{ data: string }>) => {
  const bus = useAppEventBus(AppEvent.Test);
  const ref = computed(() => unref(_ref));

  // causes leak

  bus.on(() => {
    ref.value.data = 'test';
    console.log('im bus');
  });

  // ok

  // onMounted(() => {
  //   bus.on(() => {
  //     ref.value.data = 'test';
  //     console.log('im bus');
  //   });
  // })
};
