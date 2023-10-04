const apiUrl = "https://zljcpr-8080.csb.app/user";

export const postAndRender = async (inputValue, formAdd) => {
  try {
    const response = await post({
      name: inputValue,
    });
    if (response.ok) {
      formAdd.classList.remove("show");
      const newUser = await response.json();
      console.log("Post thành công");
      get();
    } else {
      throw new Error("Lỗi trong quá trình POST");
    }
  } catch (err) {
    console.error("Error in POST:", err.message);
  }
};

export const get = async () => {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const users = await response.json();
      renderItem(users);
    } else {
      throw new Error("Lỗi trong quá trình GET");
    }
  } catch (err) {
    console.error("Error in GET:", err.message);
  }
};

export function renderItem(users) {
  const show = document.querySelector(".show-job");

  show.innerHTML = "";

  if (!Array.isArray(users) || users.length === 0) {
    console.error("Dữ liệu từ API không phải là một mảng hoặc mảng rỗng");
    return;
  }

  users.forEach(({ name }) => {
    const formShowHTML = `  
      <div class="form-show">
        <p>${name}</p>
        <div class="form-btn">
          <div class="btn delete">
            <i class="fa-solid fa-trash-can"></i>
          </div>
          <div class="btn edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <div class="btn check">
            <i class="fa-solid fa-check-to-slot"></i>
          </div>
        </div>
      </div>`;

    show.insertAdjacentHTML("beforeend", formShowHTML);
  });
}

export const post = async (data) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Lỗi trong quá trình POST");
    }
    return response;
  } catch (err) {
    console.error("Error in POST:", err.message);
    return null;
  }
};

export const remove = async (data) => {
  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Lỗi trong quá trình DELETE");
    }
    return response;
  } catch (err) {
    console.error("Error in DELETE:", err.message);
    return null;
  }
};
