const profileBtn = document.querySelectorAll(".profileCard-linkBtn div");
const closeBtn = document.querySelector(".profileCard-icon span:last-child");
const info = document.querySelector(".profileCard-info");
const adress = document.querySelector(".profileCard-adress");

function handleChangeProfile() {
  const profileImg = document.querySelector(".profileCard-info img");
  const name = document.querySelector(".profileCard-info h1");
  const clickBtn = document.querySelector(".profileCard-info button");
  const email = document.querySelector(".adress-email span");

  const str = String(this.className);
  regex = /^\w+/g;
  const profileColor = str.match(regex).join();
  handleResetprofileBtn();
  this.classList.add("select");

  document.body.className = profileColor;
  clickBtn.className = profileColor;

  switch (profileColor) {
    case "yellow":
      {
        profileImg.setAttribute(
          "src",
          "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        );
        name.innerText = "DCODELAB #1";
        email.innerText = "anreias@gmail.com";
      }
      break;
    case "blue":
      {
        profileImg.setAttribute(
          "src",
          "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwY29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        );
        name.innerText = "DCODELAB #2";
        email.innerText = "asdklwmxlka@gmail.com";
      }
      break;
    case "purple":
      {
        profileImg.setAttribute(
          "src",
          "https://images.unsplash.com/photo-1523464896048-06ae115fed74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwY29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        );
        name.innerText = "DCODELAB #3";
        email.innerText = "dockasas_123@gmail.com";
      }
      break;
    case "green":
      {
        profileImg.setAttribute(
          "src",
          "https://images.unsplash.com/photo-1507065938252-17f453893fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZSUyMGNvbG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        );
        name.innerText = "DCODELAB #4";
        email.innerText = "goalsmasek_123@gmail.com";
      }
      break;
    case "defalut":
      break;
  }

  info.classList.remove("hidden");
  adress.classList.remove("hidden");
  closeBtn.classList.remove("hidden");
}

function handelCloseProfile() {
  info.classList.add("hidden");
  adress.classList.add("hidden");
  closeBtn.classList.add("hidden");
  handleResetprofileBtn();

  document.body.className = null;
}

function handleResetprofileBtn() {
  for (let i = 0; i < profileBtn.length; i++) {
    profileBtn[i].classList.remove("select");
  }
}

for (let i = 0; i < profileBtn.length; i++) {
  profileBtn[i].addEventListener("click", handleChangeProfile);
}
closeBtn.addEventListener("click", handelCloseProfile);
