import React from 'react'
import { Button, Modal } from 'antd';
export default function Gold() {
  return (
   <>
    <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
   
   </>
  )
}
