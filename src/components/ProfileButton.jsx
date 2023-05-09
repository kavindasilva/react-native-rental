
import { Avatar, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import LogoutButton from './LogoutButton';

export default function ProfileButton() {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return (
        <>
            <Avatar
                src="img/user-avatar-transparent.jpg"
                onClick={(e) => setPopoverOpen(e.currentTarget)}
                sx={{
                    alignSelf: 'center'
                }}
            >
                OP
            </Avatar>

            <Popover
                open={popoverOpen}
                onClose={() => setPopoverOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                <LogoutButton />
            </Popover>
        </>

    );
}