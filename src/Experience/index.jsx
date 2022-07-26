import React from "react";
import { Button, Row } from "reactstrap";

import Company from "./Company";
import { nanoid } from "nanoid";

const Experience = ({ mode, companyList, onChange, templateType}) => {
    const addCompany = () => {
        onChange((companyList) => [
            ...companyList,
            { id: nanoid(), name: "", degree: "", year: "" },
        ]);
    };
    const deleteCompany = (id) => {
        onChange((companyList) =>
            companyList.filter((company) => company.id !== id)
        );
    };

    return (
        <>
            <div className="divider">
                <div className={`primary-heading mt-4 mb-3 ${templateType === 0 ? 'orange':'blue'}`}>Experience</div>

                {companyList.length > 0 ? (
                    companyList.map((company, index) => (
                        <Company
                            key={company.id}
                            mode={mode}
                            data={company}
                            index={index}
                            deleteCompany={deleteCompany}
                            id={company.id}
                        />
                    ))
                ) : (
                    <div className="no-items">No experience added.</div>
                )}
            </div>

            {(mode === "edit" || mode === "create") && (
                <Button className="mb-3" onClick={addCompany}>
                    Add Company
                </Button>
            )}
        </>
    );
};

export default Experience;
