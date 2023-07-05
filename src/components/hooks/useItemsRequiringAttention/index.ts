import { useRouter } from 'next/router';

const useItemsRequiringAttention = () => {
  const router = useRouter();

  const handleCardItemClick = (url?: string) => {
    // NOTE:: This is a placeholder function as the CardItem component requires an onClick handler
    // TODO:: Update or extend prop types to make onClick optional or maybe a type union based on a CardItem type?
    if (url) router.push(url);
  };

  return { handleCardItemClick };
};

export default useItemsRequiringAttention;
