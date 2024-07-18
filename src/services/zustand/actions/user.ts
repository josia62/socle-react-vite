import { useUserStore } from '../stores/user';

export const userActions = () => {
  const incrementAge = useUserStore((state) => state.incrementAge);
  const updateAge = useUserStore((state) => state.updateAge);
  const handleUpdateAge = (newAge: number) => {
    updateAge(newAge);
  };

  return {
    incrementAge,
    handleUpdateAge,
  };
};
