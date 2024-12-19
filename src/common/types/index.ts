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

