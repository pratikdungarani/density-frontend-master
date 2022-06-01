import React from "react";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// style
import useStyles from "./style";

const TabBar = ({
	options
}) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Tabs value={1} className={classes.Tabs}>
				{
					options?.map(option => {
						return (
							<Tab 
							label={option} 							
							className={classes.Tab}
							/>
						)
					})
				}
			</Tabs>
		</React.Fragment>
	);
};

export default TabBar;
