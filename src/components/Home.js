import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { MDBCarouselCaption,  MDBView, MDBMask } from
"mdbreact";
import { Button } from 'react-bootstrap';


import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from "mdbreact"
import { Container } from "react-bootstrap";

        const Home = () => {
            return (
              <MDBContainer >
            
                <MDBCarousel activeItem={1} length={4} showControls={false} showIndicators={true} className="z-depth-1 mainCarousel">
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="First slide" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>

                      <h1 className="team">  <h1 className="team">TEAM,</h1>
                                                Together 
                                                Everyone 
                                                Achieves  
                                                More</h1> 
                                                                       
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>

                     <p className="team">
                      "Coming together is a beginning. Keeping together is progress. Working together is success."</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Third slide" />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                      <h1 className="team"><h1 className="team">TEAM,</h1>
                                                Together 
                                                Everyone 
                                                Achieves 
                                                More</h1>   
                        
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1552582305-6b778426ab60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Mattonit's item" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>

                      <h1 className="team">"Many ideas grow better when transplanted into another mind than the one where they sprang up"</h1>
                                                 
                    
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
                <MDBCard className="mb-2" style={{ width: '18rem' , height: '15rem'}}>
                  {/* <MDBCardImage className="" src="https://www.colorhexa.com/333333.png" /> */}
                  <MDBCardBody className='cardsbody'>
                    <MDBCardTitle>About Us</MDBCardTitle>
                    <MDBCardText>
                    Team Work App is a platform where group members can work together and share documentations in a private workspace.

                    </MDBCardText>
                   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-inline-block">
                <MDBCard className="mb-2" style={{ width: '18rem' , height: '15rem'}}>
                  {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" /> */}
                  <MDBCardBody className='cardsbody'>
                    <MDBCardTitle>Features</MDBCardTitle>
                    <MDBCardText>
                    • Admin create the group key<br></br>
                    • Admin pass the key for members <br></br>
                    • Members can join the group and enjoy working together
                    </MDBCardText>
                   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="d-none d-inline-block">
                <MDBCard className="mb-2" style={{ width: '18rem' , height: '15rem'}}>
                  {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" /> */}
                  <MDBCardBody className='cardsbody'>
                    <MDBCardTitle>Contact Us</MDBCardTitle>
                    <MDBCardText>
                    ✉ asmaq66@gmail.com
                    <br></br>
                    <br></br>
                    ✉ badriahalshehri.cs@gmail.com
                    <br></br>
                    <br></br>
                    ✆ +966500850000
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
