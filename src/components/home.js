import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container,Col, Row, Form } from 'react-bootstrap';
import img from '../image/Birthday cake.png';
import { MdWavingHand } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';
import { BsCalendarDateFill,BsFillLightbulbFill } from 'react-icons/bs';
import { GiHarpoonChain,GiPartyPopper } from 'react-icons/gi';

const Home = () => {
  let initialValue = [];

  // Taking data from user and Store it.
  const [events,setEvent] = useState(initialValue);
  

  const add =(event)=>{   
      event.preventDefault();
      // console.log(event.target.product_name.value);
      const formData = event.target;
      const newProduct = {
          event: formData.event.value,
          host: formData.host.value,
          time: formData.time.value,
          address: formData.address.value,
          link: formData.link.value
      }
      
      // add a new product inside products array
      setEvent([...events,newProduct]);
      console.log(events);  
  
  }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="m-5">
                    {/* container */}
                    <Container>
                        <Row>
                            <Col>
                                    <img width={500} height={500} src={img} alt="" className="img-fluid mx-auto d-block" />

                                    

                                    {/* Map to display Data from User */}
                                    {
                                      events.map((data)=>{
                                        
                                        return(
                                          <div style={{marginLeft:"70px"}}>
                                            
                                                <h3><MdWavingHand></MdWavingHand>Hosted by {data.event}</h3>
                                                 <p><b>14 responses. <a href='#' style={{textDecoration:"none"}}>see guests</a></b>
                                                 <Button style={{marginLeft:"20px",backgroundColor:"#8456EC",border:"none"}} variant="primary"><FaHandshake/> Invite</Button>
                                                 </p>
                                            
                                              <div><BsCalendarDateFill/>
                                                <h5><b>{data.time}</b></h5>
                                                <text>to {data.time}</text>
                                              </div>

                                              <br></br>
                                            
                                              <div><BsFillLightbulbFill/>
                                                <h5><b>Street name</b></h5>
                                                <text>{data.address}</text>
                                              </div>
                                           
                                              <br></br>

                                              <div> <GiHarpoonChain/>
                                                <h5><b>Link</b></h5>
                                                <text>{data.link}</text>
                                              </div>

                                          </div>
                                        )
                                      })
                                    }
                            </Col>

                            {/* Right Side. Where a user can Create an event */}

                            <Col style={{marginLeft:"116px",marginTop:"120px"}}>
                                <div className="f-14">
                                    <h1 >Imagine if <br></br> <text style={{color:"#E87BF8"}}>Snapchat</text> <br></br> had events.</h1>
                                </div>
                                <p>
                                    Easily host and share events  with your friends <br></br> across any social media.    
                                </p>

                                {/* Modal */}
                                <Button variant="primary" onClick={handleShow} style={{backgroundColor:"#E87BF8",border:"none"}}>
                                   <GiPartyPopper/> Create My Event
                                  </Button>

                                  <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Event Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                    {/* Form to take input data */}
                                    <Form onSubmit={add}>

                                        <Form.Group className="mb-3" controlId="formEvent">
                                          <Form.Label>EventName:</Form.Label>
                                          <Form.Control type="text" placeholder="Enter EventName" name="event"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formHost">
                                          <Form.Label>HostName:</Form.Label>
                                          <Form.Control type="text" placeholder="Enter HostName" name="host"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formTime">
                                          <Form.Label>Time:</Form.Label>
                                          <Form.Control type="text" placeholder="Enter Time" name="time"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formAddress">
                                          <Form.Label>Address:</Form.Label>
                                          <Form.Control type="text" placeholder="Enter Address" name="address"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formLink">
                                          <Form.Label>Link:</Form.Label>
                                          <Form.Control type="text" placeholder="Enter Link" name="link"/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                           Add Event
                                        </Button>
                                      </Form>        
                                
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button variant="secondary" onClick={handleClose}>
                                        Close
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                            </Col>
                        </Row>
                    </Container>
            </div>
        </div>
    );
};

export default Home;