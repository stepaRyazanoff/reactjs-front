import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(
        selector: (state: RootState) => TSelected): TSelected => useSelector(selector);

export const useAuth = () => {
    return !!sessionStorage.getItem('token');
};