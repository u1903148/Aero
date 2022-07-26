import React from "react";
import { FormGroup, Col } from "reactstrap";
import CreatableSelect from "react-select/creatable";

import { cseSkillOptions, mechSkillOptions,civilSkillOptions, eceSkillOptions,eeeSkillOptions,itSkillOptions,aidsSkillOptions } from "../constants";

const Skills = ({ onChange, skillList, mode, branchSelected, templateType}) => {

    let skillOptions = [];
    switch(branchSelected.value) {
        case "Computer Science": skillOptions = cseSkillOptions
                    break;
        case "Mechanical": skillOptions = mechSkillOptions;
                    break;
        case "Civil": skillOptions = civilSkillOptions;
                    break;
        case "Electrical and Electronics": skillOptions = eeeSkillOptions;
                    break;
        case "Electronics": skillOptions = eceSkillOptions;
                    break;
        case "Information Technology": skillOptions = itSkillOptions;
                    break;
        case "Artificial Intelligence and Data Structures": skillOptions = aidsSkillOptions;
                    break;
        default: skillOptions = [];
    }
    return (
        <Col md={12} className="divider">
            <div className={`primary-heading mt-4 mb-3 ${templateType === 0 ? 'orange':'blue'}`}>Skills</div>
            <FormGroup>
                {mode === "edit" || mode === "create" ? (
                    <CreatableSelect
                        name="skills"
                        isMulti
                        placeholder="Enter your skills"
                        options={skillOptions}
                        onChange={onChange}
                        value={skillList}
                    />
                ) : (
                    <div className="info-field pl-30">
                        {skillList.length > 0 ? (
                            skillList.map((skill) => skill.label).join(", ")
                        ) : (
                            <div className="no-items">No skills added.</div>
                        )}
                    </div>
                )}
            </FormGroup>
        </Col>
    )
}

export default Skills;
