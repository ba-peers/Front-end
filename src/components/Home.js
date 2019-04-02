import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { MDBCarouselCaption,  MDBView, MDBMask } from
"mdbreact";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from "mdbreact"
import { Container } from "react-bootstrap";

        const Home = () => {
            return (
              <MDBContainer >
            
                <MDBCarousel activeItem={1} length={4} showControls={false} showIndicators={true} className="z-depth-1">
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="First slide" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>

                      <h1 className=" mainP">TEAM,
                                               <br></br>
                                                together everyone achieves more</h1>
                                                                        {/* <p> TEAM together everyone achieves more</p> */}
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>

                      <h1 className=" mainP">TEAM,
                                               <br></br>
                                                together everyone achieves more</h1>                        <p>Second text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Third slide" />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                      <h1 className=" mainP">TEAM,
                                               <br></br>
                                                together everyone achieves more</h1>
                        <p>Third text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1552582305-6b778426ab60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Mattonit's item" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>

                      <h1 className=" mainP">TEAM,
                                               <br></br>
                                                together everyone achieves more</h1>   
                                                                     {/* <p>Team Work App is a platform where group members can work together and share documentations  where group members can work together and share documentations  where group members can work together and share documentations  where group members can work together and share documentations  </p> */}
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
      <br></br>
<Container>
      <MDBCarousel activeItem={1} length={1} slide={false} showControls={false} showIndicators={false} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4 d-inline-block" >
                <MDBCard className="mb-2">
                  {/* <MDBCardImage className="" src="https://www.colorhexa.com/333333.png" /> */}
                  <MDBCardBody>
                    <MDBCardTitle>About Us</MDBCardTitle>
                    <MDBCardText>
                    Team Work App is a platform where group members can work together and share documentations  where group members can work together and share documentations  where group members can work together and share documentations  where group members can work together and share documentations.

                    </MDBCardText>
                   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-inline-block">
                <MDBCard className="mb-2">
                  {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" /> */}
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="d-none d-inline-block">
                <MDBCard className="mb-2">
                  {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" /> */}
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
      </Container>
    </MDBContainer>

   
            );
          }
          
    
export default Home;
