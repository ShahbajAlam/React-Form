import React from "react";
import formContext from "./formContext";
import styles from "./Address.module.css";

const Address = ({ onPageChange, pageNumber }) => {
    const data = React.useContext(formContext);

    const prevButtonHandler = () => {
        onPageChange({
            first: true,
            second: false,
            third: false,
            pageNumber: 1,
        });
    };
    const nextButtonHandler = () => {
        if (
            !data.formData.city ||
            !data.formData.state ||
            !data.formData.country
        ) {
            alert("Please fill all the fields...");
            return;
        } else {
            onPageChange({
                first: false,
                second: false,
                third: true,
                pageNumber: 3,
            });
        }
    };

    return (
        <div className={styles.main}>
            <form>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    placeholder="Enter your city name"
                    required
                    value={data.formData.city}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            city: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    id="state"
                    placeholder="Enter your state"
                    required
                    value={data.formData.state}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            state: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="country">Country</label>
                <input
                    type="text"
                    id="country"
                    placeholder="Enter your country"
                    required
                    value={data.formData.country}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            country: e.target.value,
                        }));
                    }}
                />
            </form>
            <div className={styles.btns}>
                <button onClick={prevButtonHandler}>PREV</button>
                <button onClick={nextButtonHandler}>NEXT</button>
                <span>{pageNumber}/3</span>
            </div>
        </div>
    );
};

export default Address;
