// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import GridLoader from 'react-spinners/GridLoader';

// JSX Component AlertModal
const AlertModal = () => {
    
    /// getting modal alert state
    const modalAlert: any = useSelector(
        (state: RootState) => state.alert.alertModal.openModal
      );
      // getting modal content alert state
      const modalContent: any = useSelector(
        (state: RootState) => state.alert.alertModal.modalContent
      );
  // Starting React-dispatch to dispatch action in state in the component
  const dispatch = useDispatch();
    
   return (
    <div
    style={{
      position : "fixed",
      zIndex : "1000",
      bottom: "25px",
      right: "20px",
      display: `${!!modalAlert ? "flex" : "none"}`,
      border : "1px solid grey",
      borderRadius : "5px",
      padding : "3px",
      flexDirection: "column",
      background :  "linear-gradient(200.87deg,#7320ab 5.64%,#4a24aa 86.2%)",
      fontWeight: 500,
      transition: "all 1.4s ease-in-out",
      textTransform: "uppercase",
    }}
  >
    
    <div
      style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              display: "flex",
              opacity: "0.9",
              fontWeight: "500",
              margin: "0px 0px 20px",
              padding: "5px 11px 4px 2px",
              textTransform: "uppercase",
              borderBottom: "2px solid #eee",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <GridLoader    
                color="#eee"
                size={2}
                speedMultiplier={0.4} 
                />
            <span style={{
                   marginLeft: "5px",
                   color:"white",
                   fontFamily: "Chopsic sans-serif"
               }}> Alert </span>
          </p>      
          <p style={{
            padding : "1px", 
            fontSize : "11px",
            fontWeight : "bolder",
            color : "red" ,
            fontFamily: "Inter, sans-serif"
                }}  >
                {modalContent}
            </p>
            
        </div>

  </div>
   )
      }

export default AlertModal;