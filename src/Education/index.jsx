import React from "react";
import { Button, Row } from "reactstrap";

import Institute from "./Institute";
import { nanoid } from "nanoid";

const Education = ({ mode, institutionList, onChange, templateType}) => {
    const addInstitute = () => {
        onChange((institutionList) => [...institutionList, { id: nanoid() }]);
    };
    const deleteInstitute = (id) => {
        onChange((institutionList) =>
            institutionList.filter((institute) => institute.id !== id)
        );
    };
    return (
        <>
            <div className="divider">
                <div className={`primary-heading mt-4 mb-3 ${templateType === 0 ? 'orange':'blue'}`}>Education</div>

                {institutionList.length > 0 ? (
                    institutionList.map((institution, index) => (
                        <Institute
                            key={institution.id}
                            mode={mode}
                            data={institution}
                            index={index}
                            deleteInstitute={deleteInstitute}
                            id={institution.id}
                        />
                    ))
                ) : (
                    <div className="no-items">No education added.</div>
                )}
            </div>

            {(mode === "edit" || mode === "create") && (
                <Button className="mb-3" onClick={addInstitute}>
                    Add Institute
                </Button>
            )}
        </>
    );
};

export default Education;
