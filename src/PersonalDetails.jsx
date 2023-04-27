import React from "react";
import formContext from "./formContext";
import styles from "./PersonalDetails.module.css";

const PersonalDetails = ({ onPageChange, pageNumber }) => {
    const data = React.useContext(formContext);

    const isValidEmail = (inputText) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) return true;
        else return false;
    };

    const buttonHandler = () => {
        if (
            !data.formData.name ||
            !data.formData.email ||
            !data.formData.contact
        ) {
            alert("Please fill all the fields...");
            return;
        } else {
            if (data.formData.contact.length != 10) {
                alert("Contact number should be 10 digits long...");
                return;
            }
            if (!isValidEmail(data.formData.email)) {
                alert("Enter a valid e-mail address...");
                return;
            } else {
                onPageChange({
                    first: false,
                    second: true,
                    third: false,
                    pageNumber: 2,
                });
            }
        }
    };

    return (
        <div className={styles.main}>
            <form>
                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
                    id="fullname"
                    placeholder="Enter your fullname"
                    required
                    value={data.formData.name}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="email">E-mail ID</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    value={data.formData.email}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            email: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="contact">Contact Number</label>
                <input
                    type="tel"
                    id="contact"
                    placeholder="Enter your contact number"
                    required
                    value={data.formData.contact}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            contact: e.target.value,
                        }));
                    }}
                />
            </form>
            <div className={styles.btns}>
                <button onClick={buttonHandler}>NEXT</button>
                <span>{pageNumber}/3</span>
            </div>
        </div>
    );
};

export default PersonalDetails;
