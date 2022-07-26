import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const PersonalInfo = ({ mode, data, onChange, templateType }) => {
    return (
        <Row className="mb-2" form>
            { (mode === "edit" || mode === "create") &&
            <>
            <div className={`primary-heading mt-4 mb-3 ${templateType === 0 ? 'orange':'blue'}`}>Personal Info</div>
            <Row className="pl-30">
                <Col md={6}>
                    <FormGroup>
                        
                        
                            <Label for="first_name">First Name</Label>
                            <Input
                                required
                                id="first_name"
                                name="first_name"
                                placeholder="First Name"
                                value={data.firstName}
                                spellCheck="true"
                                onChange={(e) =>
                                    onChange({
                                        ...data,
                                        firstName: e.target.value,
                                    })
                                }
                       
                            />
                         
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="second_name">Second Name</Label>
                        {
                            <Input
                                required
                                id="second_name"
                                name="second_name"
                                placeholder="Second Name"
                                value={data.secondName}
                                spellCheck="true"
                                onChange={(e) =>
                                    onChange({
                                        ...data,
                                        secondName: e.target.value,
                                    })
                                }
                            />
                        }
                    </FormGroup>
                </Col>
            </Row>
            <Row className="pl-30">
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        {
                            <Input
                                required
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={data.email}
                                spellCheck="true"
                                onChange={(e) =>
                                    onChange({ ...data, email: e.target.value })
                                }
                            />
                        }
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        { 
                            <Input
                                required
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                type="number"
                                value={data.phone}
                                onChange={(e) =>
                                    onChange({ ...data, phone: e.target.value })
                                }
                            />
                        }
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="address">Address</Label>
                            <Input
                                required
                                id="address"
                                name="text"
                                placeholder="Address"
                                type="textarea"
                                value={data.address}
                                spellCheck="true"
                                onChange={(e) =>
                                    onChange({
                                        ...data,
                                        address: e.target.value,
                                    })
                                }
                            />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Self Description</Label>
                            <Input
                                required
                                id="description"
                                name="text"
                                placeholder="Self Description"
                                type="textarea"
                                value={data.description}
                                spellCheck="true"
                                onChange={(e) =>
                                    onChange({
                                        ...data,
                                        description: e.target.value,
                                    })
                                }
                            />
                    </FormGroup>
                </Col>
                <Col>
                <div>
                    <div>Upload Image</div>
                    {data && data.image && (
                        <div>
                        <img alt="not found" className={`${templateType === 0 ? '':'rounded-image'}`}  width={"190px"} src={URL.createObjectURL(data.image)} />
                        <br />
                        <button onClick={(e) =>
                            onChange({ ...data, image: null })
                        }>Remove</button>
                        </div>
                    )}
                    <br />
                    
                    <br /> 
                    <input
                        type="file"
                        name="myImage"
                        onChange={(e) =>
                            onChange({ ...data, image: e.target.files[0] })
                        }
                    />
                    </div>          
                </Col>
            </Row> </> } 
            { !(mode === "edit" || mode === "create") &&
                <div className="final-info">
                            {data && data.image &&
                                <img alt="not found" className={`${templateType === 0 ? '':'rounded-image'}`} width={"190px"} src={URL.createObjectURL(data.image)} />
                            }
                            <div className="pl-35">
                                <div className="full-name">
                                    {data.firstName} {data.secondName}
                                </div>
                                <div className="email-phone">
                                    {data.email} | {data.phone}
                                </div>
                                <div className="address">
                                    {data.address}
                                </div>
                                <div className="description">
                                    {data.description}
                                </div>
                            </div>
                </div>
            }
        </Row>
    );
};

export default PersonalInfo;
