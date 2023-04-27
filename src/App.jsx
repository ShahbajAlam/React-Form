import React from "react";
import formContext from "./formContext";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import Job from "./Job";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const App = () => {
    const [backdropVisible, setBackdropVisible] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        contact: "",
        city: "",
        state: "",
        country: "",
        job: "",
        experience: "0",
        location: "",
    });
    const [pageVisible, setPageVisible] = React.useState({
        first: true,
        second: false,
        third: false,
        pageNumber: 1,
    });

    const getPageState = (data) => {
        setPageVisible((prevState) => ({ ...prevState, ...data }));
    };

    return (
        <formContext.Provider value={{ formData, setFormData }}>
            {pageVisible.first && (
                <PersonalDetails
                    onPageChange={getPageState}
                    pageNumber={pageVisible.pageNumber}
                />
            )}
            {pageVisible.second && (
                <Address
                    onPageChange={getPageState}
                    pageNumber={pageVisible.pageNumber}
                />
            )}
            {pageVisible.third && (
                <Job
                    onPageChange={getPageState}
                    pageNumber={pageVisible.pageNumber}
                    onSubmit={() => {
                        setBackdropVisible((prevState) => !prevState);
                        setModalVisible((prevState) => !prevState);
                    }}
                />
            )}
            {backdropVisible && <Backdrop />}
            {modalVisible && (
                <Modal
                    onPageChange={getPageState}
                    onClick={() => {
                        setModalVisible((prevState) => !prevState);
                        setBackdropVisible((prevState) => !prevState);
                    }}
                />
            )}
        </formContext.Provider>
    );
};

export default App;
