document.getElementById("deleteButton").addEventListener("click", async () => {
    const id = document.getElementById("deleteId").value;
    if (!id) {
        alert("削除するIDを入力してください");
        return;
    }

    if (!confirm(`ID ${id} を削除しますか？`)) return;

    try {
        const response = await fetch(`http://localhost:3000/api/9-7`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("削除に失敗しました");

        alert("削除完了！");
        document.getElementById("deleteId").value = "";
    } catch (error) {
        alert(error.message);
    }
});
