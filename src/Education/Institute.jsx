import React, { useState } from "react";
import { Button, FormGroup, Input, Row, Col } from "reactstrap";
import { degreeoptions } from "../constants";
import CreatableSelect from "react-select/creatable";

const Institute = ({ id, index, deleteInstitute, mode }) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [degree, setDegree] = useState("");

    return (
        <div className="item-wrapper pl-30">
            <div className="item-header">
                <span className="item-heading">Institute {index + 1}</span>
                {(mode === "edit" || mode === "create") && (
                    <Button onClick={() => deleteInstitute(id)} color="danger">
                        Delete
                    </Button>
                )}
            </div>
            <Row>
                <Col md={12}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                value={name}
                                spellCheck="true"
                                onChange={(e) => setName(e.target.value)}
                                id={`institution-${id}`}
                                name={`institution-${id}`}
                                placeholder="Institution Name"
                            />
                        ) : (
                            <>
                                <div className="info-field info-field-style">{name}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <CreatableSelect
                                required
                                value={degree}
                                spellCheck="true"
                                options={degreeoptions}
                                onChange={(value) => setDegree(value)}
                                id={`degree-${id}`}
                                name={`degree-${id}`}
                                placeholder="Degree"
                            />
                        ) : (
                            <>
                                <div className="info-title"> Degree</div>
                                <div className="info-field"> 
                                {degree ? (
                        degree.value
                    ) : (
                        <div className="no-items">No degree added.</div>
                    )}
                </div>
                           </>
                        )}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                id={`year-${id}`}
                                name={`year-${id}`}
                                placeholder="Year of Passout (yyyy)"
                                type="number"
                            />
                        ) : (
                            <>
                                <div className="info-title"> Year</div>
                                <div className="info-field">{year}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
            </Row>
        </div>
    );
};
export default Institute;
