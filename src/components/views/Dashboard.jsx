import { user } from "./user"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from "react-hook-form";

export const Dashboard = () => {
    const userData = user;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            fullName: ''
        }
    });

    const formSubmit = (data) => {
        console.log(data);
    }
    return <>
        <section className="dashboard">
            <div className="container-fluid">
                <div className="row g-4 align-items-stretch">
                    <div className="col-lg-12">
                        <div className="dashboard__title">
                            <h1>User List</h1>
                            <button className="primary__btn" onClick={handleShow}>Add New </button>
                        </div>
                    </div>
                    {
                        userData.map((item, index) => (
                            <div className="col-xl-4 col-lg-6" key={index}>
                                <div className="dashboard__card">
                                    <div className="dashboard__card--image">
                                        <img src={item.image} alt={`${item.name} ${item.designation}`} />
                                    </div>
                                    <div className="dashboard__card--content">
                                        <h2>{item.name}</h2>
                                        <h4>{item.designation}</h4>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

        {/* Modal  */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit(formSubmit)}>
                    <div className="form__single">
                        <Form.Label htmlFor="fullName">Full Name</Form.Label>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="fullName">
                                <i className="fi fi-rr-user"></i>
                            </InputGroup.Text>
                            <Controller
                                name="fullName"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Form.Control type="text" {...field} placeholder="Full Name" />
                                )}
                            />
                        </InputGroup>
                    </div>
                    <div className="form__single">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="email">
                                <i className="fi fi-rr-envelope"></i>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="email@mailbox.com"
                                aria-label="email"
                                aria-describedby="email"
                                type="email"
                            />
                        </InputGroup>
                    </div>
                    <div className="form__single">
                        <Form.Label htmlFor="mobile">Phone Number</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="mobile">
                                <i className="fi fi-rr-smartphone"></i>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="+8801728288363"
                                aria-label="mobile"
                                aria-describedby="mobile"
                                type="number"
                            />
                        </InputGroup>
                    </div>
                    <div className="form__single">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="password">
                                <i className="fi fi-rr-lock"></i>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Password"
                                aria-label="password"
                                aria-describedby="password"
                                type="password"
                            />
                        </InputGroup>
                    </div>
                    <div className="form__single">
                        <Form.Label htmlFor="confirmPass">Confirm Password</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="confirmPass">
                                <i className="fi fi-rr-lock"></i>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Confirm Password"
                                aria-label="confirmPass"
                                aria-describedby="confirmPass"
                                type="password"
                            />
                        </InputGroup>
                    </div>
                    <div className="form__single">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Image</Form.Label>
                            <div className="form__single--file">
                                <Form.Control type="file" />
                                <div className="file__box">
                                    <div className="file__box--icon">
                                        <i className="fi fi-rr-clip"></i>
                                    </div>
                                    <div className="file__box--text">
                                        <p>Upload your File</p>
                                    </div>
                                </div>
                            </div>
                        </Form.Group>
                    </div>
                    <div className="form__footer">
                        <button className="secondary__btn" onClick={handleClose}>
                            Close
                        </button>
                        <button className="success__btn" type="submit" >
                            Save Changes
                        </button>
                    </div>
                </Form>
            </Modal.Body>

        </Modal>
    </>
}