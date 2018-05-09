	<script>
		var writeOpen = document.querySelector(".js-write-us-open");
		var writePopup = document.querySelector(".write-us");
		var closePopup = writePopup.querySelector(".write-us-close");
		var login = writePopup.querySelector("[name=login]");
		var sentAndClose = writePopup.querySelector(".btn");

		writeOpen.addEventListener("click", function(event) {
			event.preventDefault();
			writePopup.classList.add("write-us-show");
			login.focus();
		});

		closePopup.addEventListener("click", function(event) {
			event.preventDefault();
			writePopup.classList.remove("write-us-show");
		});

		sentAndClose.addEventListener("click", function(event) {
			event.preventDefault();
			writePopup.classList.remove("write-us-show");
		});
	</script>