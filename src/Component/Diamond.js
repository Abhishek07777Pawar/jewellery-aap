import React, { useState } from 'react';
import { Button, Modal } from 'antd';
export default function Diamond({ open, setOpen }) {
  const modalContentStyle = {
    height: '300px', // Set the desired height
  }
  return (

    <>

      <Modal
        title="Diamond Jewells"


        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        style={{ marginTop: "40px" }}
        bodyStyle={modalContentStyle}
        footer={null}

      >

        <div className="row">
          <div className="col-md-4 col-sm" >
            <img className="img-fluid" style={{ height: "80px" }} src="assets/images/band-image.png" alt="Rings" />
            <span>Rings</span>
          </div>
          <div className="col-md-4 col-sm">
            <img className="img-fluid" style={{ height: "60px" }} src="assets/images/multifinger-image.png" alt="Multi-Fingers" />
            <span>Multi-Fingers</span>
          </div>
          <div className="col-md-4 col-sm">
            <img className="img-fluid" style={{ height: "100px" }} src="assets/images/earring-image.png" alt="Earrings" />
            <span>Earrings</span>
          </div>
          <div className="col-md-4 col-sm">
            <img className="img-fluid" style={{ height: "50px" }} src="assets/images/kada-diamond-image.png" alt="Earrings" />
            <span>Simple Kada</span>
          </div>
          <div className="col-md-4 col-sm">
            <img className="img-fluid" style={{ height: "70px" }} src="assets/images/earring3-diamond-image.png" alt="Earrings" />
            <span>Earrings</span>
          </div>
          <div className="col-md-4 col-sm">
            <img className="img-fluid" style={{ height: "50px" }} src="assets/images/pair-ring-diamond-image.png" alt="Earrings" />
            <span>Pair Rings</span>
          </div>
          <div className="col-md-4  col-sm">
            <img className="img-fluid" style={{ height: "60px" }} src="assets/images/p-33.png" alt="Earrings" />
            <span>Designer Kada</span>
          </div>
        </div>
      </Modal>
    </>
  );
};



