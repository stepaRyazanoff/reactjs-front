import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAuth = () => {
    const {isLogged} = useAppSelector((state) => state.auth);
    return isLogged;
};