import React from "react";

import {Box, Tab, Tabs} from "@material-ui/core";

export function TabNavigation({setTab, tab}) {
    const [value, setValue] = React.useState(tab);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTab(newValue);
    };

    function a11yProps(index) {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`
        };
    }

    React.useEffect(() => {
        setValue(tab);
    }, [tab]);

    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab label="Game" {...a11yProps(0)} />
                <Tab label="Settings" {...a11yProps(1)}/>
            </Tabs>
        </Box>
    );
}