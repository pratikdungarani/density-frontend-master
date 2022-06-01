import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    Tab: {
        color: theme.palette.secondary.main,
        fontFamily: theme.typography.fontFamily,
        textTransform: 'capitalize',
        '&.Mui-selected': {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
        },
    },
    Tabs: {
        '&.MuiTabs-indicator': {
          display: 'none',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        },
        '&.MuiTabs-indicatorSpan': {
          maxWidth: 40,
          width: '100%',
          backgroundColor: '#635ee7',
        },
        
    }
  
}));
export default useStyle;
