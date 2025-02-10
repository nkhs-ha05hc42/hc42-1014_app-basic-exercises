document.getElementById("userForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const name = document.getElementById("name").value;
    const score = document.getElementById("score").value;

    const postData = {
        user_id: parseInt(userId),
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
        name: name,
        score: parseFloat(score),
    };

    try {
        const response = await fetch("http://localhost:3000/api/9-7", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });

        if (!response.ok) throw new Error("データの送信に失敗しました");

        alert("登録完了！");
        document.getElementById("userForm").reset();
    } catch (error) {
        console.error(error);
        alert("エラーが発生しました");
    }
});
