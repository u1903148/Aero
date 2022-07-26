import "./App.scss";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Branch from "./Branch";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

import React, { useEffect, useState } from "react";
import { Button, Form, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  

import { defaultPersonalInfo } from "./constants";

function App({ initialMode }) {
    const navigate = useNavigate();
    const [pageNo, setPageNo] = useState(0);
    const [templateType, setTemplateType] = useState(0);
    const [skillList, setSkillList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [institutionList, setInstitutionList] = useState([]);
    const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
    const [branchName, setBranchName] = useState("");
    const [mode, setMode] = useState(initialMode);

    const onSkillChange = (value) => setSkillList(value);

    const onBranchChange = (value) => setBranchName(value);

    const editResume = () => setMode("edit");

    const viewResume = () => setMode("view");

    const createNew = () => {
        clearForm();
        setMode("create");
        setPageNo(0);
    };
    const clearForm = () => {
        setPersonalInfo(defaultPersonalInfo);
        setBranchName("");
        setCompanyList([]);
        setInstitutionList([]);
        setSkillList([]);
    };
    const nextPage = () => {
        setPageNo(pageNo + 1);
    }
    const backPage = () => {
        setPageNo(pageNo - 1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        mode === "edit" || mode === "create" ? viewResume() : editResume();
    };

    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
        .then((canvas) => {  
            var imgWidth = 270;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            var position = 0;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });
        ;
    }

    useEffect(() => navigate("/" + mode), [mode,navigate]);
    console.log("personalInfo-", personalInfo);
    return (
        <Container className="mb-5 mt-2">
            <div className="App ml-10 mr-10" id="divToPrint">
                <Header onChange={setTemplateType}/>
                <Form onSubmit={handleSubmit}>
                    {
                    <div className={`${(pageNo === 0 || (mode !== "edit" && mode !== "create")) ? '':'hide'}`}>
                        <PersonalInfo
                            data={personalInfo}
                            onChange={setPersonalInfo}
                            mode={mode}
                            templateType = {templateType}
                        />
                    </div>}
                    {
                    <div className={`${(pageNo === 1 && (mode === "edit" || mode === "create") ) ? '':'hide'}`}>
                        <Branch
                            mode={mode}
                            branchName={branchName}
                            onChange={onBranchChange}
                            templateType = {templateType}
                        />
                    </div>}
                    {
                    <div className={`${(pageNo === 2 || (mode !== "edit" && mode !== "create")) ? '':'hide'}`}>
                        <Education
                        institutionList={institutionList}
                        onChange={setInstitutionList}
                        mode={mode}
                        templateType = {templateType}
                        />
                    </div> }
                    {
                    <div className={`${(pageNo === 3 || (mode !== "edit" && mode !== "create")) ? '':'hide'}`}>  
                     <Experience
                        companyList={companyList}
                        onChange={setCompanyList}
                        mode={mode}
                        templateType = {templateType}
                    />
                    </div> }
                    {
                    <div className={`${(pageNo === 4 || (mode !== "edit" && mode !== "create")) ? '':'hide'}`}> 
                     <Skills
                        branchSelected = {branchName}
                        mode={mode}
                        skillList={skillList}
                        onChange={onSkillChange}
                        templateType = {templateType}
                    />

                    <div className="divider mt-4"></div>

                    <div className="button-holder">
                    {(mode === "edit" || mode === "create") && <Button onClick={backPage} outline>
                            Back
                        </Button>}
                        <Button onClick={createNew} type="reset" outline>
                            Create New
                        </Button>
                        <Button type="submit" color="primary">
                            {mode === "edit" || mode === "create"
                                ? "Save"
                                : "Edit"}
                        </Button>
                        {!(mode === "edit" || mode === "create") && 
                            <Button onClick={printDocument}>Export PDF</Button>
                        }
                    </div>
                    </div>
                    }
                    {pageNo !== 4 &&
                        <div className="button-holder">
                           {pageNo !== 0 && <Button onClick={backPage} outline>
                                Back
                            </Button>}
                            <Button onClick={nextPage} outline>
                                Next
                            </Button>
                    </div>
                         
                    }
                </Form>
            </div>
        </Container>
    );
}

export default App;
