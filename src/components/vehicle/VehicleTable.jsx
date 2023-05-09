
import { Grid, Paper, } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { useCallback, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import ConfigService from '../../services/ConfigService';

import VehicleService from '../../services/VehicleService';

export default function VehicleTable() {
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        VehicleService().findAllVehicles()
            .then(vehicles => setRows(vehicles))
            .catch(e => console.warn(e))
    });

    const navigateToProfile = (id) => {
        navigate(ConfigService.pageUrls.VEHICLE + '/' + id, {state: {name: 'c'}});
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Brand</TableCell>
                        <TableCell align="right">Model</TableCell>
                        <TableCell align="right">Year of Manufactured</TableCell>
                        <TableCell align="right">Transmission</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => navigateToProfile(row.id)}
                        >
                            <TableCell align="right">{row.brand}</TableCell>
                            <TableCell align="center">{row.model}</TableCell>
                            <TableCell align="right">{row.yom}</TableCell>
                            <TableCell align="left">{row.transmission}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
