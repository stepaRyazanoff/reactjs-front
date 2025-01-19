import {styled, TableCell} from '@mui/material';

type Props = {
    changePercentagePrice?: number;
    changePrice?: number;
}

export const StyledTableCell =
        styled(TableCell, {shouldForwardProp: (prop) => !['changePercentagePrice', 'changePrice']
                    .includes(prop as string)})<Props>((props: Props) =>({
            '& > :first-of-type': {marginRight: '5px'},
            color: (props.changePercentagePrice ?? 0) > 0 || (props.changePrice ?? 0) > 0 ? 'green' : 'brown',
        }));