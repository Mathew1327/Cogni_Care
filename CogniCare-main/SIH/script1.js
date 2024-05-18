/* Existing styles */

/* Pop-down button styles */
.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: black;
    overflow-x: hidden;
    transition: all 0.5s ease 0s;
}

.overlay--active {
    width: 100%;
}

.overlay__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.overlay a {
    padding: 15px;
    font-size: 36px;
    display: block;
    transition: all 0.3s ease 0s;
    color: white; /* Adjust the color as needed */
}

.overlay a:hover,
.overlay a:focus {
    color: purple; /* Adjust the hover color as needed */
}

.overlay .close {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
    color: white; /* Adjust the color as needed */
    cursor: pointer;
}

/* Rest of your existing styles */
