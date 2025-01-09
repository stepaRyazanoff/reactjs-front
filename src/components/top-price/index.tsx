import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import {ISingleAsset} from '../../common/types';
import {StyledTableCell} from './styles';

interface IProps {
    assets: ISingleAsset[];
}

export const TopPrice: React.FC<IProps> = ({assets}): React.ReactElement => {

    return (
            <>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Название</TableCell>
                                <TableCell align='right'>Цена</TableCell>
                                <TableCell align='right'>Изменение (%)</TableCell>
                                <TableCell align='right'>Изменение ($)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {assets.map((row) => {
                                        const changePrice = row.price_change_24h;
                                        const changePercentagePrice = row.price_change_percentage_24h;

                                        return (
                                                <TableRow
                                                        key={row.name}
                                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                                >
                                                    <TableCell component='th' scope='row'>
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align='right'>{row.current_price}</TableCell>
                                                    <StyledTableCell
                                                            changePercentagePrice={changePercentagePrice}
                                                            align='right'
                                                    >
                                                        {row.price_change_percentage_24h.toFixed(2)}
                                                    </StyledTableCell>
                                                    <StyledTableCell
                                                            changePrice={changePrice}
                                                            align='right'
                                                    >
                                                        {row.price_change_24h.toFixed(2)}
                                                    </StyledTableCell>
                                                </TableRow>
                                        );
                                    }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
    );
};

