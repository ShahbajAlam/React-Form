import React from "react";
import formContext from "./formContext";
import styles from "./Job.module.css";

const Job = ({ onPageChange, pageNumber, onSubmit }) => {
    const data = React.useContext(formContext);
    const prevButtonHandler = () => {
        onPageChange({
            first: false,
            second: true,
            third: false,
            pageNumber: 2,
        });
    };

    const submitHandler = () => {
        if (!data.formData.job || !data.formData.location) {
            alert("Please fill all the fields...");
            return;
        }
        if (!data.formData.experience) {
            alert("Please fill all the fields...");
            return;
        } else {
            onSubmit();
        }
    };

    return (
        <div className={styles.main}>
            <form>
                <label htmlFor="job">Job Title</label>
                <input
                    type="text"
                    id="job"
                    placeholder="Enter your job title"
                    required
                    value={data.formData.job}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            job: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="exp">Total Experience</label>
                <input
                    type="number"
                    id="exp"
                    placeholder="Experience in years"
                    required
                    min={0}
                    value={data.formData.experience}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            experience: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="loc">Office Location</label>
                <input
                    type="text"
                    id="loc"
                    placeholder="Enter your office location"
                    required
                    value={data.formData.location}
                    onChange={(e) => {
                        data.setFormData((prevState) => ({
                            ...prevState,
                            location: e.target.value,
                        }));
                    }}
                />
            </form>
            <div className={styles.btns}>
                <button onClick={prevButtonHandler}>PREV</button>
                <button onClick={submitHandler}>SUBMIT</button>
                <span>{pageNumber}/3</span>
            </div>
        </div>
    );
};

export default Job;
