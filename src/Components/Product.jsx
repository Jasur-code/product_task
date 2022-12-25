import { Button, Carousel, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import dataProducts from "../Data/Data";

export default function Product() {
  const data = dataProducts;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardModal, setCardModal] = useState([])

  const showModal = (value) => {
    setIsModalOpen(true);
    setCardModal(value)
    console.log(value);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", letterSpacing: "3px" }}>
        Bizning Mahsulotlar
      </h1>
      <Row justify={"center"}>
        {data.map((v, i) => (
          <Col key={i} lg={10} xs={{ span: 24 }}>
            <div style={{ display: "flex", gap: "30px", marginTop: "40px" }}>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                }}
                src={v.img}
                alt=""
              />

              <div>
                <h3>{v.text}</h3>
                <h3 style={{ color: "gray" }}>{v.title}</h3>
                <p>{v.information}</p>
                <Button type="primary" onClick={() => showModal(v.carouselImg)}>
                  View More
                </Button>
                {isModalOpen && <Modal
                  title="Batafsil Ma'lumot"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >

                  <Carousel autoplay>
                  {
                    cardModal.map((value,index) => 
                    <div key={index}>
                      <img
                        style={{ width: "100%", height: "300px" }}
                        src={value.modal_img}
                        alt=""
                      />
                    </div>                  
                     )
                  }
                    
                  </Carousel>
                  <p>{v.modal_text}</p>
                </Modal> 
                 }
                
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
