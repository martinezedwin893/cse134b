function openConfirmation(url) {
horizontalPosition = (screen.width) ? (screen.width-450)/2 : 0;
verticalPosition = (screen.height) ? (screen.height-300)/2 : 0;
settings =
'height='+300+',width='+450+',top='+verticalPosition+',left='+horizontalPosition+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url, 'openConfirmation',settings)
}

function popUpConfirm() {
    var confirmed = document.getElementById("myPopup");
    confirmed.classList.toggle("show");
    wait(500, confirmed);
}

function wait(milliseconds, confirmed) {
	setTimeout(function () {
		confirmed.classList.toggle("hide");
	}, milliseconds);
}

function closePopUp() {
	close();
}
