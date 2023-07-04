import { useContext } from 'react';
import NavigationContext from '../Context/Navigation';

const useNavigation = () => {
  return useContext(NavigationContext)
  
}

export default useNavigation


