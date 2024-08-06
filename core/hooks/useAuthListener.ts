import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { clearUser, setUser } from '../../store/slices/userSlice';

const auth = getAuth();

const useAuthListener = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuthListener;
