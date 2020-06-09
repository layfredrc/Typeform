// AUTH & FIRESTORE
const auth = firebase.auth();
const db = firebase.firestore();

// listen for auth state changes
auth.onAuthStateChanged((user) => {
	if (user) {
		alert("user logged in :", user);
		console.log("user logged in :", user);
		window.location.href = "/workspace";
	} else {
		alert("user logged out:", user);
		console.log("user is logged out");
	}
});

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	//get user info
	const email = signupForm["signup-email"].value;
	const password = signupForm["signup-password"].value;

	// sign up the user
	auth.createUserWithEmailAndPassword(email, password).then((cred) => {
		console.log(cred.user);
		signupForm.reset();
	});
});

// Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
	e.preventDefault();
	auth.signOut().then(() => {
		console.log("user signed out");
	});
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	//get user info
	const email = loginForm["login-email"].value;
	const password = loginForm["login-password"].value;

	auth.signInWithEmailAndPassword(email, password).then(() => {
		console.log(cred.user);
		loginForm.reset();
	});
});
