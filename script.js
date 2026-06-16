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
      1: "https://drive.google.com/drive/folders/1rCIfCkcLH9TbI1gu16m9hjCJBK64Y5ee",
      2: "https://drive.google.com/drive/folders/1rCIfCkcLH9TbI1gu16m9hjCJBK64Y5ee"
    },
    2: {
      1: "https://drive.google.com/drive/folders/1-3w3yEgI7NPogdJeaxrwNUpiluBeKJhE",
      2: "https://drive.google.com/drive/folders/1-3w3yEgI7NPogdJeaxrwNUpiluBeKJhE"
    },
    3: {
      1: "https://drive.google.com/drive/folders/1VqTDGUYal7-t4rDTYUZQheQUqv4Iz0c7",
      2: "https://drive.google.com/drive/folders/1VqTDGUYal7-t4rDTYUZQheQUqv4Iz0c7"
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