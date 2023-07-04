import React, { useState } from 'react'
import Modal from '../Component/Modal'
import Button from '../Component/Button';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>
    </Modal>

    return (
        <div className='relative'>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint nam voluptate adipisci laboriosam culpa hic quod ab quos voluptas animi vero perspiciatis soluta ipsa deleniti odit excepturi, vitae neque error ullam? Cum dolore exercitationem similique necessitatibus sit, delectus eaque maiores, dolor cumque unde aut alias ab. Asperiores, id et.</p>

        </div>
    )
}

export default ModalPage
