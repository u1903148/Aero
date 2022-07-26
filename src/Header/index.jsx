import "./header.scss";
import { Button } from "reactstrap";

const Header = ({onChange}) => (
    <div className="flex main-header">
        
            <img src={require("./Untitled.PNG")} alt="Aero" height="68" width="160"></img> 
            <span className="resume-header">RESUME BUILDER</span>
        
        <div className="button-holder template-buttons">
                           <Button className="template1" onClick={(e) =>
                                    onChange(0)
                                } outline>
                                Template 1
                            </Button>
                            <Button className="template2" onClick={(e) =>
                                    onChange(1)
                                }  outline>
                                Template 2
                            </Button>
        </div>
    </div>
);

export default Header;
