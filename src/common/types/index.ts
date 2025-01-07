import {loginSchema, registerSchema} from '../../utils/yup';
import {InferType} from 'yup';

interface IWatchList {
    id: number;
    name: string;
    assetId: string;
    createdAt: string;
    updatedAt: string;
    user: number;
}

export interface IPublicUser {
    id: number;
    firstName: string;
    userName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    watchlist: [IWatchList];
}

export interface IAuthState {
    user: IPublicUser | null;
    isLogged: boolean;
    isLoading: boolean;
}

export interface IAssets {

}

export interface ISingleAsset {
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    circulating_supply: number;
    current_price: number;
    fully_diluted_valuation: number;
    high_24h: number;
    id: string;
    image: string;
    last_updated: Date;
    low_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    market_cap_rank: number;
    max_supply: null;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
    roi: { times: number; currency: string; percentage: number; };
    symbol: string;
    total_supply: number;
    total_volume: number;
}

export interface IAssetResponse {
    name: string;
    prices: [number[]];
    singleAsset: ISingleAsset[];
}

export interface IAssetsState {
    assets: IAssets[];
    favoriteAssets: IAssetResponse[];
    isLoading: boolean;
}

export interface IAuthUserResponse {
    user: IPublicUser;
    token: string;
}

export interface IUserRegisterData {
    firstName: string;
    userName: string;
    email: string;
    password: string;
}

export interface IColorModeContextType {
    toggleColorMode: () => void;
}

export type Colors = {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    black: Record<string, string>;
    white: Record<string, string>;
    gray: Record<string, string>;
    accentMain: string;
    borderColor: string;
    blue: string;
};

export type InputLoginData = InferType<typeof loginSchema>;
export type InputRegisterData = InferType<typeof registerSchema>;

