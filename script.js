const urlParams = new URLSearchParams(window.location.search);
const major = urlParams.get("major");

// عرض التخصص في الصفحة
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("title").innerText =
    "Selected Major: " + major;
});

const data = {
  CS: {
    1: {
      1: "https://chatgpt.com/c/6a2c1ed3-fba4-83eb-a6c0-b75ea625873f",
      2: "https://gemini.google.com/app"
    },
    2: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    },
    3: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    }, 
    4: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    }
  },

  CYS: {
    1: {
      1: "https://drive.google.com/ee-year1-sem1",
      2: "https://drive.google.com/ee-year1-sem2"
    },
    2: {
      1: "https://drive.google.com/ee-year2-sem1",
      2: "https://drive.google.com/ee-year2-sem2"
    },
    3: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    },
    4: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    }
  },
  IS: {
    1: {
      1: "https://drive.google.com/ee-year1-sem1",
      2: "https://drive.google.com/ee-year1-sem2"
    },
    2: {
      1: "https://drive.google.com/ee-year2-sem1",
      2: "https://drive.google.com/ee-year2-sem2"
    },
    3: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    },
    4: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    }
  }, 
  AI: {
    1: {
      1: "https://google.com",
      2: "https://google.com"
    },
    2: {
      1: "https://drive.google.com/ee-year2-sem1",
      2: "https://drive.google.com/ee-year2-sem2"
    },
    3: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    },
    4: {
      1: "https://drive.google.com/cs-year2-sem1",
      2: "https://drive.google.com/cs-year2-sem2"
    }
  }
};

function go() {
  const year = document.getElementById("year").value;
  const semester = document.getElementById("semester").value;

  const url = data?.[major]?.[year]?.[semester];

  if (url) {
    window.location.href = url;
  } else {
    alert("لا يوجد محتوى لهذا الاختيار");
  }
}