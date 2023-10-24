import type { AppAnotherEvents } from '~/constants/AppAnotherEvents';
import { AppEvent } from './AppEvents';
import { useEventBus } from '@vueuse/core';

export const useAppEventBus = <T>(event: AppEvent | AppAnotherEvents) => {
  return useEventBus<T>(event);
};
