document.getElementById("loadButton").addEventListener("click", async () => {
    const id = document.getElementById("targetId").value;
    if (!id) {
        alert("IDを入力してください");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/9-7/${id}`);
        if (!response.ok) throw new Error("データ取得失敗");

        const data = await response.json();
        document.getElementById("id").value = data.id;
        document.getElementById("userId").value = data.user_id;
        document.getElementById("year").value = data.year;
        document.getElementById("month").value = data.month;
        document.getElementById("day").value = data.day;
        document.getElementById("name").value = data.name;
        document.getElementById("score").value = data.score;
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById("updateForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const postData = {
        user_id: parseInt(document.getElementById("userId").value),
        year: parseInt(document.getElementById("year").value),
        month: parseInt(document.getElementById("month").value),
        day: parseInt(document.getElementById("day").value),
        name: document.getElementById("name").value,
        score: parseFloat(document.getElementById("score").value),
    };

    try {
        const response = await fetch(`http://localhost:3000/api/9-7/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });

        if (!response.ok) throw new Error("更新に失敗しました");

        alert("更新完了！");
        document.getElementById("updateForm").reset();
    } catch (error) {
        alert(error.message);
    }
});
