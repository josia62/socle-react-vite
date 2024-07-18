import { useUserStore } from '../stores/user';

export const userStates = () => {
  const age = useUserStore((state) => state.age);
  return {
    age
  };
};
