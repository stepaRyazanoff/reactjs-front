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
}

export interface IAuthUserData {
    user: IPublicUser;
    token: string;
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


