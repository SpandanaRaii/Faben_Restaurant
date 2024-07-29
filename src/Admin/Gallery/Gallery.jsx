import React, { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styles from './Gallery.module.css';


function Gallery() {
  const [show, setShow] = useState(false);
  const [gallery, setGallery] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    const file = data.picture[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setGallery([...gallery, { type: data.type, src: reader.result }]);
    };

    reader.readAsDataURL(file);
    reset();
    handleClose();
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Admin Panel</h1>
      <Button variant="primary" onClick={handleShow} className={styles.addButton}>
        Add Gallery
      </Button>

      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <div key={index} className={styles.galleryItem}>
            <h4>{item.type}</h4>
            <img src={item.src} alt={item.type} className={styles.image} />
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" {...register("type", { required: true })}>
                <option value="Room">Room</option>
                <option value="Cafe">Cafe</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPicture" className="mt-3">
              <Form.Label>Picture</Form.Label>
              <Form.Control type="file" {...register("picture", { required: true })} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              OK
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Gallery;