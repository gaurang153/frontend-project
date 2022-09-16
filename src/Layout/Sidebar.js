import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import ProfileModal from "../Dashboard/ProfileModal";


function Sidebar({ setRenderComponant }){
    const vendor = JSON.parse(localStorage.getItem("authVendor"));
    return(
        <div>
            
            <Drawer anchor="left" open={true} hideBackdrop style={{position:"relative", zIndex:0}} sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}>
            <Toolbar/>
                <List>
                    <ListItem>
                    <ProfileModal title={vendor.name} />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemButton onClick={()=> setRenderComponant("completed")}>
                            <ListItemText>Completed</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=> setRenderComponant("pending")}>
                            <ListItemText>Pending</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=> setRenderComponant("request")}>
                            <ListItemText>Request</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Sidebar;
