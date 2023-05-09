
import { Grid } from '@mui/material';

import { useState } from 'react';
import { useParams,  } from 'react-router';
import {useLocation} from 'react-router-dom';

export default function VehicleProfile(props) {
    const { id } = useParams();
    const location = useLocation();
    console.log('props', props);
    // const { itemId, otherParam } = props.params;

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <span>id = {id}</span>
            </Grid>
            <Grid item xs={8}>
                <span>props = {location.state.name}</span>
            </Grid>
            <Grid item xs={6}>
                {/* <span>itemId = {itemId}</span> */}
            </Grid>
            <Grid item xs={6}>
                <span>xs=8</span>
            </Grid>
        </Grid>
    );
}
