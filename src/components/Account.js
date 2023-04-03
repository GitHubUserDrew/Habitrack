import React, { useState } from "react";

const Account = () => {
  const [showUsernameForm, setShowUsernameForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleUsernameClick = () => { 
    setShowUsernameForm(true);
  };

  const handleCancelClick = () => {
    setShowUsernameForm(false);
  };

  const handleSaveClick = () => {
    setShowUsernameForm(false);
    
  };

  const handlePasswordClick = () => {
    setShowPasswordForm(true);
  };

  const handlePassCancelClick = () => {
    setShowPasswordForm(false);
  };

  const handlePassSaveClick = () => {
    setShowPasswordForm(false);
    
  };

  return (
    <div id="accountMainDiv">
      <h2 id="accountpage">Account Settings</h2>
      <br></br>
      <br></br>
        <div>    
       {!showUsernameForm ? (
    <>
      <label htmlFor="changeUsername" id="labelUser"> Please click button to change your Username. </label>
      <button id="changeUsername" onClick={handleUsernameClick}>Change Username</button>
    </>
  ) : (
    <>
      <input id="inputUser" placeholder="Enter New UserName"  onChange={(e) => setNewUsername(e.target.value)}></input>
      <input id="comfirmUser" placeholder="Confirm New UserName"  onChange={(e) => setConfirmUsername(e.target.value)}></input>
      <button id="saveUsername" onClick={handleSaveClick}>Save Changes</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </>
  )}
        </div>
      <br></br>
      <div>
        {!showPasswordForm ? (
          <>
            <label htmlFor="changePassword" id="labelPass"> Please click button to change your Password. </label>
            <button id="changePassword" onClick={handlePasswordClick}>Change Password</button>
          </>
        ) : (
          <>
            <input id="inputPass" placeholder="Enter New Password"></input>
            <input id="comfirmPass" placeholder="Comfirm New Password"></input>
            <button id="savePassword" onClick={handlePassSaveClick}>Save Changes</button>
            <button onClick={handlePassCancelClick}>Cancel</button>
          </>
        )}
      </div>
      <br></br>
      <div> <h3 id="labelLogout" > Please click button to Logout from Account. </h3>
      <button id="logoutBtn" >Logout</button> 
     </div>

    </div>
  )
}

export default Account