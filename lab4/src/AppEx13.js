import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import { Button, Drawer, List, ListItem } from "@mui/material";
import First from "./components/lab4.3/First";
import Second from "./components/lab4.3/Second";
import Third from "./components/lab4.3/Third";
function AppEx13({ links }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = ({ type, key }) => {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }
    setOpen(!open);
  };
  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <Routes>
        <Route path="/first" element={<First></First>} />
        <Route path="/second" element={<Second></Second>} />
        <Route path="/third" element={<Third></Third>} />
      </Routes>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                epoifjero
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

AppEx13.defaultProps = {
  links: [
    { url: "/first", name: "First page" },
    { url: "/second", name: "Second page" },
    { url: "/third", name: "Third page" },
  ],
};

export default AppEx13;
