import React from "react";
import styles from "./Modal.module.css";
import formContext from "./formContext";

const Modal = ({ onClick, onPageChange }) => {
    const data = React.useContext(formContext);

    const buttonHandler = () => {
        onClick();
        onPageChange({
            first: true,
            second: false,
            third: false,
            pageNumber: 1,
        });
        data.setFormData({
            name: "",
            email: "",
            contact: "",
            city: "",
            state: "",
            country: "",
            job: "",
            experience: "",
            location: "",
        });
    };

    return (
        <div className={styles.modal}>
            <h2>
                Hello {data.formData.name}, you are successfully registered!!
            </h2>
            <h4>Here is your details</h4>
            <ul>
                {Object.entries(data.formData).map((e) => (
                    <li key={e[0]}>
                        {e[0].toUpperCase()} : {String(e[1]).toUpperCase()}
                    </li>
                ))}
            </ul>
            <button onClick={buttonHandler}>Okay</button>
        </div>
    );
};

export default Modal;
