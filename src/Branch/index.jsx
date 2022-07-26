import React from "react";
import { FormGroup, Col } from "reactstrap";
import CreatableSelect from "react-select/creatable";

import { branchOptions } from "../constants";

const Branch = ({ onChange, branchName, mode, templateType }) => (
    <Col md={12} className="divider">
        <div className={`primary-heading mt-4 mb-3 ${templateType === 0 ? 'orange':'blue'}`}>Branch</div>
        <FormGroup>
            {mode === "edit" || mode === "create" ? (
                <CreatableSelect
                    name="Engineering branch"
                    placeholder="Btech Branch"
                    options={branchOptions}
                    onChange={onChange}
                    value={branchName}
                    spellCheck="true"
                />
            ) : (
                <div className="info-field pl-30">
                    {branchName ? (
                        branchName.value
                    ) : (
                        <div className="no-items">No branch added.</div>
                    )}
                </div>
            )}
        </FormGroup>
    </Col>
);

export default Branch;
