import React from 'react';
import {ISingleAsset} from '../../common/types';
import {AssetsTable} from '../assets-table';

interface IProps {
    assets: ISingleAsset[];
}

export const TopPrice: React.FC<IProps> = ({assets}): React.ReactElement => {
    return (
            <AssetsTable assets={assets}/>
    );
};

