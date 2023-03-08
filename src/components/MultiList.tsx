/** @jsxImportSource @emotion/react */
import {Box, List, ListItem, ListItemText} from '@mui/material'

const styling = {
    width: '400px', 
    height: '150px', 
    bgcolor: '#465093',
    color: 'white',
    position: 'relative',
    display: 'flex'
};

const textStyling = {
    paddingLeft: '50px',
    color: 'white'
};

function MultiList() {
    return (<Box sx ={{styling}}> 
        <List>
            <ListItem>
                <ListItemText sx = {textStyling} primary = "Future Entrepreneurs Co."></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText sx = {textStyling} primary = "3 Random Road"></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText sx = {textStyling} primary = "IL 60201"></ListItemText>
            </ListItem>
        </List> 
    </Box>);
}

export default MultiList;
